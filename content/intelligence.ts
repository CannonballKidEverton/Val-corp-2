export interface IntelligenceSystem {
  ref: string;
  name: string;
  description: string;
  status: string;
  meta: string;
}

export const intelligenceSystems: IntelligenceSystem[] = [
  {
    ref: "I/01",
    name: "The Risk Engine",
    description:
      "A twelve-domain operational diagnostic system designed to surface structural risk across leadership, finance, infrastructure, compliance, and execution before those weaknesses become material business constraints.",
    status: "In development",
    meta: "12-domain scoring · Multi-sector",
  },
  {
    ref: "I/02",
    name: "Smart CRM",
    description:
      "AI-native customer relationship infrastructure deployed at enterprise scale. Built to client specifications and owned directly by the firm's clients. Live in UAE real estate with replication across additional sectors underway.",
    status: "Deployed",
    meta: "Enterprise CRM · UAE deployment",
  },
  {
    ref: "I/03",
    name: "Sector Intelligence",
    description:
      "Structured intelligence derived from active engagements across capital, operations, and enterprise delivery. Used internally to benchmark risk, readiness, and execution patterns across sectors and jurisdictions.",
    status: "Restricted",
    meta: "Internal intelligence layer",
  },
  {
    ref: "I/04",
    name: "Capital Connection",
    description:
      "Private capital allocation remains stubbornly analogue and inefficient. Our systems apply structured intelligence derived from operational experience to help the right companies reach the right capital.",
    status: "In development",
    meta: "UK · UAE · KSA · US",
  },
];

export function getIntelligenceSystem(ref: string) {
  return intelligenceSystems.find((system) => system.ref === ref);
}
