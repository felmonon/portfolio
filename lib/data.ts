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
  'AI Product Engineer',
  'Software Engineer',
  'LLM Integration Builder',
  'Shipped Product Builder',
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/FelmonFekadu',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/felmonfekadu',
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
  {
    name: 'Public Equities Resume',
    url: '/resumes/Felmon_Fekadu_Resume_Public_Equities_QuantTech_2026.pdf',
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
    github: 'https://github.com/FelmonFekadu/jungian-typology-assessment',
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
    secondaryHref: 'https://github.com/FelmonFekadu/jungian-typology-assessment',
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
    github: 'https://github.com/FelmonFekadu/collab-editor',
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
    secondaryHref: 'https://github.com/FelmonFekadu/collab-editor',
    secondaryLabel: 'Inspect source',
    proofItems: [
      'Live app plus public repository',
      'Socket.io synchronization with autosave',
      'PostgreSQL persistence through Prisma',
      'GitHub OAuth and dual-service architecture',
    ],
  },
  {
    title: 'commaai/opendbc PR',
    tagline: 'Merged upstream testing contribution in a public open-source codebase.',
    description:
      'Merged upstream PR improving car test cache hypothesis strategies in a public open-source codebase.',
    tech: ['Testing', 'OSS', 'Verification'],
    category: 'Accepted Upstream PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/commaai/opendbc/pull/3052',
    live: 'https://github.com/commaai/opendbc/pull/3052',
    featured: false,
    caseStudy: true,
    problem:
      'Public proof is stronger when it includes reviewed code in somebody else’s codebase, not just self-published projects. That means finding a concrete issue and making a change that can survive review.',
    solution:
      'Authored a focused upstream pull request improving cache hypothesis strategies in commaai/opendbc with test-backed changes and a narrow, reviewable scope.',
    architecture:
      'Python testing and verification work inside an established open-source repository with maintainer review and existing project standards.',
    constraints:
      'The contribution had to be technically correct, easy to review, and precise enough to fit an existing upstream codebase without overclaiming impact.',
    outcome:
      'Merged upstream on January 27, 2026, giving public proof of reviewable engineering work outside my own repositories.',
    imageGradient: 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
    ctaLabel: 'Open merged PR',
    secondaryHref: 'https://github.com/commaai/opendbc',
    secondaryLabel: 'Open repository',
    proofItems: [
      'Merged January 27, 2026',
      'Public maintainer review and accepted diff',
      'Test-backed cache hypothesis change',
      'Proof inside an upstream codebase, not self-published work',
    ],
  },
  {
    title: 'Minecraft Web Client PR',
    description:
      'Submitted chunk caching and geometry caching changes for the upstream web client. Status: open, not merged.',
    tech: ['TypeScript', 'Web Performance', 'Caching', 'OSS'],
    category: 'Submitted Upstream PR',
    image: '/images/project-minecraft.png',
    github: 'https://github.com/zardoy/minecraft-web-client/pull/477',
    live: 'https://github.com/zardoy/minecraft-web-client/pull/477',
    featured: false,
  },
  {
    title: 'LangChain.js PR',
    description:
      'Submitted structured output validation and test coverage improvements. Status: closed, not merged.',
    tech: ['TypeScript', 'Testing', 'LLM Tooling', 'OSS'],
    category: 'Submitted Upstream PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/langchain-ai/langchainjs/pull/9834',
    live: 'https://github.com/langchain-ai/langchainjs/pull/9834',
    featured: false,
  },
  {
    title: 'ComfyUI Frontend PR',
    description:
      'Submitted a dialog interaction fix so Escape closes only the active dialog. Status: closed, not merged.',
    tech: ['TypeScript', 'Vue', 'Frontend UX', 'OSS'],
    category: 'Submitted Upstream PR',
    image: '/images/project-comfy.png',
    github: 'https://github.com/Comfy-Org/ComfyUI_frontend/pull/8190',
    live: 'https://github.com/Comfy-Org/ComfyUI_frontend/pull/8190',
    featured: false,
  },
  {
    title: 'Screenpipe PR',
    description:
      'Submitted multi-monitor capture support with dynamic monitor detection. Status: closed, not merged.',
    tech: ['Rust', 'Systems', 'CLI', 'OSS'],
    category: 'Submitted Upstream PR',
    image: '/images/project-screenpipe.png',
    github: 'https://github.com/screenpipe/screenpipe/pull/2063',
    live: 'https://github.com/screenpipe/screenpipe/pull/2063',
    featured: false,
  },
]

