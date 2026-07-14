# Design QA

## Comparison target

- Desktop too-wide source (`76rem`): `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/balanced-source-76rem-desktop.png`
- Desktop balanced implementation (`70rem`): `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/balanced-implementation-70rem-desktop.png`
- Desktop side-by-side comparison: `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/balanced-comparison-desktop.png`
- Mobile source: `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/source-mobile-full.png`
- Mobile implementation: `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/implementation-mobile-full.png`
- Mobile bottom comparison: `/Users/felmonfekadu/Developer/projects/felmon.tech/tmp/rhythm-qa/comparison-mobile-bottom.png`
- Desktop viewport: 1380 × 1000 for both source and implementation
- Mobile viewport: 390 × 844 for both source and implementation
- State: anonymous visitor, light theme, full homepage with a focused bottom crop

## Root cause and measurements

The mobile bottom gap was not caused by `.page { min-height: 100vh; }`. The page content is taller than the viewport. It came from four stacked values at the end of the document:

- Contact bottom padding: 44px (`2.75rem`)
- Footer top padding: 32px (`2rem`)
- Footer row gap: 24px (`1.5rem`)
- Footer bottom padding: 32px (`2rem`)

That 132px stack is now 80px before any device safe-area inset: 28px Contact padding, 20px footer top padding, 12px row gap, and 20px footer bottom padding. The measured mobile page height fell from 6460px to 6408px, exactly matching the 52px reduction.

The desktop rail was tested at both 1024px (`64rem`) and 1216px (`76rem`). User review found the first too inset and the second too wide. The final 1120px (`70rem`) rail sits between them with 130px outer margins at the 1380px comparison viewport. The tighter hero, section, intro, project-row, Contact, and footer rhythm remains unchanged.

## Side-by-side visual judgment

- Desktop: the final rail is visibly more contained than the rejected `76rem` version while avoiding the excessive side space of `64rem`. It preserves the warm paper palette, serif display voice, monospace metadata, green accent, square controls, and rule system. Headings, proof grids, project detail grids, and action rows remain uncropped and aligned.
- Mobile: Contact remains spacious enough to separate it from About, both full-width actions retain comfortable touch targets, inline links remain distinct, and the footer now follows the actions without the previous empty tail.
- Responsive behavior: no horizontal overflow, collision, clipping, unexpected radius, font-weight mismatch, border mismatch, or cropped content is visible at either comparison viewport.
- Accessibility structure: semantic headings, lists, links, navigation, and footer content remain unchanged. The CSS-only refinement does not remove or reorder interactive content.

## Automated QA

- Vitest: 10 tests passed across 5 test files, including homepage and Axe coverage.
- ESLint: passed.
- Next.js production build: passed; all application routes prerendered.
- Local production Lighthouse mobile: performance 95, accessibility 100, SEO 100, CLS 0.
- Local production Lighthouse desktop: performance 100, accessibility 100, SEO 100, CLS 0.
- Lighthouse best practices is 96 locally because the Vercel Analytics and Speed Insights endpoints return 404 outside Vercel; this is a local-environment artifact, not an application regression.

## Findings

No actionable P0, P1, or P2 findings remain.

## Open questions

None.

final result: passed
