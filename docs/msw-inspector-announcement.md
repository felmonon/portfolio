# msw-inspector Announcement Drafts

## LinkedIn Draft

I shipped `msw-inspector`, an open-source CLI and GitHub Action for finding gaps in MSW mock coverage.

The problem: MSW handlers drift. Teams add new API calls without adding mocks, or old handlers stay behind after the app changes. Tests can still pass while the mock layer no longer represents the real request surface.

What it does:

- scans API calls in source files
- scans MSW `http.*` and `rest.*` handlers
- reports unmocked endpoints and stale mocks
- writes JSON for CI
- works as an npm CLI and GitHub Marketplace Action

I dogfooded it on real repos:

- TypeJung: 39 API calls, 0 handlers, 39 unmocked endpoints
- Mirror: 7 API calls, 0 handlers, 7 unmocked endpoints
- MSW browser REST slice: 66 handlers flagged as stale in a narrowed scan

Links:

- CLI: https://github.com/felmonon/msw-inspector
- npm: https://www.npmjs.com/package/msw-inspector-cli
- Marketplace: https://github.com/marketplace/actions/msw-inspector

I built this because developer tools are strongest when they make invisible drift visible before it becomes a production or CI surprise.

## Short X / Threads Draft

I shipped `msw-inspector`: an open-source CLI + GitHub Action for finding gaps in MSW mock coverage.

It scans API call sites, scans MSW handlers, then reports:

- unmocked endpoints
- stale handlers
- coverage %
- CI-friendly JSON

Dogfood results:

- TypeJung: 39 API calls, 39 unmocked
- Mirror: 7 API calls, 7 unmocked
- MSW REST slice: 66 stale handlers in a narrowed scan

CLI: https://github.com/felmonon/msw-inspector
Marketplace: https://github.com/marketplace/actions/msw-inspector

