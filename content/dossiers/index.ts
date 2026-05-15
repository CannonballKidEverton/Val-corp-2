export interface DossierSection {
  ref: string;
  title: string;
  body: string;
}

export interface Dossier {
  slug: string;
 ref: string;
  title: string;
  description: string;
  sections: DossierSection[];
}

export const dossiers: Dossier[] = [
  {
    slug: "risk-engine",
    ref: "D/01",
    title: "The Risk Engine",
    description:
      "A continuous operational scoring system across twelve weighted domains.",
    sections: [
      {
        ref: "S/01",
        title: "Purpose",
        body:
          "The Risk Engine exists to identify operational exposure before those exposures become commercial consequences.",
      },
      {
        ref: "S/02",
        title: "Coverage",
        body:
          "The system scores twelve operational domains including capital position, customer concentration, technology exposure, compliance, AI maturity, and delivery dependency.",
      },
      {
        ref: "S/03",
        title: "Output",
        body:
          "Outputs include ranked exposure analysis, severity scoring, and routing into the relevant Valantai solution area.",
      },
    ],
  },
];

export function getDossierBySlug(slug: string): Dossier | undefined {
  return dossiers.find((dossier) => dossier.slug === slug);
}

export function getAllDossierSlugs(): string[] {
  return dossiers.map((dossier) => dossier.slug);
}
