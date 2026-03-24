import { Palette, Server, Cloud } from 'lucide-react'

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const roles = [
  'Full-Stack Engineer',
  'OSS Contributor',
  'AI Tooling Builder',
  'Product Engineer',
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/felmonon',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/felmon-fekadu/',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:felmonon@gmail.com',
    icon: 'mail',
  },
]

export const resumeLinks = [
  {
    name: 'SWE Resume',
    url: '/resumes/Felmon_Fekadu_Resume_SWE_2026.pdf',
  },
  {
    name: 'AI / LLM Resume',
    url: '/resumes/Felmon_Fekadu_Resume_AI_LLM_2026.pdf',
  },
]

export const aboutHighlights = [
  'Full-Stack Web Development',
  'Model-Powered Product Development',
  'Accepted & Submitted OSS Work',
  'Real-Time Systems',
  'Testing & CI/CD',
]

export const skills = [
  {
    category: 'Frontend Development',
    icon: Palette,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & AI',
    icon: Server,
    items: [
      'Node.js',
      'Express',
      'FastAPI',
      'PostgreSQL',
      'Supabase',
      'Prisma',
      'Gemini API',
      'LLM Feature Integration',
    ],
  },
  {
    category: 'Data & DevOps',
    icon: Cloud,
    items: ['Docker', 'GitHub Actions', 'Vercel', 'SQL', 'Git', 'REST APIs', 'WebSockets'],
  },
]

