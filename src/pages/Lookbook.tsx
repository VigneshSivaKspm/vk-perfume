import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Maximize2 } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { Reveal } from '../components/animations/Reveal';
import { LOOKBOOK_GALLERY } from '../data/lookbook';
import type { LookbookItem } from '../types';

export const Lookbook: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);

  const categories = ['All', 'Bottles', 'Ingredients', 'Craftsmanship', 'Packaging', 'Factory'];

  const filteredItems = activeCategory === 'All'
    ? LOOKBOOK_GALLERY
    : LOOKBOOK_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Editorial Lookbook & Visual Archive"
        description="A visual journey through VK Perfumes' flacon design, Tamil Nadu botanical harvests, cleanroom formulation suites, and luxury rigid packaging."
      />

      <PageBackground variant="lookbook" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-14 text-center">
        <Reveal variant="zoom-settle" delay={0.14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Atelier & Archive</span>
          </div>
        </Reveal>
        <Reveal variant="zoom-settle" delay={0.22}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
            The Photographic Lookbook
          </h1>
        </Reveal>
        <Reveal variant="rise" delay={0.3}>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
            Moments captured across our South Indian harvest fields, cleanroom formulation laboratories, and bespoke flacon finishing benches.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-charcoal text-ivory-100 shadow-md scale-105'
                  : 'bg-white text-charcoal border border-champagne/80 hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-champagne/60 shadow-luxury hover:shadow-luxury-hover cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-charcoal flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif text-gold font-semibold uppercase">{item.category}</span>
                    <span className="text-charcoal-light text-[10px]">VK Archive</span>
                  </div>
                  <h3 className="text-xl font-serif font-medium text-charcoal group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-charcoal flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[60vh] sm:max-h-[70vh] bg-ivory-50 flex items-center justify-center overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover max-h-[70vh]"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2 bg-white">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                    {selectedItem.category}
                  </span>
                  <span>•</span>
                  <span className="text-xs text-charcoal-light">Tamil Nadu Facility Archive</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-charcoal">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-charcoal-light font-light leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
