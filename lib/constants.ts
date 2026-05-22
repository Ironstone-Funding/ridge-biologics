import type {
  NavItem, TrustPillar, FAQItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Our Approach",          href: "/services" },
  { label: "Products & Manufacturers", href: "/products" },
  { label: "Connect",               href: "/contact" },
  { label: "Resources",             href: "/faq" },
];

export const COMPANY = {
  name:          "Ridge Biologics",
  tagline:       "Your Trusted Biologics Partner",
  sub:           "The Compliant Way to Offer Regenerative Therapies.",
  description:   "Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of regenerative medicine products — supplying licensed healthcare providers with MSCs, Extracellular Vesicles (EVs), PRP kits, and collagen-based biologics through an ethical, fully compliant drop-ship model.",
  email:         "info@ridgebiologics.com",
  phone:         "(801) 215-9175",
  phoneTel:      "18012159175",
  address:       "7533 S Center View Ct, Ste N",
  city:          "West Jordan, UT 84084",
  states:        "Utah and Florida (expanding nationwide)",
  cta_primary:   "Schedule Assessment",
  cta_secondary: "Explore Approach",
};

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export const TRUST_PILLARS: TrustPillar[] = [
  { label: "Utah & Florida Licensed — Expanding Nationwide", icon: "shield" },
  { label: "FDA-Registered Manufacturers",    icon: "file" },
  { label: "Verified Cold-Chain Logistics",   icon: "link" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: "msc",
    title: "MSC",
    description:
      "Human-derived MSCs from a GMP-certified, FDA-registered manufacturer. Cryogenically stored and shipped with full chain-of-custody documentation. For licensed providers only.",
    classification: "cGMP-Manufactured",
    storage: "Cryogenic −196°C",
    storageIcon: "snowflake",
    icon: "microscope",
  },
  {
    id: "collagen",
    title: "Collagen Products",
    description:
      "Human-derived collagen in multiple forms including injectable vials, sheets, and pads. Section 361 HCT/P classified, ethically sourced, and manufactured under GMP conditions.",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    storageIcon: "thermometer",
    icon: "vial",
  },
  {
    id: "prp",
    title: "EmCyte PRP, BMC & Sapphire Centrifuge",
    description:
      "FDA-cleared point-of-care systems for autologous PRP and bone marrow concentrate preparation. Includes PurePRP® SP and PureBMC® SP single-use kits, powered by the EmCyte Sapphire Series Centrifuge.",
    classification: "FDA-Cleared Device System",
    storage: "Ambient / Room Temp",
    storageIcon: "thermometer",
    icon: "droplet",
  },
];

// ─── The Ridge Difference ─────────────────────────────────────────────────────

export const RIDGE_DIFFERENCE = [
  {
    title: "Regulatory Compliance",
    description:
      "cGMP-manufactured biologics from FDA-registered facilities. Complete provenance documentation and donor eligibility records — standard.",
    icon: "shield",
  },
  {
    title: "Verified Cold Chain",
    description:
      "Ridge architects turnkey cold-chain implementation: verified storage protocols, carrier partnerships, and temperature-monitored delivery from manufacturer to point of care.",
    icon: "snowflake",
  },
  {
    title: "GMP-Manufactured Products",
    description:
      "Exclusive manufacturer partnerships meeting AATB standards and FDA registration requirements. Open documentation and audit readiness are prerequisites, not aspirations.",
    icon: "file",
  },
  {
    title: "Provider Training & Support",
    description:
      "Provider compliance orientation precedes product access. Non-negotiable.",
    icon: "users",
  },
];

// ─── Services Overview ─────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "distribution",
    icon: "package",
    title: "Regenerative Biologic Products",
    description:
      "Ridge curates manufacturer relationships across MSCs, extracellular vesicles, PRP systems, and collagen-based products for wound care, orthopedics, pain management, and aesthetics. Selection criteria: manufacturer compliance, product pedigree, clinical suitability.",
  },
  {
    id: "partnership",
    icon: "handshake",
    title: "Clinic Partnership & Support",
    description:
      "Ridge embeds as operational extension: dedicated territory management, practice-specific program architecture, and ongoing strategic guidance. Long-term partnership model.",
  },
  {
    id: "education",
    icon: "book-open",
    title: "Provider Education & Training",
    description:
      "Clinical education for new implementations and program expansion. Covers territory-specific compliance, patient communication protocols, and product handling standards.",
  },
  {
    id: "compliance",
    icon: "shield",
    title: "Compliance & Regulatory Guidance",
    description:
      "We help your practice understand and maintain compliance with DOPL requirements, FDA 21 CFR Part 1271, and state-specific regulations in Utah and Florida — including proper product labeling, pedigree documentation, and audit-ready recordkeeping.",
  },
  {
    id: "coldchain",
    icon: "snowflake",
    title: "Cold-Chain Storage & Handling",
    description:
      "Proper temperature control is critical to product viability. We advise on the right storage equipment for your product mix — whether standard refrigeration, ultra-low −80°C, or cryogenic systems — and provide verified handling protocols from manufacturer to point of care.",
  },
  {
    id: "service",
    icon: "star",
    title: "White-Glove Client Service",
    description:
      "Dedicated territory representation, responsive account management, and clinical support infrastructure. Ridge partners don't call a call center — they call their rep.",
  },
];

