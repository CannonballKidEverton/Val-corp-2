import styles from './MandateLedger.module.css';
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

export function MandateLedger() {
  return (
    <section className={styles.section}>
      <div className={styles.offset}>
        <SectionHead
          title="Current Engagements"
          counter={`${TOTAL_ACTIVE_MANDATES} active`}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Ref</th>
            <th>Jurisdiction</th>
            <th>Mandate</th>
            <th>Sector</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {engagements.map((engagement) => (
            <tr key={engagement.ref}>
              <td>{engagement.ref}</td>
              <td>{engagement.geography}</td>
              <td>{engagement.mandate}</td>
              <td>{engagement.sector}</td>
              <td>{engagement.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>
        6 of 17 engagements shown. Remaining held under confidentiality.
      </div>
    </section>
  );
}
