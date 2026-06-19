import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data/config';
import { useInView } from '../hooks/useInView';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ title, description, images, delay = 0 }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const [ref, inView] = useInView();

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next(e) : prev(e);
    touchStartX.current = null;
  };

  return (
    <article
      ref={ref}
      className={`${styles.card} fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div className={styles.imageWrap}>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} — image ${i + 1}`}
            className={`${styles.img} ${i === current ? styles.active : ''}`}
            loading="lazy"
          />
        ))}

        {/* Gradient overlay */}
        <div className={styles.gradient} aria-hidden="true" />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous image">
              <ChevronLeft size={20} />
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next image">
              <ChevronRight size={20} />
            </button>
            {/* Dots */}
            <div className={styles.dots} aria-hidden="true">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Text overlay at bottom */}
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewDetails}
          aria-label={`Book ${title} via WhatsApp`}
        >
          VIEW DETAILS <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
}