// ─── Onboarding Steps ─────────────────────────────────────────────────────────

export const ONBOARDING_STEPS = [
  {
    step: 1,
    title: "Credential Verification",
    description:
      "Submit practice documentation through our secure provider portal.",
  },
  {
    step: 2,
    title: "Compliance Assessment",
    description:
      "Ridge evaluates practice infrastructure and regulatory readiness.",
  },
  {
    step: 3,
    title: "Solution Architecture",
    description:
      "Collaborative design of product portfolio and integration protocols.",
  },
  {
    step: 4,
    title: "Implementation",
    description:
      "Product delivery, clinical training, and compliance documentation — coordinated.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQS: FAQItem[] = [
  {
    question: "What is Ridge Biologics?",
    answer:
      "Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of regenerative medicine products. Our mission is to expand licensed healthcare provider access to high-quality biological therapies — including MSC, Extracellular Vesicles (EVs), PRP kits, and collagen-based products — through an ethical, fully compliant virtual drop-ship distribution model. Currently serving Utah and Florida, with active expansion into additional states nationwide.",
  },
  {
    question: "How can clinics benefit from our services?",
    answer:
      "We provide turnkey onboarding that includes regulatory training, compliance-ready documentation, and tools to simplify patient intake, billing, and marketing. Our model helps clinics expand services quickly, ethically, and with minimal administrative burden.",
  },
  {
    question: "How long is the shelf life of your products?",
    answer:
      "Most of our allografts maintain viability for up to five years when stored at recommended temperatures. Detailed storage guidelines are provided with each shipment.",
  },
  {
    question: "What products do you offer?",
    answer:
      "We provide both 361 HCT/P allografts and 351 advanced biologic products, each designed to support tissue repair, reduce inflammation, and enhance recovery outcomes. Every product is FDA-regulated, U.S.-sourced, and backed by the compliance, documentation, and training your clinic needs to implement regenerative therapy confidently.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Each product is accompanied by a full chain-of-custody record and donor eligibility documentation. We partner only with manufacturers who meet or exceed AATB, FDA, and cGMP standards, and all shipments are monitored to maintain verified cold-chain integrity from lab to clinic.",
  },
  {
    question: "How do I determine if products are reimbursable?",
    answer:
      "Coverage and reimbursement are payer-specific and depend on the patient's individual insurance plan, clinical indication, medical necessity determination, and applicable coverage policies. Ridge Biologics is a distributor and does not make representations regarding insurance coverage or reimbursement. Healthcare providers are responsible for verifying coverage with the patient's payer, obtaining any required prior authorizations, and complying with all applicable billing and coding requirements. Providers should consult with their billing specialists and review payer-specific Local Coverage Determinations (LCDs) and coverage policies.",
  },
  {
    question: "Do you provide training or support?",
    answer:
      "Yes. We offer virtual training as well as on-site training through our sales representatives. Your staff will receive guidance on product handling, proper storage requirements, documentation, and compliance from day one.",
  },
  {
    question: "What types of clinics do you work with?",
    answer:
      "We partner with wound care, orthopedic, podiatry, pain management, and functional medicine clinics, as well as mobile healthcare practices. Our team tailors each onboarding plan to fit your specific workflow and patient base.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can submit a request through our Services page or contact us directly. Once verified as a licensed healthcare provider, you will receive access to our provider portal where you can browse products and place orders.",
  },
];

// ─── External Resources ───────────────────────────────────────────────────────

export const EXTERNAL_RESOURCES = [
  { label: "FDA HCT/P Overview",                    href: "https://www.fda.gov/vaccines-blood-biologics/tissue-tissue-products" },
  { label: "FDA 21 CFR Part 1271",                  href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-L/part-1271" },
  { label: "AATB — American Association of Tissue Banks", href: "https://www.aatb.org" },
  { label: "FDA Cell & Gene Therapy Guidances",     href: "https://www.fda.gov/vaccines-blood-biologics/biologics-guidances/cellular-gene-therapy-guidances" },
];

export const COMPLIANCE_DISCLAIMER =
  "Ridge Biologics distributes FDA-registered human cellular and tissue-based products (HCT/Ps), including Section 361 minimally manipulated, homologous-use allografts regulated under 21 CFR Part 1271, as well as advanced biologic products manufactured in GMP-compliant facilities. We do not make claims for the treatment, cure, or prevention of any disease. All products are intended for use by qualified healthcare professionals in accordance with applicable regulations and labeling.";
