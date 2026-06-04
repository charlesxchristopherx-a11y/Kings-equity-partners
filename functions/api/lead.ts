interface Env {
  ZO_CLIENT_IDENTITY_TOKEN: string;
  ZO_API_SECRET?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body: Record<string, string> = await context.request.json();

    const { propertyAddress, formerOwnerName, phone, email, caseNumber, surplusAmount, additionalInfo } = body;

    if (!propertyAddress || !formerOwnerName || !phone || !email) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const subject = `New Surplus Assessment: ${formerOwnerName} — ${propertyAddress}`;
    const emailBody = [
      "**New Surplus Assessment Request**",
      "",
      "**Contact Info:**",
      `- Name: ${formerOwnerName}`,
      `- Phone: ${phone}`,
      `- Email: ${email}`,
      "",
      "**Property Info:**",
      `- Address: ${propertyAddress}`,
      `- Case Number: ${caseNumber || "Not provided"}`,
      `- Surplus Amount: ${surplusAmount || "Not provided"}`,
      additionalInfo ? `\n**Additional Info:**\n${additionalInfo}` : "",
      "",
      "---",
      "Submitted via kingsequitypartners.com",
    ].join("\n");

    const instruction = [
      "You MUST send an email immediately using the Gmail connection.",
      "Do NOT ask questions or draft — send it now.",
      "",
      `To: charlesxchristopherx@gmail.com, ${email}`,
      `Subject: ${subject}`,
      "Body:",
      emailBody,
    ].join("\n");

    const zoResponse = await fetch("https://api.zo.computer/zo/ask", {
      method: "POST",
      headers: {
        "Authorization": context.env.ZO_CLIENT_IDENTITY_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: instruction,
        model_name: "zo:deepseek/deepseek-v4-pro",
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
