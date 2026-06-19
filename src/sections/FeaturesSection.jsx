import { FEATURES } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  return (
    <section className={styles.section} aria-label="Why Choose Us">
      <div className={styles.inner}>
        <SectionTitle eyebrow="THE SKY & SEA DIFFERENCE" heading="Why Our Guests Return" center />
        <div className={`${styles.grid} stagger-children`}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.id} {...f} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
