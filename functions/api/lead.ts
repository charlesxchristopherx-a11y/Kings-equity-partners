// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequestPost = async (context: any) => {
  try {
    const body: Record<string, string | boolean> = await context.request.json();
    const { propertyAddress, formerOwnerName, phone, email, additionalInfo, smsConsent } = body as Record<string, string>;

    if (!propertyAddress || !formerOwnerName || !phone || !email) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const zoTokenRaw: string | undefined = context.env.ZO_CLIENT_IDENTITY_TOKEN;
    const zoToken = zoTokenRaw ? (zoTokenRaw.startsWith("Bearer ") ? zoTokenRaw : `Bearer ${zoTokenRaw}`) : null;

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
      `Subject: ${subject}`,
      "Body:",
      emailBody,
    ].join("\n");

    // Save lead to D1 first — this is the source of truth
    if (context.env.DB) {
      try {
        await context.env.DB.prepare(
          "INSERT INTO leads (property_address, former_owner_name, phone, email, additional_info, sms_consent) VALUES (?, ?, ?, ?, ?, ?)"
        ).bind(
          propertyAddress,
          formerOwnerName,
          phone,
          email,
          additionalInfo || null,
          smsConsent ? 1 : 0
        ).run();
      } catch (dbErr) {
        console.error("D1 insert error:", dbErr);
      }
    }

    // Send email notification — non-fatal if it fails (lead is already saved)
    if (zoToken) {
      try {
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
        }
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
      }
    } else {
      console.error("ZO_CLIENT_IDENTITY_TOKEN not configured — email skipped");
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Lead function error:", err);
    return Response.json({ error: "Internal server error. Please call us directly." }, { status: 500 });
  }
};