export const experiences = [
  {
    title: 'Open-Source PR Author',
    company: 'commaai/opendbc + selected upstream repos',
    location: 'Remote',
    period: '2026 - Present',
    description: [
      'Authored and submitted upstream fixes and feature PRs across TypeScript and Rust codebases.',
      'One public upstream PR is merged in commaai/opendbc; additional proposals remain open or closed.',
      'Built test-backed changes, UI behavior fixes, and systems features while adapting to maintainer feedback.',
    ],
    tech: ['TypeScript', 'Rust', 'Testing', 'Open Source'],
  },
  {
    title: 'Safety Watch / Fire Watch',
    company: 'United Safety',
    location: 'Fort McMurray / Northern Alberta',
    period: '2022 - 2024',
    description: [
      'Monitored high-risk operations and executed emergency response procedures at industrial sites.',
      'Tracked atmospheric readings and maintained compliance and incident logs.',
      'Coordinated with operations and technical teams in rotational camp environments.',
    ],
    tech: ['Safety Operations', 'Incident Logging', 'Team Coordination'],
  },
  {
    title: 'Mobile Security Patrol Officer',
    company: 'Security Services',
    location: 'Calgary, AB',
    period: '2020 - 2022',
    description: [
      'Conducted facility patrols and documented incidents using digital reporting systems.',
      'Responded to alarms and coordinated with dispatch and emergency services.',
    ],
    tech: ['Operations', 'Reporting', 'Response Procedures'],
  },
  {
    title: 'B.S. Computer Science Student',
    company: 'University of the People',
    location: 'Online',
    period: 'Expected 2026',
    description: [
      'Focused on software engineering, algorithms, systems, and full-stack development.',
      'Built portfolio projects spanning real-time systems, API design, and AI integrations.',
      'Named to the UoPeople Honors List for Term 2, 2025-2026.',
    ],
    tech: ['Computer Science', 'Software Engineering', 'Project-Based Learning'],
  },
]

export const stats = [
  { label: 'Live Products', value: '2' },
  { label: 'Accepted Upstream PRs', value: '1' },
  { label: 'Submitted Upstream PRs', value: '4' },
  { label: 'Years Building', value: '3+' },
]

export const heroSection = {
  eyebrow: 'Full-stack software engineer',
  summary:
    'I build full-stack products with authentication, payments, real-time collaboration, and model-powered features. The strongest signal is public proof you can inspect: live apps, public repositories, and accepted upstream OSS where it exists.',
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
    value: '2',
    label: 'Live Products',
    description: 'Auth, billing, sync, and persistence in public apps',
  },
  {
    value: '1',
    label: 'Accepted Upstream PR',
    description: 'Maintainer-reviewed merge in commaai/opendbc',
  },
  {
    value: '4',
    label: 'Submitted Upstream PRs',
    description: 'Public proposals across TS, Python, and Rust repos',
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
    { label: 'Focus', value: 'Full-stack, real-time systems, AI features' },
    { label: 'Seeking', value: 'Full-time software engineering roles' },
  ],
  title: 'Building systems that solve real problems',
  paragraphs: [
    'I’m Felmon Fekadu, a software engineer building full-stack products, real-time collaboration tools, and model-powered workflows with an emphasis on clear interfaces, durable implementation, and inspectable proof.',
    'My strongest evidence is public and concrete: shipped product work in TypeJung and Collab Editor, plus accepted and submitted upstream contributions that are labeled exactly as they are.',
    'I’m looking for full-time roles where product judgment and engineering discipline both matter, especially teams shipping real software with high ownership and clear review standards.',
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
      'Open-source contributions force precision. The claim only counts if the code can survive review in someone else’s codebase.',
    exampleTitle: 'Example: commaai/opendbc PR',
    bullets: [
      'Targeted testing improvement instead of a vague contribution claim.',
      'Public maintainer review and accepted merge outcome.',
      'Submitted PRs elsewhere are labeled accurately when not merged.',
    ],
    footer: 'Reviewed code in public repositories is stronger proof than self-description.',
  },
]

