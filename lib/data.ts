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
  'AI Product Developer',
  'Software Developer',
  'LLM Integration Builder',
  'Shipped Product Builder',
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/FELMONON',
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
  'Prime Lab / Verifiers',
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
      'LangGraph',
      'Verifiers',
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
    description:
      'Live full-stack assessment product with a 40-question engine, AI-generated insights, authentication, and Stripe-based tiered monetization.',
    tech: ['React', 'TypeScript', 'Express', 'Supabase', 'Stripe', 'Gemini'],
    category: 'Flagship Product',
    image: '/images/project-jungian.png',
    github: 'https://github.com/FELMONON/jungian-typology-assessment',
    live: 'https://typejung.com',
    featured: true,
  },
  {
    title: 'Collab Editor',
    description:
      'Real-time collaborative editor built with Next.js, Tiptap, and Socket.io with live sync, autosave, and PostgreSQL persistence.',
    tech: ['Next.js', 'TypeScript', 'Socket.io', 'Tiptap', 'PostgreSQL', 'Prisma'],
    category: 'Real-Time Web App',
    image: '/images/project-collab.png',
    github: 'https://github.com/FELMONON/collab-editor',
    live: 'https://collab-editor-sand.vercel.app',
    featured: true,
  },
  {
    title: 'commaai/opendbc PR',
    description:
      'Merged upstream PR improving car test cache hypothesis strategies in a public open-source codebase.',
    tech: ['Testing', 'OSS', 'Verification'],
    category: 'Accepted Upstream PR',
    image: '/images/project-langchain.png',
    github: 'https://github.com/commaai/opendbc/pull/3052',
    live: 'https://github.com/commaai/opendbc/pull/3052',
    featured: false,
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
    title: 'Independent Product Builder',
    company: 'Self-directed product work',
    location: 'Remote',
    period: '2025 - Present',
    description: [
      'Built and shipped TypeJung and Collab Editor across frontend, backend, auth, billing, and deployment workflows.',
      'Worked across product UX, persistence, APIs, real-time collaboration, and production polish instead of isolated feature tasks.',
      'Use public products as the main proof surface, with resume and portfolio claims kept narrower than the code supports.',
    ],
    tech: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Real-Time Systems'],
  },
  {
    title: 'AI Research Systems Builder',
    company: 'Prime Lab + local R&D',
    location: 'Remote',
    period: '2025',
    description: [
      'Built a FastAPI and LangGraph backend MVP for multi-agent research workflows, plus a custom Prime Lab / Verifiers environment for self-improvement experiments.',
      'Implemented streaming research updates, claim analysis scaffolding, and environment configs for evaluation and RL-style training loops.',
      'Kept the public description precise: backend MVP and lab environment work, not a shipped production platform.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Verifiers', 'Prime Lab'],
  },
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
]

export const stats = [
  { label: 'Live Products', value: '2' },
  { label: 'Accepted Upstream PRs', value: '1' },
  { label: 'Submitted Upstream PRs', value: '4' },
  { label: 'Years Building', value: '3+' },
]

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
