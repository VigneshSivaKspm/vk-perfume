import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { FragranceBottle } from '../components/fragrance/FragranceBottle';
import { FRAGRANCES } from '../data/fragrances';

export const Collections: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Oud & Woody',
    'Floral Luminous',
    'Fresh Aquatic',
    'Solar Citrus',
    'Sweet Gourmand'
  ];

  const filteredFragrances = selectedCategory === 'All'
    ? FRAGRANCES
    : FRAGRANCES.filter(f => f.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="The Five Haute Collections"
        description="Explore the five upcoming signature fragrance flacons by VK Perfumes: Imperial Oud, Madurai Jasmine Lumière, Coromandel Oceanic Mist, Soleil de Coonoor Citrus, and Velours Vanilla."
      />

      <PageBackground variant="collections" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Haute Collection • Tamil Nadu Launch Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          Five Sovereign Olfactive Visions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Every fragrance in this showcase represents a distinct sculptural flacon silhouette, bespoke botanical extraction, and sensory narrative formulated in Tamil Nadu.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-charcoal text-ivory-100 shadow-md scale-105'
                  : 'bg-white text-charcoal border border-champagne/80 hover:border-gold hover:bg-ivory-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Fragrances Presentation List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AnimatePresence mode="wait">
          {filteredFragrances.map((fragrance, index) => (
            <motion.div
              key={fragrance.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 sm:p-12 lg:p-16 border shadow-luxury transition-all duration-700 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              style={{
                backgroundColor: fragrance.colors.bgLight,
                borderColor: fragrance.colors.border
              }}
            >
              {/* Background ambient light */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-25 pointer-events-none"
                style={{ backgroundColor: fragrance.colors.accent }}
              />

              {/* Left / Bottle 3D Presentation */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[420px]">
                <FragranceBottle
                  type={fragrance.visualType}
                  size="lg"
                  interactive={true}
                />
                <span className="text-[10px] text-charcoal/50 uppercase tracking-widest mt-2">
                  Bespoke Concept Flacon N° {fragrance.number}
                </span>
              </div>

              {/* Right / Information & Storytelling */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-charcoal/10">
                  <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
                    {fragrance.subtitle}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm sm:text-base font-serif font-semibold text-charcoal">
                      {fragrance.price.formatted} <span className="text-[10px] text-charcoal/60 font-sans font-normal">(100ml)</span>
                    </span>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: fragrance.colors.pillBg,
                        borderColor: fragrance.colors.border,
                        color: fragrance.colors.secondary
                      }}
                    >
                      {fragrance.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-medium">
                    {fragrance.name}
                  </h2>
                  <p className="text-sm sm:text-base italic font-serif text-charcoal-light">
                    "{fragrance.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                  {fragrance.story}
                </p>

                {/* Bottle Architecture Specification */}
                <div className="p-4 rounded-2xl bg-white/60 border border-champagne/60 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                    Flacon Architecture:
                  </div>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    <strong className="text-charcoal">{fragrance.bottle.silhouette}</strong> with {fragrance.bottle.glass}, finished with {fragrance.bottle.cap}.
                  </p>
                </div>

                {/* Notes Summary */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">
                    Key Olfactory Pyramid Accords:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...fragrance.notes.top, ...fragrance.notes.heart, ...fragrance.notes.base].slice(0, 5).map((n, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/80 border border-champagne text-charcoal shadow-2xs"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to={`/fragrances/${fragrance.slug}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300 shadow-md group"
                  >
                    <span>View Dedicated Fragrance Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/upcoming-launch"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne bg-white text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    <span>Pre-Launch Allocation</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};
