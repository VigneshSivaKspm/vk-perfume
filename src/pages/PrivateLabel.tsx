import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { Reveal } from '../components/animations/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BottlePackagingViewer } from '../components/fragrance/BottlePackagingViewer';

export const PrivateLabel: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Private Label & Turn-Key OEM Fragrance Manufacturing"
        description="Launch your bespoke perfume brand with VK Perfumes. End-to-end custom formulation, flacon mold tooling, rigid box design, and certified compounding in Tamil Nadu, India."
      />

      <PageBackground variant="private-label" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <Reveal variant="tilt-hinge" delay={0.14}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>B2B OEM & Turn-Key Fragrance Atelier</span>
          </div>
        </Reveal>
        <Reveal variant="tilt-hinge" delay={0.22}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
            Private Label Perfumery, Engineered to Perfection
          </h1>
        </Reveal>
        <Reveal variant="rise" delay={0.3}>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
            From an initial olfactive moodboard to master carton dispatch, VK Perfumes serves as the discreet formulation and manufacturing partner for luxury designers, hospitality brands, and niche perfume houses.
          </p>
        </Reveal>
      </section>

      {/* 4 Pillars of Private Label */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-4">
            <div className="text-xs font-serif text-gold font-semibold uppercase">Tier 01</div>
            <h3 className="text-xl font-serif font-medium text-charcoal">Bespoke Olfactive Formulation</h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Our in-house master noses synthesize your creative brief into custom accords. We provide iterative lab samples until your signature sillage is achieved.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-4">
            <div className="text-xs font-serif text-gold font-semibold uppercase">Tier 02</div>
            <h3 className="text-xl font-serif font-medium text-charcoal">Custom Flacon & Metallurgy</h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Choose from our catalog of proprietary silhouettes or create custom glass molds with weighted zinc caps, electroplated finishes, and laser engraving.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-4">
            <div className="text-xs font-serif text-gold font-semibold uppercase">Tier 03</div>
            <h3 className="text-xl font-serif font-medium text-charcoal">Luxury Secondary Boxes</h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Custom rigid presentation boxes wrapped in textured linen, hot-stamped gold foil, velvet interior vitrines, and tamper-evident security closures.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-4">
            <div className="text-xs font-serif text-gold font-semibold uppercase">Tier 04</div>
            <h3 className="text-xl font-serif font-medium text-charcoal">Regulatory & IFRA Certification</h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Full dossier preparation including Certificate of Analysis (CoA), IFRA compliance certificates, allergen declarations, and export compliance paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Packaging Configurator Embedded */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <SectionHeading
          eyebrow="Custom Component Configurator"
          title="Explore Private-Label Flacon & Box Finishes"
          subtitle="Test glass shapes, cap metallurgy, and presentation box styles available for private label production."
          align="center"
        />
        <BottlePackagingViewer />
      </section>

      {/* Collaboration Workflow */}
      <section className="py-20 bg-white border-y border-champagne/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The B2B Collaboration Journey"
            title="How We Build Your Fragrance Brand"
            subtitle="A structured, transparent roadmap from initial consultation to retail delivery."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Creative Brief & Concept', desc: 'Define fragrance category, mood, target retail price, and launch timeline.' },
              { num: '02', title: 'Lab Sampling & Accords', desc: 'Receive 3 curated formulation submissions for evaluation and skin testing.' },
              { num: '03', title: 'Packaging Prototyping', desc: 'Approve bottle silkscreening, cap finish, and secondary rigid box proofs.' },
              { num: '04', title: 'Maceration & Bottling', desc: 'Juice matures for 60 days before cleanroom automated bottling and crimping.' },
              { num: '05', title: 'Quality Release & Dispatch', desc: 'Batch inspection, CoA generation, and palletized temperature-controlled dispatch.' }
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
                <span className="text-2xl font-serif text-gold font-light">{step.num}</span>
                <h4 className="text-sm font-semibold text-charcoal">{step.title}</h4>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact?type=private-label"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300 shadow-luxury"
            >
              <span>Submit Your Private Label Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
