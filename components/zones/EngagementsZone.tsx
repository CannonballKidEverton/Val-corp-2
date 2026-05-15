import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';

const TOTAL_ACTIVE_MANDATES = 17;

const engagements = [
  {
    ref: 'M.2026/01',
    geography: 'DXB · UAE',
    mandate: 'Enterprise CRM',
    sector: 'Real Estate',
    status: 'Deployed',
  },
  {
    ref: 'M.2026/02',
    geography: 'LDN · UK',
    mandate: 'AI Programme',
    sector: 'Financial Services',
    status: 'In Delivery',
  },
  {
    ref: 'M.2026/03',
    geography: 'AUH · UAE',
    mandate: 'Capital Strategy',
    sector: 'Institutional Capital',
    status: 'Filed',
  },
  {
    ref: 'M.2026/04',
    geography: 'LDN · UK',
    mandate: 'Risk Architecture',
    sector: 'D2C Commerce',
    status: 'Active',
  },
  {
    ref: 'M.2026/05',
    geography: 'RUH · KSA',
    mandate: 'Operating Counsel',
    sector: 'Family Office',
    status: 'Structuring',
  },
  {
    ref: 'M.2026/06',
    geography: 'NYC · US',
    mandate: 'Investor Readiness',
    sector: 'SaaS',
    status: 'In Diligence',
  },
];

export function EngagementsZone() {
  return (
    <section id="engagements">
      <ArrivalWrapper as="div" className="py-[10vh]">
        <div
          style={{
            marginLeft: 'var(--col-3)',
            marginRight: 'var(--margin)',
          }}
        >
          <SectionHead
            title="Current Engagements"
            counter={`${TOTAL_ACTIVE_MANDATES} active`}
          />
        </div>

        <div
          style={{
            marginLeft: 'var(--col-3)',
            marginRight: 'var(--margin)',
            marginTop: '2rem',
          }}
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--hairline)] text-[10px] uppercase tracking-[0.18em] text-[var(--text-3)]">
                <th className="py-4 font-normal">Ref</th>
                <th className="py-4 font-normal">Jurisdiction</th>
                <th className="py-4 font-normal">Mandate</th>
                <th className="py-4 font-normal">Sector</th>
                <th className="py-4 font-normal">Status</th>
              </tr>
            </thead>

            <tbody>
              {engagements.map((engagement) => (
                <tr
                  key={engagement.ref}
                  className="border-b border-[var(--hairline)]"
                >
                  <td className="py-5 text-[11px] uppercase tracking-[0.14em] text-[var(--text-2)]">
                    {engagement.ref}
                  </td>

                  <td className="py-5 text-[15px] text-[var(--text)]">
                    {engagement.geography}
                  </td>

                  <td className="py-5 text-[15px] text-[var(--text)]">
                    {engagement.mandate}
                  </td>

                  <td className="py-5 text-[15px] text-[var(--text-2)]">
                    {engagement.sector}
                  </td>

                  <td className="py-5 text-[11px] uppercase tracking-[0.14em] text-[var(--text-2)]">
                    {engagement.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[var(--text-3)]">
            6 of 17 engagements shown. Remaining held under confidentiality.
          </div>
        </div>
      </ArrivalWrapper>
    </section>
  );
}
