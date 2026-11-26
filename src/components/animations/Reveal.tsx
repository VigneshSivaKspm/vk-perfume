import React from 'react';
import { motion } from 'framer-motion';

export type RevealStyle =
  | 'rise'
  | 'slide-left'
  | 'slide-right'
  | 'zoom-settle'
  | 'petal-float'
  | 'card-unfold'
  | 'tilt-hinge'
  | 'compass-pop'
  | 'drop-clean';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealStyle;
  delay?: number;
  duration?: number;
  className?: string;
}

const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

const INITIAL_BY_STYLE: Record<RevealStyle, Record<string, number>> = {
  rise: { opacity: 0, y: 26 },
  'slide-left': { opacity: 0, x: -34 },
  'slide-right': { opacity: 0, x: 34 },
  'zoom-settle': { opacity: 0, scale: 1.045 },
  'petal-float': { opacity: 0, x: -16, y: -14 },
  'card-unfold': { opacity: 0, y: 24, rotateX: 7, transformPerspective: 1100 },
  'tilt-hinge': { opacity: 0, x: 26, rotateY: 7, transformPerspective: 1200 },
  'compass-pop': { opacity: 0, scale: 0.9 },
  'drop-clean': { opacity: 0, y: -22 },
};

const TARGET_STATE = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotateX: 0,
  rotateY: 0,
  transitionEnd: { transform: 'none' },
};

/** Reusable staggered reveal tuned to settle cleanly alongside page transition curtains. */
export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'rise',
  delay = 0.14,
  duration = 0.62,
  className = '',
}) => {
  return (
    <motion.div
      initial={INITIAL_BY_STYLE[variant]}
      animate={TARGET_STATE}
      transition={{ duration, delay, ease: EASE_LUXE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
