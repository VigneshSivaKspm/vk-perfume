import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary: 'bg-charcoal text-ivory-100 hover:bg-gold hover:shadow-luxury',
    secondary: 'bg-white text-charcoal border border-champagne hover:border-gold hover:bg-ivory-50',
    gold: 'bg-gold text-ivory-50 hover:bg-gold-dark hover:shadow-gold-glow',
    outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory-100'
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 select-none shadow-xs disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
