import type {
  NavItem, TrustPillar, Solution, ProcessStep,
  TeamMember, CareerRole, TrainingModule, FAQItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "About",    href: "/about" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "Compliance",
    href: "/compliance",
    children: [
      { label: "Compliance Overview",       href: "/compliance" },
      { label: "Documentation Support",     href: "/compliance#documentation" },
      { label: "Chain-of-Custody Approach", href: "/compliance#chain-of-custody" },
    ],
  },
  { label: "Provider Onboarding", href: "/provider-onboarding" },
  { label: "Training",  href: "/training" },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

export const COMPANY = {
  name:    "Ridge Biologics",
  tagline: "The Compliance-First Infrastructure Behind Modern Regenerative Medicine",
  sub:     "Ridge Biologics supports providers with regenerative biologics distribution, compliance-conscious education, documentation support, and operational guidance.",
  email:   "info@ridgebiologics.com",
  phone:   "Contact us for information",
  cta_primary:   "Schedule a Provider Consultation",
  cta_secondary: "Explore Our Solutions",
};

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export const TRUST_PILLARS: TrustPillar[] = [
  { label: "Compliance-Conscious",      icon: "shield" },
  { label: "Provider Support",          icon: "users" },
  { label: "Documentation-Focused",     icon: "file" },
  { label: "Operational Guidance",      icon: "chart" },
  { label: "Chain-of-Custody Mindset",  icon: "link" },
];

// ─── Why Clinics Choose Ridge ────────────────────────────────────────────────

export const WHY_RIDGE = [
  {
    title: "Built Around the Provider",
    description:
      "We recognize that clinical teams are focused on patient outcomes. Our role is to handle the operational and documentation complexity so practitioners can stay focused on care delivery.",
    icon: "👨‍⚕️",
  },
  {
    title: "Compliance-Conscious by Design",
    description:
      "Every process we've built — from onboarding to distribution — is structured with regulatory awareness, documentation integrity, and chain-of-custody discipline in mind.",
    icon: "🛡️",
  },
  {
    title: "Education-Driven Relationships",
    description:
      "We invest in training and education resources that help providers make informed, defensible decisions about the biologics they incorporate into their practice.",
    icon: "📚",
  },
  {
    title: "Operational Infrastructure That Scales",
    description:
      "Whether you're a single-location clinic or a multi-site practice, Ridge provides a consistent, standards-oriented support infrastructure that grows with you.",
    icon: "🏗️",
  },
];

// ─── Solutions ────────────────────────────────────────────────────────────────

export const SOLUTIONS: Solution[] = [
  {
    id: "distribution",
    title: "Biologics Distribution",
    description:
      "Ridge operates a structured distribution model connecting provider practices with established regenerative biologics manufacturers. Our distribution process emphasizes documentation integrity, temperature-monitored logistics, and traceable chain-of-custody records.",
    bullets: [
      "Temperature-monitored cold-chain logistics",
      "Chain-of-custody documentation support",
      "Manufacturer verification and alignment",
      "Inventory coordination for practice needs",
    ],
    icon: "📦",
  },
  {
    id: "compliance",
    title: "Compliance Infrastructure",
    description:
      "Navigating the regulatory environment around regenerative biologics requires ongoing attention. Ridge provides documentation frameworks, compliance-conscious processes, and education resources designed to help practices operate with confidence.",
    bullets: [
      "Documentation framework development",
      "Regulatory-aligned internal processes",
      "Compliance review support materials",
      "Practice-level guidance resources",
    ],
    icon: "🛡️",
  },
  {
    id: "onboarding",
    title: "Provider Onboarding",
    description:
      "Introducing regenerative biologics into a clinical practice requires preparation. Ridge's structured onboarding process prepares practices operationally and educationally before any product is introduced.",
    bullets: [
      "Step-by-step onboarding workflow",
      "Documentation checklist support",
      "Initial compliance orientation",
      "Ongoing relationship support post-launch",
    ],
    icon: "🚀",
  },
  {
    id: "education",
    title: "Clinical Education & Training",
    description:
      "Our education programs are designed to help provider teams understand the regenerative biologics landscape — including product sourcing, handling standards, patient communication, and documentation practices.",
    bullets: [
      "Provider and staff training programs",
      "Biologics sourcing and handling education",
      "Patient communication guidelines",
      "Continuing education resources",
    ],
    icon: "🎓",
  },
  {
    id: "rep-support",
    title: "Representative Field Support",
    description:
      "Ridge's field representatives serve as operational and educational liaisons to provider practices. Each rep is trained to support documentation, compliance awareness, and practice-level operational needs.",
    bullets: [
      "Dedicated field representative assignment",
      "On-site operational support visits",
      "Documentation and process review",
      "Ongoing education reinforcement",
    ],
    icon: "🤝",
  },
  {
    id: "manufacturer",
    title: "Manufacturer Alignment",
    description:
      "Ridge maintains relationships with established biologics manufacturers. Our partner alignment process evaluates manufacturing standards, regulatory positioning, and documentation practices before any product enters our distribution network.",
    bullets: [
      "Manufacturer vetting and alignment process",
      "Standards documentation review",
      "Ongoing manufacturer relationship management",
      "Product information and education support",
    ],
    icon: "🏭",
  },
];