export const projects = [
  {
    title: 'TypeJung',
    tagline: 'Live full-stack assessment product with paid tiers and AI-generated reports.',
    description:
      'Live full-stack assessment product with a 40-question engine, AI-generated insights, authentication, and Stripe-based tiered monetization.',
    tech: ['React', 'TypeScript', 'Express', 'Supabase', 'Stripe', 'Gemini'],
    category: 'Flagship Product',
    image: '/images/project-jungian.png',
    github: 'https://github.com/felmonon/jungian-typology-assessment',
    live: 'https://typejung.com',
    featured: true,
    caseStudy: true,
    problem:
      'A personality assessment can get attention, but turning it into a product requires more than questions. It needs authentication, payments, report generation, and a flow that makes the value obvious.',
    solution:
      'Built a complete assessment product with a multi-step questionnaire, gated reports, account handling, and AI-generated insights that sit inside a paid product flow instead of a demo.',
    architecture:
      'React and TypeScript on the frontend, Express on the backend, Supabase for auth and persistence, Stripe for billing, and Gemini-powered report generation.',
    constraints:
      'The system had to keep the experience readable while handling monetization, report generation, and account state without making the product feel fragile.',
    outcome:
      'Shipped publicly at typejung.com with tiered monetization, public source code, and inspectable product behavior.',
    imageGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
    ctaLabel: 'Open live product',
    secondaryHref: 'https://github.com/felmonon/jungian-typology-assessment',
    secondaryLabel: 'Inspect source',
    proofItems: [
      'Live product at typejung.com',
      '40-question assessment engine',
      'Supabase auth, persistence, and Stripe billing',
      'Gemini-generated reports inside paid product flow',
    ],
  },
  {
    title: 'Collab Editor',
    tagline: 'Real-time collaborative editing with sync, autosave, and persistence.',
    description:
      'Real-time collaborative editor built with Next.js, Tiptap, and Socket.io with live sync, autosave, and PostgreSQL persistence.',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'Tiptap', 'PostgreSQL', 'Prisma'],
    category: 'Real-Time Web App',
    image: '/images/project-collab.png',
    github: 'https://github.com/felmonon/collab-editor',
    live: 'https://collab-editor-sand.vercel.app',
    featured: true,
    caseStudy: true,
    problem:
      'Collaborative editing looks simple at the surface, but the real work is keeping shared state, autosave, and persistence coherent when multiple users are editing at once.',
    solution:
      'Built a collaborative document editor with live synchronization, rich-text editing, autosave behavior, and a persistent backend instead of a local-only prototype.',
    architecture:
      'Next.js and TypeScript on the client, Tiptap for editing, Socket.io for sync, PostgreSQL for persistence, and Prisma for data access.',
    constraints:
      'The main challenge was balancing responsive editing, real-time collaboration, and durable persistence without turning the UX into lag or inconsistency.',
    outcome:
      'Published as a live app with public source code and clear proof of real-time systems work.',
    imageGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    ctaLabel: 'Open live app',
    secondaryHref: 'https://github.com/felmonon/collab-editor',
    secondaryLabel: 'Inspect source',
    proofItems: [
      'Live app plus public repository',
      'Socket.io synchronization with autosave',
      'PostgreSQL persistence through Prisma',
      'GitHub OAuth and dual-service architecture',
    ],
  },
  {
    title: 'DocAgent Studio',
    tagline: 'Local-first document QA with hybrid retrieval and citation-grounded answers.',
    description:
      'Local-first document QA with hybrid retrieval (SQLite FTS5 + vector embeddings), citation-grounded answers via local Ollama models, GraphRAG entity navigation, and offline evaluation for retrieval recall and citation coverage.',
    tech: ['Python', 'FastAPI', 'SQLite', 'FTS5', 'Embeddings', 'GraphRAG'],
    category: 'Local-First AI',
    image: '/images/project-jungian.png',
    github: 'https://github.com/felmonon/docagent-studio',
    live: 'https://github.com/felmonon/docagent-studio',
    featured: true,
    caseStudy: true,
    problem:
      'Document QA tools either require cloud APIs or sacrifice retrieval quality. A local-first system needs hybrid retrieval, citation grounding, and offline evaluation without external dependencies.',
    solution:
      'Built a local-first RAG system combining SQLite FTS5 full-text search with vector embeddings for hybrid retrieval, citation-grounded answers via Ollama, and GraphRAG for entity navigation.',
    architecture:
      'Python with FastAPI, SQLite for persistence and FTS5 for full-text search, sentence-transformers for embeddings, Ollama for local LLM inference, and a GraphRAG entity index.',
    constraints:
      'Everything runs locally with no cloud dependencies. Retrieval quality and citation coverage must be measurable through offline evaluation.',
    outcome:
      'Shipped as an open-source local-first document QA system with hybrid retrieval, citation grounding, and measurable evaluation metrics.',
    imageGradient: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
    ctaLabel: 'View source',
    secondaryHref: 'https://github.com/felmonon/docagent-studio',
    secondaryLabel: 'Inspect source',
    proofItems: [
      'Hybrid retrieval: SQLite FTS5 + vector embeddings',
      'Citation-grounded answers via local Ollama models',
      'GraphRAG entity navigation',
      'Offline evaluation for retrieval recall and citation coverage',
    ],
  },
  {
    title: 'openai/openai-agents-python',
    tagline: "Fixed race condition and clarified streaming docs in OpenAI's agent framework.",
    description:
      'Fixed a race condition in SQLAlchemy session writes causing data loss under concurrent agent workloads. Clarified streaming docs for cancel-after-turn behavior.',
    tech: ['Python', 'SQLAlchemy', 'Agent Frameworks', 'OSS'],
    category: 'Merged PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/openai/openai-agents-python/pull/2725',
    live: 'https://github.com/openai/openai-agents-python/pull/2725',
    featured: false,
    caseStudy: true,
    problem:
      'Concurrent agent workloads were losing data due to a race condition in SQLAlchemy session writes, and streaming cancellation behavior was undocumented.',
    solution:
      'Identified and fixed the race condition in session writes and authored documentation clarifying cancel-after-turn streaming behavior.',
    architecture:
      "Python with SQLAlchemy inside OpenAI's open-source agent framework, requiring understanding of concurrent session management.",
    constraints:
      'Changes had to be backwards-compatible, minimal in scope, and pass the existing test suite in a high-traffic open-source project.',
    outcome:
      'Both PRs accepted upstream in March 2026, fixing data loss for concurrent agent workloads.',
    imageGradient: 'linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)',
    ctaLabel: 'Open merged PR',
    secondaryHref: 'https://github.com/openai/openai-agents-python/pull/2710',
    secondaryLabel: 'Open docs PR',
    proofItems: [
      'Merged March 2026',
      'Fixed data loss race condition in SQLAlchemy sessions',
      'Clarified streaming cancel-after-turn docs',
      'Accepted upstream in openai/openai-agents-python',
    ],
  },
  {
    title: 'mswjs/msw',
    tagline: 'Fixed open handles and type errors in the most-used API mocking library.',
    description:
      'Fixed open handles from infinite delays in Node.js causing test suites to hang. Fixed RequestHandler type not accepted in setup functions. Shipped in v2.12.11.',
    tech: ['TypeScript', 'Node.js', 'Testing', 'OSS'],
    category: 'Merged PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/mswjs/msw/pull/2669',
    live: 'https://github.com/mswjs/msw/pull/2669',
    featured: false,
    caseStudy: true,
    problem:
      'Infinite delays in MSW handlers left open handles in Node.js, causing test suites to hang. A type mismatch also prevented RequestHandler from being accepted in setup functions.',
    solution:
      'Fixed the open handle leak from infinite delays and resolved the RequestHandler type constraint in setup functions.',
    architecture:
      'TypeScript library internals in a project used by 200k+ downstream projects, requiring careful backwards-compatible changes.',
    constraints:
      'Fixes had to ship without breaking any of the 200k+ projects depending on MSW, and pass the full test suite.',
    outcome:
      'Both fixes merged and shipped in MSW v2.12.11.',
    imageGradient: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
    ctaLabel: 'Open merged PR',
    secondaryHref: 'https://github.com/mswjs/msw/pull/2676',
    secondaryLabel: 'Open type fix PR',
    proofItems: [
      'Shipped in MSW v2.12.11',
      'Used by 200k+ projects',
      'Fixed Node.js open handle leak',
      'Fixed RequestHandler type constraint',
    ],
  },
  {
    title: 'withastro/astro',
    tagline: 'Fixed language server completion deferral bug in the Astro framework.',
    description:
      'Fixed language server incorrectly deferring HTML expression completions to TypeScript plugin. 1 merged, 4 open PRs across type system, accessibility audit, and image tooling.',
    tech: ['TypeScript', 'Language Server', 'Developer Tools', 'OSS'],
    category: 'Merged PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/withastro/astro/pull/15927',
    live: 'https://github.com/withastro/astro/pull/15927',
    featured: false,
    caseStudy: true,
    problem:
      'The Astro language server was incorrectly deferring HTML expression completions to the TypeScript plugin, breaking developer experience in .astro files.',
    solution:
      'Fixed the completion deferral logic in the language server, with additional PRs open for type system, accessibility, and image tooling improvements.',
    architecture:
      'TypeScript language server protocol implementation inside the Astro framework monorepo.',
    constraints:
      'Language server changes must handle edge cases across all Astro template expressions without regressing existing completions.',
    outcome:
      '1 PR merged, 4 additional PRs open across type system, accessibility audit, and image tooling.',
    imageGradient: 'linear-gradient(135deg, #4c1d95 0%, #6d28d9 100%)',
    ctaLabel: 'Open merged PR',
    secondaryHref: 'https://github.com/withastro/astro',
    secondaryLabel: 'Open repository',
    proofItems: [
      '1 merged, 4 open PRs',
      'Language server completion fix',
      'Type system, a11y, and image tooling contributions',
      'Active contributor to Astro framework',
    ],
  },
  {
    title: 'commaai/opendbc & openpilot',
    tagline: "Optimized CI and added fuzz testing across comma.ai's automotive stack.",
    description:
      'Optimized CI by caching Hypothesis strategies in car model tests. Open PR adding fuzz testing for openpilot TX against panda on replayed routes.',
    tech: ['Python', 'Testing', 'Robotics/Automotive', 'OSS'],
    category: 'Merged PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/commaai/opendbc/pull/3052',
    live: 'https://github.com/commaai/opendbc/pull/3052',
    featured: false,
    caseStudy: true,
    problem:
      'CI was slow due to regenerating Hypothesis strategies on every run, and TX message handling lacked fuzz test coverage against real route data.',
    solution:
      'Cached Hypothesis strategies in car model tests to speed up CI, and authored fuzz testing for openpilot TX against panda on replayed routes.',
    architecture:
      "Python testing infrastructure across comma.ai's opendbc and openpilot repositories for autonomous driving.",
    constraints:
      'Test changes had to integrate with existing CI pipelines and maintain deterministic behavior across car model variants.',
    outcome:
      'Merged in opendbc with CI speedup; open PR in openpilot for fuzz testing on replayed routes.',
    imageGradient: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
    ctaLabel: 'Open merged PR',
    secondaryHref: 'https://github.com/commaai/openpilot/pull/37726',
    secondaryLabel: 'Open openpilot PR',
    proofItems: [
      'Merged in commaai/opendbc',
      'Open PR in commaai/openpilot',
      'CI optimization via Hypothesis caching',
      'Fuzz testing for TX against panda on replayed routes',
    ],
  },
]

