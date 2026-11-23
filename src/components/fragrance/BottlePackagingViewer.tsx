import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Box, Disc } from 'lucide-react';
import { FragranceBottle } from './FragranceBottle';

export const BottlePackagingViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'silhouette' | 'caps' | 'boxes'>('silhouette');
  const [selectedSilhouette, setSelectedSilhouette] = useState<'oud' | 'jasmine' | 'aquatic' | 'citrus' | 'vanilla'>('oud');
  const [selectedCapFinish, setSelectedCapFinish] = useState<string>('bronze');
  const [selectedBoxStyle, setSelectedBoxStyle] = useState<string>('rigid');

  const capFinishes = [
    { id: 'bronze', name: 'Brushed Architectural Bronze', color: '#8C7343', spec: 'Machined zinc alloy with satin directional brushing & heavy internal magnetic click closure.' },
    { id: 'rosegold', name: 'Polished Rose Gold Filigree', color: '#E8B49B', spec: 'Electroplated warm 18K rose gold sphere with laser-engraved floral arabesque detailing.' },
    { id: 'silver', name: 'Mirror Marine Chrome', color: '#B0C2CE', spec: 'High-polish rhodium finish with precision knurled tactile grip rings and anti-fingerprint coating.' },
    { id: 'gold', name: 'Satin Champagne Gold', color: '#D4AF37', spec: 'Micro-beaded satin gold finish with faceted geometric angles matching diamond-cut crystal shoulders.' },
    { id: 'fluted', name: 'Fluted Flacon Gold Crown', color: '#B59A68', spec: 'Solid brass casting with 36-rib axial fluting and weighted 85-gram ergonomic haptic heft.' }
  ];

  const boxStyles = [
    {
      id: 'rigid',
      name: 'Rigid Shoulder Presentation Box',
      finish: 'Warm Ivory Textured Linen & Gold Hot Foil',
      description: 'Hand-assembled 1200gsm grayboard core wrapped in natural FSC-certified cotton-linen paper with debossed gold foil monogramming and satin pull-ribbon.'
    },
    {
      id: 'vault',
      name: 'Vault Double-Door Coffer',
      finish: 'Deep Charcoal Velvet & Beveled Plinth',
      description: 'Opulent double-wing magnetic closure opening like a jewelry vitrine, showcasing the bottle upright upon an angled velvet pedestal.'
    },
    {
      id: 'sustainable',
      name: 'Eco-Luxe Molded Fiber Casket',
      finish: 'Biodegradable Sugarcane & Cotton Pulp',
      description: 'Custom sculpted biodegradable shell made from South Indian sugarcane bagasse, achieving zero plastic secondary packaging with high luxury tactile softness.'
    }
  ];

  return (
    <div className="w-full bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-champagne/60 shadow-luxury">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-champagne/40 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">Custom Flacon & Box Laboratory</span>
          <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium mt-1">Interactive Packaging Configurator</h3>
        </div>
        <div className="flex items-center gap-1.5 bg-ivory-200/80 p-1 rounded-full">
          <button
            onClick={() => setActiveTab('silhouette')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'silhouette' ? 'bg-charcoal text-ivory-100 shadow-sm' : 'text-charcoal-light hover:text-charcoal'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>5 Flacon Silhouettes</span>
          </button>
          <button
            onClick={() => setActiveTab('caps')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'caps' ? 'bg-charcoal text-ivory-100 shadow-sm' : 'text-charcoal-light hover:text-charcoal'
            }`}
          >
            <Disc className="w-3.5 h-3.5" />
            <span>Cap Metallurgy</span>
          </button>
          <button
            onClick={() => setActiveTab('boxes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              activeTab === 'boxes' ? 'bg-charcoal text-ivory-100 shadow-sm' : 'text-charcoal-light hover:text-charcoal'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Rigid Presentation Boxes</span>
          </button>
        </div>
      </div>

      {/* Content View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Interactive 3D Visualizer */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-ivory-50/80 rounded-2xl border border-champagne/40 min-h-[400px]">
          <FragranceBottle type={selectedSilhouette} size="lg" interactive={true} />
          <div className="mt-4 text-center">
            <span className="text-xs uppercase tracking-wider font-semibold text-gold">Current Concept Model</span>
            <p className="text-sm font-serif font-medium text-charcoal capitalize">
              {selectedSilhouette === 'oud' ? 'Imperial Monolith — Smoked Amber Flacon'
                : selectedSilhouette === 'jasmine' ? 'Opaline Teardrop — Frosted Blossom Glass'
                : selectedSilhouette === 'aquatic' ? 'Wave-Carved Facet — Cerulean Oceanic Crystal'
                : selectedSilhouette === 'citrus' ? 'Diamond Octagon — Solstice Cut Prism'
                : 'Sensual Amphora — Cured Honey Caramel Flacon'}
            </p>
          </div>
        </div>

        {/* Right Configuration Controls */}
        <div className="lg:col-span-6 space-y-6">
          <AnimatePresence mode="wait">
            {activeTab === 'silhouette' && (
              <motion.div
                key="silhouettes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-xs uppercase tracking-wider font-semibold text-charcoal-light">
                  Select Custom Silhouette Geometry
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'oud' as const, name: 'Architectural Monolith', desc: 'Sharp geometric corners, smoked glass' },
                    { id: 'jasmine' as const, name: 'Sculpted Teardrop', desc: 'Organic curved opaline pearlescent' },
                    { id: 'aquatic' as const, name: 'Wave-Carved Crystal', desc: 'Asymmetric marine-inspired contours' },
                    { id: 'citrus' as const, name: 'Octagonal Prism', desc: 'Diamond-faceted light dispersion' },
                    { id: 'vanilla' as const, name: 'Curved Amphora', desc: 'Voluptuous hourglass tactile form' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSilhouette(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedSilhouette === s.id
                          ? 'border-gold bg-ivory-100 shadow-xs'
                          : 'border-champagne/60 bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className="text-sm font-semibold text-charcoal">{s.name}</div>
                      <div className="text-xs text-charcoal-light mt-0.5">{s.desc}</div>
                    </button>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-ivory-100/70 border border-champagne/40 text-xs text-charcoal/80">
                  <span className="font-semibold text-gold">Manufacturer Specification: </span>
                  All five bottle silhouettes are custom mold concepts engineered for semi-automated or automated crimping lines with 15mm FEA neck finish standards.
                </div>
              </motion.div>
            )}

            {activeTab === 'caps' && (
              <motion.div
                key="caps"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-xs uppercase tracking-wider font-semibold text-charcoal-light">
                  Select Cap Metallurgy & Weight Profile
                </div>
                <div className="space-y-3">
                  {capFinishes.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCapFinish(c.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                        selectedCapFinish === c.id
                          ? 'border-gold bg-ivory-100 shadow-xs'
                          : 'border-champagne/60 bg-white/60 hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full mt-0.5 border border-charcoal/20 shrink-0"
                        style={{ backgroundColor: c.color }}
                      />
                      <div>
                        <div className="text-sm font-semibold text-charcoal">{c.name}</div>
                        <div className="text-xs text-charcoal-light mt-1 leading-relaxed">{c.spec}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'boxes' && (
              <motion.div
                key="boxes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="text-xs uppercase tracking-wider font-semibold text-charcoal-light">
                  Select Secondary Presentation Box Engineering
                </div>
                <div className="space-y-3">
                  {boxStyles.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBoxStyle(b.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedBoxStyle === b.id
                          ? 'border-gold bg-ivory-100 shadow-xs'
                          : 'border-champagne/60 bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-charcoal">{b.name}</div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-gold bg-white px-2 py-0.5 rounded border border-champagne">
                          {b.finish}
                        </span>
                      </div>
                      <div className="text-xs text-charcoal-light mt-2 leading-relaxed">{b.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-2">
            <a
              href="/contact?type=private-label"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-charcoal text-ivory-100 text-sm font-medium tracking-wide hover:bg-gold transition-colors duration-300"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Inquire for Custom Private Label Tooling</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
