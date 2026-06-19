import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView] — inView becomes true once the element enters the viewport.
 * Stays true after first trigger (one-shot).
 *
 * Mobile-hardened:
 * - Lower default threshold (mobile viewports are short; tall cards may never
 *   hit a high intersection ratio).
 * - rootMargin pre-triggers slightly before the element is fully on-screen,
 *   so content doesn't stay invisible until scrolled awkwardly far.
 * - Checks getBoundingClientRect() synchronously on mount in case the element
 *   is already in the viewport when it mounts (e.g. above-the-fold on load,
 *   or content injected after a route change) — some mobile browsers delay
 *   or skip the first IntersectionObserver callback in that situation.
 * - Falls back to visible=true if IntersectionObserver isn't supported.
 */
export function useInView(options = {}) {
  const { threshold = 0.05, rootMargin = '0px 0px -10% 0px' } = options;
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

    // If the element is already in (or near) the viewport on mount,
    // mark it visible immediately instead of waiting on the observer.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < viewportHeight && rect.bottom > 0) {
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
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