export const experiences = [
  {
    title: 'Open-Source Contributor',
    company: 'OpenAI, MSW, Astro, comma.ai',
    location: 'Remote',
    period: '2026 - Present',
    description: [
      'Contributing upstream fixes to OpenAI, MSW, Astro, and comma.ai.',
      'Fixing race conditions, type system bugs, test infrastructure, and developer tooling in codebases used by hundreds of thousands of developers.',
    ],
    tech: ['Python', 'TypeScript', 'Testing', 'Open Source'],
  },
  {
    title: 'Safety Watch / Fire Watch',
    company: 'United Safety',
    location: 'Fort McMurray / Northern Alberta',
    period: '2022 - 2024',
    description: [
      'Safety operations in industrial environments.',
      'Atmospheric monitoring, compliance documentation, and emergency response coordination across Northern Alberta energy sites.',
    ],
    tech: ['Safety Operations', 'Compliance', 'Emergency Response'],
  },
  {
    title: 'Mobile Security Patrol Officer',
    company: 'Security Services',
    location: 'Calgary, AB',
    period: '2020 - 2022',
    description: [
      'Mobile patrol operations, incident response, and access control for commercial and residential sites.',
    ],
    tech: ['Operations', 'Incident Response', 'Access Control'],
  },
  {
    title: 'B.S. Computer Science',
    company: 'University of the People',
    location: 'Online',
    period: 'Expected 2026',
    description: [
      'Bachelor of Science, Computer Science. Honors List.',
    ],
    tech: ['Computer Science', 'Software Engineering'],
  },
]

