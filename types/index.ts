// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export interface TrustPillar {
  label: string;
  icon: string;
}

// ─── Solutions ────────────────────────────────────────────────────────────────

export interface Solution {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

// ─── Process Steps ────────────────────────────────────────────────────────────

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
}

// ─── Career ───────────────────────────────────────────────────────────────────

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

// ─── Training Module ──────────────────────────────────────────────────────────

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
}
