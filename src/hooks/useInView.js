import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView] — inView becomes true once the element enters the viewport.
 * Stays true after first trigger (one-shot).
 *
 * Mobile-hardened:
 * - Lower default threshold (mobile viewports are short; tall cards may never
 *   hit a high intersection ratio).
 * - Positive bottom rootMargin extends the trigger zone past the viewport
 *   edge, so stacked mobile cards flip to visible before they're fully
 *   scrolled into view, instead of needing an exact intersection.
 * - Falls back to visible=true if IntersectionObserver isn't supported.
 * - A 1.5s safety-net timeout guarantees content is never left permanently
 *   invisible if the observer is delayed or skipped by a particular browser.
 */
export function useInView(options = {}) {
  // Positive bottom rootMargin means the trigger zone extends *past* the
  // bottom of the viewport, so elements lower on the page (e.g. stacked
  // mobile cards) flip to visible slightly before they're fully scrolled
  // into view, instead of requiring an exact, easily-missed intersection.
  const { threshold = 0.05, rootMargin = '0px 0px 100px 0px' } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver support — just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Safety net: if for any reason the observer never fires (layout
    // shifts, browser quirks, etc.), don't leave content permanently
    // hidden — reveal it after a short delay regardless.
    const fallback = setTimeout(() => setInView(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold, rootMargin]);

  return [ref, inView];
}
