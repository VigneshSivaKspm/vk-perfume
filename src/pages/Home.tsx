import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Droplet,
  CheckCircle2,
  Calendar,
  Layers
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FragranceCard } from '../components/fragrance/FragranceCard';
import { FragranceBottle } from '../components/fragrance/FragranceBottle';
import { FragranceSelector } from '../components/fragrance/FragranceSelector';
import { BottlePackagingViewer } from '../components/fragrance/BottlePackagingViewer';
import { FRAGRANCES } from '../data/fragrances';
import { COMPANY_INFO } from '../data/company';
import { MANUFACTURING_PROCESS } from '../data/process';

export const Home: React.FC = () => {
  const [heroActiveFragrance, setHeroActiveFragrance] = useState(0);

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Haute Parfumerie & Luxury Fragrance Manufacturer"
        description="VK Perfumes is a premier luxury fragrance manufacturer based in Tamil Nadu, India. Specializing in bespoke distillation, private-label manufacturing, and five upcoming signature fragrance collections."
      />

      {/* Bespoke Page Background Animation */}
      <PageBackground variant="home" />

      {/* =========================================================================
          SECTION 1 & 2: CINEMATIC HERO EXPERIENCE WITH COMPANY BRANDING
          Choreography: Background (0-400ms) -> Headline (250-900ms) -> Bottle (500-1300ms) -> CTAs (850-1450ms)
          ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-ivory-100">
        {/* Soft Architectural Ambient Lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-champagne/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute inset-0 noise-overlay pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Brand Synthesis */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            {/* 0-400ms: Eyebrow Badge with Crowned Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-champagne/80 shadow-2xs self-start"
            >
              <img
                src={COMPANY_INFO.monogramAsset}
                alt="VK Crest"
                className="w-5 h-5 object-contain"
              />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] font-semibold text-charcoal">
                Tamil Nadu's Haute Parfumerie Maison
              </span>
            </motion.div>

            {/* 250-900ms: Primary Display Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-charcoal font-normal tracking-tight leading-[0.98]"
              >
                THE ART <br />
                <span className="italic font-display font-light text-gold-dark">OF SCENT.</span>
              </motion.h1>

              {/* 500-1100ms: Supporting Headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal/80 font-normal italic tracking-wide"
              >
                Crafted with character. Made to be remembered.
              </motion.p>
            </div>

            {/* 700-1300ms: Editorial Brand Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-sm sm:text-base text-charcoal-light font-light max-w-xl leading-relaxed"
            >
              Rooted in the fertile botanical heritage of Tamil Nadu, VK Perfumes unites ancient indigenous distillation wisdom with European formulation science. We create transcendent olfactive identities and precision private-label manufacturing for distinguished brands worldwide.
            </motion.p>

            {/* 850-1450ms: Interactive CTAs & Verified Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/collections"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-all duration-300 shadow-luxury group"
              >
                <span>Explore The 5 Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/private-label"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-champagne bg-white/70 text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-all duration-300 shadow-2xs"
              >
                <span>Private Label OEM</span>
              </Link>
            </motion.div>

            {/* Micro Credential Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-6 border-t border-champagne/40 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">5 Flacons</div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal-light">Bespoke Silhouettes</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">100% IFRA</div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal-light">Global Safety Standards</div>
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">Tamil Nadu</div>
                <div className="text-[10px] uppercase tracking-wider text-charcoal-light">Distillation Campus</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase with Interactive Bottle Carousel */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col items-center justify-center"
            >
              {/* Background Glow Circle */}
              <div
                className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full filter blur-3xl opacity-35 transition-colors duration-700 pointer-events-none"
                style={{ backgroundColor: FRAGRANCES[heroActiveFragrance].colors.accent }}
              />

              {/* Dynamic 3D Bottle Visualizer */}
              <div className="relative z-10 min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
                <FragranceBottle
                  type={FRAGRANCES[heroActiveFragrance].visualType}
                  size="xl"
                  interactive={true}
                />
              </div>

              {/* Quick Switcher for the 5 bottles in Hero */}
              <div className="mt-4 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-champagne/60 shadow-xs z-20">
                {FRAGRANCES.map((f, i) => (
                  <button
                    key={f.id}
                    onClick={() => setHeroActiveFragrance(i)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                      heroActiveFragrance === i
                        ? 'bg-charcoal text-ivory-100 shadow-2xs'
                        : 'text-charcoal-light hover:text-charcoal'
                    }`}
                  >
                    N° {f.number}
                  </button>
                ))}
              </div>

              {/* Active Hero Fragrance Caption */}
              <div className="mt-2 text-center">
                <div className="text-xs uppercase tracking-wider font-semibold text-gold">
                  {FRAGRANCES[heroActiveFragrance].subtitle}
                </div>
                <div className="text-base font-serif font-medium text-charcoal">
                  {FRAGRANCES[heroActiveFragrance].name} • <span className="font-semibold text-gold-dark">{FRAGRANCES[heroActiveFragrance].price.formatted}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-charcoal/50 hover:text-charcoal transition-colors"
          onClick={() => {
            const el = document.getElementById('manufacturer-intro');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll to Discover</span>
          <div className="w-5 h-9 rounded-full border border-charcoal/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          SECTION 6: MANUFACTURER BRAND INTRODUCTION (Tamil Nadu Heritage & Science)
          ========================================================================= */}
      <section id="manufacturer-intro" className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column: Authentic Monogram & Distillation Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-champagne/60 shadow-luxury bg-ivory-50 p-8 sm:p-12 flex flex-col items-center text-center">
                <img
                  src={COMPANY_INFO.monogramAsset}
                  alt="VK Perfumes Monogram"
                  className="w-40 h-40 sm:w-48 sm:h-48 object-contain filter drop-shadow-md mb-6"
                  width="192"
                  height="192"
                />
                <h3 className="font-serif text-2xl font-semibold text-charcoal">
                  VK PERFUMES
                </h3>
                <p className="text-xs uppercase tracking-widest text-gold font-medium mt-1">
                  Private Distillation & Manufacturing
                </p>
                <div className="w-12 h-0.5 bg-gold/40 my-4" />
                <p className="text-xs text-charcoal-light font-light leading-relaxed">
                  Established in Tamil Nadu, our campus houses cleanroom formulation suites, low-temperature distillation stills, and maceration vaults designed to meet the rigorous demands of global niche perfume houses.
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-charcoal text-ivory-100 p-4 rounded-2xl shadow-luxury max-w-[200px] border border-gold/30">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">Tamil Nadu Roots</div>
                <div className="text-xs text-ivory-200 mt-1 font-light">Global Haute Parfumerie Standards</div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-100 border border-champagne text-xs uppercase tracking-widest font-semibold text-gold">
                <span>The Maison’s Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-normal tracking-tight leading-tight">
                Where Ancient Indian Botanicals Meet European Precision Alchemy
              </h2>

              <p className="text-base text-charcoal/80 font-light leading-relaxed">
                Tamil Nadu has stood at the crossroads of global fragrance history for millennia. From the legendary Sambac jasmine groves of Madurai and the spice-scented valleys of the Western Ghats to the ancient maritime trade routes of the Coromandel coast, our soil carries an unmatched olfactory heritage.
              </p>

              <p className="text-base text-charcoal-light font-light leading-relaxed">
                At VK Perfumes, we do not simply blend fragrance oils. We operate as an end-to-end manufacturing and formulation authority. We partner directly with agricultural cooperatives to secure rare botanicals, apply supercritical fluid extraction to capture untainted top notes, and age our blends in dark temperature-regulated stainless tanks to ensure enduring longevity and refined sillage.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {COMPANY_INFO.corePillars.slice(0, 4).map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-ivory-50 border border-champagne/50">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold mb-1">
                      {pillar.title}
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
                >
                  <span>Read Our Full Corporate Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FIVE SIGNATURE COLLECTION SHOWCASE
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Exclusive Launch Showcase"
            title="Five Signature Fragrance Flacons"
            subtitle="Conceived as distinct artistic personas for the discerning Indian market—each featuring a bespoke bottle silhouette, olfactory story, and botanical terroir."
            align="center"
          />

          {/* Grid of the 5 Fragrance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FRAGRANCES.map((fragrance, index) => (
              <FragranceCard
                key={fragrance.id}
                fragrance={fragrance}
                index={index}
              />
            ))}

            {/* 6th Card: Private Label Bespoke Creation Invitation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-charcoal text-ivory-100 rounded-3xl p-8 border border-gold/40 shadow-luxury flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
                  Bespoke Client Atelier
                </span>
                <h3 className="text-3xl font-serif font-medium mt-3 text-ivory-100">
                  Formulate Your Proprietary N° 06
                </h3>
                <p className="text-xs text-ivory-300/80 font-light mt-3 leading-relaxed">
                  VK Perfumes collaborates with luxury hospitality groups, fashion designers, and private brands to sculpt custom signature perfumes, bespoke bottles, and secondary packaging from concept to market.
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to="/private-label"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gold text-charcoal-dark text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
                >
                  <span>Private Label Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: INTERACTIVE FRAGRANCE DISCOVERY ("Discover Your Signature Scent")
          ========================================================================= */}
      <FragranceSelector />

      {/* =========================================================================
          SECTION 8: MANUFACTURING EXCELLENCE PRESENTATION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Precision Manufacturing"
            title="Artisanal Alchemy Backed by Analytical Science"
            subtitle="Inside our Tamil Nadu distillation and compounding facilities, every formulation is subjected to rigorous cosmetic standards and analytical precision."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Droplet,
                title: 'Low-Temperature Distillation',
                description: 'Gentle vacuum distillation and cold hydro-extraction preserve delicate floral notes and heat-sensitive monoterpenes without burn off.'
              },
              {
                icon: ShieldCheck,
                title: 'IFRA & cGMP Compliance',
                description: 'Full adherence to the International Fragrance Association 51st Amendment, ensuring dermatologist-grade skin safety and allergen indexing.'
              },
              {
                icon: Layers,
                title: 'Controlled Vault Maceration',
                description: 'Fragrance concentrates mature for 60 to 90 days in dark, temperature-controlled stainless tanks to allow complex aromatic polymerisation.'
              },
              {
                icon: Sparkles,
                title: 'Sub-Zero Cryo-Filtration',
                description: 'Chilling to -4°C precipitates plant waxes before multi-stage 0.2-micron membrane filtration, achieving permanent optical crystal clarity.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory-50 rounded-2xl p-6 border border-champagne/60 hover:border-gold/60 transition-colors shadow-2xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-champagne text-gold shadow-2xs">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-charcoal">{item.title}</h4>
                  <p className="text-xs text-charcoal-light font-light leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/manufacturing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300"
            >
              <span>Explore Detailed Manufacturing Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: BOTTLE & PACKAGING DESIGN SHOWCASE
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flacon & Presentation Design"
            title="Custom Mold Engineering & Secondary Packaging"
            subtitle="A truly memorable fragrance begins in the palm. We engineer custom glass silhouettes, weighted magnetic caps, and rigid boxes crafted for tactile luxury."
            align="center"
          />

          <BottlePackagingViewer />
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: MANUFACTURING PROCESS TIMELINE (8 Steps Preview)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Production Journey"
            title="Eight Stages from Terroir to Vault Dispatch"
            subtitle="A transparent, verifiable workflow engineered for reliability, safety, and uncompromising luxury quality."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MANUFACTURING_PROCESS.slice(0, 4).map((proc) => (
              <div
                key={proc.step}
                className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 relative group hover:border-gold/60 transition-colors"
              >
                <div className="text-3xl font-serif font-light text-gold mb-2">
                  {proc.step}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-1">
                  {proc.title}
                </div>
                <div className="text-[11px] text-gold font-medium mb-3">
                  {proc.duration}
                </div>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
            >
              <span>View All 8 Manufacturing Stages & Quality Checkpoints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: UPCOMING TAMIL NADU FRAGRANCE LAUNCH SECTION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-charcoal text-ivory-100 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/40 text-xs uppercase tracking-widest font-semibold text-gold">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Tamil Nadu 2026 Showcase</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ivory-100 font-normal tracking-tight leading-tight">
                An Olfactory Awakening for South India
              </h2>

              <p className="text-sm sm:text-base text-ivory-300 font-light leading-relaxed">
                We are preparing to introduce our five signature fragrance collections across Tamil Nadu. Celebrating local botanical treasures—from Madurai's dawn-harvested Malligai to Pollachi's sun-cured vanilla—this launch marks the rebirth of South Indian luxury perfumery on the international stage.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-ivory-100/10">
                <div>
                  <div className="font-serif text-2xl text-gold font-semibold">Chennai</div>
                  <div className="text-[10px] uppercase text-ivory-300/80 tracking-wider">Preview Salon</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-gold font-semibold">Coimbatore</div>
                  <div className="text-[10px] uppercase text-ivory-300/80 tracking-wider">Boutique Partners</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-gold font-semibold">Madurai</div>
                  <div className="text-[10px] uppercase text-ivory-300/80 tracking-wider">Heritage Origin</div>
                </div>
                <div>
                  <div className="font-serif text-2xl text-gold font-semibold">Online</div>
                  <div className="text-[10px] uppercase text-ivory-300/80 tracking-wider">VIP Priority Allocation</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/upcoming-launch"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gold text-charcoal-dark text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors duration-300 shadow-gold-glow"
                >
                  <span>Reserve Launch Showcase Invitation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Teaser Bottle Lineup */}
            <div className="lg:col-span-5 flex items-center justify-center p-8 rounded-3xl bg-white/5 border border-ivory-100/10 backdrop-blur-md">
              <div className="text-center space-y-4">
                <img
                  src={COMPANY_INFO.bannerAsset}
                  alt="VK Perfumes Logo"
                  className="w-64 max-w-full mx-auto filter drop-shadow-md"
                />
                <p className="text-xs text-ivory-300 font-light italic">
                  "Five artistic collections. Five distinct silhouettes. One sovereign identity."
                </p>
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-gold/40 text-gold bg-gold/10">
                    Official Pre-Launch Exhibition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14 & 15: PRIVATE LABEL B2B & CONTACT CTA
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-champagne/80 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                Contract Manufacturing & OEM
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-medium">
                Bring Your Fragrance Brand to Life with VK Perfumes
              </h3>
              <p className="text-sm sm:text-base text-charcoal-light font-light max-w-2xl leading-relaxed">
                Whether you seek a bespoke luxury fragrance for a designer brand, hotel signature scenting, or full-scale private label contract manufacturing, our master formulating laboratory and cleanroom facility deliver turn-key perfection.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-botanical" />
                  <span>Custom Olfactive Development</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-botanical" />
                  <span>Flacon Tooling & Box Finishing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal font-medium">
                  <CheckCircle2 className="w-4 h-4 text-botanical" />
                  <span>IFRA Certificate of Analysis</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                to="/contact?type=private-label"
                className="inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors text-center shadow-md"
              >
                <span>Initiate B2B Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/private-label"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-champagne bg-ivory-50 text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold hover:text-gold transition-colors text-center"
              >
                <span>Review OEM Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
