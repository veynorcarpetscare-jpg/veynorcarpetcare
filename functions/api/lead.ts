type Env = {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  TELEGRAM_MESSAGE_THREAD_ID?: string;
};

type PagesContext = {
  env: Env;
  request: Request;
};

const internalKeys = new Set([
  "__subject",
  "__replyTo",
  "__honey",
  "_subject",
  "_replyto",
  "_template",
  "_captcha",
  "_honey",
]);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function toLabel(key: string) {
  return key
    .replaceAll(/[_-]+/g, " ")
    .replaceAll(/\b\w/g, (char) => char.toUpperCase());
}

function buildTelegramMessage(formData: FormData) {
  const subject = String(formData.get("__subject") ?? "VEYNOR Website Request");
  const replyTo = String(formData.get("__replyTo") ?? "").trim();
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const lines = [
    `<b>${escapeHtml(subject)}</b>`,
    `<b>Submitted:</b> ${escapeHtml(submittedAt)} PT`,
  ];

  if (replyTo) {
    lines.push(`<b>Reply To:</b> ${escapeHtml(replyTo)}`);
  }

  lines.push("");

  for (const [key, rawValue] of formData.entries()) {
    if (internalKeys.has(key)) {
      continue;
    }

    const value = String(rawValue).trim();

    if (!value) {
      continue;
    }

    lines.push(`<b>${escapeHtml(toLabel(key))}:</b> ${escapeHtml(value)}`);
  }

  return lines.join("\n");
}

export async function onRequestPost(context: PagesContext) {
  try {
    const formData = await context.request.formData();
    const honey = String(formData.get("__honey") ?? formData.get("_honey") ?? "").trim();

    if (honey) {
      return Response.json({
        ok: true,
        message: "Thanks. Your request was sent successfully and VEYNOR should follow up soon.",
      });
    }

    const botToken = context.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = context.env.TELEGRAM_CHAT_ID?.trim();
    const threadId = context.env.TELEGRAM_MESSAGE_THREAD_ID?.trim();

    if (!botToken || !chatId) {
      return Response.json(
        {
          ok: false,
          message: "Telegram delivery is not configured on this deployment yet.",
        },
        { status: 503 },
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: buildTelegramMessage(formData),
          parse_mode: "HTML",
          disable_web_page_preview: true,
          ...(threadId ? { message_thread_id: Number(threadId) } : {}),
        }),
      },
    );

    const telegramPayload = (await telegramResponse.json()) as {
      description?: string;
      ok?: boolean;
    };

    if (!telegramResponse.ok || !telegramPayload.ok) {
      throw new Error(
        telegramPayload.description ??
          "Telegram delivery failed. Please call or text for the fastest response.",
      );
    }

    return Response.json({
      ok: true,
      message: "Thanks. Your request was sent successfully and VEYNOR should follow up soon.",
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "We could not send your request online. Please call or text for the fastest response.",
      },
      { status: 500 },
    );
  }
}
