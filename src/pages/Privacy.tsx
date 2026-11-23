import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { COMPANY_INFO } from '../data/company';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Privacy Policy & Data Stewardship"
        description="Privacy policy and data protection disclosures for VK Perfume Manufacturing Private Limited."
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
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Legal Governance</span>
            <h1 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium mt-1">
              Privacy Policy & Client Data Stewardship
            </h1>
            <p className="text-xs text-charcoal-light mt-2">
              Last Updated: November 2026 • {COMPANY_INFO.legalName}
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">1. Information Collection & Purpose</h2>
              <p>
                {COMPANY_INFO.legalName} ("VK Perfume", "we", "us") collects personal and commercial contact data submitted voluntarily via our website forms (including VIP Launch Registry, B2B Private Label Inquiries, and Wholesale Inquiries). This data is strictly utilized to process project briefs, dispatch event allocations, and provide client correspondence.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">2. Proprietary Formulation Confidentiality</h2>
              <p>
                In the context of contract manufacturing and private-label formulation, all olfactory formulas, ingredient concentrations, custom bottle mold drawings, and commercial terms are governed by strict confidentiality protocols. We never disclose proprietary formulas to third-party entities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">3. Non-Disclosure & Data Security</h2>
              <p>
                We do not sell, rent, or lease client information to commercial brokers. Technical data submitted through digital portals is protected by enterprise transport-layer encryption.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-serif font-semibold text-charcoal">4. Corporate Governance & Inquiries</h2>
              <p>
                For questions regarding data processing or to request removal from our preview distribution registry, please contact our administrative desk at <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-gold font-medium underline">{COMPANY_INFO.contact.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
