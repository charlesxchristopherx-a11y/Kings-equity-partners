interface Env {
  ZO_CLIENT_IDENTITY_TOKEN: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestPost = async (context: any) => {
  try {
    const body: Record<string, string | boolean> = await context.request.json();
    const { propertyAddress, formerOwnerName, phone, email, additionalInfo, smsConsent } = body as Record<string, string>;

    if (!propertyAddress || !formerOwnerName || !phone || !email) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const zoToken = context.env.ZO_CLIENT_IDENTITY_TOKEN;
    if (!zoToken) {
      console.error("ZO_CLIENT_IDENTITY_TOKEN not configured");
      return Response.json({ error: "Server configuration error. Please call us directly." }, { status: 500 });
    }

    const subject = `New Surplus Assessment: ${formerOwnerName} — ${propertyAddress}`;
    const emailBody = [
      "**New Surplus Assessment Request**",
      "",
      "**Contact Info:**",
      `- Name: ${formerOwnerName}`,
      `- Phone: ${phone}`,
      `- Email: ${email}`,
      `- SMS Consent: ${smsConsent ? "Yes" : "No"}`,
      "",
      "**Property Info:**",
      `- Address: ${propertyAddress}`,
      additionalInfo ? `\n**Additional Info:**\n${additionalInfo}` : "",
      "",
      "---",
      "Submitted via kingsequitypartners.com",
    ].filter(Boolean).join("\n");

    const instruction = [
      "Send an email using the Gmail connection now.",
      "",
      `To: charlesxchristopherx@gmail.com`,
      `Cc: charleskingiii29@gmail.com`,
      `Subject: ${subject}`,
      "Body:",
      emailBody,
    ].join("\n");

    const zoResponse = await fetch("https://api.zo.computer/zo/ask", {
      method: "POST",
      headers: {
        "Authorization": zoToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: instruction,
        model_name: "byok:4e9ac6e2-e29f-4677-9537-041605831867",
      }),
    });

    if (!zoResponse.ok) {
      const errText = await zoResponse.text();
      console.error("Zo API error:", zoResponse.status, errText);
      return Response.json({ error: "Email delivery failed. Please call us directly." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Lead function error:", err);
    return Response.json({ error: "Internal server error. Please call us directly." }, { status: 500 });
  }
};
