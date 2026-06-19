import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/config';
import SectionTitle from '../components/SectionTitle';
import { useInView } from '../hooks/useInView';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [ref, inView] = useInView({ threshold: 0.1 });

  const open  = (i) => setLightbox(i);
  const close = () => setLightbox(null);
  const goPrev = () => setLightbox((i) => (i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
  const goNext = () => setLightbox((i) => (i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));

  const onKeyDown = (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') goPrev();
    if (e.key === 'ArrowRight') goNext();
  };

  return (
    <section id="gallery" className={styles.section} aria-label="Gallery" onKeyDown={onKeyDown}>
      <div className={styles.inner}>
        <SectionTitle eyebrow="VISUAL JOURNEY" heading="Captured Moments" />
        <div ref={ref} className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}>
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={img.src}
              className={`${styles.item} ${styles[img.span]} fade-up ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => open(i)}
              aria-label={`View: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className={styles.img} />
              <div className={styles.hoverOverlay} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button className={styles.lbClose} onClick={close} aria-label="Close lightbox"><X size={28} /></button>
          <button className={`${styles.lbArrow} ${styles.lbLeft}`} onClick={goPrev} aria-label="Previous image"><ChevronLeft size={32} /></button>
          <div className={styles.lbContent} onClick={close}>
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              className={styles.lbImg}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button className={`${styles.lbArrow} ${styles.lbRight}`} onClick={goNext} aria-label="Next image"><ChevronRight size={32} /></button>
        </div>
      )}
    </section>
  );
}
