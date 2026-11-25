import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BottlePackagingViewer } from '../components/fragrance/BottlePackagingViewer';

export const Packaging: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Bespoke Bottle & Luxury Packaging Design"
        description="Discover custom perfume bottle silhouettes, weighted metal caps, and rigid presentation boxes engineered by VK Perfumes in Tamil Nadu."
      />

      <PageBackground variant="packaging" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Box className="w-3.5 h-3.5" />
          <span>Industrial Design & Haptic Luxury</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          The Tactile Architecture of Perfume
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Before a scent touches the air, the flacon speaks to the fingers and the eye. We engineer custom glass silhouettes, weighted metallic closures, and rigid presentation boxes crafted for permanent presence on a vanity.
        </p>
      </section>

      {/* Interactive Configurator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <BottlePackagingViewer />
      </section>

      {/* Packaging Engineering Standards */}
      <section className="py-20 bg-white border-y border-champagne/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Material Integrity"
            title="Engineered for Endurance & Sensory Delight"
            subtitle="Our manufacturing campus pairs cosmetic engineering with sustainable European paper mills."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ivory-50 border border-champagne/60 space-y-3">
              <span className="text-xs font-serif text-gold font-semibold uppercase">Specification 01</span>
              <h3 className="text-xl font-serif font-medium text-charcoal">Low-Iron Optical Crystal</h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                Flacons are cast from ultra-pure low-iron sand, eliminating greenish glass tint and maximizing true juice color fidelity and ambient light refractions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory-50 border border-champagne/60 space-y-3">
              <span className="text-xs font-serif text-gold font-semibold uppercase">Specification 02</span>
              <h3 className="text-xl font-serif font-medium text-charcoal">Weighted Magnetic Closures</h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                Cap metallurgy incorporates custom neodymium magnetic inserts to guarantee automatic radial orientation and an unmistakable haptic click.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory-50 border border-champagne/60 space-y-3">
              <span className="text-xs font-serif text-gold font-semibold uppercase">Specification 03</span>
              <h3 className="text-xl font-serif font-medium text-charcoal">Rigid Box Secondary Packaging</h3>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                1200gsm precision grayboard cores wrapped in certified FSC linen papers with anti-scuff matte coatings and gold debossed monogram hot-stamping.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact?type=private-label"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300 shadow-luxury"
            >
              <span>Inquire for Custom Bottle Mold Tooling</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
