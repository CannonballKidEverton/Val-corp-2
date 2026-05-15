Yes — there are **more apostrophes breaking the file**, not just the first one.

The easiest fix: replace the entire `content/operators.ts` file with this corrected version.

In GitHub:

1. Open `content/operators.ts`
2. Click ✏️ edit
3. Select everything
4. Delete it
5. Paste this in
6. Click **Commit changes**

```ts
export interface Operator {
  slug: string;
  ref: string;
  name: string;
  role: string;
  roleShort: string;
  bio: string;
  longBio: string[];
  meta: { label: string; value: string }[];
  pastEngagements?: string[];
}

export const operators: Operator[] = [
  {
    slug: "simon-shellien",
    ref: "P/01",
    name: "Simon Shellien",
    role: "Strategy, brand, operations & growth",
    roleShort: "Strategy · Brand · Operations",
    bio: "Twenty years across UK and MENA. Operator across consumer technology, sport, luxury, and real estate. Architect of the firm's operating model and client delivery infrastructure.",
    longBio: [
      "Twenty years operating across the United Kingdom and the Middle East. Strategy and execution for founders and institutions, with an emphasis on systems that hold their shape as the business scales.",
      "Earlier engagements have spanned consumer technology, sport, luxury, and real estate — selected work with Under Armour, NEOM, Emirates, and Adidas. The discipline has been consistent across each: arrive into a business, understand it as an operator would, design the system, and stay long enough to see it work.",
      "At Valantai, Simon is the architect of the operating model — its vertical structure, its client delivery infrastructure, and the engagement design that makes the institution legible to the companies and operators it serves.",
      "Day-to-day counsel to founders, executives, and family offices across the UK–GCC corridor. Sectors of priority: real estate, consumer technology, sport, and luxury.",
    ],
    meta: [
      { label: "Focus", value: "Operating model · Client delivery · Vertical architecture" },
      { label: "Sectors", value: "Consumer technology · Real estate · Sport · Luxury" },
      { label: "Geographies", value: "UK · UAE · KSA" },
    ],
    pastEngagements: ["Under Armour", "NEOM", "Emirates", "Adidas"],
  },
  {
    slug: "tom-speechley",
    ref: "P/02",
    name: "Tom Speechley",
    role: "Capital, structuring & cross-border",
    roleShort: "Capital · Structuring · Cross-border",
    bio: "Three decades across private equity, corporate finance, and legal structuring. Lead on capital strategy, investor readiness, and institutional capital introductions across UK, GCC, and US.",
    longBio: [
      "Three decades operating across private equity, corporate finance, and legal structuring. The capital end of the institution — investor readiness, transaction structuring, and the relationships that make capital movable across jurisdictions.",
      "Earlier career across private equity firms with deployments across UK, US, and the Gulf, alongside legal practice in corporate and international structuring. The work has consistently sat at the intersection of legal and commercial — closing deals that also hold together operationally.",
      "At Valantai, Tom leads the Capital vertical — investor readiness, structuring, and institutional capital strategy. He is the firm's principal counterparty to family offices, sovereign capital, and institutional partners.",
      "Active mandates span the UK, the GCC, and US capital markets, including investor readiness for scale-up companies and capital structuring for family offices across three continents.",
    ],
    meta: [
      { label: "Focus", value: "Capital strategy · Investor readiness · International structuring" },
      { label: "Sectors", value: "Private equity · Family office · Sovereign capital" },
      { label: "Geographies", value: "UK · UAE · KSA · US" },
    ],
  },
  {
    slug: "tom-chhabra",
    ref: "P/03",
    name: "Tom Chhabra",
    role: "Technology, AI & enterprise infrastructure",
    roleShort: "Technology · AI · Enterprise",
    bio: "Twenty years building enterprise systems and AI infrastructure at scale. Leads the firm's fifty-engineer delivery team. ISO 9001:2015.",
    longBio: [
      "Twenty years building enterprise systems and AI infrastructure across financial services, real estate, and sport. The technical end of the institution — platforms, infrastructure, and the engineering rigour that turns operating intent into operating reality.",
      "Prior work has included delivering enterprise platforms at scale — including the firm's first major deployment, a $100,000 enterprise CRM in UAE real estate, competing directly with established platforms and currently in production.",
      "At Valantai, Tom heads the Technology vertical and leads the firm's fifty-engineer delivery team. ISO 9001:2015 certified delivery. Five thousand six hundred and fifty programmes delivered to date.",
      "Active focus: scaling the Risk Engine, AI infrastructure programmes, and CRM deployments across UK and GCC enterprise clients.",
    ],
    meta: [
      { label: "Focus", value: "Enterprise platforms · AI infrastructure · CRM architecture" },
      { label: "Delivery team", value: "50+ engineers · ISO 9001:2015" },
      { label: "Sectors", value: "Financial services · Real estate · Sport" },
    ],
  },
];

export function getOperatorBySlug(slug: string): Operator | undefined {
  return operators.find((op) => op.slug === slug);
}
```

Then wait for Vercel to redeploy. This should clear that syntax error.
