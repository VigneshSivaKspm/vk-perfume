import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`max-w-3xl flex flex-col ${alignClasses[align]} mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-champagne text-xs uppercase tracking-widest font-semibold text-gold mb-4 shadow-2xs"
        >
          <span>{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight leading-tight ${
          light ? 'text-ivory-100' : 'text-charcoal'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-sm sm:text-base lg:text-lg font-light leading-relaxed ${
            light ? 'text-ivory-300/80' : 'text-charcoal-light'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
