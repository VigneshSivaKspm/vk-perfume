import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface FragranceBottleProps {
  type: 'oud' | 'jasmine' | 'aquatic' | 'citrus' | 'vanilla';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  className?: string;
}

export const FragranceBottle: React.FC<FragranceBottleProps> = ({
  type,
  size = 'md',
  interactive = true,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Pointer tracking is kept out of React state: moving the mouse only updates
  // motion values + one CSS variable, so the (large) SVG is not re-rendered.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { damping: 20, stiffness: 120 });
  const rotateY = useSpring(tiltY, { damping: 20, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    tiltX.set((y - 0.5) * -12);
    tiltY.set((x - 0.5) * 16);
    rootRef.current?.style.setProperty('--hx', String((x - 0.5) * 40));
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    rootRef.current?.style.setProperty('--hx', '0');
    setIsHovered(false);
  };

  const sizeClasses = {
    sm: 'w-40 h-56',
    md: 'w-60 h-80',
    lg: 'w-72 h-96 sm:w-80 sm:h-[430px]',
    xl: 'w-80 h-[460px] sm:w-96 sm:h-[540px]'
  };

  return (
    <div
      ref={rootRef}
      className={`relative flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative flex items-center justify-center"
        style={{ rotateX, rotateY }}
        animate={{ y: isHovered ? -6 : [0, -8, 0] }}
        transition={{
          y: isHovered ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {/* Ambient Ground Shadow */}
        <div
          className="absolute -bottom-6 w-3/4 h-8 rounded-full opacity-40 transition-transform duration-500"
          style={{
            background: type === 'oud' ? 'radial-gradient(ellipse, #0A3C48 0%, transparent 70%)'
              : type === 'jasmine' ? 'radial-gradient(ellipse, #7EA099 0%, transparent 70%)'
              : type === 'aquatic' ? 'radial-gradient(ellipse, #1E7B7D 0%, transparent 70%)'
              : type === 'citrus' ? 'radial-gradient(ellipse, #9B991E 0%, transparent 70%)'
              : 'radial-gradient(ellipse, #1F784E 0%, transparent 70%)',
            transform: `scale(${isHovered ? 1.08 : 1}) translateX(calc(var(--hx, 0) * 0.3px))`,
          }}
        />

        {/* 1. OUD: Architectural Smoked Amber Monolith */}
        {type === 'oud' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="oudGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B2329" />
                <stop offset="30%" stopColor="#135667" />
                <stop offset="60%" stopColor="#197389" />
                <stop offset="85%" stopColor="#0B3C48" />
                <stop offset="100%" stopColor="#07191D" />
              </linearGradient>
              <linearGradient id="oudCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9B9A34" />
                <stop offset="40%" stopColor="#D8D689" />
                <stop offset="70%" stopColor="#716F26" />
                <stop offset="100%" stopColor="#3E3D14" />
              </linearGradient>
              <linearGradient id="oudBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#135667" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#091F24" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#030F12" />
              </linearGradient>
              <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F4F9FA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F4F9FA" stopOpacity="0" />
              </linearGradient>
              <filter id="oudGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Internal ambient aura */}
            <rect x="75" y="115" width="150" height="250" rx="4" fill="#1AE2BD" opacity="0.18" filter="url(#oudGlow)" />

            {/* Bronze Cap */}
            <rect x="110" y="24" width="80" height="66" rx="3" fill="url(#oudCapGrad)" stroke="#C7C556" strokeWidth="1.5" />
            <rect x="115" y="30" width="70" height="4" fill="#F4F9FA" opacity="0.4" />
            <line x1="110" y1="56" x2="190" y2="56" stroke="#5E5D1D" strokeWidth="1.5" />
            
            {/* Neck Collar */}
            <rect x="122" y="90" width="56" height="18" fill="#5E5D1D" stroke="#C7C556" strokeWidth="1" />
            <rect x="124" y="92" width="52" height="3" fill="#D8D689" opacity="0.6" />

            {/* Main Architectural Bottle Body */}
            <rect x="68" y="108" width="164" height="260" rx="6" fill="url(#oudGlassGrad)" stroke="#197389" strokeWidth="2" />

            {/* Inner Smoked Liquid Volume */}
            <rect x="78" y="130" width="144" height="210" rx="4" fill="#0C4452" opacity="0.85" />
            
            {/* Liquid Level with slight meniscus */}
            <path d="M 80 148 Q 150 144 220 148 L 220 340 L 80 340 Z" fill="#115F72" opacity="0.9" />

            {/* Heavy Crystal Glass Base (32mm) */}
            <rect x="68" y="342" width="164" height="36" rx="4" fill="url(#oudBaseGrad)" stroke="#C7C556" strokeWidth="1" />
            <line x1="72" y1="362" x2="228" y2="362" stroke="#C7C556" strokeWidth="0.8" opacity="0.5" />

            {/* Gold Plate Label */}
            <g transform="translate(95, 210)">
              <rect x="0" y="0" width="110" height="68" rx="2" fill="#07171B" stroke="#C7C556" strokeWidth="1.2" />
              <rect x="4" y="4" width="102" height="60" rx="1" fill="none" stroke="#D8D689" strokeWidth="0.6" strokeDasharray="2,2" />
              <text x="55" y="22" fill="#D8D689" fontSize="8" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="3">VK PERFUMES</text>
              <line x1="30" y1="28" x2="80" y2="28" stroke="#C7C556" strokeWidth="0.75" />
              <text x="55" y="42" fill="#F4F9FA" fontSize="11" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.5">ROYAL OUD</text>
              <text x="55" y="55" fill="#D8D689" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EXTRAIT DE PARFUM</text>
            </g>

            {/* Dynamic Glass Specular Reflection Highlight */}
            <path
              d={`M 90 112 L 104 112 L 84 360 L 74 360 Z`}
              style={{ transform: 'translateX(calc(var(--hx, 0) * 0.4px))' }}
              fill="url(#goldHighlight)"
              opacity="0.5"
            />
            {/* Edge highlights */}
            <line x1="72" y1="110" x2="72" y2="370" stroke="#F4F9FA" strokeWidth="1" opacity="0.35" />
            <line x1="228" y1="110" x2="228" y2="370" stroke="#D8D689" strokeWidth="0.8" opacity="0.35" />
          </svg>
        )}

        {/* 2. JASMINE: Sculpted Teardrop Opaline Frosted Glass */}
        {type === 'jasmine' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="jasmineGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#EFF8F6" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#DEF0ED" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#C7E3DD" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="roseGoldCap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A1E2D5" />
                <stop offset="35%" stopColor="#CDF4EC" />
                <stop offset="70%" stopColor="#74C2B2" />
                <stop offset="100%" stopColor="#438679" />
              </linearGradient>
              <linearGradient id="pearlShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="jasmineAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8FDF9" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F4FAF9" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Aura */}
            <circle cx="150" cy="240" r="110" fill="url(#jasmineAura)" />

            {/* Rose Gold Filigree Cap - Spherical & Sculpted */}
            <circle cx="150" cy="52" r="34" fill="url(#roseGoldCap)" stroke="#74C2B2" strokeWidth="1" />
            <circle cx="140" cy="44" r="14" fill="#FFFFFF" opacity="0.4" />
            {/* Filigree Petal Details on Cap */}
            <path d="M 132 52 C 142 42 158 42 168 52 C 158 62 142 62 132 52 Z" fill="none" stroke="#F4FAF9" strokeWidth="1" opacity="0.6" />
            <path d="M 150 34 C 150 44 150 60 150 70" stroke="#F4FAF9" strokeWidth="1" opacity="0.5" />

            {/* Collar */}
            <rect x="135" y="86" width="30" height="16" rx="2" fill="url(#roseGoldCap)" />

            {/* Soft Sculpted Teardrop Flacon Body */}
            <path
              d="M 135 102 
                 C 110 120, 70 170, 70 240 
                 C 70 320, 105 372, 150 372 
                 C 195 372, 230 320, 230 240 
                 C 230 170, 190 120, 165 102 Z"
              fill="url(#jasmineGlass)"
              stroke="#A1E2D5"
              strokeWidth="1.5"
            />

            {/* Inner Liquid Volume */}
            <path
              d="M 136 128 
                 C 116 142, 82 186, 82 245 
                 C 82 312, 112 356, 150 356 
                 C 188 356, 218 312, 218 245 
                 C 218 186, 184 142, 164 128 Z"
              fill="#F4FCFB"
              opacity="0.75"
            />

            {/* Embossed Floral Petal Lines */}
            <path d="M 150 160 C 130 210, 115 270, 120 320" stroke="#A1E2D5" strokeWidth="0.8" fill="none" opacity="0.4" />
            <path d="M 150 160 C 170 210, 185 270, 180 320" stroke="#A1E2D5" strokeWidth="0.8" fill="none" opacity="0.4" />

            {/* Delicate Silk Label */}
            <g transform="translate(98, 225)">
              <rect x="0" y="0" width="104" height="60" rx="30" fill="#FFFFFF" stroke="#A1E2D5" strokeWidth="0.8" />
              <text x="52" y="20" fill="#01706C" fontSize="7.5" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="2.5">VK PARFUMS</text>
              <line x1="32" y1="26" x2="72" y2="26" stroke="#A1E2D5" strokeWidth="0.6" />
              <text x="52" y="38" fill="#2A3B38" fontSize="10" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">MADURAI</text>
              <text x="52" y="49" fill="#438679" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="1.8">JASMINE LUMIÈRE</text>
            </g>

            {/* Dynamic Pearl Reflection */}
            <path
              d={`M 95 125 
                 C 80 180, 82 280, 100 340 
                 L 110 338 
                 C 94 280, 92 180, 105 125 Z`}
              style={{ transform: 'translateX(calc(var(--hx, 0) * 0.3px))' }}
              fill="url(#pearlShine)"
              opacity="0.6"
            />
          </svg>
        )}

        {/* 3. FRESH AQUATIC: Kinetic Wave-Sculpted Blue Crystal */}
        {type === 'aquatic' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="aquaticGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B5C5D" />
                <stop offset="35%" stopColor="#1E7B7D" />
                <stop offset="70%" stopColor="#32BFC1" />
                <stop offset="100%" stopColor="#D9F7F7" />
              </linearGradient>
              <linearGradient id="silverCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8CA6A6" />
                <stop offset="35%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#B0CECE" />
                <stop offset="100%" stopColor="#5B797A" />
              </linearGradient>
              <linearGradient id="waveReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Modern Silver Knurled Cap */}
            <rect x="115" y="28" width="70" height="58" rx="2" fill="url(#silverCap)" stroke="#7A9D9E" strokeWidth="1" />
            <rect x="115" y="38" width="70" height="2" fill="#5B797A" />
            <rect x="115" y="44" width="70" height="2" fill="#5B797A" />
            <rect x="115" y="50" width="70" height="2" fill="#5B797A" />
            <rect x="122" y="32" width="20" height="50" fill="#FFFFFF" opacity="0.3" />

            {/* Neck */}
            <rect x="128" y="86" width="44" height="16" fill="#A8C8C9" stroke="#7A9D9E" strokeWidth="0.8" />

            {/* Wave-Inspired Sculpted Asymmetric Bottle */}
            <path
              d="M 125 102 
                 L 72 135 
                 C 62 180, 58 260, 68 350 
                 L 232 350 
                 C 242 270, 236 170, 222 130 
                 L 175 102 Z"
              fill="url(#aquaticGlass)"
              stroke="#48C3C5"
              strokeWidth="2"
            />

            {/* Inner Sea Juice */}
            <path
              d="M 125 125 
                 L 80 152 
                 C 72 190, 70 260, 78 335 
                 L 222 335 
                 C 230 265, 226 185, 215 150 
                 L 175 125 Z"
              fill="#187274"
              opacity="0.8"
            />

            {/* Diagonal Wave Facet Lines */}
            <path d="M 72 135 L 150 350" stroke="#76D9DB" strokeWidth="1.2" opacity="0.5" />
            <path d="M 125 102 L 232 350" stroke="#76D9DB" strokeWidth="1.2" opacity="0.4" />

            {/* Heavy Ice Crystal Base */}
            <rect x="68" y="348" width="164" height="28" rx="2" fill="#D9F7F7" opacity="0.9" stroke="#48C3C5" strokeWidth="1" />
            <line x1="72" y1="362" x2="228" y2="362" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Minimalist Silver Plaque */}
            <g transform="translate(95, 210)">
              <rect x="0" y="0" width="110" height="62" rx="1" fill="#0C3C3D" stroke="#76D9DB" strokeWidth="1" />
              <text x="55" y="20" fill="#76D9DB" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="3">VK COROMANDEL</text>
              <line x1="30" y1="26" x2="80" y2="26" stroke="#48C3C5" strokeWidth="0.8" />
              <text x="55" y="40" fill="#FFFFFF" fontSize="10.5" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.5">OCEANIC MIST</text>
              <text x="55" y="52" fill="#A8E7E8" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EAU DE PARFUM</text>
            </g>

            {/* Dynamic Water Surface Specular Reflection */}
            <path
              d={`M 88 140 L 100 140 L 82 345 L 72 345 Z`}
              style={{ transform: 'translateX(calc(var(--hx, 0) * 0.4px))' }}
              fill="url(#waveReflect)"
              opacity="0.6"
            />
          </svg>
        )}

        {/* 4. CITRUS: Diamond Faceted Octagonal Crystal */}
        {type === 'citrus' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="citrusJuice" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFE6" />
                <stop offset="35%" stopColor="#F5F376" />
                <stop offset="75%" stopColor="#E5E224" />
                <stop offset="100%" stopColor="#B3B00F" />
              </linearGradient>
              <linearGradient id="goldCapFaceted" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFEB2" />
                <stop offset="50%" stopColor="#D4D137" />
                <stop offset="100%" stopColor="#807E0C" />
              </linearGradient>
              <linearGradient id="prismLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Gold Geometric Faceted Cap */}
            <polygon points="120,24 180,24 195,45 180,84 120,84 105,45" fill="url(#goldCapFaceted)" stroke="#B3B00F" strokeWidth="1.2" />
            <polygon points="135,26 165,26 175,44 165,82 135,82 125,44" fill="#FAFAF4" opacity="0.3" />

            {/* Neck */}
            <rect x="130" y="84" width="40" height="18" fill="#807E0C" stroke="#D4D137" strokeWidth="1" />

            {/* Octagonal Diamond Prism Bottle Body */}
            <polygon
              points="110,102 190,102 245,155 245,325 190,375 110,375 55,325 55,155"
              fill="url(#citrusJuice)"
              stroke="#D4D137"
              strokeWidth="2"
            />

            {/* Internal Diamond Facet Geometry */}
            <polygon points="110,102 150,155 190,102" fill="#FFFFFF" opacity="0.4" />
            <polygon points="55,155 150,155 110,102" fill="#FAF9D0" opacity="0.3" />
            <polygon points="245,155 150,155 190,102" fill="#D4D137" opacity="0.25" />
            <polygon points="55,155 150,155 55,325" fill="#C4C117" opacity="0.2" />
            <polygon points="245,155 150,155 245,325" fill="#FAF9D0" opacity="0.3" />
            <polygon points="55,325 150,325 110,375" fill="#8A8807" opacity="0.4" />
            <polygon points="245,325 150,325 190,375" fill="#8A8807" opacity="0.4" />

            {/* Crisp Central Plaque */}
            <g transform="translate(85, 210)">
              <polygon points="15,0 115,0 130,28 115,58 15,58 0,28" fill="#FAFAF4" stroke="#D4D137" strokeWidth="1.2" />
              <text x="65" y="18" fill="#807E0C" fontSize="7" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="3">VK COONOOR</text>
              <line x1="40" y1="24" x2="90" y2="24" stroke="#D4D137" strokeWidth="0.8" />
              <text x="65" y="38" fill="#013E43" fontSize="10" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">CITRUS SOLEIL</text>
              <text x="65" y="49" fill="#B3B00F" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EAU DE PARFUM</text>
            </g>

            {/* Stepped Optical Base */}
            <polygon points="95,375 205,375 220,388 80,388" fill="#FFFEB2" stroke="#D4D137" strokeWidth="1" />

            {/* Dynamic Crystal Facet Flare */}
            <path
              d={`M 75 160 L 90 160 L 75 330 L 60 330 Z`}
              style={{ transform: 'translateX(calc(var(--hx, 0) * 0.4px))' }}
              fill="url(#prismLight)"
              opacity="0.65"
            />
          </svg>
        )}

        {/* 5. VANILLA: Curving Amphora Flacon with Caramel Liquid */}
        {type === 'vanilla' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="caramelJuice" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10492E" />
                <stop offset="30%" stopColor="#298359" />
                <stop offset="65%" stopColor="#5CC393" />
                <stop offset="90%" stopColor="#82E0B4" />
                <stop offset="100%" stopColor="#10492E" />
              </linearGradient>
              <linearGradient id="ribbedGoldCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#989633" />
                <stop offset="25%" stopColor="#EAE9BE" />
                <stop offset="50%" stopColor="#C7C556" />
                <stop offset="75%" stopColor="#F4FAF7" />
                <stop offset="100%" stopColor="#6B6A24" />
              </linearGradient>
              <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="vanillaAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#82E0B4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F4FAF7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Warm Honey Glow */}
            <circle cx="150" cy="240" r="120" fill="url(#vanillaAura)" />

            {/* Fluted Ribbed Champagne-Gold Cap */}
            <path d="M 120 28 Q 150 20 180 28 L 184 84 L 116 84 Z" fill="url(#ribbedGoldCap)" stroke="#989633" strokeWidth="1.2" />
            {/* Cap Ribs */}
            <line x1="130" y1="26" x2="128" y2="84" stroke="#6B6A24" strokeWidth="1" />
            <line x1="140" y1="24" x2="139" y2="84" stroke="#6B6A24" strokeWidth="1" />
            <line x1="150" y1="23" x2="150" y2="84" stroke="#F4FAF7" strokeWidth="1.2" />
            <line x1="160" y1="24" x2="161" y2="84" stroke="#6B6A24" strokeWidth="1" />
            <line x1="170" y1="26" x2="172" y2="84" stroke="#6B6A24" strokeWidth="1" />

            {/* Neck */}
            <rect x="126" y="84" width="48" height="18" fill="#989633" />

            {/* Sensual Curving Amphora Flacon Body */}
            <path
              d="M 126 102 
                 C 90 120, 62 170, 72 235 
                 C 80 285, 110 320, 110 345 
                 L 190 345 
                 C 190 320, 220 285, 228 235 
                 C 238 170, 210 120, 174 102 Z"
              fill="url(#caramelJuice)"
              stroke="#5CC393"
              strokeWidth="2"
            />

            {/* Inner Liquid Viscosity */}
            <path
              d="M 128 120 
                 C 96 135, 75 180, 84 235 
                 C 92 280, 118 310, 118 335 
                 L 182 335 
                 C 182 310, 208 280, 216 235 
                 C 225 180, 204 135, 172 120 Z"
              fill="#2D9363"
              opacity="0.8"
            />

            {/* Heavy Thick Curved Crystal Base (35mm) */}
            <path
              d="M 110 345 
                 C 110 365, 125 382, 150 382 
                 C 175 382, 190 365, 190 345 Z"
              fill="#EAE9BE"
              stroke="#C7C556"
              strokeWidth="1.2"
            />

            {/* Cream Textured Linen Label */}
            <g transform="translate(95, 205)">
              <rect x="0" y="0" width="110" height="66" rx="4" fill="#F0FAF5" stroke="#5CC393" strokeWidth="1" />
              <rect x="3" y="3" width="104" height="60" rx="2" fill="none" stroke="#82E0B4" strokeWidth="0.5" />
              <text x="55" y="20" fill="#298359" fontSize="7.5" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="2.5">VK HAUTE VINTAGE</text>
              <line x1="32" y1="26" x2="78" y2="26" stroke="#5CC393" strokeWidth="0.75" />
              <text x="55" y="40" fill="#0E3A25" fontSize="10.5" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">VELOURS VANILLA</text>
              <text x="55" y="52" fill="#298359" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EXTRAIT DE PARFUM</text>
            </g>

            {/* Dynamic Warm Caramel Reflection */}
            <path
              d={`M 92 120 
                 C 76 170, 82 250, 104 320 
                 L 116 318 
                 C 96 250, 90 170, 104 120 Z`}
              style={{ transform: 'translateX(calc(var(--hx, 0) * 0.35px))' }}
              fill="url(#amberGlow)"
              opacity="0.65"
            />
          </svg>
        )}
      </motion.div>
    </div>
  );
};
