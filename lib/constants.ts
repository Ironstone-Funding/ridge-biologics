import type {
  NavItem, TrustPillar, FAQItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact",  href: "/contact" },
  { label: "FAQ",      href: "/faq" },
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
  states:        "Utah and Florida",
  cta_primary:   "Request Products",
  cta_secondary: "Learn More",
};

// ─── Trust Pillars ────────────────────────────────────────────────────────────

export const TRUST_PILLARS: TrustPillar[] = [
  { label: "Utah & Florida Licensed",         icon: "shield" },
  { label: "FDA-Registered Manufacturers",    icon: "file" },
  { label: "Verified Cold-Chain Logistics",   icon: "link" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    id: "msc",
    title: "Mesenchymal Stem Cells (MSC)",
    description:
      "Human-derived MSCs from a GMP-certified, FDA-registered manufacturer. Cryogenically stored and shipped with full chain-of-custody documentation. For licensed providers only.",
    classification: "Section 351 Biologic",
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
    storage: "Refrigerated 2–8°C",
    storageIcon: "thermometer",
    icon: "vial",
  },
  {
    id: "prp",
    title: "PRP Kits",
    description:
      "Point-of-care platelet-rich plasma kits for in-office use. FDA-cleared devices enabling providers to prepare autologous PRP quickly and consistently for a range of applications.",
    classification: "Point-of-Care Device Kit",
    storage: "Refrigerated 2–8°C",
    storageIcon: "thermometer",
    icon: "droplet",
  },
];

// ─── The Ridge Difference ─────────────────────────────────────────────────────

export const RIDGE_DIFFERENCE = [
  {
    title: "Regulatory Compliance",
    description:
      "Utah DOPL Class C licensed distributor. Every product and process is aligned with 21 CFR Part 1271, FDA guidance, and state distribution requirements.",
    icon: "shield",
  },
  {
    title: "Verified Cold Chain",
    description:
      "Temperature-controlled shipping from manufacturer to your door. MSCs shipped cryogenically; collagen and PRP kits shipped refrigerated with monitoring throughout transit.",
    icon: "snowflake",
  },
  {
    title: "GMP-Manufactured Products",
    description:
      "We source exclusively from FDA-registered, GMP-certified manufacturers. Every lot comes with full traceability documentation — donor screening, CoA, and chain of custody.",
    icon: "file",
  },
  {
    title: "Provider Training & Support",
    description:
      "Onboarding, storage guidance, product protocols, and ongoing support from your dedicated account rep. We're a partner in your practice — not just a supplier.",
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
      "We distribute a curated portfolio of biologics for wound care, orthopedics, pain management, and aesthetic practices — including MSCs, Extracellular Vesicles (EVs), PRP kits, and collagen-based products. Each product line is selected based on manufacturer compliance, product pedigree, and suitability for licensed provider use.",
  },
  {
    id: "partnership",
    icon: "handshake",
    title: "Clinic Partnership & Support",
    description:
      "We become an extension of your team — providing dedicated account support, practice-specific program planning, and ongoing guidance as your biologics offering grows. Our goal is a long-term partnership, not a one-time transaction.",
  },
  {
    id: "education",
    icon: "book-open",
    title: "Provider Education & Training",
    description:
      "Our education resources serve both practices new to biologics and those expanding existing programs. We cover state-specific compliance for Utah and Florida, proper patient communication protocols, and step-by-step product handling procedures.",
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
      "Dedicated, personalized support for ordering, inventory, clinical questions, and ongoing program development.",
  },
];

// ─── Onboarding Steps ─────────────────────────────────────────────────────────

export const ONBOARDING_STEPS = [
  {
    step: 1,
    title: "Register Online",
    description:
      "Visit our provider portal and create an account using your practice information. Account access is available to licensed healthcare providers only.",
  },
  {
    step: 2,
    title: "Verify Your Credentials",
    description:
      "Submit necessary documentation to verify your medical practice and eligibility for our products.",
  },
  {
    step: 3,
    title: "Browse Our Catalog",
    description:
      "Browse our catalog of FDA-regulated regenerative products including MSC biologics, PRP kits, and collagen-based products.",
  },
  {
    step: 4,
    title: "Place Your Order",
    description:
      "Select the products you need and submit your order. Products ship directly to your clinic via our licensed fulfillment partner with full cold-chain documentation.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQS: FAQItem[] = [
  {
    question: "What is Ridge Biologics?",
    answer:
      "Ridge Biologics is a Utah-licensed Class C Virtual Wholesale Distributor of regenerative medicine products. Our mission is to expand licensed healthcare provider access to high-quality biological therapies — including Mesenchymal Stem Cells (MSC), Extracellular Vesicles (EVs), PRP kits, and collagen-based products — through an ethical, fully compliant virtual drop-ship distribution model operating in Utah and Florida.",
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
  "Ridge Biologics provides FDA-registered human cellular and tissue-based products (HCT/Ps), including Section 361 minimally manipulated, homologous-use allografts regulated under 21 CFR Part 1271, as well as Section 351 advanced biologic products manufactured in FDA-licensed facilities under current Good Manufacturing Practice (cGMP) standards. We do not make claims for the treatment, cure, or prevention of any disease. All products are intended for use by qualified healthcare professionals in accordance with applicable regulations and labeling.";
