import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { FRAGRANCES } from '../../data/fragrances';
import { FragranceBottle } from './FragranceBottle';

export const FragranceSelector: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string>('Deep & Mysterious');

  const activeFragrance = FRAGRANCES.find((f) => f.mood === selectedMood) || FRAGRANCES[0];

  const moodProfiles = [
    { mood: 'Deep & Mysterious', label: 'Deep & Mysterious', fragrance: FRAGRANCES[0], icon: '✦' },
    { mood: 'Elegant & Floral', label: 'Elegant & Floral', fragrance: FRAGRANCES[1], icon: '❀' },
    { mood: 'Fresh & Serene', label: 'Fresh & Serene', fragrance: FRAGRANCES[2], icon: '≋' },
    { mood: 'Bright & Energizing', label: 'Bright & Energizing', fragrance: FRAGRANCES[3], icon: '☼' },
    { mood: 'Warm & Indulgent', label: 'Warm & Indulgent', fragrance: FRAGRANCES[4], icon: '♨' },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700" style={{ backgroundColor: activeFragrance.colors.bgLight }}>
      {/* Background ambient radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 70% 40%, ${activeFragrance.colors.accent} 0%, transparent 60%)`
        }}
      />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>Interactive Olfactory Guide</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-normal tracking-tight">
            Discover Your Signature Scent
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light leading-relaxed">
            Select an olfactive temperament to reveal the artisanal formulation sculpted for your presence.
          </p>
        </div>

        {/* Mood Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-16">
          {moodProfiles.map((p) => {
            const isSelected = selectedMood === p.mood;
            return (
              <button
                key={p.mood}
                onClick={() => setSelectedMood(p.mood)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-charcoal text-ivory-100 shadow-md border-charcoal scale-105'
                    : 'bg-white/80 text-charcoal hover:bg-white hover:border-gold/60 border-champagne/80'
                }`}
              >
                <span className="text-gold text-xs">{p.icon}</span>
                <span>{p.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="selectorPill"
                    className="absolute inset-0 rounded-full border-2 border-gold/40 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFragrance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-14 border border-champagne/60 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            {/* Left: Bottle Interactive 3D Visualizer */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
              <div
                className="absolute inset-0 rounded-full filter blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: activeFragrance.colors.accent }}
              />
              <FragranceBottle
                type={activeFragrance.visualType}
                size="lg"
                interactive={true}
              />
              <span className="text-[11px] text-charcoal/50 uppercase tracking-widest mt-4">
                Interactive Concept Silhouette • Tilt with Cursor
              </span>
            </div>

            {/* Right: Fragrance Profile & Olfactory Story */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  <span>{activeFragrance.subtitle}</span>
                  <span>•</span>
                  <span>{activeFragrance.category}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-medium leading-tight">
                  {activeFragrance.name}
                </h3>
                <p className="text-sm sm:text-base italic font-serif text-gold-dark mt-2">
                  "{activeFragrance.tagline}"
                </p>
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal tracking-tight">
                    {activeFragrance.price.formatted}
                  </span>
                  <span className="text-xs text-charcoal-light uppercase tracking-wider font-medium">
                    {activeFragrance.price.volume} • {activeFragrance.concentration.split(' ')[0]}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                {activeFragrance.story}
              </p>

              {/* Note Accords Highlight */}
              <div className="space-y-3 pt-2 border-t border-champagne/40">
                <div className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                  Key Olfactive Accords:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...activeFragrance.notes.top.slice(0, 2), ...activeFragrance.notes.heart.slice(0, 2), ...activeFragrance.notes.base.slice(0, 2)].map((note, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        backgroundColor: activeFragrance.colors.pillBg,
                        borderColor: activeFragrance.colors.border,
                        color: activeFragrance.colors.secondary
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Regional Heritage Callout */}
              <div className="p-4 rounded-xl bg-ivory-100/80 border border-champagne/60 text-xs text-charcoal/80 leading-relaxed">
                <span className="font-semibold text-charcoal">Tamil Nadu Terroir Note: </span>
                {activeFragrance.regionalHeritage}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to={`/fragrances/${activeFragrance.slug}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-charcoal text-ivory-100 text-sm font-medium tracking-wide hover:bg-gold transition-all duration-300 shadow-md group"
                >
                  <span>Explore Full Olfactive Profile</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/upcoming-launch"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-champagne bg-white text-charcoal text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <span>Reserve Launch Preview</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-xs text-charcoal-light/70 mt-8 font-light">
          *Note: Presented as an artistic fragrance personality exploration by VK Perfume master compounding studio.
        </p>
      </div>
    </section>
  );
};
