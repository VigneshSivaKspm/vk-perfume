import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';
import { COMPANY_INFO } from '../data/company';

export const About: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <SEO
        title="About the Maison & Botanical Heritage"
        description="Discover VK Perfume's journey in Tamil Nadu, India. Blending centuries of South Indian botanical distillation with European haute parfumerie science."
      />

      <PageBackground variant="about" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Maison Heritage • Tamil Nadu, India</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-normal tracking-tight">
            Crafting Sovereign Scents at the Botanical Crossroads of India
          </h1>
          <p className="text-base sm:text-lg text-charcoal-light font-light leading-relaxed">
            Founded with an uncompromising devotion to olfactory excellence, VK Perfume stands as Tamil Nadu’s vanguard haute parfumerie house and premier private-label contract manufacturing facility.
          </p>
        </div>

        {/* Master Brand Banner Visual Integration */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-champagne/60 bg-white p-8 sm:p-14 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Official Corporate Identity</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium mt-1">
              VK Perfume Manufacturing
            </h3>
            <p className="text-xs text-charcoal-light font-light mt-2 leading-relaxed">
              Our emblem—the crowned monogram adorned in teal, sapphire, and radiant antique gold—symbolizes the sovereign dignity of rare natural extracts and the precision of modern alchemy.
            </p>
          </div>
          <div className="max-w-sm sm:max-w-md">
            <img
              src={COMPANY_INFO.bannerAsset}
              alt="VK Perfume Official Banner"
              className="w-full object-contain filter drop-shadow-sm"
              width="450"
              height="160"
            />
          </div>
        </div>
      </section>

      {/* Philosophy & The Tamil Nadu Terroir */}
      <section className="py-20 bg-white border-y border-champagne/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold">Our Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal leading-tight">
                Honoring the Sacred Soil, Advancing Modern Olfaction
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                For millennia, Tamil Nadu has supplied the world with some of the most precious aromatic substances known to perfumery: the ethereal Sambac Jasmine (Madurai Malli), deeply balsamic vanilla from the sunlit plantations of Pollachi, mountain mosses from the misty Nilgiris, and rich vetiver from Cuddalore.
              </p>
              <p className="text-sm sm:text-base text-charcoal-light font-light leading-relaxed">
                Historically, these magnificent raw materials were exported as crude concentrates to European fragrance hubs. VK Perfume was created to change this paradigm: by performing world-class extraction, formulation, maceration, and luxury bottling directly within Tamil Nadu.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 space-y-2">
                <div className="text-2xl font-serif font-semibold text-charcoal">Madurai</div>
                <div className="text-xs font-semibold uppercase text-gold">Sambac Jasmine Absolute</div>
                <p className="text-xs text-charcoal-light font-light">Direct partnerships with local flower growers for pre-dawn hand harvest.</p>
              </div>
              <div className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 space-y-2">
                <div className="text-2xl font-serif font-semibold text-charcoal">Pollachi</div>
                <div className="text-xs font-semibold uppercase text-gold">Cured Bourbon Vanilla</div>
                <p className="text-xs text-charcoal-light font-light">Naturally cured whole pods with rich balsamic vanillin crystals.</p>
              </div>
              <div className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 space-y-2">
                <div className="text-2xl font-serif font-semibold text-charcoal">Nilgiris</div>
                <div className="text-xs font-semibold uppercase text-gold">Mountain Flora & Tea</div>
                <p className="text-xs text-charcoal-light font-light">High-elevation aromatic extracts, green tea isolates, and crisp herbs.</p>
              </div>
              <div className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 space-y-2">
                <div className="text-2xl font-serif font-semibold text-charcoal">Coromandel</div>
                <div className="text-xs font-semibold uppercase text-gold">Coastal Mineral Accords</div>
                <p className="text-xs text-charcoal-light font-light">Clean oceanic sea salt mist and solar sea-driftwood nuances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-ivory-50 border border-champagne/60 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Our Mission</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
              Elevating Indian Perfumery to Global Prominence
            </h3>
            <p className="text-sm text-charcoal-light font-light leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Our Vision</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
              An International Center for Niche Formulation
            </h3>
            <p className="text-sm text-charcoal-light font-light leading-relaxed">
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Capabilities */}
      <section className="py-20 bg-ivory-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operations & Standards"
            title="Institutional Infrastructure"
            subtitle="Built to the stringent specifications required by international fragrance regulators and luxury beauty conglomerates."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_INFO.capabilities.map((cap, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-champagne/60 text-center space-y-2 shadow-2xs">
                <div className="font-serif text-3xl font-semibold text-gold">{cap.metric}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-charcoal">{cap.label}</div>
                <p className="text-xs text-charcoal-light font-light">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
          Collaborate with VK Perfume
        </h2>
        <p className="text-sm text-charcoal-light font-light max-w-xl mx-auto leading-relaxed">
          From proprietary juice formulation to turn-key finished product manufacturing, we invite luxury brand owners, hospitality leaders, and retailers to discover our capabilities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/contact?type=private-label"
            className="px-8 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
          >
            Initiate Corporate Enquiry
          </Link>
          <Link
            to="/manufacturing"
            className="px-8 py-3.5 rounded-full border border-champagne bg-white text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold transition-colors"
          >
            Explore Facility
          </Link>
        </div>
      </section>
    </div>
  );
};
