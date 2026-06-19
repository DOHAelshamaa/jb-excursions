import { useInView } from '../hooks/useInView';
import styles from './SectionTitle.module.css';

export default function SectionTitle({ eyebrow, heading, light = false, center = false }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${light ? styles.light : ''} ${center ? styles.center : ''} fade-up ${inView ? 'visible' : ''}`}
    >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.heading}>{heading}</h2>
    </div>
  );
}