// ─── Provider Onboarding Steps ────────────────────────────────────────────────

export const ONBOARDING_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "A Ridge representative conducts a discovery call to understand your practice model, current biologics experience, and operational readiness.",
  },
  {
    step: 2,
    title: "Compliance Orientation",
    description:
      "Providers receive a structured compliance orientation covering regulatory environment awareness, documentation expectations, and operational standards.",
  },
  {
    step: 3,
    title: "Documentation Framework",
    description:
      "Ridge provides a documentation support framework tailored to your practice. This includes intake records, consent considerations, and chain-of-custody templates.",
  },
  {
    step: 4,
    title: "Team Training",
    description:
      "Your clinical and administrative team completes Ridge's foundational training program covering biologics handling, documentation, and patient communication.",
  },
  {
    step: 5,
    title: "Distribution Setup",
    description:
      "Logistics and distribution parameters are established, including storage standards, ordering protocols, and chain-of-custody record maintenance.",
  },
  {
    step: 6,
    title: "Ongoing Support",
    description:
      "A dedicated Ridge representative provides continued field support, compliance check-ins, and access to updated education resources.",
  },
];

// ─── Training Modules ─────────────────────────────────────────────────────────

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: "tm-001",
    title: "Regenerative Biologics Fundamentals",
    description:
      "An orientation to the regenerative biologics landscape, including product categories, sourcing considerations, and the regulatory environment.",
    duration: "2–3 hours",
    audience: "All provider staff",
  },
  {
    id: "tm-002",
    title: "Compliance & Documentation Standards",
    description:
      "A focused review of documentation practices, chain-of-custody concepts, and the compliance frameworks relevant to biologics integration.",
    duration: "3–4 hours",
    audience: "Clinical leads & administrators",
  },
  {
    id: "tm-003",
    title: "Patient Communication & Informed Consent",
    description:
      "Guidance on communicating with patients about regenerative biologics — including what providers can and should say, and how to support informed decision-making.",
    duration: "1–2 hours",
    audience: "Provider-facing staff",
  },
  {
    id: "tm-004",
    title: "Handling, Storage & Chain-of-Custody",
    description:
      "Operational training on biologics receipt, storage, temperature monitoring, and the documentation practices that support defensible chain-of-custody records.",
    duration: "2 hours",
    audience: "Clinical & logistics staff",
  },
  {
    id: "tm-005",
    title: "Practice Integration & Operational Workflow",
    description:
      "Step-by-step guidance on integrating biologics distribution into existing practice workflows — including scheduling, intake, documentation, and billing coordination.",
    duration: "2–3 hours",
    audience: "Practice managers & administrators",
  },
];

