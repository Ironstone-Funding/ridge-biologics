// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Pipeline ────────────────────────────────────────────────────────────────

export type TrialPhase = "Preclinical" | "Phase 1" | "Phase 2" | "Phase 3" | "Approved";
export type TherapeuticArea = "Oncology" | "Immunology" | "Rare Disease" | "Neurology" | "Cardiology";

export interface PipelineCandidate {
  id: string;
  name: string;
  genericName: string;
  indication: string;
  therapeuticArea: TherapeuticArea;
  phase: TrialPhase;
  mechanism: string;
  status: "Active" | "On Hold" | "Approved" | "Discontinued";
  partnerCompany?: string;
  lastUpdated: string;
}

// ─── News & Press ─────────────────────────────────────────────────────────────

export type NewsCategory = "Press Release" | "Publication" | "Conference" | "Award";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: NewsCategory;
  href: string;
  featured?: boolean;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  linkedIn?: string;
}

// ─── Science ──────────────────────────────────────────────────────────────────

export interface TechnologyPlatform {
  id: string;
  name: string;
  tagline: string;
  description: string;
  applications: string[];
  icon: string;
}

// ─── Investors ────────────────────────────────────────────────────────────────

export interface FinancialHighlight {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

// ─── Shared ───────────────────────────────────────────────────────────────────

export interface MetaProps {
  title?: string;
  description?: string;
}