export const stats = [
  { label: 'Shipped Products', value: '3' },
  { label: 'Merged PRs', value: '6' },
  { label: 'OSS Pull Requests', value: '14' },
  { label: 'Years Building', value: '3+' },
]

export const heroSection = {
  eyebrow: 'Full-stack software engineer',
  summary:
    'I build full-stack products with authentication, payments, real-time collaboration, and AI-powered workflows. The strongest signal is public proof you can inspect: live apps, public repositories, and six merged PRs across OpenAI, MSW, Astro, and comma.ai.',
  stackFocus: ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AI / LLM'],
  architectureNodes: [
    { label: 'Frontend', color: '#7FB38A', delay: 0, indent: 0 },
    { label: 'API Layer', color: '#C9A86A', delay: 0.1, indent: 1 },
    { label: 'Services', color: '#7FB38A', delay: 0.2, indent: 2 },
    { label: 'Database', color: '#C9A86A', delay: 0.3, indent: 1 },
    { label: 'Infrastructure', color: '#7FB38A', delay: 0.4, indent: 0 },
  ],
}

export const proofBarItems = [
  {
    value: '3',
    label: 'Shipped Products',
    description: 'TypeJung, Collab Editor, and DocAgent Studio',
  },
  {
    value: '6',
    label: 'Merged PRs',
    description: 'Accepted upstream in OpenAI, MSW, Astro, and comma.ai',
  },
  {
    value: '14',
    label: 'OSS Pull Requests',
    description: 'Merged and open PRs across major open-source projects',
  },
  {
    value: '3+',
    label: 'Years Building',
    description: 'Built while studying and working outside tech',
  },
]