export const journeyTimeline = [
  {
    year: '2026',
    type: 'milestone',
    title: 'Open to full-time engineering roles',
    description:
      'Targeting full-time software engineering, full-stack, and AI product roles where product judgment and engineering standards both matter.',
  },
  {
    year: '2026',
    type: 'project',
    title: 'Merged upstream PR in commaai/opendbc',
    description:
      'Accepted public contribution improving cache hypothesis strategies with test-backed changes in an upstream codebase.',
  },
  {
    year: '2026',
    type: 'project',
    title: 'Shipped public portfolio products',
    description:
      'TypeJung and Collab Editor provide public proof of product engineering, real-time systems work, and model-powered features.',
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
    'I’m interested in full-time roles where I can contribute to real products, grow under strong engineers, and keep shipping software that holds up under real use.',
  footerLocation: 'Alberta, Canada',
  footerAvailability: 'Open to relocation / remote-friendly',
}

export const proofOfWork = [
  {
    label: 'commaai/opendbc - cache hypothesis strategies',
    status: 'Merged on January 27, 2026',
    kind: 'Accepted upstream PR',
    cta: 'Open merged PR',
    url: 'https://github.com/commaai/opendbc/pull/3052',
  },
  {
    label: 'LangChain.js - structured output validation',
    status: 'Closed, not merged',
    kind: 'Submitted upstream PR',
    cta: 'Open PR',
    url: 'https://github.com/langchain-ai/langchainjs/pull/9834',
  },
  {
    label: 'ComfyUI Frontend - active dialog Escape behavior',
    status: 'Closed, not merged',
    kind: 'Submitted upstream PR',
    cta: 'Open PR',
    url: 'https://github.com/Comfy-Org/ComfyUI_frontend/pull/8190',
  },
  {
    label: 'Screenpipe - multi-monitor capture support',
    status: 'Closed, not merged',
    kind: 'Submitted upstream PR',
    cta: 'Open PR',
    url: 'https://github.com/screenpipe/screenpipe/pull/2063',
  },
  {
    label: 'Minecraft Web Client - long-term chunk geometry caching',
    status: 'Open',
    kind: 'Submitted upstream PR',
    cta: 'Open PR',
    url: 'https://github.com/zardoy/minecraft-web-client/pull/477',
  },
]

export const githubSection = {
  profileUrl: 'https://github.com/FelmonFekadu',
  intro:
    'Public repositories pulled from my actual GitHub profile, showing current product work, AI tooling, and experiments I build in the open.',
  stats: [
    { label: 'Contributions this year', value: '34' },
    { label: 'PRs merged', value: '7' },
    { label: 'Repositories', value: '32' },
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
            "Discover your true psychological type with the most accurate Jungian cognitive functions assessment. Based on Carl Jung's original theory.",
          language: 'TypeScript',
          stars: 1,
          category: 'Product',
          url: 'https://github.com/FelmonFekadu/jungian-typology-assessment',
        },
        {
          name: 'collab-editor',
          description:
            'Real-time collaborative document editor built with Next.js, Tiptap, Socket.io, and PostgreSQL',
          language: 'TypeScript',
          stars: 0,
          category: 'Product',
          url: 'https://github.com/FelmonFekadu/collab-editor',
        },
        {
          name: 'ai-speech-coach',
          description:
            'Real-time AI speech coaching with live video feedback — Tavus CVI, Claude, Next.js',
          language: 'TypeScript',
          stars: 0,
          category: 'Product',
          url: 'https://github.com/FelmonFekadu/ai-speech-coach',
        },
      ],
    },
    {
      title: 'AI Tools & Experiments',
      repos: [
        {
          name: 'docagent-studio',
          description:
            'Local-first personal docs assistant (PDF + Notion + Markdown) with citations, hybrid retrieval, GraphRAG-style index, and MLX LoRA fine-tuning.',
          language: 'Python',
          stars: 0,
          category: 'AI Tool',
          url: 'https://github.com/FelmonFekadu/docagent-studio',
        },
        {
          name: 'rlm-skill',
          description:
            'RLM: Unlimited Context for Claude Code — implements Recursive Language Models (arXiv:2512.24601) as a native skill',
          language: 'Python',
          stars: 0,
          category: 'Research',
          url: 'https://github.com/FelmonFekadu/rlm-skill',
        },
        {
          name: 'constitutional-playground',
          description:
            'Constitutional AI Playground - An interactive platform for experimenting with Constitutional AI principles',
          language: 'TypeScript',
          stars: 0,
          category: 'Experiment',
          url: 'https://github.com/FelmonFekadu/constitutional-playground',
        },
      ],
    },
    {
      title: 'Systems & Utilities',
      repos: [
        {
          name: 'Pulse',
          description:
            'macOS System Monitor Widget - Real-time CPU, RAM, Disk, Battery & Network monitoring',
          language: 'Swift',
          stars: 0,
          category: 'Utility',
          url: 'https://github.com/FelmonFekadu/Pulse',
        },
        {
          name: 'agent-collab',
          description:
            'Inter-agent collaboration protocol — structured task delegation, progress tracking, shared context, and conflict resolution for AI agents',
          language: 'Python',
          stars: 0,
          category: 'Protocol',
          url: 'https://github.com/FelmonFekadu/agent-collab',
        },
        {
          name: 'trust-protocol',
          description:
            'Agent Trust Protocol (ATP) — Multi-dimensional trust scoring for AI agent networks',
          language: 'Python',
          stars: 0,
          category: 'Protocol',
          url: 'https://github.com/FelmonFekadu/trust-protocol',
        },
      ],
    },
  ],
}
