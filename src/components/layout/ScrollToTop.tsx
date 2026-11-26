import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { prefetchAllRoutes, prefetchRoute } from '../../routes/routeLoaders';
import { usePageTransition } from '../animations/pageTransitionStore';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const transitionCtx = usePageTransition();

  // Warm up lazy route chunks after initial mount & on link hover/focus so transitions never stall
  useEffect(() => {
    const idleTimer = window.setTimeout(() => {
      prefetchAllRoutes();
    }, 1100);

    const handleWarm = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('/')) {
        prefetchRoute(href);
      }
    };

    document.addEventListener('pointerover', handleWarm, { passive: true });
    document.addEventListener('focusin', handleWarm, { passive: true });

    return () => {
      window.clearTimeout(idleTimer);
      document.removeEventListener('pointerover', handleWarm);
      document.removeEventListener('focusin', handleWarm);
    };
  }, []);

  // Fallback when rendered outside PageTransitionProvider
  useEffect(() => {
    if (transitionCtx) return;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, transitionCtx]);

  return null;
};
