export interface DossierMeta {
  ref: string;
  series: string;
  issued: string;
  reading: string;
  authoredBy: string;
}

export interface DossierSection {
  ref: string;
  heading: string;
  paragraphs: string[];
  callout?: string;
}

export interface Dossier {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  meta: DossierMeta;
  abstract: string;
  sections: DossierSection[];
  references: string[];
}

export const dossiers: Dossier[] = [
  {
    slug: "twelve-domains",
    number: "DOS/001",
    title: "The Twelve Domains",
    subtitle: "Why the institution scores companies along twelve operational axes.",
    meta: {
      ref: "DOS/001",
      series: "Operating Intelligence",
      issued: "May 2026",
      reading: "12-minute read",
      authoredBy: "The Valantai Risk Practice",
    },
    abstract:
      "The Risk Engine was built from a narrow premise: the exposures most likely to determine a company's next twelve months sit inside a small, defensible set of twelve domains.",
    sections: [
      {
        ref: "S/01",
        heading: "The premise",
        paragraphs: [
          "Operational risk frameworks tend to fail in one of two directions. Either they expand into exhaustive checklists, which are unusable in any meaningful sense, or they collapse into categories that confirm what the company already knows.",
          "The Risk Engine sits between those failures. Twelve is the smallest number of axes that captures the operational shape of a company across stage, sector, and structure.",
          "What follows is not a definitive taxonomy. It is the institution's working set, calibrated quarterly, and the explanation of why each domain is on it.",
        ],
        callout:
          "Twelve is the largest number an operator can hold in working memory.",
      },
      {
        ref: "S/02",
        heading: "Where the twelve sit",
        paragraphs: [
          "The twelve cluster into four operating axes: position, substrate, motion, and governance.",
          "Position failures are direct: the company runs out of cash, the founder leaves, or the top customer churns. Substrate failures are slower but heavier: the platform deprecates, the regulator changes the regime, or the IP is found to be unowned.",
          "A company in serious trouble usually fails in more than one axis simultaneously. The instrument is designed to surface that shape.",
        ],
      },
      {
        ref: "S/03",
        heading: "What scoring means in practice",
        paragraphs: [
          "A score in any domain is an estimate of the likelihood that the exposure becomes a determining factor in the next twelve months. It is not a probability of failure.",
          "The instrument ranks exposures by likelihood and weight, not severity in isolation.",
          "In practice, the top three exposures account for most of the institutional attention given to a company. Lower-ranked exposures inform the standing record but rarely change the next mandate.",
        ],
        callout:
          "A score is not a probability of failure. It is an estimate of which exposure will determine the year.",
      },
      {
        ref: "S/04",
        heading: "The calibration",
        paragraphs: [
          "Weights on each domain are calibrated against the institution's active register.",
          "As mandates accumulate, the relative weight of certain domains will drift. The twelve themselves remain the working set until the evidence says otherwise.",
        ],
      },
    ],
    references: [
      "Internal calibration record · Q1 2026 · Restricted",
      "Active mandate aggregate · 17 active mandates · Rolling update",
      "Sector benchmarking dataset · UK · GCC · US · Restricted",
    ],
  },
];

export function getDossierBySlug(slug: string): Dossier | undefined {
  return dossiers.find((dossier) => dossier.slug === slug);
}

export function getAllDossierSlugs(): string[] {
  return dossiers.map((dossier) => dossier.slug);
}
