import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { FRAGRANCES } from '../../data/fragrances';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-ivory-200/90 border-t border-champagne/60 text-charcoal pt-20 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Brand Section of Footer */}
        <div className="pb-16 border-b border-champagne/60 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={COMPANY_INFO.monogramAsset}
                alt="VK Perfume Monogram"
                className="w-14 h-14 object-contain filter drop-shadow-sm"
                width="56"
                height="56"
              />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                  VK PERFUME
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                  Haute Parfumerie & Precision Manufacturing • Tamil Nadu, India
                </p>
              </div>
            </div>
            <p className="text-sm text-charcoal/80 max-w-xl font-light leading-relaxed">
              Synthesizing the ancient botanical soul of Southern India with modern international extraction science. Specialized in custom formulation, cleanroom maceration, and luxury private label manufacturing.
            </p>
          </div>

          {/* Launch VIP Registration in Footer */}
          <div className="lg:col-span-5 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-champagne/60 shadow-xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Tamil Nadu Launch Showcase</span>
            </div>
            <h4 className="font-serif text-lg font-medium text-charcoal">
              Be the First to Experience the Five Collections
            </h4>
            <p className="text-xs text-charcoal-light mt-1 mb-4">
              Receive private invitations to our launch showcase and olfactive sampling sessions across Tamil Nadu.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-botanical/15 text-botanical-dark rounded-xl text-xs font-medium">
                <Check className="w-4 h-4 text-botanical-dark" />
                <span>Thank you. Your email has been added to our exclusive preview registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-charcoal text-ivory-100 text-xs font-medium hover:bg-gold transition-colors duration-300 shrink-0"
                >
                  Join Preview
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Col 1: Corporate */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              The Maison
            </div>
            <ul className="space-y-2.5 text-xs text-charcoal/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story & Heritage</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-gold transition-colors">Botanical Craftsmanship</Link></li>
              <li><Link to="/manufacturing" className="hover:text-gold transition-colors">Laboratory & Facilities</Link></li>
              <li><Link to="/process" className="hover:text-gold transition-colors">8-Stage Process</Link></li>
              <li><Link to="/lookbook" className="hover:text-gold transition-colors">Visual Gallery</Link></li>
            </ul>
          </div>

          {/* Col 2: The 5 Fragrances */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Signature Launches
            </div>
            <ul className="space-y-2.5 text-xs text-charcoal/70">
              {FRAGRANCES.map((f) => (
                <li key={f.id}>
                  <Link to={`/fragrances/${f.slug}`} className="hover:text-gold transition-colors flex items-center justify-between">
                    <span>{f.name}</span>
                    <span className="text-[10px] text-gold font-serif">N° {f.number}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link to="/collections" className="text-gold font-semibold hover:underline">
                  View All Collections →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: B2B Services */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Manufacturing & B2B
            </div>
            <ul className="space-y-2.5 text-xs text-charcoal/70">
              <li><Link to="/private-label" className="hover:text-gold transition-colors">Private Label & OEM</Link></li>
              <li><Link to="/packaging" className="hover:text-gold transition-colors">Bespoke Flacons & Boxes</Link></li>
              <li><Link to="/manufacturing#compliance" className="hover:text-gold transition-colors">IFRA & GMP Standards</Link></li>
              <li><Link to="/contact?type=wholesale" className="hover:text-gold transition-colors">Wholesale Partnerships</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">Manufacturing FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Regional Footprint */}
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Tamil Nadu Presence
            </div>
            <div className="text-xs text-charcoal/70 space-y-2 leading-relaxed">
              <p className="font-medium text-charcoal">{COMPANY_INFO.location.headquarters}</p>
              <p>{COMPANY_INFO.location.distillationFacilities}</p>
              <p className="text-[11px] text-charcoal-light">
                Key Sourcing: Madurai (Jasmine), Pollachi (Vanilla), Nilgiris (Herbals), Cuddalore (Vetiver).
              </p>
              <div className="pt-2">
                <Link to="/upcoming-launch" className="text-gold font-semibold hover:underline">
                  Tamil Nadu Launch Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Col 5: Connect */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-charcoal">
              Direct Inquiries
            </div>
            <div className="text-xs text-charcoal/70 space-y-2">
              <p>Email: <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-charcoal hover:text-gold transition-colors font-medium">{COMPANY_INFO.contact.email}</a></p>
              <p>B2B: <a href={`mailto:${COMPANY_INFO.contact.b2bEmail}`} className="text-charcoal hover:text-gold transition-colors font-medium">{COMPANY_INFO.contact.b2bEmail}</a></p>
              <p>Hours: {COMPANY_INFO.contact.businessHours}</p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-champagne bg-white text-charcoal text-xs font-medium hover:border-gold hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>Send Direct Message</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Image Display (Authentic asset integration) */}
        <div className="py-8 border-t border-champagne/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xs sm:max-w-sm">
            <img
              src={COMPANY_INFO.bannerAsset}
              alt="VK Perfume Premium Fragrance Banner"
              className="w-full object-contain filter drop-shadow-sm opacity-90 hover:opacity-100 transition-opacity"
              width="360"
              height="130"
            />
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-charcoal-light">
            <Link to="/privacy" className="hover:text-charcoal transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-charcoal transition-colors">Terms of Formulation</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-charcoal transition-colors">FAQ</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 border-t border-champagne/30 text-center text-xs text-charcoal-light/70 font-light flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {CURRENT_YEAR} {COMPANY_INFO.legalName}. All rights reserved.</p>
          <p className="text-[11px]">
            Haute Parfumerie Craftsmanship & Private Label Distillation • Tamil Nadu, India.
          </p>
        </div>
      </div>
    </footer>
  );
};
