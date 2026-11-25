import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';

import { ScrollToTop } from './components/layout/ScrollToTop';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/layout/Footer';
import { ChatWidget } from './components/chat/ChatWidget';
import { COMPANY_INFO } from './data/company';

// Lazy-loaded route pages for optimal Core Web Vitals and performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Collections = lazy(() => import('./pages/Collections').then(m => ({ default: m.Collections })));
const FragranceDetail = lazy(() => import('./pages/FragranceDetail').then(m => ({ default: m.FragranceDetail })));
const Manufacturing = lazy(() => import('./pages/Manufacturing').then(m => ({ default: m.Manufacturing })));
const PrivateLabel = lazy(() => import('./pages/PrivateLabel').then(m => ({ default: m.PrivateLabel })));
const Craftsmanship = lazy(() => import('./pages/Craftsmanship').then(m => ({ default: m.Craftsmanship })));
const Packaging = lazy(() => import('./pages/Packaging').then(m => ({ default: m.Packaging })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const UpcomingLaunch = lazy(() => import('./pages/UpcomingLaunch').then(m => ({ default: m.UpcomingLaunch })));
const Lookbook = lazy(() => import('./pages/Lookbook').then(m => ({ default: m.Lookbook })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));
const Privacy = lazy(() => import('./pages/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

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
    </div>
  </div>
);

export const App: React.FC = () => {
  useEffect(() => {
    // Check for user reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal font-sans selection:bg-gold/20 selection:text-charcoal-dark relative">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1">
          <Suspense fallback={<PagePreloader />}>
            <Routes>
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
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
