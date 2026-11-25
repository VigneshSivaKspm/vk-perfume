import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check, MessageSquare, Clock, Copy, ExternalLink } from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { PageBackground } from '../components/animations/PageBackground';
import { COMPANY_INFO } from '../data/company';

type EnquiryType = 'general' | 'wholesale' | 'private-label' | 'launch';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type') as EnquiryType;
  const initialType: EnquiryType = ['general', 'wholesale', 'private-label', 'launch'].includes(typeParam) ? typeParam : 'general';

  const [enquiryType, setEnquiryType] = useState<EnquiryType>(initialType);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    estimatedQuantity: '1000 - 3000 units',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate front-end verification and integration preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const copyEmailToClipboard = (emailToCopy: string) => {
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const targetEmail = enquiryType === 'private-label' ? COMPANY_INFO.contact.b2bEmail : COMPANY_INFO.contact.email;

  const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(
    `[VK Perfumes ${enquiryType.toUpperCase()}] Project Inquiry from ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Client Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nEnquiry Type: ${enquiryType}\nQuantity: ${formData.estimatedQuantity}\n\nProject Brief:\n${formData.message}`
  )}`;

  return (
    <div className="pt-28 pb-24 overflow-hidden bg-ivory-100">
      <SEO
        title="Contact & Commercial Inquiries"
        description="Initiate wholesale partnerships, private-label manufacturing briefs, or general inquiries with VK Perfumes in Tamil Nadu, India."
      />

      <PageBackground variant="contact" />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs">
          <Mail className="w-3.5 h-3.5" />
          <span>Concierge & Commercial Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-charcoal font-normal tracking-tight">
          Initiate a Consultation
        </h1>
        <p className="mt-4 text-base sm:text-lg text-charcoal-light font-light max-w-2xl mx-auto leading-relaxed">
          Whether commissioning a bespoke perfume collection, discussing private label contract manufacturing, or joining our preview showcase in Tamil Nadu, our team welcomes your correspondence.
        </p>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Multi-tab Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-champagne/80 shadow-luxury">
            {/* Tab Selector */}
            <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-champagne/40">
              {[
                { id: 'general' as const, label: 'General Inquiry' },
                { id: 'wholesale' as const, label: 'Wholesale' },
                { id: 'private-label' as const, label: 'Private Label OEM' },
                { id: 'launch' as const, label: 'Launch VIP' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setEnquiryType(tab.id);
                    setSubmitted(false);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    enquiryType === tab.id
                      ? 'bg-charcoal text-ivory-100 shadow-sm'
                      : 'bg-ivory-100 text-charcoal-light hover:text-charcoal hover:bg-ivory-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6 text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-botanical/20 flex items-center justify-center text-botanical-dark mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-charcoal">
                  Inquiry Verified & Prepared
                </h3>
                <p className="text-sm text-charcoal-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been recorded. To ensure direct delivery without intermediate mail relay delays, you may also dispatch your structured inquiry directly via your email client below:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-wider font-semibold hover:bg-gold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </a>
                  <button
                    onClick={() => copyEmailToClipboard(targetEmail)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-champagne bg-ivory-50 text-charcoal text-xs uppercase tracking-wider font-semibold hover:border-gold transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copiedEmail ? 'Copied to Clipboard!' : `Copy ${targetEmail}`}</span>
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', estimatedQuantity: '1000 - 3000 units', message: '' });
                  }}
                  className="text-xs text-charcoal-light hover:underline pt-4 block mx-auto"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. K. Raghavan"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. raghavan@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98400 12345"
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Maison Niche Studio"
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {enquiryType === 'private-label' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                      Estimated Production Quantity (MOQ: 1,000 units)
                    </label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold"
                    >
                      <option value="500 - 1000 units (Boutique Catalog Run)">500 - 1,000 units (Boutique Catalog Run)</option>
                      <option value="1000 - 3000 units (Custom Formulation)">1,000 - 3,000 units (Custom Formulation)</option>
                      <option value="3000 - 10,000 units (Full Scale Manufacturing)">3,000 - 10,000 units (Full Scale Manufacturing)</option>
                      <option value="10,000+ units (Commercial Export Contract)">10,000+ units (Commercial Export Contract)</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1">
                    Project Brief & Inquiries *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your olfactive vision, timeline, target markets, or required services..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-champagne text-xs text-charcoal focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-charcoal text-ivory-100 text-xs uppercase tracking-widest font-semibold hover:bg-gold transition-colors duration-300 shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[11px] text-charcoal-light/70 pt-2">
                  *All project briefs and proprietary fragrance formulas are protected under mutual non-disclosure standards.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Coordinates & Facility Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-champagne/80 shadow-luxury space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={COMPANY_INFO.monogramAsset}
                  alt="VK Perfumes Monogram"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{COMPANY_INFO.name}</h3>
                  <p className="text-[10px] text-gold uppercase tracking-widest">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-charcoal-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block">Maison Headquarters & Stills:</strong>
                    <span>{COMPANY_INFO.location.distillationFacilities}</span>
                    <span className="block">{COMPANY_INFO.location.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block">Commercial Email:</strong>
                    <a href={`mailto:${COMPANY_INFO.contact.b2bEmail}`} className="text-charcoal hover:text-gold transition-colors">
                      {COMPANY_INFO.contact.b2bEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block">Phone:</strong>
                    <a href={`tel:${COMPANY_INFO.contact.supportPhone.replace(/\s/g, '')}`} className="text-charcoal hover:text-gold transition-colors">
                      {COMPANY_INFO.contact.supportPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-charcoal block">Laboratory Office Hours:</strong>
                    <span>{COMPANY_INFO.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-champagne/40">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent('Hello VK Perfumes, I am inquiring regarding custom fragrance manufacturing.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-botanical/15 text-botanical-dark hover:bg-botanical/25 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Commercial Desk</span>
                </a>
              </div>
            </div>

            {/* Tamil Nadu Corridor Map Callout */}
            <div className="bg-charcoal text-ivory-100 rounded-3xl p-8 border border-gold/40 shadow-luxury space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold">Regional Presence</span>
              <h4 className="text-xl font-serif font-medium text-ivory-100">The Coromandel Scent Corridor</h4>
              <p className="text-xs text-ivory-300 font-light leading-relaxed">
                Direct road and freight connectivity between our distillation facilities and the major shipping ports of Chennai and Tuticorin for seamless international export.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
