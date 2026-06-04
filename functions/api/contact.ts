interface ContactRequestBody {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

interface Env {
  CONTACT_FORM_ENDPOINT?: string;
}

interface RequestContext {
  request: Request;
  env: Env;
}

type Submission = {
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string;
};

const defaultFormEndpoint = "https://formsubmit.co/ajax/5ead94b53945a986f6efd390f8b01086";

function jsonResponse(body: Record<string, string>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function normalizeText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function parseSubmission(body: ContactRequestBody): Submission {
  return {
    name: normalizeText(body.name, 120),
    phone: normalizeText(body.phone, 60),
    email: normalizeText(body.email, 160),
    message: normalizeText(body.message, 4000),
    website: normalizeText(body.website, 200),
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readBody(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactRequestBody;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries()) as ContactRequestBody;
  }

  return {} as ContactRequestBody;
}

async function sendWithFormSubmit(
  submission: Submission,
  endpoint: string,
  request: Request,
) {
  const requestUrl = new URL(request.url);
  const payload = new FormData();
  payload.set("name", submission.name);
  payload.set("phone", submission.phone);
  payload.set("email", submission.email);
  payload.set("message", submission.message);
  payload.set("_subject", `VEYNOR Quote Request from ${submission.name}`);
  payload.set("_replyto", submission.email);
  payload.set("_template", "table");
  payload.set("_captcha", "false");
  payload.set("_honey", submission.website);
  payload.set("_url", request.url);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Origin: requestUrl.origin,
      Referer: request.url,
    },
    body: payload,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const responseBody = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    throw new Error(
      typeof responseBody === "string"
        ? responseBody
        : responseBody.message ?? "Form delivery failed.",
    );
  }

  if (
    typeof responseBody === "object" &&
    responseBody !== null &&
    "success" in responseBody &&
    responseBody.success === false
  ) {
    throw new Error(
      typeof responseBody.message === "string"
        ? responseBody.message
        : "Form delivery failed.",
    );
  }
}

export async function onRequestPost(context: RequestContext) {
  try {
    const rawBody = await readBody(context.request);
    const submission = parseSubmission(rawBody);

    if (submission.website) {
      return jsonResponse({
        message: "Thanks. Your quote request was sent and someone should follow up shortly.",
      });
    }

    if (!submission.name || !submission.phone || !submission.email || !submission.message) {
      return jsonResponse(
        {
          message: "Please fill out your name, phone, email, and message before submitting.",
        },
        400,
      );
    }

    if (!isValidEmail(submission.email)) {
      return jsonResponse(
        {
          message: "Please enter a valid email address so we can reply to your request.",
        },
        400,
      );
    }

    const endpoint = context.env.CONTACT_FORM_ENDPOINT || defaultFormEndpoint;
    await sendWithFormSubmit(submission, endpoint, context.request);

    return jsonResponse({
      message: "Thanks. Your quote request was sent successfully.",
    });
  } catch (error) {
    console.error("Contact form delivery failed:", error);

    return jsonResponse(
      {
        message:
          "We could not send your request online right now. Please call or text for the fastest response.",
      },
      502,
    );
  }
}
