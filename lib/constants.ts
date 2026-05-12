import type { NavItem, PipelineCandidate, NewsItem, TechnologyPlatform, TeamMember, FinancialHighlight } from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Science",
    href: "/science",
    children: [
      { label: "Technology Platforms", href: "/science#platforms" },
      { label: "Research Areas", href: "/science#research" },
      { label: "Publications", href: "/science#publications" },
    ],
  },
  {
    label: "Pipeline",
    href: "/pipeline",
    children: [
      { label: "Clinical Pipeline", href: "/pipeline#clinical" },
      { label: "Preclinical Programs", href: "/pipeline#preclinical" },
    ],
  },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_META = {
  name: "Ridge Biologics",
  tagline: "Precision Biology. Transformative Medicine.",
  ticker: "RDGB",
  exchange: "NASDAQ",
  founded: "2014",
  hq: "San Diego, CA",
  employees: "580+",
  phone: "+1 (858) 555-0192",
  email: "info@ridgebiologics.com",
  address: "10755 Science Center Drive, Suite 300\nSan Diego, CA 92121",
};

// ─── Pipeline Data ────────────────────────────────────────────────────────────

export const PIPELINE_CANDIDATES: PipelineCandidate[] = [
  {
    id: "rb-001",
    name: "Ridlimab",
    genericName: "anti-IL-33 mAb",
    indication: "Moderate-to-Severe Atopic Dermatitis",
    therapeuticArea: "Immunology",
    phase: "Phase 3",
    mechanism: "IL-33 / ST2 Axis Blockade",
    status: "Active",
    lastUpdated: "2026-03-01",
  },
  {
    id: "rb-002",
    name: "RB-402",
    genericName: "bispecific T-cell engager",
    indication: "Relapsed/Refractory DLBCL",
    therapeuticArea: "Oncology",
    phase: "Phase 2",
    mechanism: "CD20 × CD3 Bispecific",
    status: "Active",
    lastUpdated: "2026-02-15",
  },
  {
    id: "rb-003",
    name: "RB-517",
    genericName: "CAR-T cell therapy",
    indication: "AML (Acute Myeloid Leukemia)",
    therapeuticArea: "Oncology",
    phase: "Phase 1",
    mechanism: "CD33-directed CAR-T",
    status: "Active",
    lastUpdated: "2026-01-20",
  },
  {
    id: "rb-004",
    name: "RB-214",
    genericName: "small molecule kinase inhibitor",
    indication: "Rett Syndrome",
    therapeuticArea: "Rare Disease",
    phase: "Phase 2",
    mechanism: "MECP2 pathway modulator",
    status: "Active",
    lastUpdated: "2026-03-10",
  },
  {
    id: "rb-005",
    name: "RB-891",
    genericName: "biologic enzyme replacement",
    indication: "Pompe Disease (Late-Onset)",
    therapeuticArea: "Rare Disease",
    phase: "Phase 3",
    mechanism: "Next-Gen GAA Replacement",
    status: "Active",
    lastUpdated: "2026-03-18",
  },
  {
    id: "rb-006",
    name: "RB-103",
    genericName: "anti-TDP-43 mAb",
    indication: "ALS / Frontotemporal Dementia",
    therapeuticArea: "Neurology",
    phase: "Phase 1",
    mechanism: "TDP-43 Aggregation Inhibition",
    status: "Active",
    lastUpdated: "2025-11-05",
  },
  {
    id: "rb-007",
    name: "RB-720",
    genericName: "mRNA-LNP therapeutic",
    indication: "Transthyretin Amyloidosis (ATTR)",
    therapeuticArea: "Cardiology",
    phase: "Preclinical",
    mechanism: "Hepatic TTR Silencing via mRNA",
    status: "Active",
    lastUpdated: "2026-01-08",
  },
];

