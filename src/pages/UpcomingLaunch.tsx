import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Calendar, MapPin, Check, ArrowRight, Bell } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FragranceBottle } from '../components/fragrance/FragranceBottle';
import { FRAGRANCES } from '../data/fragrances';

export const UpcomingLaunch: React.FC = () => {
  const [activeBottleIndex, setActiveBottleIndex] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Chennai');
  const [interest, setInterest] = useState('All Five Collections');
  const [submitted, setSubmitted] = useState(false);

  const activeFragrance = FRAGRANCES[activeBottleIndex];

  const handleLaunchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B59A68', '#E9D9BF', '#009688', '#FAF8F4']
        });
      } catch {
        // Fallback gracefully
      }
    }
  };

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Exclusive Tamil Nadu Fragrance Launch Showcase 2026"
        description="Preview the official launch of VK Perfumes' five signature fragrance flacons in Tamil Nadu. Reserve priority VIP olfactive invitations across Chennai, Coimbatore, and Madurai."
      />

      <PageBackground variant="launch" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>Exclusive Tamil Nadu Pre-Launch Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          A Sovereign Olfactory Premiere
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Five distinct flacons. Five tributes to Indian botanical terroir. Introducing our signature collections in preview to collectors, connoisseurs, and retail partners across Tamil Nadu.
        </p>
      </section>

      {/* Interactive 5-Bottle Cinematic Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-champagne/80 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3D Bottle Visualizer with Custom Silhouette */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[440px]">
            <div
              className="absolute w-72 h-72 rounded-full filter blur-3xl opacity-25 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: activeFragrance.colors.accent }}
            />
            <FragranceBottle
              type={activeFragrance.visualType}
              size="xl"
              interactive={true}
            />
          </div>

          {/* Right Column: Bottle Story & Carousel Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
                N° {activeFragrance.number} • {activeFragrance.subtitle}
              </span>
              <span>•</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-ivory-100 border border-champagne text-charcoal">
                {activeFragrance.category}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
              {activeFragrance.name}
            </h3>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal tracking-tight">
                {activeFragrance.price.formatted}
              </span>
              <span className="text-xs text-charcoal/60 uppercase tracking-wider font-medium">
                {activeFragrance.price.volume} • {activeFragrance.concentration.split(' ')[0]}
              </span>
            </div>

            <p className="text-sm italic font-serif text-gold-dark">
              "{activeFragrance.tagline}"
            </p>

            <p className="text-sm text-charcoal/80 font-light leading-relaxed">
              {activeFragrance.story}
            </p>

            <div className="p-4 rounded-xl bg-ivory-50 border border-champagne/60 text-xs">
              <strong className="text-charcoal">Tamil Nadu Terroir Inspiration: </strong>
              <span className="text-charcoal-light">{activeFragrance.regionalHeritage}</span>
            </div>

            {/* Carousel Navigation Tabs */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-light block mb-2">
                Select Showcase Flacon:
              </span>
              <div className="flex flex-wrap gap-2">
                {FRAGRANCES.map((f, idx) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveBottleIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeBottleIndex === idx
                        ? 'bg-charcoal text-ivory-100 shadow-sm'
                        : 'bg-ivory-100 text-charcoal-light hover:text-charcoal hover:bg-ivory-200'
                    }`}
                  >
                    N° {f.number} • {f.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                to={`/fragrances/${activeFragrance.slug}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
              >
                <span>Read Full Olfactory Breakdown for {activeFragrance.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Launch Positioning */}
      <section className="py-20 bg-white border-y border-champagne/60 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Regional Footprint"
            title="Tamil Nadu Launch Experience Centers"
            subtitle="Private olfactive salons and luxury partner retail previews scheduled across key cultural corridors."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                city: 'Chennai',
                venue: 'Private Olfactive Salon',
                focus: 'Flagship preview exhibition, press presentations, and private VIP client bookings.'
              },
              {
                city: 'Coimbatore',
                venue: 'Western Ghats Botanical Pavilion',
                focus: 'Boutique hospitality pairings and trade partner allocations.'
              },
              {
                city: 'Madurai',
                venue: 'Heritage Malligai Sanctuary',
                focus: 'Celebration of Sambac Jasmine growers and floral distillation origins.'
              },
              {
                city: 'Online Priority',
                venue: 'Digital Allocation Registry',
                focus: 'Pre-launch sample discovery vials delivered directly to registered connoisseurs.'
              }
            ].map((loc, i) => (
              <div key={i} className="p-6 rounded-2xl bg-ivory-50 border border-champagne/60 space-y-3">
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-semibold">{loc.city}</span>
                </div>
                <h4 className="text-base font-serif font-semibold text-charcoal">{loc.venue}</h4>
                <p className="text-xs text-charcoal-light font-light leading-relaxed">{loc.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Launch Reservation Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-champagne/80 shadow-luxury space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold">Launch Priority</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-medium">
              Reserve Your Launch Showcase Invitation
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-light font-light max-w-lg mx-auto">
              Registered guests receive private invitations to regional olfactive preview sessions and priority allocation of the first limited batch numbered bottles.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-botanical/10 border border-botanical/30 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-botanical/20 flex items-center justify-center text-botanical-dark mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-medium text-charcoal">
                Invitation Priority Confirmed
              </h3>
              <p className="text-xs text-charcoal-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{name || 'Distinguished Guest'}</strong>. Your allocation request for the Tamil Nadu Launch Showcase has been recorded. Our concierge team will dispatch private event invitations to <strong>{email}</strong>.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleLaunchSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Senthil Nathan"
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. senthil@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Preferred City in Tamil Nadu
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                  >
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Tiruchirappalli">Tiruchirappalli</option>
                    <option value="Salem">Salem</option>
                    <option value="Other / Online Preview">Other / Online Preview</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Primary Fragrance Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                  >
                    <option value="All Five Collections">All Five Collections</option>
                    <option value="Imperial Oud & Smoked Musk">N° 01 — Imperial Oud</option>
                    <option value="Madurai Jasmine Lumière">N° 02 — Madurai Jasmine</option>
                    <option value="Coromandel Oceanic Mist">N° 03 — Oceanic Mist</option>
                    <option value="Soleil de Coonoor Citrus">N° 04 — Citrus Soleil</option>
                    <option value="Velours Vanilla & Amber">N° 05 — Velours Vanilla</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4 text-gold" />
                  <span>Reserve Launch Showcase Priority</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-charcoal-light/70">
                *Invitations are complimentary and non-binding. We respect your privacy and never share contact details.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
