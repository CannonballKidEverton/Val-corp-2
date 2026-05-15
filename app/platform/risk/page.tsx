import type { Metadata } from 'next';
import { PageHero }         from '@/components/primitives/PageHero';
import { SectionHead }      from '@/components/primitives/SectionHead';
import { MetadataBlock }    from '@/components/primitives/MetadataBlock';
import { ArrivalWrapper }   from '@/components/primitives/ArrivalWrapper';
import { EngagementBlock }  from '@/components/primitives/EngagementBlock';
import { RiskEngineForm }   from '@/components/risk/RiskEngineForm';
import { riskDomains }      from '@/content/riskDomains';

export const metadata: Metadata = {
  title: 'The Risk Engine',
  description: 'A continuous scoring instrument across twelve operational domains.',
};

export default function RiskPage() {
  return (
    <>
      <PageHero
        index="DIV/004 · Solutions · Risk"
        title="The Risk Engine"
        subtitle="A continuous scoring instrument across twelve operational domains. Identifies, ranks, and tracks the exposures most likely to disrupt a company before they do."
        refPrefix="VLT · DIV/004"
        variant="division"
      />

      {/* Philosophy */}
      <ArrivalWrapper
        as="section"
        className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
      >
        <article className="t-lead text-ink max-w-prose">
          <p className="font-sans font-medium text-[clamp(1.4rem,2vw,1.9rem)] tracking-[-0.018em] text-ink mb-6 leading-snug">
            Most companies discover their operational risks at the point those risks
            become consequences. By then the cost is rarely the risk itself — it is
            the absence of warning.
          </p>
          <p className="mb-[1.55em]">
            The Risk Engine exists to close that gap. It is an operating instrument —
            not a software product, not a dashboard, not a report. A company's position
            is scored across twelve operational domains and tracked through the lifecycle
            of the company, not the lifecycle of the engagement.
          </p>
          <p className="mb-[1.55em]">
            The instrument is built and operated by Valantai. The intelligence accumulates
            inside the institution. Clients receive the output: ranked exposures, mitigation
            pathways, and the operational pressure that comes from continuous observation.
          </p>
        </article>
        <aside className="self-start">
          <MetadataBlock items={[
            { label: 'Practice',           value: 'Risk · DIV/004'                     },
            { label: 'Domains',            value: 'Twelve, weighted'                    },
            { label: 'Domain calibration', value: 'Reviewed quarterly'                  },
            { label: 'Access',             value: 'Clients and capital partners'        },
          ]} />
        </aside>
      </ArrivalWrapper>

      {/* Domains table */}
      <ArrivalWrapper as="section" className="py-[10vh]">
        <div style={{ marginLeft: 'var(--col-3)', marginRight: 'var(--margin)' }}>
          <SectionHead title="The Twelve Domains" counter="Continuous scoring" />
        </div>
        <table
          className="border-collapse font-mono"
          style={{
            marginLeft: 'var(--col-3)',
            marginRight: 'var(--margin)',
            width: 'calc(100% - var(--col-3) - var(--margin))',
            tableLayout: 'fixed',
          }}
          aria-label="Twelve risk domains"
        >
          <thead>
            <tr>
              {[['8%', 'Ref.'], ['26%', 'Domain'], ['66%', 'Surfaces']].map(([w, h]) => (
                <th key={h} className="t-label text-ink-3 text-left pb-[18px] pr-6 border-b border-hairline" style={{ width: w }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {riskDomains.map((d) => (
              <tr key={d.key} className="border-b border-hairline last:border-0">
                <td className="text-[13px] text-ink-3 py-[22px] pr-6">{d.ref}</td>
                <td className="text-[13px] text-ink   py-[22px] pr-6">{d.name}</td>
                <td className="font-serif text-[14px] leading-[1.55] text-ink-2 py-[22px] hidden sm:table-cell">{d.surfaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ArrivalWrapper>

      <RiskEngineForm />
      <EngagementBlock />
    </>
  );
}
