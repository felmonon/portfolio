# msw-inspector Case Study

## Short Positioning

`msw-inspector` is an open-source developer tool that finds drift between MSW request handlers and the API calls a codebase actually makes. It ships as both an npm CLI (`msw-inspector-cli`) and a GitHub Marketplace Action.

## Problem

Mock Service Worker is strong when handlers match the real request surface. The weak point is drift: teams add API calls without adding mocks, or keep old handlers after the app changes. That leaves test suites with misleading confidence.

## What I Built

- TypeScript CLI that scans source files for API calls.
- MSW handler scanner for `http.*` and legacy `rest.*` handlers.
- Normalization layer that compares methods, origins, and paths.
- JSON report format for CI.
- GitHub Action wrapper that reads the report, writes a job summary, and can post a sticky PR comment.
- npm package and Marketplace distribution.

## Public Links

- CLI repo: https://github.com/felmonon/msw-inspector
- npm package: https://www.npmjs.com/package/msw-inspector-cli
- GitHub Action: https://github.com/felmonon/msw-inspector-action
- Marketplace listing: https://github.com/marketplace/actions/msw-inspector

## Proof Runs

| Repo | Handlers | API calls | Unmocked | Stale | Unsupported | What it shows |
|---|---:|---:|---:|---:|---:|---|
| TypeJung | 0 | 39 | 39 | 0 | 11 | A real app can have auth, billing, analytics, and AI endpoints with no mock coverage. |
| Mirror | 0 | 7 | 7 | 0 | 3 | A smaller product still exposes clear gaps around journal, AI, and Stripe routes. |
| MSW browser REST slice | 66 | 0 | 0 | 66 | 0 | The tool also catches the opposite problem: handlers that exist outside the scanned active call surface. |

## Technical Decisions

- Used `ts-morph` instead of regex so the scanner can reason over AST nodes and static expressions.
- Kept dynamic URLs as unsupported instead of guessing, because CI tooling should be explainable.
- Split the GitHub Action into a dedicated repository so Marketplace packaging did not distort the CLI repo.
- Added threshold flags (`--min-coverage`, `--fail-on-unmocked`, `--fail-on-stale`) so teams can turn reports into CI gates.

## Recruiter Version

Built and published `msw-inspector`, an open-source TypeScript CLI and GitHub Marketplace Action that scans frontend codebases for missing or stale MSW API mocks. The tool parses real API call sites and MSW handlers, normalizes endpoints, emits CI-friendly JSON, and can surface coverage results in GitHub Actions.

## Next Product Work

- Add config file support so teams can avoid long CLI commands.
- Add framework-specific examples for Next.js, Vite, Vitest, and Playwright.
- Improve unsupported-pattern messages with clearer file-level guidance.
- Add baseline or delta reporting for pull requests.
