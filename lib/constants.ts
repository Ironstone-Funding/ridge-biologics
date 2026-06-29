import type {
  NavItem, TrustPillar, FAQItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Our Approach",             href: "/services" },
  { label: "Products & Manufacturers", href: "/products" },
  { label: "Contact",                  href: "/contact" },
  { label: "Resources",               href: "/faq" },
  { label: "Careers",                  href: "/careers" },
];

export const COMPANY = {
  name:          "Ridge Biologics",
  tagline:       "Your Trusted Biologics Partner",
  sub:           "The Compliant Way to Offer Regenerative Therapies.",
  description:   "Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor — supplying licensed healthcare providers with FDA-cleared wound care products and point-of-care device systems through a fully compliant distribution model.",
  email:         "info@ridgebiologics.com",
  phone:         "(801) 215-9175",
  phoneTel:      "18012159175",
  address:       "7533 S Center View Ct, Ste R",
  city:          "West Jordan, UT 84084",
  states:        "Utah and Florida (expanding nationwide)",
  cta_primary:   "Request Products",
  cta_secondary: "Explore Approach",
};

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export const TRUST_PILLARS: TrustPillar[] = [
  { label: "Utah & Florida Licensed — Expanding Nationwide", icon: "shield" },
  { label: "FDA-Cleared 510(k) Products",                    icon: "file" },
  { label: "Audit-Ready Documentation",                      icon: "link" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: "collagen",
    title: "Collagen Products",
    description:
      "Bovine-derived collagen wound dressings in sheet, particle, gel, and powder formats. FDA-cleared Class II medical devices. Ambient/room temperature storage.",
    classification: "FDA-Cleared Class II Device",
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
      "Utah DOPL Class C licensed distributor. Every product and process is aligned with 21 CFR Part 820 (Quality System Regulation), FDA device distribution requirements, and state-specific regulations.",
    icon: "shield",
  },
  {
    title: "Documentation & Traceability",
    description:
      "Complete product documentation from manufacturer to provider — 510(k) clearance records, lot traceability, and device history records included with every order.",
    icon: "snowflake",
  },
  {
    title: "GMP-Manufactured Products",
    description:
      "We source exclusively from FDA-registered manufacturers of 510(k)-cleared Class II devices. Every lot comes with full manufacturing documentation and certificate of conformance.",
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
    title: "FDA-Cleared Device Products",
    description:
      "Ridge curates manufacturer relationships across wound care devices and point-of-care systems, including bovine collagen wound dressings and EmCyte PRP/BMC kits for wound care, orthopedics, pain management, and aesthetics. Selection criteria: manufacturer compliance, product pedigree, clinical suitability.",
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
      "We help your practice understand and maintain compliance with DOPL requirements, FDA 21 CFR Part 820, and state-specific regulations in Utah and Florida — including proper device labeling, lot documentation, and audit-ready recordkeeping.",
  },
  {
    id: "coldchain",
    icon: "snowflake",
    title: "Storage & Handling Guidance",
    description:
      "Proper storage is critical to product integrity. We advise on the right storage conditions for your product mix — from ambient room-temperature wound dressings to point-of-care device kits — and provide verified handling protocols from manufacturer to point of care.",
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
      "Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of FDA-cleared medical devices — supplying licensed healthcare providers with bovine collagen wound care products and point-of-care platelet concentration systems through a fully compliant distribution model. Currently serving Utah and Florida, with active expansion into additional states nationwide.",
  },
  {
    question: "How can clinics benefit from our services?",
    answer:
      "We provide turnkey onboarding that includes regulatory training, compliance-ready documentation, and tools to simplify patient intake, billing, and marketing. Our model helps clinics expand services quickly, ethically, and with minimal administrative burden.",
  },
  {
    question: "How long is the shelf life of your products?",
    answer:
      "Shelf life varies by product and is specified in each manufacturer's device labeling. Our team provides storage and handling guidance for every product we distribute.",
  },
  {
    question: "What products do you offer?",
    answer:
      "We distribute FDA-cleared Class II medical devices including bovine collagen wound dressings (sheets, particles, gel, and powder formats) and point-of-care platelet concentration systems (PRP and bone marrow concentrate). All products are 510(k) cleared and sourced from FDA-registered manufacturers.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Each product is accompanied by its 510(k) clearance documentation, certificate of conformance, and manufacturer lot records. We partner exclusively with FDA-registered manufacturers of cleared Class II devices, and maintain audit-ready records for every order.",
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
  { label: "FDA 510(k) Premarket Notification",        href: "https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k" },
  { label: "FDA Medical Device Quality System (21 CFR 820)", href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-820" },
  { label: "FDA Medical Device Classification Database", href: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm" },
  { label: "Utah DOPL Wholesale Distributor Licensing", href: "https://dopl.utah.gov/pharm/" },
];

export const COMPLIANCE_DISCLAIMER =
  "Ridge Biologics distributes FDA-cleared Class II medical devices, including bovine collagen-based wound care dressings and point-of-care platelet concentration systems, cleared through FDA's 510(k) premarket notification process and regulated under 21 CFR Part 820. We do not make claims for the treatment, cure, or prevention of any disease. All products are intended for use by qualified healthcare professionals in accordance with applicable device labeling and cleared indications only.";
