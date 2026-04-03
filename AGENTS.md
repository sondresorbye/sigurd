<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a static Next.js 16 marketing site ("Berman Blikk" / `sigurd`). No database, no backend API, no authentication — purely static pages.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js dev server | `npm run dev` | 3000 | Only service needed |

### Key commands

- **Lint**: `npm run lint` (ESLint 9 with next/core-web-vitals + typescript configs)
- **Build**: `npm run build` (static export to `out/`)
- **Dev**: `npm run dev` (Turbopack, http://localhost:3000)

### Non-obvious notes

- `next.config.ts` uses `output: "export"` — the build produces static HTML, not a Node.js server. `npm run start` won't work after build; serve `out/` with a static file server instead.
- External images load from `images.unsplash.com` and `images.pexels.com`; image optimisation is disabled (`unoptimized: true`).
- The contact form uses a `mailto:` link; no backend endpoint is needed.