// ─── Leadership ────────────────────────────────────────────────────────────────

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "l-001",
    name: "Executive Leadership",
    title: "Chief Executive Officer",
    bio: "Providing strategic direction across Ridge's national distribution platform, compliance infrastructure, and provider relationships.",
  },
  {
    id: "l-002",
    name: "Compliance & Operations",
    title: "Director of Compliance & Operations",
    bio: "Overseeing Ridge's documentation standards, chain-of-custody protocols, and operational compliance frameworks across all provider partnerships.",
  },
  {
    id: "l-003",
    name: "Provider Relations",
    title: "Director of Provider Relations",
    bio: "Managing Ridge's provider onboarding experience, field representative network, and ongoing clinical education programs.",
  },
  {
    id: "l-004",
    name: "Manufacturer Partnerships",
    title: "Director of Manufacturer Alignment",
    bio: "Leading Ridge's manufacturer vetting processes, distribution relationships, and product standards oversight.",
  },
];

// ─── Career Roles ─────────────────────────────────────────────────────────────

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "c-001",
    title: "Regional Field Representative",
    department: "Provider Relations",
    location: "Multiple Regions",
    type: "Full-Time",
  },
  {
    id: "c-002",
    title: "Compliance Documentation Specialist",
    department: "Compliance & Operations",
    location: "Remote / Hybrid",
    type: "Full-Time",
  },
  {
    id: "c-003",
    title: "Provider Onboarding Coordinator",
    department: "Provider Relations",
    location: "Remote",
    type: "Full-Time",
  },
  {
    id: "c-004",
    title: "Clinical Education Specialist",
    department: "Training & Education",
    location: "Remote / Field",
    type: "Full-Time",
  },
  {
    id: "c-005",
    title: "Distribution Operations Associate",
    department: "Operations & Logistics",
    location: "Varies by Region",
    type: "Full-Time",
  },
];

// ─── Compliance FAQs ──────────────────────────────────────────────────────────

export const COMPLIANCE_FAQS: FAQItem[] = [
  {
    question: "What is Ridge Biologics' approach to compliance?",
    answer:
      "Ridge operates with a compliance-conscious framework embedded into every layer of our model — from manufacturer vetting to provider onboarding to ongoing field support. We prioritize documentation integrity, regulatory awareness, and education at every touchpoint.",
  },
  {
    question: "How does Ridge support documentation at the practice level?",
    answer:
      "We provide documentation frameworks that help practices maintain consistent, organized records related to biologics receipt, storage, patient intake, and chain-of-custody. These frameworks are designed to help practices operate in a defensible, standards-aligned manner.",
  },
  {
    question: "Does Ridge make claims about clinical outcomes?",
    answer:
      "No. Ridge does not make efficacy claims about biologics products. Our role is distribution, education, and operational support. We provide information resources, but clinical decisions remain the responsibility of licensed providers.",
  },
  {
    question: "How does Ridge evaluate its manufacturer partners?",
    answer:
      "Ridge conducts a structured vetting process that includes review of manufacturing standards documentation, regulatory positioning, and compliance posture before any manufacturer enters our distribution network.",
  },
  {
    question: "What is chain-of-custody and why does Ridge emphasize it?",
    answer:
      "Chain-of-custody refers to the documented chronological record of product handling from manufacturer to point of use. Ridge treats this as a core operational discipline — not an afterthought — and builds documentation processes to support it at every stage.",
  },
];

// ─── Value Props (homepage card section) ─────────────────────────────────────

export const VALUE_PROPS = [
  {
    title: "Compliance Infrastructure",
    description:
      "Documentation frameworks, chain-of-custody protocols, and regulatory-aligned processes built into every layer of our model.",
    href: "/compliance",
  },
  {
    title: "Biologics Distribution",
    description:
      "Structured distribution with temperature-monitored logistics, manufacturer verification, and traceable documentation support.",
    href: "/solutions#distribution",
  },
  {
    title: "Provider Onboarding",
    description:
      "A step-by-step onboarding process that prepares practices operationally and educationally before any product introduction.",
    href: "/provider-onboarding",
  },
  {
    title: "Training & Education",
    description:
      "Education programs covering biologics fundamentals, compliance standards, handling protocols, and patient communication.",
    href: "/training",
  },
  {
    title: "Field Representative Support",
    description:
      "Dedicated field representatives serving as operational and compliance liaisons to your practice on an ongoing basis.",
    href: "/solutions#rep-support",
  },
  {
    title: "Manufacturer Alignment",
    description:
      "Rigorous manufacturer vetting ensures every product in our network meets Ridge's documentation and standards criteria.",
    href: "/solutions#manufacturer",
  },
];
