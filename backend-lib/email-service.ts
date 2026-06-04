/**
 * Email service layer for King's Equity Partners.
 *
 * Uses the Zo `/zo/ask` API to route email delivery through Zo's
 * connected Gmail account. When you POST to /zo/ask with an email
 * instruction, Zo sends it via the user's connected Gmail.
 *
 * Alternatively, you can wire this to any external email API
 * (Resend, SendGrid, etc.) by setting the appropriate env var.
 */

interface EmailOptions {
  to?: string;
  subject: string;
  markdown_body: string;
}

// Default recipient — the firm owner
const DEFAULT_TO = "charlesxchristopherx@gmail.com";

export async function send_email_to_user(opts: EmailOptions): Promise<void> {
  const { subject, markdown_body } = opts;

  // Use Zo's internal ask API to route email through the user's connected Gmail.
  // We do this by passing a direct instruction to Zo's agent via the API.
  const zoApiToken = process.env.ZO_CLIENT_IDENTITY_TOKEN;
  if (!zoApiToken) {
    throw new Error("ZO_CLIENT_IDENTITY_TOKEN is not set");
  }

  const instruction = `Please send an email with the following details:

To: ${DEFAULT_TO}
Subject: ${subject}
Body:
${markdown_body}

Use the user's connected Gmail to send this email. Do not draft a response — send it immediately.`;

  const response = await fetch("https://api.zo.computer/zo/ask", {
    method: "POST",
    headers: {
      "Authorization": zoApiToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: instruction,
      model_name: "vercel:minimax/minimax-m2.7",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zo email API error: ${response.status} — ${errorText}`);
  }
}