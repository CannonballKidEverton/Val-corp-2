export type VMark = 'standard' | 'extended' | 'capped' | 'tilted' | 'wide' | 'underlined';

export interface Solution {
  slug: string;
  number: string;
  name: string;
  description: string;
  longDescription: string[];
  vMark: VMark;
  hasPage: boolean;
  /** Page this solution links to on the homepage row. Null = coming soon. */
  href: string | null;
}

export const solutions: Solution[] = [
  {
    slug: 'build',
    number: '001',
    name: 'Build',
    vMark: 'standard',
    description: 'Founding architecture, validation, and the operating infrastructure a company needs from day one.',
    longDescription: [
      'Most companies are built backwards. They find product-market fit by accident, layer structure onto chaos, and pay twice to fix what they should have done correctly from day one.',
      'Build brings the founding infrastructure forward — before the hire, before the first client, before the first raise. Operating model, legal architecture, CRM stack, positioning. Set correctly at the start, these compound forward for the life of the company.',
    ],
    hasPage: false,
    href: null,
  },
  {
    slug: 'capital',
    number: '002',
    name: 'Capital',
    vMark: 'extended',
    description: 'Investor readiness, structuring, and institutional capital strategy across UK and GCC.',
    longDescription: [
      'Capital is not raised. It is earned through preparation, positioning, and relationships built before the moment they are needed.',
      'The Capital practice covers the full investor-readiness cycle: materials, financial model, structuring, round narrative, and the institutional network across UK, UAE, Saudi Arabia, and US that makes the difference between a term sheet and a conversation.',
    ],
    hasPage: false,
    href: null,
  },
  {
    slug: 'technology',
    number: '003',
    name: 'Technology',
    vMark: 'capped',
    description: "Enterprise platforms, AI infrastructure, and operating systems built to clients' specifications.",
    longDescription: [
      'Most technology deployments fail not from technical problems but from implementation quality and operational reality. The wrong platform. The wrong timeline. The wrong integration architecture.',
      'The Technology practice builds enterprise platforms at scale — CRM infrastructure, AI deployments, operating systems — delivered by a fifty-engineer team with ISO 9001:2015 certification and a track record across real estate, financial services, and sport.',
    ],
    hasPage: false,
    href: null,
  },
  {
    slug: 'risk',
    number: '004',
    name: 'Risk',
    vMark: 'tilted',
    description: 'The Risk Engine, operational exposure mapping, and continuous monitoring across twelve domains.',
    longDescription: [
      'The twelve domains of operational risk that most frequently determine company outcomes: key person dependency, customer concentration, capital position, technology exposure, compliance, IP structure, AI maturity gap, supply chain, competitive position, talent, financial controls, and ESG.',
      'The Risk practice deploys the Risk Engine — a structured diagnostic and continuous monitoring instrument — to surface, rank, and track exposures before they become consequences.',
    ],
    hasPage: true,
    href: '/platform/risk',
  },
  {
    slug: 'commerce',
    number: '005',
    name: 'Commerce',
    vMark: 'wide',
    description: 'Direct-to-consumer infrastructure, automation, and customer lifecycle systems.',
    longDescription: [
      'Commerce infrastructure is the difference between a business that grows and a business that accumulates operational debt. The checkout is one thing; the lifecycle, the data, the automation, and the retention architecture are the rest.',
      'The Commerce practice builds and deploys direct-to-consumer systems — from Shopify architecture to AI-native lifecycle automation — for brands operating at meaningful scale.',
    ],
    hasPage: false,
    href: null,
  },
  {
    slug: 'counsel',
    number: '006',
    name: 'Counsel',
    vMark: 'underlined',
    description: 'Founder agreements, IP, governance, and the legal architecture of growing companies.',
    longDescription: [
      'Legal infrastructure is almost always the thing companies leave too late. Founder equity, shareholder agreements, IP ownership, cross-border structure — each is manageable at the beginning and expensive to correct at the end.',
      'The Counsel practice brings legal thinking into the operating layer — not as a compliance function but as a structural one. Integrated with capital, technology, and operating counsel so the architecture holds together.',
    ],
    hasPage: false,
    href: null,
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export const TOTAL_SOLUTIONS = 13;
