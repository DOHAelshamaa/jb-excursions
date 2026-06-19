import { useState, useEffect } from 'react';

/**
 * Returns the id of the section currently in view.
 * @param {string[]} sectionIds
 * @param {{ rootMargin?: string }} options
 */
export function useScrollSpy(sectionIds, { rootMargin = '-40% 0px -55% 0px' } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, rootMargin]);

  return activeId;
}
