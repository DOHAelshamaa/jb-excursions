import styles from './Button.module.css';

/**
 * variant: 'solid' | 'outline' | 'white' | 'blue'
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  className = '',
  target,
  rel,
  type = 'button',
  disabled = false,
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
