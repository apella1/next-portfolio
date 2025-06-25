'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // find the closest anchor element in case we clicked on a child element
      const anchor = target.closest('a');
      if (anchor && anchor.hash) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          // update URL without the jump
          history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
