import { createContext, useContext } from 'react';
import type Lenis from 'lenis';
import type { BackgroundAnimationVariant } from './PageBackground';

export interface PageTransitionContextValue {
  registerLenis: (lenis: Lenis | null) => void;
  resetScrollPosition: (hash?: string) => void;
  backgroundVariant: BackgroundAnimationVariant;
  setBackgroundVariant: (variant: BackgroundAnimationVariant) => void;
}

export const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function usePageTransition() {
  return useContext(PageTransitionContext);
}
