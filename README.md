# soulfulhorizon.com

Marketing website for **Soulful Horizon LCSW, PLLC** — a faith-based therapy and
mental-health coaching practice (Emmanuelle Lajeunesse, LCSW).

Built as a fast, secure **static export** (no server, no PHI on-site). All
scheduling, intake, and any protected health information live in **SimplePractice**
(`soulful-horizon-lcsw.clientsecure.me`); this site only links out to it.

## Stack

- Next.js 15 (App Router) — `output: 'export'` static HTML
- Tailwind CSS v4, MDX blog, TypeScript
- Pagefind site search, Vitest tests
- Deploy: GitHub → Cloudflare Pages (build output `out/`)

Forked from the frankdoka.com codebase to reuse its layout, MDX pipeline, and
Cloudflare static-export setup.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000 (or --port to change)
npm run build      # next build + pagefind → out/
npm run test       # vitest
```

## Notes

- Brand palette (deep teal / gold / coral / cream) lives in `src/style/tailwind.css`.
  Light theme is the default; a deep-teal dark variant is available via the toggle.
- Site config (booking URL, contact info, nav) is centralized in `src/lib/site.ts`.
- Security headers are in `public/_headers` (the next.config `headers()` hook does
  not run for static exports).
- `/privacy` (Notice of Privacy Practices) and `/no-surprises-act` use standard
  regulatory language — **the practice should review/replace with official documents.**
