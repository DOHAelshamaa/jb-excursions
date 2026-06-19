import StarRating from './StarRating';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ name, rating, review, role }) {
  return (
    <article className={styles.card}>
      <StarRating value={rating} size="sm" />
      <blockquote className={styles.text}>"{review}"</blockquote>
      <footer className={styles.footer}>
        <span className={styles.name}>{name}</span>
        {role && <span className={styles.role}>{role}</span>}
      </footer>
    </article>
  );
}
