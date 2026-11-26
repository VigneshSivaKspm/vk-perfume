import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { FRAGRANCES } from '../../data/fragrances';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fragranceDropdownOpen, setFragranceDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    setMobileMenuOpen(false);
    setFragranceDropdownOpen(false);
  }, [location.pathname]);

  // Luxury streamlined links: Logo acts as universal Home anchor
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Collections', href: '/collections', hasDropdown: true },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Private Label', href: '/private-label' },
    { name: 'Craftsmanship', href: '/craftsmanship' },
    { name: 'Launch 2026', href: '/upcoming-launch', highlight: true },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-white/95 shadow-luxury border-b border-champagne/40'
            : 'py-3.5 sm:py-4 lg:py-5 bg-ivory-100/95'
        }`}
      >
        {/* Constrained container with safe padding from window edge & scrollbar */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Monogram (Universal Home Anchor) */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg select-none"
              title="VK Perfumes — Return to Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 xl:w-10 xl:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img
                  src={COMPANY_INFO.monogramAsset}
                  alt="VK Perfumes Crowned Monogram"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg xl:text-xl font-semibold tracking-wider text-charcoal leading-none group-hover:text-gold transition-colors whitespace-nowrap">
                  VK PERFUMES
                </span>
                <span className="text-[8px] sm:text-[8.5px] xl:text-[9px] tracking-[0.22em] uppercase font-medium text-gold font-sans mt-0.5 whitespace-nowrap">
                  Haute Parfumerie • Tamil Nadu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Calibrated to fit without overflow */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 2xl:gap-2.5 shrink"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setFragranceDropdownOpen(true)}
                      onMouseLeave={() => setFragranceDropdownOpen(false)}
                    >
                      <Link
                        to={link.href}
                        className={`relative inline-flex items-center gap-1 px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[10.5px] xl:text-[11px] 2xl:text-[11.5px] uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium whitespace-nowrap transition-colors duration-200 ${
                          active
                            ? 'text-charcoal font-semibold'
                            : 'text-charcoal/75 hover:text-charcoal'
                        }`}
                      >
                        <span className="relative py-1">
                          {link.name}
                          {active && (
                            <motion.span
                              layoutId="navActiveUnderline"
                              className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#B9B52A] via-[#02A262] to-[#2CEEEC] rounded-full"
                              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                          )}
                        </span>
                        <ChevronDown className="w-3 h-3 text-gold shrink-0 transition-transform duration-200" />
                      </Link>

                      {/* Fragrance Dropdown Menu */}
                      <AnimatePresence>
                        {fragranceDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-white/95 p-3 border border-champagne/60 shadow-luxury-hover z-50"
                          >
                            <div className="text-[10px] uppercase tracking-widest font-semibold text-gold px-3 py-1.5 border-b border-champagne/30">
                              Five Signature Launches
                            </div>
                            <div className="mt-1 space-y-1">
                              {FRAGRANCES.map((f) => (
                                <Link
                                  key={f.id}
                                  to={`/fragrances/${f.slug}`}
                                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-ivory-100 transition-colors group/item"
                                >
                                  <div>
                                    <div className="text-xs font-serif font-medium text-charcoal group-hover/item:text-gold transition-colors">
                                      {f.name}
                                    </div>
                                    <div className="text-[10px] text-charcoal-light">
                                      {f.category}
                                    </div>
                                  </div>
                                  <span className="text-[10px] font-serif text-gold shrink-0 ml-2">
                                    N° {f.number}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-champagne/30">
                              <Link
                                to="/collections"
                                className="block text-center text-[11px] font-semibold text-charcoal hover:text-gold py-1"
                              >
                                View All 5 Collections →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative inline-flex items-center px-2 xl:px-2.5 2xl:px-3 py-1.5 text-[10.5px] xl:text-[11px] 2xl:text-[11.5px] uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium whitespace-nowrap transition-colors duration-200 ${
                      active
                        ? 'text-charcoal font-semibold'
                        : link.highlight
                        ? 'text-gold font-semibold hover:text-gold-dark'
                        : 'text-charcoal/75 hover:text-charcoal'
                    }`}
                  >
                    <span className="relative py-1 flex items-center">
                      <span>{link.name}</span>
                      {link.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gold ml-1 shrink-0 animate-pulse" />
                      )}
                      {active && (
                        <motion.span
                          layoutId="navActiveUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#B9B52A] via-[#02A262] to-[#2CEEEC] rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTA Button — Guaranteed Safe Width & Position */}
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                to="/contact?type=private-label"
                className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-4 2xl:px-5 py-2 xl:py-2.5 rounded-full bg-charcoal text-ivory-100 text-[10px] xl:text-[11px] uppercase tracking-[0.14em] xl:tracking-[0.16em] font-medium hover:bg-gold transition-all duration-300 shadow-xs whitespace-nowrap shrink-0 group"
              >
                <span>B2B Inquiries</span>
                <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </Link>
            </div>

            {/* Mobile Actions & Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <Link
                to="/contact"
                className="px-3 py-1.5 rounded-full bg-charcoal text-ivory-100 text-[11px] font-medium whitespace-nowrap"
              >
                Inquire
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal hover:bg-ivory-200 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 border-b border-champagne/60 shadow-luxury-hover lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              {/* Monogram Brand header */}
              <div className="flex items-center gap-3 pb-4 border-b border-champagne/40">
                <img
                  src={COMPANY_INFO.monogramAsset}
                  alt="VK Logo"
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <div className="font-serif font-semibold text-charcoal text-base">VK Perfumes</div>
                  <div className="text-[10px] text-gold uppercase tracking-widest">Tamil Nadu, India</div>
                </div>
              </div>

              {/* Navigation Links List */}
              <div className="grid grid-cols-1 gap-2">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                    isLinkActive('/')
                      ? 'bg-ivory-200 text-charcoal font-semibold'
                      : 'text-charcoal/80 hover:bg-ivory-100'
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                      isLinkActive(link.href)
                        ? 'bg-ivory-200 text-charcoal font-semibold'
                        : 'text-charcoal/80 hover:bg-ivory-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      {link.highlight && (
                        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-gold/15 text-gold">
                          New
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Fragrance direct links */}
              <div className="pt-4 border-t border-champagne/40">
                <div className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">
                  The 5 Launch Fragrances
                </div>
                <div className="space-y-1.5">
                  {FRAGRANCES.map((f) => (
                    <Link
                      key={f.id}
                      to={`/fragrances/${f.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-charcoal hover:bg-ivory-100"
                    >
                      <span className="font-serif">{f.name}</span>
                      <span className="text-gold text-[10px]">N° {f.number}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Mobile Inquiries Button */}
              <div className="pt-4 border-t border-champagne/40">
                <Link
                  to="/contact?type=private-label"
                  className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-medium hover:bg-gold transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-gold-light group-hover:text-pure transition-colors" />
                  <span>Private Label & B2B Inquiries</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
