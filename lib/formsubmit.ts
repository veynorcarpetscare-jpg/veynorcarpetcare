export const formSubmitEndpoint =
  "https://formsubmit.co/ajax/5ead94b53945a986f6efd390f8b01086";

export function applyFormSubmitMeta(
  payload: FormData,
  options: {
    subject: string;
    replyTo?: string;
    honey?: string;
  },
) {
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

export async function submitToFormSubmit(payload: FormData) {
  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: payload,
  });

  const responsePayload = (await response.json()) as {
    message?: string;
    success?: string;
  };

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
