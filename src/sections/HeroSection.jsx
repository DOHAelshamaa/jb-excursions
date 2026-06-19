import { useEffect, useState } from 'react';
import { HERO } from '../data/config';
import Button from '../components/Button';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const t = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Change image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleExploreTours = (e) => {
    e.preventDefault();
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero">
      {/* Background Slideshow */}
      <div className={styles.mediaBg}>
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            aria-hidden="true"
            className={`${styles.heroImage} ${
              index === currentImage ? styles.active : ''
            }`}
          />
        ))}

        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Content */}
      <div className={styles.contentWrap}>
        <div className={`${styles.content} ${textVisible ? styles.visible : ''}`}>
          <h1 className={styles.heading}>
            <span className={styles.line1}>{HERO.heading1}</span>
            <span className={styles.line2}>{HERO.heading2}</span>
          </h1>

          <p className={styles.sub}>{HERO.subheading}</p>

          <div className={styles.buttons}>
            <Button
              href={HERO.cta1.href}
              variant="solid"
              target="_blank"
            >
              {HERO.cta1.label}
            </Button>

            <Button
              href={HERO.cta2.href}
              variant="outline"
              onClick={handleExploreTours}
            >
              {HERO.cta2.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}