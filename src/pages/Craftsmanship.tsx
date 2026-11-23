import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Sprout, Wind, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';

export const Craftsmanship: React.FC = () => {
  const botanicalPillars = [
    {
      name: 'Madurai Sambac Jasmine (Malli)',
      origin: 'Madurai & Dindigul, Tamil Nadu',
      tagline: 'The Sacred Breath of Dawn Blossoms',
      description: 'Plucked by hand in the twilight hour before dawn strikes the flower fields of Madurai. The closed buds are rushed to our extraction stills while still laden with nocturnal moisture, yielding a jasmine absolute of unmatched fruity-green luminescence and narcotic sweetness.',
      extraction: 'Cold Solvent Enfleurage & Molecular Distillation',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
      fragranceLink: '/fragrances/jasmine'
    },
    {
      name: 'Sacred Agarwood & Deep Smoked Resins',
      origin: 'Assam & Southeast Asia Distillations',
      tagline: 'The Royal Heart of Ancient Woodcraft',
      description: 'Aged heartwood chips from Aquilaria trees, harvested only after decades of natural resin development. Hydro-distilled in traditional copper alembics and blended with Mysore sandalwood and Somalian frankincense to build an intoxicating, noble shadow.',
      extraction: 'Fractional Hydro-distillation in Copper Alembics',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
      fragranceLink: '/fragrances/oud-woody-musky'
    },
    {
      name: 'Sun-Cured Bourbon Vanilla',
      origin: 'Pollachi & Anamalai Foothills, Tamil Nadu',
      tagline: 'Molten Amber & Balsamic Decadence',
      description: 'Grown beneath the canopy of coconut and areca palm agroforestry systems in Pollachi. The green pods undergo a slow 6-month curing ritual—alternating between morning sun sweating and shaded wooden box blankets—producing frosted crystallizations of natural vanillin.',
      extraction: 'Supercritical Fluid CO2 Extraction',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
      fragranceLink: '/fragrances/vanilla-gourmand'
    },
    {
      name: 'Coromandel Sea Salt & Coastal Driftwood',
      origin: 'Coromandel Coastal Marine Belt',
      tagline: 'The Crisp Salinity of Bay Winds',
      description: 'Distilled marine mineral accords capturing the salt-crusted granite monuments of Mamallapuram. Married to Mediterranean calamansi and Nilgiri juniper berries, creating an invigorating aquatic breath of pure ocean expanse.',
      extraction: 'Headspace Olfactive Capture & Mineral Accords',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      fragranceLink: '/fragrances/fresh-aquatic'
    },
    {
      name: 'High-Altitude Bergamot & Nilgiri Green Tea',
      origin: 'Coonoor & Western Ghats Hill Orchards',
      tagline: 'Solar Prisms of Mountain Sunlight',
      description: 'Cold-pressed green lime peels from Dindigul orchards paired with distilled green tea leaf fractions from the mist-wrapped tea slopes of Coonoor. Delivers a crystalline, effervescent citrus lift anchored by smoky golden vetiver from Cuddalore.',
      extraction: 'Cold Expression & Low-Pressure Steam Distillation',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      fragranceLink: '/fragrances/citrus'
    }
  ];

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Botanical Craftsmanship & Distillation Science"
        description="Explore the rare botanicals of Tamil Nadu—from Madurai Jasmine and Pollachi Vanilla to Nilgiri herbs—distilled into haute parfumerie by VK Perfume."
      />

      <PageBackground variant="craftsmanship" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Sprout className="w-3.5 h-3.5" />
          <span>Botanical Terroir & Extraction Artistry</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          The Soul of Our Distillations
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          True luxury perfume cannot be simulated in a generic chemistry lab. It begins in the fertile soil, the morning mist, and the patient hands of South Indian agricultural artisans.
        </p>
      </section>

      {/* Editorial Botanical Exploration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {botanicalPillars.map((botanical, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={botanical.name}
              className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-champagne/60 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Image Side */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/3 group">
                  <img
                    src={botanical.image}
                    alt={botanical.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-champagne block">
                      Terroir Provenance
                    </span>
                    <span className="text-sm font-serif font-medium">{botanical.origin}</span>
                  </div>
                </div>
              </div>

              {/* Narrative Side */}
              <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
                  Botanical Asset 0{idx + 1}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
                  {botanical.name}
                </h3>
                <p className="text-sm italic font-serif text-gold-dark">
                  "{botanical.tagline}"
                </p>
                <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                  {botanical.description}
                </p>

                <div className="p-4 rounded-xl bg-ivory-50 border border-champagne/60 text-xs">
                  <span className="font-semibold text-charcoal">Extraction Technique: </span>
                  <span className="text-charcoal-light">{botanical.extraction}</span>
                </div>

                <div className="pt-2">
                  <Link
                    to={botanical.fragranceLink}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
                  >
                    <span>Experience This Botanical in The Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Extraction Technologies */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionHeading
          eyebrow="Advanced Science"
          title="Gentle Extraction Protocols"
          subtitle="How our Tamil Nadu laboratory isolates volatile aromatic molecules without burning delicate natural notes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-3">
            <Droplet className="w-8 h-8 text-gold" />
            <h4 className="text-xl font-serif font-medium text-charcoal">Supercritical CO2 Fluid</h4>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              Using pressurized carbon dioxide at near-ambient temperatures to extract delicate oils from vanilla beans and spices, leaving zero toxic chemical residues.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-3">
            <Sprout className="w-8 h-8 text-gold" />
            <h4 className="text-xl font-serif font-medium text-charcoal">Low-Thermal Enfleurage</h4>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              Adapted from traditional French techniques for Madurai Sambac jasmine to capture the ethereal living scent of fresh blossoms without heat destruction.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-champagne/60 shadow-luxury space-y-3">
            <Wind className="w-8 h-8 text-gold" />
            <h4 className="text-xl font-serif font-medium text-charcoal">Vacuum Fractional Alembics</h4>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
              Under reduced atmospheric pressure, essential oils boil at much lower temperatures, protecting the rich woody esters in agarwood and vetiver.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
