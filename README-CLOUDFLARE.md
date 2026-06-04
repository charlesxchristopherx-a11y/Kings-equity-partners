# Cloudflare Pages deployment

This project is now ready for Cloudflare Pages as a static site.

## What works

- All site pages
- Client-side navigation
- Public assets in `public/`
- Static build output in `dist/`

## What does not work on Pages yet

The form on the Contact page still posts to `/api/lead` in `src/pages/contact.tsx`.
That endpoint is not included in the static build, so the form will need a Cloudflare Pages Function or Workers API later if you want submissions to be saved.

## Fast deploy option

### Option A: Build locally and upload

```bash
bun install
bun run build
```

Then upload the contents of `dist/` to Cloudflare Pages.

### Option B: Connect the repo

Use these settings in Cloudflare Pages:

- **Build command**: `bun run build`
- **Build output directory**: `dist`

## Files added for Pages

- `netlify.toml` — harmless static hosting redirect fallback
- `cloudflare.pages.config.json` — Pages build output hint

## If you want the form to work

Tell me and I will convert the contact submission endpoint into a Cloudflare Pages Function.
