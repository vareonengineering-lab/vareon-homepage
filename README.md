# VAREON Engineering Services

React 18 + TypeScript + Tailwind CSS 3 + shadcn/ui-style components + Framer Motion, bundled with **webpack 5** (no Vite).

```bash
npm install
npm start          # dev server: http://localhost:3000
npm run build      # outputs ./dist (index.html + hashed assets)
npm run typecheck
```

## Deploy to Cloudflare Pages
- Build command: `npm run build`
- Build output directory: `dist`
- `public/_redirects` enables SPA routing for future pages.

## Structure
- `src/data/content.ts`: all copy (services, projects, testimonials, contact). Replace the placeholders.
- `src/components/sections/*`: home page sections.
- `src/components/ui/*`: shadcn/ui primitives (`components.json` included; add more with the same pattern).
- `src/App.tsx`: routes. Projects, Careers, News, Client Portal, ERP Login, Request a Quote and Contact are stubbed.
