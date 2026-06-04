# King's Equity Partners — Agent Guide

## Site

- **Live URL**: https://www.kingsequitypartners.com (hosted on Cloudflare Pages)
- **Repo**: https://github.com/charlesxchristopherx-a11y/Kings-equity-partners
- **Local path**: `/home/workspace/kings-equity-partners`
- **Framework**: React + TypeScript + Vite + Tailwind + shadcn/ui
- **Hosting**: Cloudflare Pages (static) — auto-deploys on git push to main
- **Build command** (Cloudflare Pages): `vite build`
- **Build output directory**: `dist`
- **Backend**: Hono server (`server.ts`) is for local dev ONLY. On Cloudflare Pages the site is static. Form submissions need a Cloudflare Pages Function or external API (not yet implemented).
- **Deploy**: `git push` — Cloudflare Pages auto-deploys. Do NOT use `publish_site`.

## Blog Updates

Blog posts are stored as static data in `src/data/blog-posts.ts`. To add a new blog post:

1. Read `src/data/blog-posts.ts` to see current posts
2. Add a new entry to the `blogPosts` array with: `slug`, `title`, `excerpt`, `content` (markdown), `author`, `date` (YYYY-MM-DD), `readTime`, `category`, `tags`
3. `slug` must be unique and URL-safe (lowercase, hyphens)
4. `content` uses markdown format: `## ` for h2, `**text**` for bold, `- ` for bullets
5. Import both `Link` and `Button` components if referencing internal pages in the content (use raw HTML `<a href="...">` for URLs within markdown content)
6. Sort is automatic — newest first by date

After editing blog posts, deploy:
```bash
cd /home/workspace/kings-equity-partners && git add src/data/blog-posts.ts && git commit -m "New blog post: <title>" && git push
# Cloudflare Pages auto-deploys from GitHub — no publish_site needed
```

## SMS Compliance (June 2026)

All forms must include:
- SMS consent checkbox: unchecked by default, NOT required
- Full disclosure text with links to `/privacy` and `/terms`
- "Consent is not a condition of purchase" language

Relevant files:
- `src/pages/index.tsx` — homepage lead form
- `src/pages/contact.tsx` — contact form
- `src/pages/privacy.tsx` — Privacy Policy (SMS section §3)
- `src/pages/terms.tsx` — Terms & Conditions (SMS section §3)
- `src/App.tsx` — routes (includes `/terms`)
- `src/components/site-footer.tsx` — footer (includes Terms link)

## Routes

| Path | Component |
|------|-----------|
| `/` | HomePage (lead form + content) |
| `/about` | AboutPage |
| `/how-it-works` | HowItWorksPage |
| `/contact` | ContactPage (lead form) |
| `/blog` | BlogPage |
| `/blog/:slug` | BlogPostPage |
| `/disclaimer` | DisclaimerPage |
| `/privacy` | PrivacyPage |
| `/terms` | TermsPage |
