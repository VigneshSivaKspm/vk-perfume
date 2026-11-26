import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wind, Flame } from 'lucide-react';

interface FragrancePyramidProps {
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  accentColor?: string;
  pillBg?: string;
}

export const FragrancePyramid: React.FC<FragrancePyramidProps> = ({
  notes,
  accentColor = '#01706C',
  pillBg = '#EAF2EE'
}) => {
  const [activeTier, setActiveTier] = useState<'top' | 'heart' | 'base'>('heart');

  const tiers = [
    {
      id: 'top' as const,
      name: 'Top Notes — Initial Luminescence',
      duration: 'First 15 to 45 Minutes',
      description: 'The volatile initial impression, setting the aura and opening the olfactive narrative.',
      icon: Wind,
      items: notes.top,
      percentage: '20% Evaporation Phase'
    },
    {
      id: 'heart' as const,
      name: 'Heart Notes — The Olfactory Soul',
      duration: '45 Minutes to 5 Hours',
      description: 'The core identity and emotional presence of the composition, revealing rich florals, woods, and resins.',
      icon: Sparkles,
      items: notes.heart,
      percentage: '45% True Identity'
    },
    {
      id: 'base' as const,
      name: 'Base Notes — The Enduring Anchor',
      duration: '6 to 24+ Hours Sillage',
      description: 'Heavy molecular weight fixatives that bond intimately with natural skin warmth, creating the memorable dry-down.',
      icon: Flame,
      items: notes.base,
      percentage: '35% Fixative Sillage'
    }
  ];

  return (
    <div className="w-full bg-white/90 rounded-2xl p-6 sm:p-8 border border-champagne/40 shadow-luxury">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-champagne/40 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Sensory Architecture</span>
          <h3 className="text-2xl font-serif text-charcoal font-medium mt-1">Olfactory Pyramid & Evaporation Dynamics</h3>
        </div>
        <div className="flex items-center gap-1.5 bg-ivory-200/80 p-1 rounded-full self-start sm:self-auto">
          {tiers.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTier(t.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTier === t.id
                  ? 'bg-charcoal text-ivory-100 shadow-sm'
                  : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              {t.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Pyramid Representation */}
        <div className="lg:col-span-5 flex flex-col items-center gap-3 py-4">
          {/* Top Layer */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveTier('top')}
            className={`cursor-pointer w-44 sm:w-52 py-3 px-4 rounded-xl text-center border transition-all duration-300 ${
              activeTier === 'top'
                ? 'shadow-md border-gold bg-ivory-50 scale-105'
                : 'border-champagne/60 bg-white/60 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="text-[10px] uppercase tracking-widest font-semibold text-gold">Top Accord</div>
            <div className="text-sm font-serif font-semibold text-charcoal">{notes.top[0]} & More</div>
          </motion.div>

          {/* Heart Layer */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveTier('heart')}
            className={`cursor-pointer w-64 sm:w-72 py-3.5 px-4 rounded-xl text-center border transition-all duration-300 ${
              activeTier === 'heart'
                ? 'shadow-md border-gold bg-ivory-50 scale-105'
                : 'border-champagne/60 bg-white/60 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="text-[10px] uppercase tracking-widest font-semibold text-gold">Heart Accord (The Soul)</div>
            <div className="text-sm font-serif font-semibold text-charcoal">{notes.heart[0]} & Accords</div>
          </motion.div>

          {/* Base Layer */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveTier('base')}
            className={`cursor-pointer w-80 sm:w-88 py-4 px-4 rounded-xl text-center border transition-all duration-300 ${
              activeTier === 'base'
                ? 'shadow-md border-gold bg-ivory-50 scale-105'
                : 'border-champagne/60 bg-white/60 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="text-[10px] uppercase tracking-widest font-semibold text-gold">Base Accord (Enduring Sillage)</div>
            <div className="text-sm font-serif font-semibold text-charcoal">{notes.base[0]} & Resins</div>
          </motion.div>
        </div>

        {/* Selected Tier Note Details */}
        <div className="lg:col-span-7">
          {tiers.map((t) => {
            if (t.id !== activeTier) return null;
            const Icon = t.icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-charcoal"
                    style={{ backgroundColor: pillBg }}
                  >
                    <Icon className="w-5 h-5 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-semibold text-charcoal">{t.name}</h4>
                    <p className="text-xs text-charcoal-light">{t.duration} • {t.percentage}</p>
                  </div>
                </div>

                <p className="text-sm text-charcoal/80 leading-relaxed">{t.description}</p>

                <div className="pt-2">
                  <div className="text-xs uppercase tracking-wider font-semibold text-charcoal-light mb-2.5">
                    Characterizing Botanical Accords
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors shadow-2xs"
                        style={{
                          backgroundColor: pillBg,
                          borderColor: accentColor,
                          color: '#013E43'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
