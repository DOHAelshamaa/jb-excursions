import { EXPERIENCES } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import styles from './ExperiencesSection.module.css';

export default function ExperiencesSection() {
  return (
    <section id="tours" className={styles.section} aria-label="Featured Experiences">
      <div className={styles.inner}>
        <SectionTitle eyebrow="CURATED ADVENTURES" heading="Signature Experiences" center />
        <div className={`${styles.grid} stagger-children`}>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} {...exp} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
