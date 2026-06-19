import { useState } from 'react';
import { submitReview } from '../services/reviews';
import StarRating from './StarRating';
import Button from './Button';
import styles from './ReviewForm.module.css';

const INITIAL = { name: '', review: '', rating: 0 };

export default function ReviewForm() {
  const [form,      setForm]      = useState(INITIAL);
  const [loading,   setLoading]   = useState(false);
  const [success,   setSuccess]   = useState(false);
  const [error,     setError]     = useState(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async () => {
    setError(null);
    if (!form.name.trim())   return setError('Please enter your name.');
    if (form.rating === 0)   return setError('Please select a star rating.');
    if (!form.review.trim()) return setError('Please write your experience.');

    setLoading(true);
    const { error: submitError } = await submitReview(form);
    setLoading(false);

    if (submitError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSuccess(true);
      setForm(INITIAL);
    }
  };

  if (success) {
    return (
      <div className={styles.successBox} role="status" aria-live="polite">
        <span className={styles.successIcon}>✓</span>
        <p className={styles.successTitle}>Thank you! Your review has been received.</p>
        <p className={styles.successSub}>It will appear after we review and approve it.</p>
        <button className={styles.resetBtn} onClick={() => setSuccess(false)}>Leave another review</button>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Share Your Experience</h3>

      <div className={styles.starsRow}>
        <StarRating
          value={form.rating}
          interactive
          onChange={(v) => setForm((f) => ({ ...f, rating: v }))}
          size="lg"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="review-name">Name</label>
        <input
          id="review-name"
          type="text"
          className={styles.input}
          placeholder="Your Name"
          value={form.name}
          onChange={update('name')}
          maxLength={80}
          autoComplete="name"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="review-text">Your Experience</label>
        <textarea
          id="review-text"
          className={styles.textarea}
          placeholder="Tell us about your adventure"
          value={form.review}
          onChange={update('review')}
          rows={5}
          maxLength={1000}
        />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <Button variant="blue" onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting…' : 'Submit Review'}
      </Button>
    </div>
  );
}
