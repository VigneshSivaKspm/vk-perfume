import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { FAQ_DATA } from '../data/faq';

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const categories = ['All', 'Manufacturing', 'Private Label', 'Fragrances', 'Launch & Distribution', 'Quality & Standards'];

  const toggleAccordion = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  const filteredFAQ = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Frequently Asked Questions & Standards"
        description="Find answers to common questions regarding VK Perfumes' contract manufacturing, private label minimum order quantities, formulation timelines, and Tamil Nadu launch."
      />

      <PageBackground variant="minimal" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Operational Transparency</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Clear, verifiable details on our formulation standards, private-label minimum order quantities, and regional distribution policies.
        </p>

        {/* Category Filter Pills */}
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

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredFAQ.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-champagne/70 overflow-hidden shadow-2xs transition-colors hover:border-gold/60"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gold">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-medium text-charcoal">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed border-t border-champagne/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-14 p-8 rounded-3xl bg-ivory-50 border border-champagne/60 text-center space-y-4">
          <h3 className="text-2xl font-serif font-medium text-charcoal">
            Have a Specific Formulation or Technical Inquiry?
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-light font-light max-w-lg mx-auto">
            Our technical compounding team and regulatory directors are available to answer proprietary inquiries directly.
          </p>
          <div className="pt-2">
            <a
              href="/contact?type=private-label"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-wider font-semibold hover:bg-gold transition-colors"
            >
              <span>Contact Laboratory Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
