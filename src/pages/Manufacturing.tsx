import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Layers, CheckCircle2, FlaskConical, Snowflake } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { Reveal } from '../components/animations/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Manufacturing: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Manufacturing Infrastructure & Cleanroom Capabilities"
        description="Explore VK Perfumes' state-of-the-art distillation, formulation, maceration vaults, and automated bottling cleanrooms in Tamil Nadu, India."
      />

      <PageBackground variant="manufacturing" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <Reveal variant="zoom-settle" delay={0.12}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Industrial Standards & Formulation Science</span>
          </div>
        </Reveal>
        <Reveal variant="zoom-settle" delay={0.2}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
            Precision Contract Fragrance Manufacturing
          </h1>
        </Reveal>
        <Reveal variant="rise" delay={0.28}>
          <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
            Operating from our integrated research and manufacturing campus in Tamil Nadu, VK Perfumes delivers world-class olfactive engineering, from botanical distillation to certified shelf-ready retail packaging.
          </p>
        </Reveal>
      </section>

      {/* Facilities Overview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-champagne/60 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-ivory-100 border border-champagne flex items-center justify-center text-gold">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal">Formulation & Compounding Lab</h3>
            <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
              Equipped with analytical Gas Chromatography-Mass Spectrometry (GC-MS), precision robotic pipetting, and controlled organoleptic evaluation booths for top, heart, and base accord tuning.
            </p>
            <ul className="text-xs text-charcoal/80 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Micro-batch iterative accord compounding</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Allergen calculation & IFRA 51st compliance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Olfactive stability indexing</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-champagne/60 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-ivory-100 border border-champagne flex items-center justify-center text-gold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal">Maceration Vaults</h3>
            <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
              Stainless-steel aging vessels housed inside 14°C dark vaults with nitrogen sparging. Controlled molecular cross-linking allows perfume juice to round out and achieve supreme skin sillage.
            </p>
            <ul className="text-xs text-charcoal/80 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> 316L pharmaceutical grade stainless steel</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Continuous nitrogen barrier against oxidation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> 45 to 90-day natural maceration cycles</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-champagne/60 shadow-luxury space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-ivory-100 border border-champagne flex items-center justify-center text-gold">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-charcoal">Cryo-Filtration & Cleanroom Bottling</h3>
            <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
              Sub-zero -4°C chilling precipitates natural floral waxes, followed by 0.2µm multi-stage filtration and Class 10,000 cleanroom filling lines with automated torque-controlled pump crimping.
            </p>
            <ul className="text-xs text-charcoal/80 space-y-1.5 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Sub-zero wax flocculation & filtration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Automated volumetric pneumatic filling</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-botanical" /> Zero-leak laser seal verification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Assurance Workflow */}
      <section id="compliance" className="py-20 bg-white border-y border-champagne/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Assurance & Rigorous Protocol"
            title="Certified Cosmetic Compliance"
            subtitle="Every production lot manufactured at our Tamil Nadu facility passes seven independent analytical checkpoints before release."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'GC-MS Chemical Profiling', desc: 'Fingerprinting every batch to verify aromatic compound ratios and screen for impurities.' },
              { title: 'Accelerated Thermal Stability', desc: 'Simulated 3-year aging trials conducted at 45°C, room temperature, and 4°C cycles.' },
              { title: 'UV Photostability Testing', desc: 'Exposure chambers ensure daylight exposure does not alter fragrance color or olfactive notes.' },
              { title: 'Microbiological Sterility', desc: 'Screening for bacterial and fungal colonies in raw materials and finished hydro-alcoholic solutions.' }
            ].map((qa, i) => (
              <div key={i} className="p-6 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
                <span className="text-xs font-serif text-gold font-semibold">Checkpoint 0{i + 1}</span>
                <h4 className="text-base font-serif font-semibold text-charcoal">{qa.title}</h4>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{qa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
          Ready to Scale Your Fragrance Production?
        </h2>
        <p className="text-sm text-charcoal-light font-light max-w-xl mx-auto leading-relaxed">
          Discuss technical batch requirements, minimum order quantities, and custom packaging timelines with our senior technical production director.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/contact?type=private-label"
            className="px-8 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
          >
            Request Manufacturing Consultation
          </Link>
          <Link
            to="/private-label"
            className="px-8 py-3.5 rounded-full border border-champagne bg-white text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold transition-colors"
          >
            Review Private Label Solutions
          </Link>
        </div>
      </section>
    </div>
  );
};
