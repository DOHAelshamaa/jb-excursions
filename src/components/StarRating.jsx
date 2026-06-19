import styles from './StarRating.module.css';

export default function StarRating({ value, max = 5, interactive = false, onChange, size = 'md' }) {
  return (
    <div className={`${styles.stars} ${styles[size]}`} role={interactive ? 'radiogroup' : undefined} aria-label={`Rating: ${value} of ${max}`}>
      {Array.from({ length: max }, (_, i) => {
        const filled = i < value;
        return (
          <button
            key={i}
            type="button"
            className={`${styles.star} ${filled ? styles.filled : ''}`}
            onClick={interactive ? () => onChange(i + 1) : undefined}
            aria-label={`${i + 1} star${i + 1 > 1 ? 's' : ''}`}
            tabIndex={interactive ? 0 : -1}
            style={!interactive ? { cursor: 'default' } : undefined}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
