import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Fragrance } from '../../types';
import { FragranceBottle } from './FragranceBottle';

interface FragranceCardProps {
  fragrance: Fragrance;
  index?: number;
}

export const FragranceCard: React.FC<FragranceCardProps> = ({ fragrance, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-champagne/60 hover:border-gold/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient glow on hover */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: fragrance.colors.accent }}
      />

      <div>
        {/* Card Header: Collection Number & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-serif text-gold tracking-widest uppercase font-semibold">
            N° {fragrance.number}
          </span>
          <span
            className="text-[11px] font-medium px-3 py-1 rounded-full border"
            style={{
              backgroundColor: fragrance.colors.pillBg,
              borderColor: fragrance.colors.border,
              color: fragrance.colors.secondary
            }}
          >
            {fragrance.category}
          </span>
        </div>

        {/* 3D Bottle Visual Representation */}
        <div className="py-6 flex items-center justify-center relative min-h-[260px] sm:min-h-[290px] overflow-hidden">
          <FragranceBottle
            type={fragrance.visualType}
            size="md"
            interactive={true}
          />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2 mt-4">
          <h3 className="text-2xl font-serif text-charcoal font-medium group-hover:text-gold-dark transition-colors duration-300">
            {fragrance.name}
          </h3>
          <p className="text-xs italic font-serif text-charcoal-light">
            "{fragrance.tagline}"
          </p>
        </div>

        {/* Olfactory Notes Preview */}
        <div className="mt-5 pt-4 border-t border-champagne/40 space-y-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-light block">
            Signature Accords:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {[...fragrance.notes.top.slice(0, 1), ...fragrance.notes.heart.slice(0, 1), ...fragrance.notes.base.slice(0, 1)].map((note, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-ivory-200/80 text-charcoal-light font-medium"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Price in Rupees & Explore Link */}
      <div className="mt-6 pt-4 border-t border-champagne/40 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-serif font-semibold text-charcoal tracking-tight">
            {fragrance.price.formatted}
          </span>
          <span className="text-[10px] text-charcoal/60 uppercase tracking-wider font-medium">
            100ml • {fragrance.concentration.split(' ')[0]}
          </span>
        </div>
        <Link
          to={`/fragrances/${fragrance.slug}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ivory-200/60 hover:bg-charcoal text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-ivory-100 transition-all duration-300 shadow-2xs group-hover:bg-charcoal group-hover:text-ivory-100"
        >
          <span>Discover</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
};
