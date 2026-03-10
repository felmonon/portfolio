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
  'AI Product Engineering Intern Candidate',
  'Software Engineering Intern Candidate',
  'LLM Integration Builder',
  'Open-Source Contributor',
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
    url: '/resumes/Felmon_Fekadu_Resume_SWE_Intern_2026.pdf',
  },
  {
    name: 'AI / LLM Resume',
    url: '/resumes/Felmon_Fekadu_Resume_AI_LLM_Intern_2026.pdf',
  },
  {
    name: 'Public Equities Resume',
    url: '/resumes/Felmon_Fekadu_Resume_Public_Equities_QuantTech_Intern_2026.pdf',
  },
]

export const aboutHighlights = [
  'Full-Stack Web Development',
  'Model-Powered Product Development',
  'Open-Source Contributions',
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
    title: 'Jungian Typology Assessment',
    description:
      'Production-style full-stack assessment platform with a 40-question engine, AI-generated insights, authentication, and Stripe-based tiered monetization.',
    tech: ['React', 'TypeScript', 'Express', 'Supabase', 'Stripe', 'Gemini'],
    category: 'Full-Stack AI App',
    image: '/images/project-jungian.png',
    github: 'https://github.com/FELMONON/jungian-typology-assessment',
    live: 'https://jungian-typology-assessment.vercel.app/',
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
    live: '#',
    featured: true,
  },
  {
    title: 'Minecraft Web Client Contributions',
    description:
      'Implemented server-side chunk caching, cache storage migration, and stability fixes including memory leak and buffer alignment improvements.',
    tech: ['TypeScript', 'Web Performance', 'Caching', 'OSS'],
    category: 'Open Source',
    image: '/images/project-minecraft.png',
    github: 'https://github.com/FELMONON/minecraft-web-client',
    live: 'https://mcraft.fun',
    featured: true,
  },
  {
    title: 'LangChain.js Contributions',
    description:
      'Added validation and tests to prevent incompatible `bindTools` and `withStructuredOutput` combinations in chat model APIs.',
    tech: ['TypeScript', 'Testing', 'LLM Tooling', 'OSS'],
    category: 'Open Source',
    image: '/images/project-langchain.png',
    github: 'https://github.com/FELMONON/langchainjs',
    live: 'https://github.com/langchain-ai/langchainjs',
    featured: false,
  },
  {
    title: 'ComfyUI Frontend Contributions',
    description:
      'Fixed dialog interaction behavior so Escape closes only the active dialog and improved handling of undefined closable states.',
    tech: ['TypeScript', 'Vue', 'Frontend UX', 'OSS'],
    category: 'Open Source',
    image: '/images/project-comfy.png',
    github: 'https://github.com/FELMONON/ComfyUI_frontend',
    live: 'https://github.com/Comfy-Org/ComfyUI_frontend',
    featured: false,
  },
  {
    title: 'Screenpipe Contributions',
    description:
      'Implemented `--use-all-monitors` with dynamic monitor detection to improve multi-display capture workflows.',
    tech: ['Rust', 'Systems', 'CLI', 'OSS'],
    category: 'Open Source',
    image: '/images/project-screenpipe.png',
    github: 'https://github.com/FELMONON/screenpipe',
    live: 'https://github.com/mediar-ai/screenpipe',
    featured: false,
  },
]

export const experiences = [
  {
    title: 'Open-Source Contributor',
    company: 'LangChain.js, ComfyUI, Screenpipe, Minecraft Web Client',
    location: 'Remote',
    period: '2026 - Present',
    description: [
      'Contributed production fixes and features across TypeScript and Rust OSS projects.',
      'Shipped test-backed changes, UI behavior fixes, and performance/reliability improvements.',
      'Worked through PR review cycles and addressed maintainer feedback on merged changes.',
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
  { label: 'Projects Shipped', value: '12+' },
  { label: 'Merged OSS Commits', value: '10+' },
  { label: 'Core Technologies', value: '12+' },
  { label: 'Years Building', value: '3+' },
]

export const proofOfWork = [
  {
    label: 'LangChain.js - validation + tests',
    url: 'https://github.com/langchain-ai/langchainjs/commit/ac1562d',
  },
  {
    label: 'ComfyUI Frontend - dialog behavior fix',
    url: 'https://github.com/Comfy-Org/ComfyUI_frontend/commit/ad9727ae4',
  },
  {
    label: 'Screenpipe - multi-monitor capture flag',
    url: 'https://github.com/mediar-ai/screenpipe/commit/72629509',
  },
  {
    label: 'Minecraft Web Client - chunk cache stability',
    url: 'https://github.com/zardoy/minecraft-web-client/commit/96ce484a',
  },
]
