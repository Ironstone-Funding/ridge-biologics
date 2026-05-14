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
    storage: "Refrigerated 2–8°C",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/skintemp-ii.png",
    description: "A breathable collagen sheet dressing that supports all stages of wound healing with superior stability and fluid control.",
    overview:
      "SkinTemp® II is a collagen wound dressing in sheet format manufactured from 100% non-hydrolyzed Type I bovine native collagen. Using proprietary Kollagen™ technology, it preserves the native triple-helical protein structure for enhanced stability throughout the healing process. The breathable sheet format provides superior fluid control while maintaining a moist wound environment optimal for tissue regeneration.",
    features: [
      "Breathable sheet format for superior fluid management",
      "100% non-hydrolyzed Type I bovine native collagen",
      "Proprietary Kollagen™ technology preserves triple-helical structure",
      "Supports all four phases of wound healing",
      "Superior molecular stability throughout the healing process",
    ],
    indications: "Partial and full-thickness wounds, arterial ulcers, venous leg ulcers, diabetic foot ulcers, pressure injuries (Stage 2–4), second-degree burns, donor sites, and surgical wound dehiscence.",
    mechanismOfAction:
      "SkinTemp® II is a collagen-based wound dressing classified as a Section 361 HCT/P. The product provides a structural matrix for wound management. Product characteristics and performance data are described in manufacturer documentation. Ridge Biologics does not make claims regarding healing rates, wound closure outcomes, or therapeutic effects. Clinical use should be based on healthcare provider judgment and in accordance with manufacturer labeling.",
    comingSoon: false,
  },
  {
    id: "medifil-ii",
    name: "Medifil® II",
    tagline: "High-surface-area collagen particles for deep wound penetration.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
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
    indications: "Burns, sores, blisters, scrapes, ulcers, and other partial to full-thickness wounds. Not indicated for third-degree (full-thickness) burns.",
    mechanismOfAction:
      "The high surface area of Medifil® II particles ensures maximum contact between the collagen and the wound bed. Native collagen acts as a scaffold for cellular ingrowth and stimulates fibroblast activity, promoting endogenous collagen synthesis. The particle format allows the dressing to conform to irregular wound geometries, delivering consistent collagen concentration across the entire wound surface.",
    comingSoon: false,
  },
  {
    id: "collatek-gel",
    name: "Collatek® Gel",
    tagline: "Sterile collagen gel maintaining optimal moist wound environment.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Refrigerated 2–8°C",
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
    indications: "Partial-thickness wounds: arterial ulcers, venous leg ulcers, diabetic foot ulcers, Stage 2 pressure injuries, blisters, second-degree burns. Full-thickness wounds: Stage 3–4 pressure injuries, arterial/venous ulcers, diabetic foot ulcers, donor sites, surgical wound dehiscence, traumatic wounds healing secondarily.",
    mechanismOfAction:
      "The gel formulation delivers native collagen directly to the wound bed while maintaining a continuously moist environment. Moisture promotes autolytic debridement and prevents wound desiccation, which can impair cellular migration. The collagen matrix supports fibroblast attachment and proliferation, while the gel vehicle provides a medium that distributes the biological signals of native collagen throughout the wound.",
    comingSoon: false,
  },
  {
    id: "collecule-powder",
    name: "ColleCule LpH® Surgical Collagen Powder",
    tagline: "Low-pH collagen powder absorbing up to 30× its weight.",
    category: "Collagen",
    categoryColor: "#38747e",
    classification: "Section 361 HCT/P",
    storage: "Ambient / Room Temp",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/collecule-powder.png",
    description: "Sterile non-hydrolyzed Type I bovine collagen powder with low pH (5.0–5.5) formulation for advanced wound healing.",
    overview:
      "ColleCule LpH® Surgical Collagen Powder is a sterile, non-hydrolyzed Type I bovine collagen powder engineered with a proprietary low-pH (5.0–5.5) formulation. Upon contact with wound exudate, the acidic environment encourages fibroblast growth, reduces protease activity, and improves oxygen delivery to damaged tissue through the Bohr effect. The powder absorbs up to 30 times its weight in exudate, forming a conforming collagen matrix that adapts to wound contours.",
    features: [
      "Low pH 5.0–5.5 creates healing microenvironment",
      "Absorbs up to 30× its weight in wound exudate",
      "Reduces matrix metalloproteinase (protease) activity",
      "Promotes fibroblast growth and tissue regeneration",
      "Improves oxygen delivery via Bohr effect",
    ],
    indications: "Partial and full-thickness wounds, pressure ulcers, venous ulcers, diabetic ulcers, burns, and surgical wounds requiring advanced exudate management.",
    mechanismOfAction:
      "The low-pH environment created by ColleCule LpH® works through multiple mechanisms: the acidic pH inhibits proteolytic enzymes (MMPs) that degrade the extracellular matrix and growth factors in chronic wounds; the Bohr effect improves hemoglobin oxygen release to hypoxic wound tissue; and the high-absorbency matrix manages excessive exudate while maintaining intimate contact with the wound bed to deliver collagen's regenerative signals.",
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
    storage: "Ambient / Room Temp",
    company: "Human BioSciences",
    companyUrl: "https://www.humanbiosciences.com",
    image: "/images/products/collecule-pad.png",
    description: "Low pH collagen pad dressing designed to manage exudate, support autolytic debridement, and accelerate tissue regeneration.",
    overview:
      "ColleCule LpH® Pad brings the advanced low-pH collagen technology of the powder series into a convenient, conformable pad format. The dressing is designed to manage wound exudate, support autolytic debridement, and accelerate tissue regeneration. Its pad format simplifies application and is particularly suited for broad wound beds requiring consistent coverage.",
    features: [
      "Low-pH collagen matrix in conformable pad format",
      "Manages wound exudate effectively",
      "Supports autolytic debridement",
      "Accelerates tissue regeneration",
      "Consistent coverage across broad wound beds",
    ],
    indications: "Partial and full-thickness wounds, moderately to heavily exudating wounds, pressure injuries, venous and diabetic ulcers.",
    mechanismOfAction:
      "The ColleCule LpH® Pad maintains the same low-pH collagen mechanism as the powder: reducing protease activity, promoting fibroblast proliferation, and improving oxygenation through the Bohr effect. The pad format uses the collagen matrix as a primary dressing that absorbs and retains exudate while delivering the regenerative environment directly to the wound surface. The conformable structure ensures uniform contact across irregular wound geometries.",
    comingSoon: false,
  },
  {
    id: "emcyte-prp",
    name: "EmCyte PurePRP® & Sapphire Centrifuge",
    tagline: "≥80% platelet yield. Under 10 minutes. Closed-system precision.",
    category: "PRP",
    categoryColor: "#1a6b8a",
    classification: "FDA-Cleared Device System",
    storage: "Ambient / Room Temp",
    company: "EmCyte Corporation",
    companyUrl: "https://www.emcyte.com",
    image: "/images/products/emcyte-prp.webp",
    description: "EmCyte's closed-system PurePRP® SupraPhysiologic kits paired with the Sapphire centrifuge for in-office biologic preparation.",
    overview:
      "The EmCyte PurePRP® SupraPhysiologic system is a proprietary closed-system platelet concentrating platform engineered to deliver the highest concentrations of deliverable platelets at the point of care. Paired with the Sapphire Centrifuge — a 31-lb portable all-in-one processing unit — the system enables in-office preparation of PRP, bone marrow concentrate (BMC), and adipose concentrate from a single device with a user-friendly touchscreen interface.",
    features: [
      "≥80% platelet yield with double-spin technique",
      "Under 10-minute preparation time",
      ">99% red blood cell removal",
      "Closed-system design for sterility and consistency",
      "Sapphire Centrifuge processes PRP, BMC & adipose concentrate",
      "31-lb portable unit with touchscreen pre-set programs",
      "Customizable open settings for specialized clinical needs",
    ],
    indications: "In-office autologous PRP preparation for orthopedic, wound care, aesthetic, and pain management applications. BMC and adipose concentrate preparation for regenerative procedures.",
    mechanismOfAction:
      "The PurePRP® SupraPhysiologic system uses a double-spin centrifugation technique with proprietary chamber technology to achieve selective concentration of platelets and target cell populations. The closed-system design minimizes contamination risk while the programmable Sapphire Centrifuge ensures reproducible processing parameters. The system allows precision control over cell population isolation during PRP preparation. Clinical applications and protocols are determined by the treating physician based on their clinical judgment, training, and within the scope of their practice. The EmCyte PurePRP® system is FDA-cleared for autologous platelet concentration. Specific FDA-cleared indications and device labeling should be referenced for all clinical use. Ridge Biologics does not make claims regarding clinical outcomes, therapeutic mechanisms, or comparative effectiveness.",
    comingSoon: false,
  },
  {
    id: "msc",
    name: "Mesenchymal Stem Cells (MSC)",
    tagline: "GMP-certified, cryogenically preserved — coming soon.",
    category: "MSC",
    categoryColor: "#5a4fcf",
    classification: "Section 351 Biologic",
    storage: "Cryogenic −196°C",
    company: "GMP-Certified Manufacturer",
    companyUrl: "",
    image: null,
    description: "FDA-registered mesenchymal stem cells shipped cryogenically with full chain-of-custody documentation. For licensed providers only.",
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
