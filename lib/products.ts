export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categoryColor: string;
  classification: string;
  storage: string;
  company: string;
  companyUrl: string;
  image: string | null;
  description: string;
  overview: string;
  features: string[];
  indications: string;
  mechanismOfAction: string;
  sizes?: string;
  comingSoon: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "skintemp-ii",
    name: "SkinTemp® II",
    tagline: "Breathable collagen sheet dressing for superior wound management.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/skintemp-ii.png",
    description: "A breathable collagen sheet dressing that supports all stages of wound healing with superior stability and fluid control.",
    overview:
      "SkinTemp® II is a collagen wound dressing in sheet format manufactured from 100% non-hydrolyzed Type I bovine native collagen. Using proprietary Kollagen™ technology, it preserves the native triple-helical protein structure for enhanced stability. The breathable sheet format provides superior fluid control while maintaining a moist wound environment. Product characteristics and clinical performance data are described in manufacturer documentation.",
    features: [
      "Breathable sheet format for superior fluid management",
      "100% non-hydrolyzed Type I bovine native collagen",
      "Proprietary Kollagen™ technology preserves triple-helical structure",
      "Supports all four phases of wound healing",
      "Superior molecular stability throughout the healing process",
    ],
    indications: "Burns, blisters, ulcers, scrapes, and other wounds. Contraindicated in patients with known bovine sensitivities, third-degree burns, or active vasculitis. Single-patient use only.",
    mechanismOfAction:
      "SkinTemp® II is a collagen-based wound dressing classified as a Section 361 HCT/P. The product provides a structural matrix for wound management. Product characteristics and performance data are described in manufacturer documentation. Ridge Biologics does not make claims regarding healing rates, wound closure outcomes, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    sizes: "2\"×2\" · 3\"×4\" · 7\"×7\" · 8\"×12\"",
    comingSoon: false,
  },
  {
    id: "medifil-ii",
    name: "Medifil® II",
    tagline: "High-surface-area collagen particles for deep wound penetration.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/medifil-ii.png",
    description: "100% non-hydrolyzed Type I bovine native collagen in particle form for maximum wound bed coverage and healing support.",
    overview:
      "Medifil® II is a wound care dressing composed of 100% non-hydrolyzed Type I bovine native collagen in particle form. The proprietary Kollagen™ technology preserves the native triple-helical protein structure, providing enhanced stability throughout the healing process. High surface area particles penetrate wounds deeply, delivering maximum collagen concentration directly to the wound surface across all four phases of wound healing.",
    features: [
      "Particle form for deep wound bed penetration",
      "100% native, non-hydrolyzed Type I bovine collagen",
      "High surface area maximizes collagen delivery",
      "Supports all four phases of wound healing",
      "Line wound bed up to 1/4 inch depth for optimal coverage",
    ],
    indications: "Burns, sores, blisters, ulcers, scrapes, and other wounds. Contraindicated in patients with known bovine sensitivities, third-degree burns, or active vasculitis. Single-patient use only.",
    mechanismOfAction:
      "Medifil® II is a collagen-based wound dressing classified as a Section 361 HCT/P. The particle format provides direct contact between the collagen matrix and the wound bed surface. Product characteristics and performance data are described in manufacturer documentation. Ridge Biologics does not make claims regarding cellular activity, collagen synthesis, healing rates, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    sizes: "1g vial · 1g pouch",
    comingSoon: false,
  },
  {
    id: "collatek-gel",
    name: "Collatek® Gel",
    tagline: "Sterile collagen gel maintaining optimal moist wound environment.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/collatek-gel.png",
    description: "100% native, non-hydrolyzed Type I bovine collagen in viscous gel form for partial and full-thickness wounds.",
    overview:
      "Collatek® Gel is a sterile wound dressing made from 100% native, non-hydrolyzed Type I bovine hide collagen in a viscous gel formulation. It delivers moisture directly to wounds while providing the biological benefits of native collagen. Collatek® Gel can be combined with Medifil® II particles for hard-to-reach wound cavities, making it a versatile component of a comprehensive wound care protocol.",
    features: [
      "Viscous gel format for easy application to any wound shape",
      "Maintains optimal moist wound environment",
      "Combinable with Medifil® II for tunnel and cavity wounds",
      "100% native, non-hydrolyzed Type I bovine hide collagen",
      "Indicated for both partial and full-thickness wounds",
    ],
    indications: "Dry, light, and moderately exudating partial and full-thickness wounds, including first and second-degree burns, severe sunburns, superficial injuries, cuts, abrasions, and surgical wounds. Contraindicated in patients with known bovine sensitivities, third-degree burns, or active vasculitis. Single-patient use only.",
    mechanismOfAction:
      "Collatek® Gel is a collagen-based wound dressing classified as a Section 361 HCT/P. The viscous gel format delivers collagen directly to the wound surface and maintains a moist wound environment as described in manufacturer labeling. Product characteristics and performance data are described in manufacturer documentation. Ridge Biologics does not make claims regarding fibroblast activity, cellular signaling, healing rates, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    sizes: "1 oz tube",
    comingSoon: false,
  },
  {
    id: "collecule-powder",
    name: "ColleCule LpH® Surgical Collagen Powder",
    tagline: "Low-pH collagen powder absorbing up to 30× its weight.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Below 32°C / 90°F",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/collecule-powder.png",
    description: "Sterile non-hydrolyzed Type I bovine collagen powder with low pH (5.0–5.5) formulation for advanced wound healing.",
    overview:
      "ColleCule LpH® Surgical Collagen Powder is a sterile, non-hydrolyzed Type I bovine collagen powder with a proprietary low-pH (5.0–5.5) formulation. The powder absorbs up to 30 times its weight in exudate, forming a conforming collagen matrix that adapts to wound contours. Product characteristics and performance data are described in manufacturer documentation. Clinical use is at the discretion of the treating provider and should follow manufacturer labeling.",
    features: [
      "Low pH 5.0–5.5 formulation",
      "Absorbs up to 30× its weight in wound exudate",
      "High-absorbency matrix for exudate management",
      "Non-hydrolyzed Type I bovine collagen in powder form",
      "Store below 32°C / 90°F — single use only",
    ],
    indications: "Partial and full-thickness wounds, pressure ulcers (Stage I–IV), venous ulcers, ulcers caused by mixed vascular etiologies, venous stasis and diabetic ulcers, 1st and 2nd degree burns, cuts, abrasions, and surgical wounds. Do not use in patients with bovine sensitivities or previous skin reactions to hydrocolloid products. Single use only.",
    mechanismOfAction:
      "ColleCule LpH® Surgical Collagen Powder is a collagen-based wound dressing classified as a Section 361 HCT/P. The product is formulated with a low-pH (5.0–5.5) collagen matrix with high exudate-absorbing capacity. Product characteristics and performance data are described in manufacturer documentation. Ridge Biologics does not make claims regarding protease inhibition, oxygenation effects, fibroblast activity, healing rates, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    sizes: "0.5G · 1G",
    comingSoon: false,
  },
  {
    id: "collecule-pad",
    name: "ColleCule LpH® Pad",
    tagline: "Conformable low-pH collagen pad for exudate management and debridement.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Cool, dry place 10–27°C / 50–80°F",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/collecule-pad.png",
    description: "Low pH collagen pad dressing in a conformable format for wound management.",
    overview:
      "ColleCule LpH® Pad brings the low-pH collagen formulation of the powder series into a convenient, conformable pad format. The dressing is designed to manage wound exudate and maintain the wound environment as described in manufacturer documentation. Its pad format simplifies application and is suited for a range of wound types. Product characteristics are described in manufacturer labeling; clinical use is at the discretion of the treating provider.",
    features: [
      "Low-pH collagen matrix in conformable pad format",
      "Suitable for burns, sores, blisters, scrapes, and ulcers",
      "Moist wound environment as described in manufacturer labeling",
      "Consistent coverage across wound beds",
      "Store in cool, dry place 10–27°C / 50–80°F — single use only",
    ],
    indications: "Burns, sores, blisters, scrapes, ulcers, and other wounds. Do not use in patients with bovine sensitivities. Single use only. Discard all open or unused pouches.",
    mechanismOfAction:
      "ColleCule LpH® Pad is a collagen-based wound dressing classified as a Section 361 HCT/P. The pad format delivers the same low-pH collagen formulation as the powder in a conformable sheet, providing exudate management across broad wound surfaces as described in manufacturer documentation. Ridge Biologics does not make claims regarding protease activity, fibroblast proliferation, oxygenation effects, healing rates, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    comingSoon: false,
  },
  {
    id: "emcyte-prp",
    name: "EmCyte PurePRP® SP",
    tagline: "≥80% platelet yield. Under 10 minutes. Closed-system precision.",
    category: "PRP",
    categoryColor: "#1a6b8a",
    classification: "FDA-Cleared Device System",
    storage: "Ambient / Room Temp",
    company: "EmCyte Corporation",
    companyUrl: "https://www.emcyte.com",
    image: "/images/products/emcyte-prp.webp",
    description: "EmCyte's closed-system PurePRP® SupraPhysiologic processing kit for in-office platelet-rich plasma preparation.",
    overview:
      "The EmCyte PurePRP® SupraPhysiologic system is a proprietary closed-system platelet concentrating platform engineered to deliver the highest concentrations of deliverable platelets at the point of care. The double-spin technique achieves ≥80% platelet yield with >99% red blood cell removal in under 10 minutes. Requires the Sapphire Centrifuge (sold separately).",
    features: [
      "≥80% platelet yield with double-spin technique",
      "Under 10-minute preparation time",
      ">99% red blood cell removal",
      "Closed-system design for sterility and consistency",
      "Compatible with the Sapphire Centrifuge",
      "Customizable neutrophil-rich or neutrophil-poor formulations",
      "Available in 30mL, 60mL, and 120mL configurations",
    ],
    indications: "FDA-cleared for preparation of autologous platelet-rich plasma (PRP) and platelet-rich fibrin matrix (PRFM) from an autologous blood specimen, for application to soft-tissue wounds and injured bone. Single-use. Not made with natural rubber latex.",
    mechanismOfAction:
      "The PurePRP® SP system uses a double-spin centrifugation technique with proprietary chamber technology to achieve selective concentration of platelets. The closed-system design minimizes contamination risk and ensures reproducible processing parameters. Clinical applications and protocols are determined by the treating physician based on their clinical judgment, training, and within the scope of their practice. Specific FDA-cleared indications and device labeling should be referenced for all clinical use. Ridge Biologics does not make claims regarding clinical outcomes, therapeutic mechanisms, or comparative effectiveness.",
    comingSoon: false,
  },
  {
    id: "sapphire-centrifuge",
    name: "EmCyte Sapphire Series Centrifuge",
    tagline: "One device. PRP, BMC, and adipose concentrate — all at the point of care.",
    category: "PRP",
    categoryColor: "#1a6b8a",
    classification: "FDA-Cleared Device",
    storage: "Ambient / Room Temp",
    company: "EmCyte Corporation",
    companyUrl: "https://www.emcyte.com/sapphire-centrifuge/",
    image: "/images/products/sapphire-centrifuge.png",
    description: "EmCyte's all-in-one touchscreen centrifuge — the required processing unit for PurePRP® SP, PureBMC® SP, and adipose concentrate preparation.",
    overview:
      "The Sapphire Series Centrifuge is EmCyte's revolutionary all-in-one point-of-care processing platform. Weighing just 31 lbs, it is exceptionally portable and handles PRP, bone marrow concentrate (BMC), and adipose concentrate from a single device. A user-friendly touchscreen comes pre-programmed with optimized settings for all EmCyte biologics, minimizing user input and reducing the risk of error. The Open Settings feature allows clinicians to customize processing parameters beyond standard presets for tailored clinical protocols. The Sapphire is the required centrifuge for all EmCyte PurePRP® SP and PureBMC® SP processing kits.",
    features: [
      "Processes PRP, BMC, and adipose concentrate from one device",
      "31-lb portable design — easily transported between rooms or locations",
      "Touchscreen pre-programmed with optimized EmCyte biologic protocols",
      "Open Settings for customized processing parameters",
      "Automation minimizes user error and ensures consistent outputs",
      "Compatible with all EmCyte PurePRP® SP and PureBMC® SP kits",
    ],
    indications: "Capital equipment for point-of-care autologous biologic preparation. Required processing unit for EmCyte PurePRP® SP and PureBMC® SP single-use kits. For use by licensed healthcare providers only.",
    mechanismOfAction:
      "The Sapphire Series Centrifuge delivers programmable centrifugal force profiles optimized for each EmCyte closed-system kit. Pre-set protocols are tailored to each biologic type; the Open Settings feature allows further customization. All clinical protocols and applications are determined by the treating physician within their scope of practice. Ridge Biologics does not make claims regarding clinical outcomes or comparative effectiveness.",
    comingSoon: false,
  },
  {
    id: "emcyte-bmc",
    name: "EmCyte PureBMC® SP",
    tagline: "Point-of-care bone marrow concentrate. Closed-system. Under 10 minutes.",
    category: "PRP",
    categoryColor: "#1a6b8a",
    classification: "FDA-Cleared Device System",
    storage: "Ambient / Room Temp",
    company: "EmCyte Corporation",
    companyUrl: "https://www.emcyte.com",
    image: "/images/products/emcyte-bmc.png",
    description: "EmCyte's closed-system PureBMC® SupraPhysiologic kit for rapid in-office preparation of autologous bone marrow aspirate concentrate (BMAC).",
    overview:
      "The EmCyte PureBMC® SupraPhysiologic system is an advanced bone marrow concentrating device designed for point-of-care preparation of autologous BMAC. Using a double-spin closed-system process, the kit enables rapid preparation in under 10 minutes while minimizing red blood cell contamination and free hemoglobin levels. Side-port fenestrated needles reduce RBC contamination during aspiration, and proprietary macro-filtration removes clots, bone fragments, and fibrous tissue prior to concentration.",
    features: [
      "Double-spin technology for superior concentrate preparation",
      "Under 10-minute point-of-care preparation",
      "Closed-system design maintains sterility throughout processing",
      "Side-port fenestrated needles minimize RBC contamination",
      "Macro-filtration removes clots, bone fragments, and fibrous tissue",
      "Precision control over final BMC volume",
      "Available in 30mL, 60mL, and 120mL configurations",
    ],
    indications: "FDA-cleared for rapid preparation of autologous bone marrow aspirate concentrate (BMAC) from bone marrow aspirate at the point of care. Single-use kit. Not made with natural rubber latex. 510(k) cleared (K024080).",
    mechanismOfAction:
      "The PureBMC® SP system processes bone marrow aspirate through a proprietary double-spin centrifugation protocol to concentrate target cell populations. The closed-system design minimizes contamination risk throughout processing. Clinical applications and protocols are determined by the treating physician based on their clinical judgment, training, and within the scope of their practice. Specific FDA-cleared indications and device labeling should be referenced for all clinical use. Ridge Biologics does not make claims regarding clinical outcomes, therapeutic mechanisms, or comparative effectiveness.",
    comingSoon: false,
  },
  {
    id: "msc",
    name: "MSC",
    tagline: "GMP-certified, cryogenically preserved — coming soon.",
    category: "MSC",
    categoryColor: "#5a4fcf",
    classification: "cGMP-Manufactured",
    storage: "Cryogenic −196°C",
    company: "GMP-Certified Manufacturer",
    companyUrl: "",
    image: null,
    description: "FDA-registered mesenchymal stromal cells shipped cryogenically with full chain-of-custody documentation. For licensed providers only.",
    overview:
      "Ridge Biologics is evaluating distribution options for Section 351 biologics from GMP-certified, FDA-registered manufacturers. Any Section 351 biologic products will be available only to licensed healthcare providers in strict compliance with FDA requirements, including manufacturer labeling and applicable regulatory guidance. Contact us to discuss regulatory requirements and provider eligibility.",
    features: [
      "FDA-registered, GMP-certified manufacturer",
      "Full chain-of-custody documentation",
      "Donor eligibility screening included",
      "Certificate of Analysis with every shipment",
      "Cryogenic −196°C storage and shipping",
    ],
    indications: "For licensed healthcare providers only. Contact Ridge Biologics for availability and provider eligibility requirements.",
    mechanismOfAction:
      "Section 351 biologics are regulated as drugs under FDA authority and require strict adherence to manufacturer labeling and applicable regulatory guidance. Ridge Biologics does not make claims regarding mechanisms of action, therapeutic effects, or clinical outcomes. All use must be under the direction of a licensed healthcare provider and in compliance with applicable FDA requirements.",
    comingSoon: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
