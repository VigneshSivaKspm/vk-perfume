import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { COMPANY_INFO } from '../data/company';

export const Terms: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Terms of Formulation & Contract Manufacturing"
        description="Terms and conditions governing manufacturing consultations, private label agreements, and pre-launch exhibitions at VK Perfumes."
      />

      <PageBackground variant="minimal" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal/70 hover:text-charcoal transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-champagne/80 shadow-luxury space-y-8">
          <div className="border-b border-champagne/40 pb-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Commercial Governance</span>
            <h1 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium mt-1">
              Terms of Formulation & Manufacturing
            </h1>
            <p className="text-xs text-charcoal-light mt-2">
              Operational Framework • {COMPANY_INFO.legalName}
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">1. Pre-Launch Exhibition & Concept Models</h2>
              <p>
                The five signature fragrance flacons showcased on this portal are presented as pre-launch exhibition concepts. Final bottle decorations, secondary carton finishes, and commercial availability are confirmed directly through signed purchase agreements and licensed regional retail distributions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">2. Contract Manufacturing Protocols</h2>
              <p>
                Private label and OEM manufacturing agreements are executed under definitive supply agreements establishing batch volume commitments (Minimum Order Quantity), ingredient safety dossier specifications (IFRA standards), quality release criteria, and delivery timelines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">3. Intellectual Property</h2>
              <p>
                The VK Perfumes brand, crowned monogram, typography, and original bottle silhouette geometries are the exclusive intellectual property of {COMPANY_INFO.legalName}. Client custom formulation IP rights are transferred upon fulfillment of commercial terms as stipulated in bilateral contracts.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
