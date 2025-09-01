import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (enabled: boolean = true) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;
    
    // Use a small timeout to ensure the DOM is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, enabled]);
};
