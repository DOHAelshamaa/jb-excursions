import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { STATIC_TESTIMONIALS } from '../data/config';
import { fetchApprovedReviews } from '../services/reviews';
import ReviewForm from '../components/ReviewForm';
import { useInView } from '../hooks/useInView';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const [current,   setCurrent]   = useState(0);
  const [reviews,   setReviews]   = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Merge static testimonials with Supabase approved reviews
  const allTestimonials = [
    ...STATIC_TESTIMONIALS,
    ...reviews.map((r) => ({
      id: r.id,
      quote: r.review,
      name: r.name,
      role: 'Verified Guest',
      rating: r.rating,
    })),
  ];

  useEffect(() => {
    fetchApprovedReviews().then(({ data }) => {
      setReviews(data);
      setLoading(false);
    });
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? allTestimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === allTestimonials.length - 1 ? 0 : c + 1));

  const active = allTestimonials[current] ?? allTestimonials[0];

  return (
    <section id="contact" className={styles.section} aria-label="Testimonials and Reviews">
      {/* Testimonial Carousel */}
      <div ref={ref} className={`${styles.carousel} fade-up ${inView ? 'visible' : ''}`}>
        <p className={styles.eyebrow}>TESTIMONIALS</p>

        {active && (
          <div className={styles.quoteWrap} aria-live="polite" aria-atomic="true">
            {active.rating && (
              <div className={styles.starRating} aria-label={`Rated ${active.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < active.rating ? styles.starFilled : styles.starEmpty}
                    fill={i < active.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            )}
            <blockquote className={styles.quote}>"{active.quote}"</blockquote>
            <div className={styles.author}>
              <span className={styles.authorName}>{active.name}</span>
              {active.role && (
                <span className={styles.authorRole}>{active.role.toUpperCase()}</span>
              )}
            </div>
          </div>
        )}

        <div className={styles.arrows} aria-label="Testimonial navigation">
          <button className={styles.arrowBtn} onClick={prev} aria-label="Previous testimonial">
            <ChevronLeft size={18} />
          </button>
          <button className={styles.arrowBtn} onClick={next} aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Review Form */}
      <div className={`${styles.formRow} fade-up ${inView ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
        <ReviewForm />
      </div>
    </section>
  );
}
