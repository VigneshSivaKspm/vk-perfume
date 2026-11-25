import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Calendar
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground, type BackgroundAnimationVariant } from '../components/animations/PageBackground';
import { FragranceBottle } from '../components/fragrance/FragranceBottle';
import { FragrancePyramid } from '../components/fragrance/FragrancePyramid';
import { FragranceCard } from '../components/fragrance/FragranceCard';
import { FRAGRANCES } from '../data/fragrances';

export const FragranceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [selectedSize, setSelectedSize] = useState<'ml50' | 'ml100'>('ml100');

  const fragrance = FRAGRANCES.find((f) => f.slug === slug);

  if (!fragrance) {
    return <Navigate to="/collections" replace />;
  }

  const bgVariant: BackgroundAnimationVariant =
    fragrance.visualType === 'oud' ? 'fragrance-oud'
    : fragrance.visualType === 'jasmine' ? 'fragrance-jasmine'
    : fragrance.visualType === 'aquatic' ? 'fragrance-aquatic'
    : fragrance.visualType === 'citrus' ? 'fragrance-citrus'
    : 'fragrance-vanilla';

  // Related fragrances (other 2 fragrances)
  const relatedFragrances = FRAGRANCES.filter((f) => f.id !== fragrance.id).slice(0, 2);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail && waitlistEmail.includes('@')) {
      setWaitlistSubmitted(true);
      setWaitlistEmail('');
    }
  };

  return (
    <div className="pt-24 pb-24 overflow-hidden transition-colors duration-700" style={{ backgroundColor: fragrance.colors.bgLight }}>
      <SEO
        title={`${fragrance.name} (${fragrance.category})`}
        description={`${fragrance.name}: ${fragrance.story} Distinctive concept flacon engineered by VK Perfumes in Tamil Nadu, India.`}
      />

      <PageBackground variant={bgVariant} />

      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/collections"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal/70 hover:text-charcoal transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Collections</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Bottle Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] sm:min-h-[520px]">
            {/* Ambient Background Aura */}
            <div
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full filter blur-3xl opacity-35 pointer-events-none"
              style={{ backgroundColor: fragrance.colors.accent }}
            />
            <FragranceBottle
              type={fragrance.visualType}
              size="xl"
              interactive={true}
            />
            <div className="mt-6 text-center space-y-1">
              <span className="text-[10px] text-charcoal/60 uppercase tracking-widest font-semibold">
                Sculptural Concept Flacon • Interactive 3D Model
              </span>
              <p className="text-xs text-charcoal-light font-serif italic">
                Tilt cursor to inspect glass caustics & specular reflection
              </p>
            </div>
          </div>

          {/* Right Column: Title, Identity & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
                {fragrance.subtitle}
              </span>
              <span>•</span>
              <span
                className="text-xs font-medium px-3 py-1 rounded-full border"
                style={{
                  backgroundColor: fragrance.colors.pillBg,
                  borderColor: fragrance.colors.border,
                  color: fragrance.colors.secondary
                }}
              >
                {fragrance.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-charcoal font-medium leading-tight">
              {fragrance.name}
            </h1>

            <p className="text-base sm:text-lg italic font-serif text-gold-dark">
              "{fragrance.tagline}"
            </p>

            <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
              {fragrance.story}
            </p>

            {/* Price in Rupees & Flacon Size Selector */}
            <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-champagne shadow-luxury space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-gold block">
                    Launch Edition Price (INR)
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-serif font-semibold text-charcoal tracking-tight">
                      {fragrance.price.sizes[selectedSize].formatted}
                    </span>
                    <span className="text-xs text-charcoal/60 font-light">
                      (Inclusive of all taxes)
                    </span>
                  </div>
                </div>

                {/* Size Selector Tabs */}
                <div className="flex items-center gap-1.5 bg-ivory-100 p-1 rounded-full border border-champagne/60 self-start sm:self-auto">
                  <button
                    onClick={() => setSelectedSize('ml100')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                      selectedSize === 'ml100'
                        ? 'bg-charcoal text-ivory-100 shadow-xs'
                        : 'text-charcoal-light hover:text-charcoal'
                    }`}
                  >
                    100 ML • {fragrance.price.sizes.ml100.formatted}
                  </button>
                  <button
                    onClick={() => setSelectedSize('ml50')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                      selectedSize === 'ml50'
                        ? 'bg-charcoal text-ivory-100 shadow-xs'
                        : 'text-charcoal-light hover:text-charcoal'
                    }`}
                  >
                    50 ML • {fragrance.price.sizes.ml50.formatted}
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-charcoal/70 pt-2 border-t border-champagne/40 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>✦ Pre-Launch Limited Allocation • Tamil Nadu Preview</span>
                <span>✦ Complimentary Insured Dispatch Across India</span>
              </div>
            </div>

            {/* Fragrance Specifications Matrix */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-champagne/60 text-xs">
              <div>
                <span className="text-charcoal-light font-semibold uppercase tracking-wider block">Concentration:</span>
                <span className="text-charcoal font-serif text-sm font-semibold mt-0.5 block">{fragrance.concentration}</span>
              </div>
              <div>
                <span className="text-charcoal-light font-semibold uppercase tracking-wider block">Olfactive Temperament:</span>
                <span className="text-charcoal font-serif text-sm font-semibold mt-0.5 block">{fragrance.mood}</span>
              </div>
              <div>
                <span className="text-charcoal-light font-semibold uppercase tracking-wider block">Target Presence:</span>
                <span className="text-charcoal font-serif text-sm font-semibold mt-0.5 block">{fragrance.targetProfile}</span>
              </div>
              <div>
                <span className="text-charcoal-light font-semibold uppercase tracking-wider block">Launch Status:</span>
                <span className="text-gold font-serif text-sm font-semibold mt-0.5 block">Tamil Nadu Preview</span>
              </div>
            </div>

            {/* Launch Waitlist Card */}
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-champagne shadow-luxury space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Request Exclusive Launch Preview Allocation</span>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Be notified when first distillation batches of {fragrance.name} are bottled for preview in Chennai and Coimbatore.
              </p>

              {waitlistSubmitted ? (
                <div className="flex items-center gap-2 p-3 bg-botanical/15 text-botanical-dark rounded-xl text-xs font-medium">
                  <Check className="w-4 h-4 text-botanical-dark" />
                  <span>Your allocation request has been registered for {fragrance.name}.</span>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex gap-2 pt-1">
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-charcoal text-ivory-100 text-xs font-semibold hover:bg-gold transition-colors shrink-0"
                  >
                    Reserve Preview
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Olfactory Notes Pyramid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FragrancePyramid
          notes={fragrance.notes}
          accentColor={fragrance.colors.accent}
          pillBg={fragrance.colors.pillBg}
        />
      </section>

      {/* Flacon Architecture & Engineering Deep-Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-champagne/60 shadow-luxury space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Custom Flacon Engineering</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium mt-1">
              Bespoke Silhouette & Materials
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-light font-light mt-2 leading-relaxed">
              Every detail of this flacon has been custom engineered to celebrate the physical characteristics of {fragrance.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold">Silhouette Form</span>
              <h4 className="text-sm font-semibold text-charcoal">{fragrance.bottle.silhouette}</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">{fragrance.bottle.summary}</p>
            </div>
            <div className="p-5 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold">Glass Metallurgy</span>
              <h4 className="text-sm font-semibold text-charcoal">{fragrance.bottle.glass}</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">Optical purity glass engineered for high refractive indices and ultraviolet protection.</p>
            </div>
            <div className="p-5 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold">Cap & Haptics</span>
              <h4 className="text-sm font-semibold text-charcoal">{fragrance.bottle.cap}</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">Solid weighted metal casting with precision magnetic alignment and soft-snap click.</p>
            </div>
            <div className="p-5 rounded-2xl bg-ivory-50 border border-champagne/50 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold">Optical Base</span>
              <h4 className="text-sm font-semibold text-charcoal">{fragrance.bottle.base}</h4>
              <p className="text-xs text-charcoal-light leading-relaxed">Ground and hand-polished base reflecting the rich liquid color onto any surface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Botanical Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-14 bg-charcoal text-ivory-100 border border-gold/40 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Tamil Nadu Terroir Story</span>
            <h3 className="text-3xl sm:text-4xl font-serif text-ivory-100 font-medium">
              Harvested in South India, Formulated for the World
            </h3>
            <p className="text-sm text-ivory-300 font-light leading-relaxed">
              {fragrance.regionalHeritage}
            </p>
            <p className="text-xs text-ivory-300/80 font-light italic">
              "We believe true luxury perfumery must celebrate the provenance of its ingredients. Our partnership with Tamil Nadu's botanical growers guarantees ethical harvest, farmer welfare, and incomparable olfactive purity."
            </p>
          </div>
          <div className="lg:col-span-4 text-center lg:text-right">
            <Link
              to="/contact?type=private-label"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-charcoal-dark text-xs uppercase tracking-widest font-semibold hover:bg-gold-light transition-colors"
            >
              <span>Custom Formulation Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Fragrances */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Explore The Collection</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium mt-1">
              Related Haute Compositions
            </h3>
          </div>
          <Link
            to="/collections"
            className="text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
          >
            View All 5 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedFragrances.map((rel, idx) => (
            <FragranceCard key={rel.id} fragrance={rel} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};
