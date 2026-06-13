const telegramLeadEndpoint = "/api/lead";
const formSubmitFallbackEndpoint =
  "https://formsubmit.co/ajax/5ead94b53945a986f6efd390f8b01086";

type SubmitResponse = {
  message?: string;
  ok?: boolean;
  success?: string;
};

export function applyFormSubmitMeta(
  payload: FormData,
  options: {
    subject: string;
    replyTo?: string;
    honey?: string;
  },
) {
  payload.set("__subject", options.subject);
  payload.set("__replyTo", options.replyTo ?? "");
  payload.set("__honey", options.honey ?? "");

  payload.set("_subject", options.subject);
  payload.set("_template", "table");
  payload.set("_captcha", "false");

  if (options.replyTo) {
    payload.set("_replyto", options.replyTo);
  }

  if (options.honey) {
    payload.set("_honey", options.honey);
  }
}

async function parseResponse(response: Response) {
  try {
    return (await response.json()) as SubmitResponse;
  } catch {
    return {} as SubmitResponse;
  }
}

async function submitToTelegram(payload: FormData) {
  const response = await fetch(telegramLeadEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: payload,
  });

  const responsePayload = await parseResponse(response);

  if (!response.ok) {
    throw new Error(
      responsePayload.message ??
        "We could not send your request online. Please call or text for the fastest response.",
    );
  }

  return (
    responsePayload.message ??
    "Thanks. Your request was sent successfully and VEYNOR should follow up soon."
  );
}

async function submitToEmailFallback(payload: FormData) {
  const response = await fetch(formSubmitFallbackEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: payload,
  });

  const responsePayload = await parseResponse(response);

  if (!response.ok) {
    throw new Error(
      responsePayload.message ??
        "We could not send your request online. Please call or text for the fastest response.",
    );
  }

  return (
    responsePayload.message ??
    "Thanks. Your request was sent successfully and VEYNOR should follow up soon."
  );
}

export async function submitToFormSubmit(payload: FormData) {
  try {
    return await submitToTelegram(payload);
  } catch {
    return await submitToEmailFallback(payload);
  }
}
