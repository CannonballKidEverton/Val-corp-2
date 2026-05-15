import Link from 'next/link';
import styles from './OperatorsZone.module.css';
import { operators } from '@/content/operators';
import { SectionHead } from '@/components/primitives/SectionHead';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';

export function OperatorsZone() {
  return (
    <section id="partners">
      <ArrivalWrapper as="div" className={styles.wrap}>
        <SectionHead
          title="Founding Partners"
          counter="Three principals · Founded 2024"
        />

        <div className={styles.grid}>
          {operators.map((op) => (
            <div key={op.slug} className={styles.row}>
              <span className={styles.num}>{op.ref}</span>

              <div>
                <h3 className={styles.name}>
                  <Link href={`/operators/${op.slug}`}>{op.name}</Link>
                </h3>

                <p className={styles.role}>{op.role}</p>
              </div>

              <Link
                href={`/operators/${op.slug}`}
                className={styles.link}
              >
                Profile →
              </Link>
            </div>
          ))}
        </div>
      </ArrivalWrapper>
    </section>
  );
}
