import { CTA } from '../data/config';
import Button from '../components/Button';
import { useInView } from '../hooks/useInView';
import styles from './CTASection.module.css';

export default function CTASection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className={styles.section} aria-label="Book Your Adventure">
      <div
        ref={ref}
        className={`${styles.inner} fade-up ${inView ? 'visible' : ''}`}
      >
        <h2 className={styles.heading}>{CTA.heading}</h2>
        <p className={styles.sub}>{CTA.subheading}</p>
        <Button href={CTA.buttonHref} variant="white" target="_blank">
          {CTA.buttonLabel}
        </Button>
      </div>
    </section>
  );
}
