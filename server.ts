import { serveStatic } from "hono/bun";
import type { ViteDevServer } from "vite";
import { createServer as createViteServer } from "vite";
import config from "./zosite.json";
import { Hono } from "hono";
import { send_email_to_user } from "./backend-lib/email-service";

type Mode = "development" | "production";
const app = new Hono();

const mode: Mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

/**
 * Lead submission API
 * POST /api/lead
 * Body: { propertyAddress, formerOwnerName, phone, email, caseNumber?, surplusAmount?, additionalInfo?, consent? }
 */
app.post("/api/lead", async (c) => {
  try {
    const body = await c.req.json();
    const {
      propertyAddress,
      formerOwnerName,
      phone,
      email,
      caseNumber,
      surplusAmount,
      additionalInfo,
    } = body;

    if (!propertyAddress || !formerOwnerName || !phone || !email) {
      return c.json({ error: "Missing required fields." }, 400);
    }

    const subject = `New Surplus Assessment: ${formerOwnerName} — ${propertyAddress}`;
    const emailBody = `
**New Surplus Assessment Request**

**Contact Info:**
- Name: ${formerOwnerName}
- Phone: ${phone}
- Email: ${email}

**Property Info:**
- Address: ${propertyAddress}
- Case Number: ${caseNumber || "Not provided"}
- Surplus Amount: ${surplusAmount || "Not provided"}

${additionalInfo ? `**Additional Info:**\n${additionalInfo}` : ""}

---
Submitted via kingsequitypartners.com
    `.trim();

    await send_email_to_user({ subject, markdown_body: emailBody });

    return c.json({ success: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return c.json({ error: "Internal server error." }, 500);
  }
});

app.get("/api/hello-zo", (c) => c.json({ msg: "Hello from King's Equity Partners" }));

if (mode === "production") {
  configureProduction(app);
} else {
  await configureDevelopment(app);
}

const port = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : mode === "production"
    ? (config.publish?.published_port ?? config.local_port)
    : config.local_port;

export default { fetch: app.fetch, port, idleTimeout: 255 };

function configureProduction(app: Hono) {
  app.use("/assets/*", serveStatic({ root: "./dist" }));
  app.get("/favicon.ico", (c) => c.redirect("/favicon.svg", 302));
  app.use(async (c, next) => {
    if (c.req.method !== "GET") return next();
    const path = c.req.path;
    if (path.startsWith("/api/") || path.startsWith("/assets/")) return next();
    const file = Bun.file(`./dist${path}`);
    if (await file.exists()) {
      const stat = await file.stat();
      if (stat && !stat.isDirectory()) return new Response(file);
    }
    return serveStatic({ path: "./dist/index.html" })(c, next);
  });
}

async function configureDevelopment(app: Hono): Promise<ViteDevServer> {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: "custom",
  });

  app.use("*", async (c, next) => {
    if (c.req.path.startsWith("/api/")) return next();
    if (c.req.path === "/favicon.ico") return c.redirect("/favicon.svg", 302);
    const url = c.req.path;
    try {
      if (url === "/" || url === "/index.html") {
        let template = await Bun.file("./index.html").text();
        template = await vite.transformIndexHtml(url, template);
        return c.html(template, { headers: { "Cache-Control": "no-store, must-revalidate" } });
      }
      const publicFile = Bun.file(`./public${url}`);
      if (await publicFile.exists()) {
        const stat = await publicFile.stat();
        if (stat && !stat.isDirectory()) {
          return new Response(publicFile, { headers: { "Cache-Control": "no-store, must-revalidate" } });
        }
      }
      let result;
      try { result = await vite.transformRequest(url); } catch { result = null; }
      if (result) {
        return new Response(result.code, {
          headers: { "Content-Type": "application/javascript", "Cache-Control": "no-store, must-revalidate" },
        });
      }
      let template = await Bun.file("./index.html").text();
      template = await vite.transformIndexHtml("/", template);
      return c.html(template, { headers: { "Cache-Control": "no-store, must-revalidate" } });
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      console.error(error);
      return c.text("Internal Server Error", 500);
    }
  });

  return vite;
}