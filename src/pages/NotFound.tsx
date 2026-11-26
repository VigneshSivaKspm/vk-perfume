import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { Reveal } from '../components/animations/Reveal';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-24 px-4 bg-ivory-100">
      <SEO
        title="404 — Page Not Found"
        description="The requested fragrance archive or document could not be located."
      />

      <PageBackground variant="minimal" />

      <Reveal variant="compass-pop" delay={0.16} className="max-w-md w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-champagne/80 shadow-luxury text-center space-y-6">
        <div className="w-14 h-14 rounded-full bg-ivory-100 flex items-center justify-center text-gold mx-auto border border-champagne">
          <Compass className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-serif uppercase tracking-widest text-gold font-semibold">
            Error 404 • Uncharted Scent Trail
          </span>
          <h1 className="text-3xl font-serif text-charcoal font-medium">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-light font-light leading-relaxed">
            The page you are seeking may have been repositioned or belongs to an archival catalog.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors"
          >
            <span>Return to Homepage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/collections"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-champagne bg-ivory-50 text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-gold transition-colors"
          >
            <span>Browse The 5 Fragrances</span>
          </Link>
        </div>
        </div>
      </Reveal>
    </div>
  );
};
