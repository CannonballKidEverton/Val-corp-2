import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero }        from '@/components/primitives/PageHero';
import { ArrivalWrapper }  from '@/components/primitives/ArrivalWrapper';
import { SectionHead }     from '@/components/primitives/SectionHead';
import { MetadataBlock }   from '@/components/primitives/MetadataBlock';
import { EngagementBlock } from '@/components/primitives/EngagementBlock';
import { VMarkIcon }       from '@/components/solutions/VMarks';
import { solutions, getSolutionBySlug } from '@/content/solutions';

/** Only generate static pages for solutions that have dedicated pages. */
export function generateStaticParams() {
  return solutions
    .filter((s) => s.hasPage)
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const sol = getSolutionBySlug(params.slug);
  if (!sol) return {};
  return {
    title: sol.name,
    description: sol.description,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const sol = getSolutionBySlug(params.slug);

  // 404 for unknown slugs or solutions without a dedicated page
  if (!sol || !sol.hasPage) notFound();

  return (
    <>
      <PageHero
        index={`${sol.number} · Solutions · ${sol.name}`}
        title={sol.name}
        subtitle={sol.description}
        refPrefix={`VLT · SOL/${sol.number}`}
        variant="division"
      />

      {/* Long-form body + metadata */}
      <ArrivalWrapper
        as="section"
        className="zone-pad grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-x-[clamp(48px,8vw,120px)] gap-y-12 items-start"
      >
        {/* Body copy */}
        <article className="t-lead text-ink max-w-prose">
          {sol.longDescription.map((para, i) => (
            <p key={i} className="mb-[1.55em] last:mb-0">
              {para}
            </p>
          ))}
        </article>

        {/* Right-hand metadata rail */}
        <aside className="self-start flex flex-col gap-10">
          {/* V mark — larger, page-scale */}
          <span className="text-ink w-12 h-12 block">
            <VMarkIcon variant={sol.vMark} />
          </span>

          <MetadataBlock
            items={[
              { label: 'Solution',  value: sol.name   },
              { label: 'Reference', value: sol.number },
            ]}
          />
        </aside>
      </ArrivalWrapper>

      {/* Related solutions header */}
      <ArrivalWrapper as="section" className="zone-pad border-t border-hairline">
        <SectionHead title="Related solutions" />
        <div className="flex flex-col">
          {solutions
            .filter((s) => s.slug !== sol.slug)
            .slice(0, 3)
            .map((related) => (
              <a
                key={related.slug}
                href={related.href ?? `/solutions#${related.slug}`}
                className={[
                  'group grid items-center gap-x-[clamp(24px,4vw,56px)]',
                  'grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px]',
                  'py-6 border-b border-hairline first:border-t',
                  'no-underline text-inherit',
                ].join(' ')}
              >
                <span className="text-ink">
                  <VMarkIcon variant={related.vMark} />
                </span>
                <span className="t-solution text-ink">{related.name}</span>
                <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-3 hidden md:block">
                  {related.description}
                </span>
                <span className="font-mono text-[14px] text-ink-4 text-right group-hover:translate-x-1.5 transition-transform duration-moderate">
                  →
                </span>
              </a>
            ))}
        </div>
      </ArrivalWrapper>

      <EngagementBlock />
    </>
  );
}
