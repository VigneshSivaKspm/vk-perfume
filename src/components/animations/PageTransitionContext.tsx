import React, { useCallback, useRef, useState } from 'react';
import type Lenis from 'lenis';
import type { BackgroundAnimationVariant } from './PageBackground';
import { PageTransitionContext } from './pageTransitionStore';

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [backgroundVariant, setBackgroundVariantState] =
    useState<BackgroundAnimationVariant>('home');

  const registerLenis = useCallback((lenis: Lenis | null) => {
    lenisRef.current = lenis;
  }, []);

  const setBackgroundVariant = useCallback((variant: BackgroundAnimationVariant) => {
    setBackgroundVariantState((prev) => (prev === variant ? prev : variant));
  }, []);

  const resetScrollPosition = useCallback((hash?: string) => {
    const lenis = lenisRef.current;

    if (hash) {
      const targetId = hash.replace(/^#/, '');
      const scrollToTarget = () => {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis) {
            lenis.scrollTo(el, { offset: -96, immediate: true });
          } else {
            const top = el.getBoundingClientRect().top + window.scrollY - 96;
            window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' as ScrollBehavior });
          }
          return true;
        }
        return false;
      };

      requestAnimationFrame(() => {
        if (!scrollToTarget()) {
          window.setTimeout(() => {
            if (!scrollToTarget()) {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
            }
          }, 60);
        }
      });
      return;
    }

    if (lenis) {
      lenis.stop();
      lenis.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      lenis.start();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        registerLenis,
        resetScrollPosition,
        backgroundVariant,
        setBackgroundVariant,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};