// ─── News ─────────────────────────────────────────────────────────────────────

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n-001",
    title: "Ridge Biologics Reports Positive Phase 3 Data for Ridlimab in Atopic Dermatitis",
    excerpt:
      "Pivotal CLEAR-AD trial meets all primary and secondary endpoints at 52 weeks with a favorable safety profile.",
    date: "2026-04-08",
    category: "Press Release",
    href: "/news/ridlimab-phase3-results",
    featured: true,
  },
  {
    id: "n-002",
    title: "RB-402 Achieves 68% ORR in Phase 2 Interim Analysis for Relapsed DLBCL",
    excerpt:
      "Data presented at ASH 2026 reinforce best-in-class potential of the CD20 × CD3 bispecific program.",
    date: "2026-03-22",
    category: "Conference",
    href: "/news/rb402-interim-analysis",
    featured: false,
  },
  {
    id: "n-003",
    title: "Ridge Biologics Awarded NIH BARDA Grant for Next-Generation mRNA Platform",
    excerpt:
      "$42M grant will accelerate development of the Company's lipid nanoparticle delivery technology.",
    date: "2026-02-14",
    category: "Press Release",
    href: "/news/barda-grant-award",
    featured: false,
  },
  {
    id: "n-004",
    title: "Publication in Nature Medicine: Mechanism of Ridlimab in IL-33 Pathway Modulation",
    excerpt:
      "Peer-reviewed manuscript details the structural basis of Ridlimab's ultra-high IL-33 affinity.",
    date: "2026-01-30",
    category: "Publication",
    href: "/news/ridlimab-nature-medicine",
    featured: false,
  },
];

// ─── Technology Platforms ────────────────────────────────────────────────────

export const TECH_PLATFORMS: TechnologyPlatform[] = [
  {
    id: "tp-001",
    name: "RidgeMab™",
    tagline: "Next-Generation Antibody Engineering",
    description:
      "Proprietary antibody optimization platform delivering ultra-high affinity, extended half-life, and pH-dependent recycling for unparalleled clinical performance.",
    applications: ["Monoclonal Antibodies", "Bispecifics", "ADCs", "Half-life Extension"],
    icon: "🧬",
  },
  {
    id: "tp-002",
    name: "ClearCell™",
    tagline: "Precision Cell Therapy Architecture",
    description:
      "Armored CAR-T and NK-cell engineering framework integrating advanced co-stimulatory domains, logic-gated targeting, and off-the-shelf manufacturing compatibility.",
    applications: ["CAR-T", "CAR-NK", "Logic-Gated Targeting", "iPSC Derivation"],
    icon: "⚗️",
  },
  {
    id: "tp-003",
    name: "RidgeRNA™",
    tagline: "Therapeutic mRNA & LNP Delivery",
    description:
      "Modular mRNA design engine paired with organ-selective lipid nanoparticle formulations enabling efficient hepatic, pulmonary, and tumor delivery with minimal immunogenicity.",
    applications: ["Enzyme Replacement", "Gene Silencing", "Protein Replacement", "In vivo Editing"],
    icon: "💊",
  },
];

// ─── Leadership Team ──────────────────────────────────────────────────────────

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "tm-001",
    name: "Dr. Sarah Chen, Ph.D.",
    title: "Chief Executive Officer & Co-Founder",
    bio: "Former SVP at Genentech. Pioneer in structural immunology with 30+ peer-reviewed publications and 18 issued patents.",
  },
  {
    id: "tm-002",
    name: "James R. Merritt, M.D.",
    title: "Chief Medical Officer",
    bio: "Board-certified oncologist and translational medicine leader. Led clinical development programs that generated three FDA approvals.",
  },
  {
    id: "tm-003",
    name: "Dr. Anika Patel, Ph.D.",
    title: "Chief Scientific Officer",
    bio: "Structural biologist and antibody engineer. Founding scientist of the RidgeMab™ platform, ex-MIT Whitehead Fellow.",
  },
  {
    id: "tm-004",
    name: "Marcus D. Wells",
    title: "Chief Financial Officer",
    bio: "20+ years in healthcare investment banking and capital markets. Previously CFO at two NASDAQ-listed biotech companies.",
  },
];

// ─── Financial Highlights ────────────────────────────────────────────────────

export const FINANCIAL_HIGHLIGHTS: FinancialHighlight[] = [
  { label: "Cash & Equivalents", value: "$1.24B", change: "+$340M", positive: true },
  { label: "R&D Investment (FY2025)", value: "$487M", change: "+18% YoY", positive: true },
  { label: "Revenue (FY2025)", value: "$112M", change: "+64% YoY", positive: true },
  { label: "Market Capitalization", value: "$8.2B" },
];
