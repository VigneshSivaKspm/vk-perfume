import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, type Location } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  getCanonicalRouteKey,
  getTransitionConfig,
  type PageTransitionConfig,
} from './pageTransitions';
import { TransitionCurtain, type CurtainPhase } from './TransitionCurtain';
import { usePageTransition } from './pageTransitionStore';

interface PageTransitionManagerProps {
  renderRoutes: (frozenLocation: Location) => React.ReactNode;
}

interface CurtainSession {
  id: number;
  phase: CurtainPhase;
  config: PageTransitionConfig;
}

export const PageTransitionManager: React.FC<PageTransitionManagerProps> = ({ renderRoutes }) => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const transitionCtx = usePageTransition();

  const routeKey = useMemo(() => getCanonicalRouteKey(location.pathname), [location.pathname]);
  const config = useMemo(() => getTransitionConfig(location.pathname), [location.pathname]);

  const [prevRouteKey, setPrevRouteKey] = useState<string>(routeKey);
  const [sessionId, setSessionId] = useState<number>(0);
  const [curtain, setCurtain] = useState<CurtainSession | null>(null);

  const prevHashRef = useRef<string>(location.hash);
  const activeHashRef = useRef<string>(location.hash);

  // Synchronously initiate the cover curtain on the exact render frame routeKey changes (zero 1-frame flash)
  if (prevRouteKey !== routeKey) {
    setPrevRouteKey(routeKey);
    if (prefersReducedMotion) {
      if (curtain !== null) setCurtain(null);
    } else if (curtain && curtain.phase === 'cover') {
      setCurtain({ id: curtain.id, phase: 'cover', config });
    } else {
      const nextId = sessionId + 1;
      setSessionId(nextId);
      setCurtain({ id: nextId, phase: 'cover', config });
    }
  }

  const revealCurtain = useCallback(
    (targetSessionId?: number) => {
      transitionCtx?.resetScrollPosition(activeHashRef.current || undefined);

      setCurtain((prev) => {
        if (!prev) return null;
        if (targetSessionId !== undefined && prev.id !== targetSessionId) return prev;
        if (prev.phase === 'reveal') return prev;
        return { ...prev, phase: 'reveal' };
      });
    },
    [transitionCtx]
  );

  // Handle reduced-motion route scroll resets & same-route hash navigation
  useEffect(() => {
    activeHashRef.current = location.hash;

    if (prefersReducedMotion) {
      transitionCtx?.resetScrollPosition(location.hash || undefined);
      prevHashRef.current = location.hash;
      return;
    }

    if (location.hash && prevHashRef.current !== location.hash && !curtain) {
      transitionCtx?.resetScrollPosition(location.hash);
    }
    prevHashRef.current = location.hash;
  }, [routeKey, location.hash, prefersReducedMotion, curtain, transitionCtx]);

  // Safety watchdog so cover phase can never hang even if a browser tab is backgrounded
  useEffect(() => {
    if (!curtain || curtain.phase !== 'cover') return;
    const timer = window.setTimeout(() => {
      revealCurtain(curtain.id);
    }, 720);
    return () => window.clearTimeout(timer);
  }, [curtain, revealCurtain]);

  // Safety fallback so reveal curtain always clears cleanly
  useEffect(() => {
    if (!curtain || curtain.phase !== 'reveal') return;
    const timer = window.setTimeout(() => {
      setCurtain((prev) => (prev && prev.id === curtain.id ? null : prev));
    }, Math.round((curtain.config.curtainRevealDuration + 0.4) * 1000));
    return () => window.clearTimeout(timer);
  }, [curtain]);

  const handleExitComplete = useCallback(() => {
    if (prefersReducedMotion) {
      transitionCtx?.resetScrollPosition(activeHashRef.current || undefined);
      return;
    }
    revealCurtain();
  }, [prefersReducedMotion, revealCurtain, transitionCtx]);

  const handleRevealComplete = useCallback((completedId: number) => {
    setCurtain((prev) => (prev && prev.id === completedId ? null : prev));
  }, []);

  const reducedMotionVariants = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.16 } },
      exit: { opacity: 0, transition: { duration: 0.12 } },
    }),
    []
  );

  return (
    <>
      {curtain && !prefersReducedMotion && (
        <TransitionCurtain
          key={curtain.id}
          phase={curtain.phase}
          config={curtain.config}
          onRevealComplete={() => handleRevealComplete(curtain.id)}
        />
      )}

      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <motion.div
          key={routeKey}
          variants={prefersReducedMotion ? reducedMotionVariants : config.stageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-screen"
        >
          {renderRoutes(location)}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
