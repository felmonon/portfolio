# Building msw-inspector: finding stale and missing MSW mocks with AST analysis

`msw-inspector` is an open-source TypeScript developer tool for checking whether a codebase's Mock Service Worker handlers still match the API calls the app actually makes. It ships as an npm CLI (`msw-inspector-cli`) and as a GitHub Marketplace Action.

The project is intentionally narrow: make MSW mock drift visible in local development and CI. It does not try to execute the application or infer runtime-only URLs. It statically scans source files, reports what it can prove, and labels unsupported patterns instead of pretending to know more than the code reveals.

## Problem

MSW works best when handlers represent the real request surface of the application. Over time, that relationship can drift in two directions:

- New API calls are added without matching MSW handlers.
- Old handlers remain after product code stops calling those endpoints.

Both problems weaken test confidence. Missing handlers mean tests can miss real integration gaps. Stale handlers create a mock layer that looks comprehensive but no longer reflects current product behavior.

I built `msw-inspector` to make that drift inspectable before it becomes a production or CI surprise.

## What I Built

- A TypeScript CLI that scans source files for API calls.
- An MSW handler scanner for modern `http.*` handlers and legacy `rest.*` handlers.
- Static endpoint extraction for common request patterns including `fetch`, `axios`, and `axios.create`.
- A normalization layer that compares methods, origins, and paths across app calls and mock handlers.
- CI-friendly JSON output for downstream automation.
- Coverage and failure flags including `--min-coverage`, `--fail-on-unmocked`, and `--fail-on-stale`.
- A separate GitHub Action wrapper that can summarize results in GitHub Actions and surface the report in pull requests.
- Public distribution through npm and GitHub Marketplace.

## Technical Approach

The core choice was to use AST analysis instead of regex matching. The CLI uses `ts-morph` so the scanner can inspect actual TypeScript/JavaScript syntax, identify call expressions, and evaluate static URL expressions where the source code makes them available.

The scanner works in two passes:

1. Read application source files and collect discoverable API call sites.
2. Read MSW setup files and collect discoverable handler registrations.

After collection, both sides are normalized into comparable endpoint records. That comparison produces three useful categories:

- `unmocked`: an API call exists but no matching MSW handler was found.
- `stale`: an MSW handler exists but no matching scanned API call was found.
- `unsupported`: the scanner found a request shape that depends on runtime values or another pattern it should not guess.

The unsupported category is deliberate. A developer tool that runs in CI has to be explainable. When a URL depends on runtime state, the safer behavior is to report the location as unsupported rather than fabricate coverage.

## Packaging and CI Design

The CLI and GitHub Action are split into separate repositories. That keeps the npm package focused on local and scriptable CLI usage, while the Action can handle Marketplace-specific packaging and GitHub presentation concerns.

The CLI emits machine-readable JSON so the Action does not need to reimplement scanning logic. The Action's job is to run the CLI, read the report, write a job summary, and optionally surface the result in a pull request.

This separation also keeps the product boundary clear:

- CLI: scan, normalize, compare, report.
- GitHub Action: install, run, summarize, integrate with PR workflow.

## Proof Runs

| Repo | Handlers | API calls | Unmocked | Stale | Unsupported | What it shows |
|---|---:|---:|---:|---:|---:|---|
| TypeJung | 0 | 39 | 39 | 0 | 11 | A real app can have auth, billing, analytics, and AI endpoints with no mock coverage. |
| Mirror | 0 | 7 | 7 | 0 | 3 | A smaller product still exposes clear gaps around journal, AI, and Stripe routes. |
| MSW browser REST slice | 66 | 0 | 0 | 66 | 0 | A narrowed scan can also reveal the opposite problem: handlers outside the scanned active call surface. |

These runs are useful because they show both sides of mock drift. In product repositories, the tool found missing handlers. In a focused MSW handler slice, it found handlers with no corresponding scanned call surface.

## Tradeoffs

Static analysis gives fast feedback and works in CI, but it has limits. `msw-inspector` is strongest when request URLs are statically visible or assembled from values the scanner can resolve. It intentionally does not claim full coverage over dynamic runtime routing, generated API clients, or request builders that hide endpoint construction behind non-obvious abstractions.

That tradeoff is acceptable for the first version because the main product value is reliable visibility, not perfect inference. A precise partial report is more useful than a broad report that quietly guesses.

## Outcome

`msw-inspector` is published as:

- CLI repo: https://github.com/felmonon/msw-inspector
- npm package: https://www.npmjs.com/package/msw-inspector-cli
- GitHub Action: https://github.com/felmonon/msw-inspector-action
- Marketplace listing: https://github.com/marketplace/actions/msw-inspector

The project demonstrates end-to-end developer tooling work: AST parsing, CLI design, report formats, CI integration, package distribution, and clear handling of static-analysis limitations.

## Recruiter Version

Built and published `msw-inspector`, an open-source TypeScript CLI and GitHub Marketplace Action that scans frontend codebases for missing or stale MSW API mocks. The tool parses real API call sites and MSW handlers with AST analysis, normalizes endpoints, emits CI-friendly JSON, and surfaces coverage gaps in GitHub Actions.

## Next Product Work

- Add config file support so teams can avoid long CLI commands.
- Add framework-specific examples for Next.js, Vite, Vitest, and Playwright.
- Improve unsupported-pattern messages with clearer file-level guidance.
- Add baseline or delta reporting for pull requests.
