# Felmon Fekadu Portfolio

Editorial engineering portfolio for [felmon.tech](https://felmon.tech). The site presents three selected products, traceable open-source evidence, a focused MSW Inspector case study, and a one-click résumé path for recruiters and hiring managers.

## What is verified

- 14 merged upstream pull requests across 7 repositories and 5 organizations
- Public GitHub evidence links that work without an authenticated dashboard session
- A corrected, CI-built PDF résumé served from `/resume.pdf`
- Generated favicon, app icon, Open Graph image, sitemap, robots file, and web manifest
- Canonical redirects from `www.felmon.tech`, `felmonfekadu.com`, and `www.felmonfekadu.com`
- Automated content-freshness, accessibility, lint, test, and production-build checks

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript, CSS Modules |
| Motion and icons | Framer Motion, Lucide React |
| Testing | Vitest, Testing Library, jest-axe |
| Hosting | Vercel |
| CI | GitHub Actions |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

| Command | Purpose |
|---|---|
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite, including Axe checks |
| `npm run check:content` | Reject stale portfolio claims |
| `npm run build` | Create the production build |
| `npm run check` | Run content, tests, and build together |
| `npm run assets:social` | Regenerate the app icon and Open Graph image |

## Deployment

Every push to `main` runs the repository CI workflow. Vercel’s Git integration publishes the production build after the checks pass.

## License

This project is licensed under the [MIT License](LICENSE).
