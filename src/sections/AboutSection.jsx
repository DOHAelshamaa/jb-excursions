import { ABOUT } from '../data/config';
import { useInView } from '../hooks/useInView';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const [imgRef,  imgInView]  = useInView();
  const [textRef, textInView] = useInView();

  return (
    <section id="about" className={styles.section} aria-label="About J & B Excursions">
      <div className={styles.inner}>
        {/* Image column */}
        <div
          ref={imgRef}
          className={`${styles.imageCol} fade-up ${imgInView ? 'visible' : ''}`}
        >
          <img
            src={ABOUT.image}
            alt="J & B Excursions boat docked at Luxor"
            className={styles.img}
            loading="lazy"
          />
          <div className={styles.statBadge} aria-label={`${ABOUT.stat.value} ${ABOUT.stat.label}`}>
            <span className={styles.statValue}>{ABOUT.stat.value}</span>
            <span className={styles.statLabel}>{ABOUT.stat.label}</span>
          </div>
        </div>

        {/* Text column */}
        <div
          ref={textRef}
          className={`${styles.textCol} fade-up ${textInView ? 'visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          <p className={styles.eyebrow}>{ABOUT.eyebrow}</p>
          <h2 className={styles.heading}>{ABOUT.heading}</h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className={styles.body}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
