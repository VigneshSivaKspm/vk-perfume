import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  Droplet,
  FlaskConical,
  Clock,
  Snowflake,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MANUFACTURING_PROCESS } from '../data/process';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap: Record<string, any> = {
    Sprout,
    Droplet,
    FlaskConical,
    Clock,
    Snowflake,
    ShieldCheck,
    CheckCircle2,
    PackageCheck
  };

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Eight-Stage Manufacturing & Formulation Process"
        description="Follow the complete 16-week production timeline from Tamil Nadu botanical harvests to Class 10,000 cleanroom bottling and export dispatch at VK Perfume."
      />

      <PageBackground variant="process" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Clock className="w-3.5 h-3.5" />
          <span>The 16-Week Production Roadmap</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          From Botanical Soil to Finished Flacon
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Every perfume batch is treated as a masterwork of patience. Discover the eight disciplined phases that define our manufacturing excellence in Tamil Nadu.
        </p>
      </section>

      {/* Interactive Step Navigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {MANUFACTURING_PROCESS.map((p, idx) => (
            <button
              key={p.step}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                activeStep === idx
                  ? 'bg-charcoal text-ivory-100 border-charcoal shadow-md scale-105'
                  : 'bg-white text-charcoal border-champagne/80 hover:border-gold'
              }`}
            >
              <span>{p.step}. {p.title.split('&')[0]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active Step Feature Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <AnimatePresence mode="wait">
          {(() => {
            const step = MANUFACTURING_PROCESS[activeStep];
            const Icon = iconMap[step.iconName] || FlaskConical;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-14 border border-champagne/80 shadow-luxury grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-4 flex flex-col items-center justify-center p-8 bg-ivory-50 rounded-2xl border border-champagne/60 text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-champagne text-gold shadow-2xs mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="text-4xl font-serif text-charcoal font-medium">Stage {step.step}</span>
                  <span className="text-xs uppercase tracking-wider text-gold font-semibold mt-1">{step.duration}</span>
                  <span className="text-xs text-charcoal-light mt-2">{step.subtitle}</span>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <span className="text-xs uppercase tracking-widest font-semibold text-gold">Production Milestone</span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                    {step.description}
                  </p>

                  <div className="p-4 rounded-xl bg-ivory-100/80 border border-champagne text-xs space-y-1">
                    <span className="font-semibold text-charcoal">Analytical Standard & Compliance:</span>
                    <p className="text-charcoal-light">{step.standards}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-champagne/40">
                    <button
                      onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : prev))}
                      disabled={activeStep === 0}
                      className="text-xs text-charcoal-light hover:text-charcoal disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider font-semibold"
                    >
                      ← Previous Stage
                    </button>
                    <span className="text-xs text-charcoal-light">Stage {activeStep + 1} of {MANUFACTURING_PROCESS.length}</span>
                    <button
                      onClick={() => setActiveStep(prev => (prev < MANUFACTURING_PROCESS.length - 1 ? prev + 1 : prev))}
                      disabled={activeStep === MANUFACTURING_PROCESS.length - 1}
                      className="text-xs text-charcoal hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider font-semibold"
                    >
                      Next Stage →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </section>

      {/* Complete Vertical Journey Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Chronological Architecture"
          title="All Eight Manufacturing Disciplines"
          subtitle="Explore the exhaustive technical sequence that transforms raw botanicals into export-grade haute parfumerie."
          align="center"
        />

        <div className="space-y-6">
          {MANUFACTURING_PROCESS.map((p) => {
            const Icon = iconMap[p.iconName] || FlaskConical;
            return (
              <div
                key={p.step}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-champagne/60 shadow-2xs hover:border-gold/60 transition-colors flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-ivory-100 flex items-center justify-center text-gold shrink-0 border border-champagne/60">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-serif font-medium text-charcoal">
                      {p.step}. {p.title}
                    </h4>
                    <span className="text-xs font-semibold text-gold px-2.5 py-1 rounded-full bg-ivory-100 border border-champagne">
                      {p.duration}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                    {p.description}
                  </p>
                  <div className="text-[11px] text-charcoal/70 bg-ivory-50 p-2.5 rounded-lg border border-champagne/40">
                    <strong>Standard:</strong> {p.standards}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact?type=private-label"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors shadow-luxury"
          >
            <span>Commission a Production Batch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
