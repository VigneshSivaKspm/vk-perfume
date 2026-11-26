import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, type Location } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';

import { ScrollToTop } from './components/layout/ScrollToTop';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/layout/Footer';
import { PageBackgroundLayer } from './components/animations/PageBackground';
import { PageTransitionProvider } from './components/animations/PageTransitionContext';
import { usePageTransition } from './components/animations/pageTransitionStore';
import { PageTransitionManager } from './components/animations/PageTransitionManager';
import { COMPANY_INFO } from './data/company';
import {
  loadHome,
  loadAbout,
  loadCollections,
  loadFragranceDetail,
  loadManufacturing,
  loadPrivateLabel,
  loadCraftsmanship,
  loadPackaging,
  loadProcess,
  loadUpcomingLaunch,
  loadLookbook,
  loadContact,
  loadFAQ,
  loadPrivacy,
  loadTerms,
  loadNotFound,
} from './routes/routeLoaders';

const ChatWidget = lazy(() => import('./components/chat/ChatWidget').then(m => ({ default: m.ChatWidget })));

// Lazy-loaded route pages sharing chunk loaders with route prefetching
const Home = lazy(() => loadHome().then(m => ({ default: m.Home })));
const About = lazy(() => loadAbout().then(m => ({ default: m.About })));
const Collections = lazy(() => loadCollections().then(m => ({ default: m.Collections })));
const FragranceDetail = lazy(() => loadFragranceDetail().then(m => ({ default: m.FragranceDetail })));
const Manufacturing = lazy(() => loadManufacturing().then(m => ({ default: m.Manufacturing })));
const PrivateLabel = lazy(() => loadPrivateLabel().then(m => ({ default: m.PrivateLabel })));
const Craftsmanship = lazy(() => loadCraftsmanship().then(m => ({ default: m.Craftsmanship })));
const Packaging = lazy(() => loadPackaging().then(m => ({ default: m.Packaging })));
const Process = lazy(() => loadProcess().then(m => ({ default: m.Process })));
const UpcomingLaunch = lazy(() => loadUpcomingLaunch().then(m => ({ default: m.UpcomingLaunch })));
const Lookbook = lazy(() => loadLookbook().then(m => ({ default: m.Lookbook })));
const Contact = lazy(() => loadContact().then(m => ({ default: m.Contact })));
const FAQ = lazy(() => loadFAQ().then(m => ({ default: m.FAQ })));
const Privacy = lazy(() => loadPrivacy().then(m => ({ default: m.Privacy })));
const Terms = lazy(() => loadTerms().then(m => ({ default: m.Terms })));
const NotFound = lazy(() => loadNotFound().then(m => ({ default: m.NotFound })));

// Luxury fallback preloader
const PagePreloader: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4 bg-ivory-100">
    <div className="relative w-16 h-16 flex items-center justify-center animate-pulse">
      <img
        src={COMPANY_INFO.monogramAsset}
        alt="VK Monogram Loading"
        className="w-12 h-12 object-contain"
      />
    </div>
    <div className="flex flex-col items-center">
      <span className="font-serif text-sm tracking-widest text-charcoal font-semibold uppercase">
        VK PERFUMES
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-gold mt-0.5">
        Haute Parfumerie
      </span>
      <div className="mt-3 h-0.5 w-24 rounded-full bg-gradient-to-r from-[#B9B52A] via-[#02A262] to-[#2CEEEC] opacity-85" />
    </div>
  </div>
);

const AppShell: React.FC = () => {
  const transitionCtx = usePageTransition();
  const registerLenis = transitionCtx?.registerLenis;

  useEffect(() => {
    // Check for user reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    registerLenis?.(lenis);

    let animFrame = 0;
    function raf(time: number) {
      lenis.raf(time);
      animFrame = requestAnimationFrame(raf);
    }

    animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      registerLenis?.(null);
      lenis.destroy();
    };
  }, [registerLenis]);

  const renderFrozenRoutes = (frozenLocation: Location) => (
    <Suspense fallback={<PagePreloader />}>
      <Routes location={frozenLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/fragrances/:slug" element={<FragranceDetail />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/private-label" element={<PrivateLabel />} />
        <Route path="/craftsmanship" element={<Craftsmanship />} />
        <Route path="/ingredients" element={<Navigate to="/craftsmanship" replace />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/process" element={<Process />} />
        <Route path="/upcoming-launch" element={<UpcomingLaunch />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/gallery" element={<Navigate to="/lookbook" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal font-sans selection:bg-brand-teal selection:text-pure relative">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 min-h-screen">
        <PageTransitionManager renderRoutes={renderFrozenRoutes} />
      </main>

      <PageBackgroundLayer />
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <PageTransitionProvider>
          <AppShell />
        </PageTransitionProvider>
      </Router>
    </MotionConfig>
  );
};

export default App;
