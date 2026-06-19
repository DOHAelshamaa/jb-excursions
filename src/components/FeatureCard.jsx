import { Compass, ShieldCheck, Gem, Map } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './FeatureCard.module.css';

const ICON_MAP = { Compass, ShieldCheck, Gem, Map };

export default function FeatureCard({ icon, title, description, delay = 0 }) {
  const Icon = ICON_MAP[icon] ?? Compass;
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`${styles.card} fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      role="article"
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