export const aboutSection = {
  meta: [
    { label: 'Location', value: 'Alberta, Canada' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Focus', value: 'Full-stack, real-time systems, AI/ML tooling' },
    { label: 'Seeking', value: 'Software engineering roles' },
  ],
  title: 'Building systems that solve real problems',
  paragraphs: [
    'I\u2019m Felmon Fekadu, a software engineer in Calgary building full-stack products, real-time systems, and AI-powered workflows. I ship code with clear interfaces, tested behavior, and public proof.',
    'My strongest evidence is public and verifiable: shipped products at typejung.com and collab-editor-sand.vercel.app, a local-first RAG system in docagent-studio, and six merged pull requests across OpenAI, MSW, Astro, and comma.ai.',
    'I\u2019m looking for engineering roles where product judgment and technical discipline both matter \u2014 teams shipping real software with high ownership and clear review standards.',
  ],
  principles: [
    ['Clear interfaces', 'Make the product understandable before making it clever.'],
    ['Real systems', 'Build for persistence, auth, payments, sync, and failure paths.'],
    ['Honest proof', 'Lead with shipped work and label upstream contributions precisely.'],
    ['Fast iteration', 'Ship, inspect, and improve instead of polishing in isolation.'],
    ['Product ownership', 'Own outcomes, not just isolated implementation tasks.'],
    ['Learning in public', 'Use repositories and PRs as public proof of engineering growth.'],
  ],
}

export const engineeringDecisions = [
  {
    icon: 'database',
    title: 'AI as a product capability',
    copy:
      'Model features are useful when they fit a clear workflow. I prefer bounded product use cases over AI ornamentation.',
    exampleTitle: 'Example: TypeJung reports',
    bullets: [
      'Assessment flow, account state, and billing exist around the report generator.',
      'AI output serves the product instead of replacing the product.',
      'The proof is a live app, not just a prompt demo.',
    ],
    footer: 'Use models where they improve the workflow, not where they add theater.',
  },
  {
    icon: 'zap',
    title: 'Real-time behavior needs discipline',
    copy:
      'Collaboration features create state problems quickly. The work is keeping sync, autosave, and persistence coherent under real edits.',
    exampleTitle: 'Example: Collab Editor',
    bullets: [
      'Socket-driven updates for shared editing.',
      'Autosave and persistence built alongside the editor experience.',
      'Real-time UX balanced against backend consistency.',
    ],
    footer: 'Fast interfaces only matter if the underlying state stays trustworthy.',
  },
  {
    icon: 'shield',
    title: 'Public review is part of the proof',
    copy:
      'Open-source contributions force precision. Six merged PRs across OpenAI, MSW, Astro, and comma.ai — each surviving maintainer review in codebases used by thousands.',
    exampleTitle: 'Example: OpenAI, MSW, Astro, comma.ai',
    bullets: [
      'Race condition fixes, type system bugs, and test infrastructure improvements.',
      'Public maintainer review and accepted merge outcomes across 4 organizations.',
      'Contributions to projects used by 200k+ downstream dependents.',
    ],
    footer: 'Reviewed code in public repositories is stronger proof than self-description.',
  },
]

export const journeyTimeline = [
  {
    year: '2026',
    type: 'milestone',
    title: 'Open to engineering roles',
    description:
      'Seeking software engineering roles where product judgment and technical discipline both matter.',
  },
  {
    year: '2026',
    type: 'project',
    title: '6 merged PRs across OpenAI, MSW, Astro, and comma.ai',
    description:
      'Upstream contributions fixing race conditions, type system bugs, test infrastructure, and developer tooling in codebases used by hundreds of thousands of developers.',
  },
  {
    year: '2026',
    type: 'project',
    title: 'Shipped 3 products: TypeJung, Collab Editor, DocAgent Studio',
    description:
      'Full-stack products with authentication, payments, real-time collaboration, and local-first AI-powered document QA.',
  },
  {
    year: '2025-2026',
    type: 'education',
    title: 'Computer Science studies at University of the People',
    description:
      'Focused on software engineering, systems, and full-stack development, with Honors List recognition in Term 2, 2025-2026.',
  },
  {
    year: '2022-2024',
    type: 'work',
    title: 'Safety Watch / Fire Watch at United Safety',
    description:
      'High-risk industrial monitoring, atmospheric readings, compliance logs, and coordination with operations teams in northern Alberta.',
  },
  {
    year: '2020-2022',
    type: 'work',
    title: 'Mobile Security Patrol Officer',
    description:
      'Facility patrols, alarm response, digital incident reporting, and dispatch coordination across mobile security operations.',
  },
]

export const contactSection = {
  eyebrow: "Let's work together",
  title: 'Looking for an engineer who can build, learn fast, and own outcomes?',
  summary:
    'I\u2019m looking for engineering teams that ship real products with high standards \u2014 where I can contribute meaningful code from day one.',
  footerLocation: 'Alberta, Canada',
  footerAvailability: 'Open to relocation / remote-friendly',
}

export const proofOfWork = [
  {
    label: 'openai/openai-agents-python - race condition fix + streaming docs',
    status: 'Merged, March 2026',
    kind: 'Merged PR',
    cta: 'Open merged PR',
    url: 'https://github.com/openai/openai-agents-python/pull/2725',
  },
  {
    label: 'mswjs/msw - open handle fix + RequestHandler type fix',
    status: 'Merged, shipped in v2.12.11',
    kind: 'Merged PR',
    cta: 'Open merged PR',
    url: 'https://github.com/mswjs/msw/pull/2669',
  },
  {
    label: 'withastro/astro - language server completion fix',
    status: 'Merged, 4 additional PRs open',
    kind: 'Merged PR',
    cta: 'Open merged PR',
    url: 'https://github.com/withastro/astro/pull/15927',
  },
  {
    label: 'commaai/opendbc - CI cache optimization',
    status: 'Merged on January 27, 2026',
    kind: 'Merged PR',
    cta: 'Open merged PR',
    url: 'https://github.com/commaai/opendbc/pull/3052',
  },
  {
    label: 'commaai/openpilot - fuzz testing for TX against panda',
    status: 'Open',
    kind: 'Open PR',
    cta: 'Open PR',
    url: 'https://github.com/commaai/openpilot/pull/37726',
  },
]

export const githubSection = {
  profileUrl: 'https://github.com/felmonon',
  intro:
    'Public repositories pulled from my actual GitHub profile, showing current product work, AI tooling, and experiments I build in the open.',
  stats: [
    { label: 'Contributions this year', value: '176' },
    { label: 'PRs merged', value: '6' },
    { label: 'Repositories', value: '26' },
    { label: 'Stars earned', value: '1' },
  ],
  contributionWeeks: [
    [0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 9, 8, 1, 1, 0],
    [0, 2, 0, 0, 0, 3, 2],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
  repoGroups: [
    {
      title: 'Shipped Products',
      repos: [
        {
          name: 'jungian-typology-assessment',
          description:
            'Full-stack Jungian typology assessment with auth, billing, persisted results, and AI-generated reports.',
          language: 'TypeScript',
          stars: 1,
          category: 'Product',
          url: 'https://github.com/felmonon/jungian-typology-assessment',
        },
        {
          name: 'docagent-studio',
          description:
            'Local-first document QA with hybrid retrieval (SQLite FTS5 + vector embeddings), citation-grounded answers, GraphRAG entity navigation, and offline evaluation.',
          language: 'Python',
          stars: 0,
          category: 'AI Tool',
          url: 'https://github.com/felmonon/docagent-studio',
        },
        {
          name: 'collab-editor',
          description:
            'Real-time collaborative editor with shared document rooms, presence, remote cursors, autosave, and PostgreSQL persistence.',
          language: 'TypeScript',
          stars: 0,
          category: 'Product',
          url: 'https://github.com/felmonon/collab-editor',
        },
      ],
    },
    {
      title: 'AI Tools & Experiments',
      repos: [
        {
          name: 'constitutional-playground',
          description:
            'Side-by-side comparison of Constitutional AI critique and revision loops in real time.',
          language: 'TypeScript',
          stars: 0,
          category: 'Experiment',
          url: 'https://github.com/felmonon/constitutional-playground',
        },
        {
          name: 'neuroflow',
          description:
            'ADHD-focused planner with AI task breakdown, scheduling flows, and body-doubling support.',
          language: 'TypeScript',
          stars: 0,
          category: 'AI Tool',
          url: 'https://github.com/felmonon/neuroflow',
        },
        {
          name: 'GuardTrack',
          description:
            'Guard patrol tracking app with geofencing, session management, checkpoint logging, and offline support.',
          language: 'TypeScript',
          stars: 0,
          category: 'Product',
          url: 'https://github.com/felmonon/GuardTrack',
        },
      ],
    },
  ],
}
