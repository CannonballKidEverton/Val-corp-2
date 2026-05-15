export interface IntelligenceSystem {
  ref: string;
  slug: string;
  name: string;
  description: string;
  meta: { label: string; value: string }[];
  longDescription?: string[];
  hasPage: boolean;
}

export const intelligenceSystems: IntelligenceSystem[] = [
  {
    ref: "I/01",
    slug: "risk-engine",
    name: "The Risk Engine",
    description:
      "A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do.",
    meta: [
      { label: "Domains covered", value: "Twelve" },
      { label: "Status", value: "In development" },
    ],
    longDescription: [
      "Most companies discover their operational risks at the point those risks become consequences. The Risk Engine exists to close that gap.",
      "Twelve operational domains scored continuously: key person dependency, customer concentration, capital position, technology exposure, compliance, IP structure, AI maturity, supply chain, competitive position, talent, financial controls, and ESG.",
      "The intake is a structured diagnostic. The output is a ranked exposure register, a severity band for each domain, and direct routing to the Valantai practice most equipped to address each risk.",
    ],
    hasPage: true,
  },
  {
    ref: "I/02",
    slug: "smart-crm",
    name: "Smart CRM",
    description:
      "AI-native customer relationship infrastructure deployed at enterprise scale. Built to client specifications and owned directly by the firm's clients. Live in UAE real estate with replication across additional sectors underway.",
    meta: [
      { label: "Status", value: "Deployed" },
      { label: "Coverage", value: "Multi-client" },
    ],
    hasPage: false,
  },
  {
    ref: "I/03",
    slug: "sector-intelligence",
    name: "Sector Intelligence",
    description:
      "Structured intelligence derived from active engagements across capital, operations, and enterprise delivery. Used internally to benchmark risk, readiness, and execution patterns across sectors and jurisdictions.",
    meta: [
      { label: "Source", value: "Engagement data" },
      { label: "Access", value: "Restricted" },
    ],
    hasPage: false,
  },
  {
    ref: "I/04",
    slug: "capital-connection",
    name: "Capital Connection",
    description:
      "Private capital allocation remains stubbornly analogue and inefficient. Our systems apply structured intelligence derived from operational experience to help the right companies reach the right capital.",
    meta: [
      { label: "Status", value: "In development" },
      { label: "Reach", value: "UK · UAE · KSA · US" },
    ],
    hasPage: false,
  },
];

export function getSystemBySlug(slug: string): IntelligenceSystem | undefined {
  return intelligenceSystems.find((system) => system.slug === slug);
}
