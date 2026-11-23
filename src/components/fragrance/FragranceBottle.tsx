import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
    setIsHovered(false);
  };

  const sizeClasses = {
    sm: 'w-40 h-56',
    md: 'w-60 h-80',
    lg: 'w-72 h-96 sm:w-80 sm:h-[430px]',
    xl: 'w-80 h-[460px] sm:w-96 sm:h-[540px]'
  };

  // Specular highlight offset based on mouse position
  const highlightX = (mousePos.x - 0.5) * 40;
  const rotateX = isHovered ? (mousePos.y - 0.5) * -12 : 0;
  const rotateY = isHovered ? (mousePos.x - 0.5) * 16 : 0;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${sizeClasses[size]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="w-full h-full relative flex items-center justify-center"
        animate={{
          rotateX,
          rotateY,
          y: isHovered ? -6 : [0, -8, 0],
        }}
        transition={{
          rotateX: { type: 'spring', damping: 20, stiffness: 120 },
          rotateY: { type: 'spring', damping: 20, stiffness: 120 },
          y: isHovered ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        {/* Ambient Ground Shadow */}
        <div
          className="absolute -bottom-6 w-3/4 h-8 rounded-full blur-md opacity-40 transition-all duration-500"
          style={{
            background: type === 'oud' ? 'radial-gradient(ellipse, #4A2708 0%, transparent 70%)'
              : type === 'jasmine' ? 'radial-gradient(ellipse, #A3887B 0%, transparent 70%)'
              : type === 'aquatic' ? 'radial-gradient(ellipse, #1E607D 0%, transparent 70%)'
              : type === 'citrus' ? 'radial-gradient(ellipse, #9B7B1E 0%, transparent 70%)'
              : 'radial-gradient(ellipse, #7A421D 0%, transparent 70%)',
            transform: `scale(${isHovered ? 1.08 : 1}) translateX(${highlightX * 0.3}px)`,
          }}
        />

        {/* 1. OUD: Architectural Smoked Amber Monolith */}
        {type === 'oud' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="oudGlassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2A170A" />
                <stop offset="30%" stopColor="#693B11" />
                <stop offset="60%" stopColor="#8C4E16" />
                <stop offset="85%" stopColor="#4A2609" />
                <stop offset="100%" stopColor="#1E1006" />
              </linearGradient>
              <linearGradient id="oudCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C7343" />
                <stop offset="40%" stopColor="#D4BE8D" />
                <stop offset="70%" stopColor="#6E5528" />
                <stop offset="100%" stopColor="#3E2E14" />
              </linearGradient>
              <linearGradient id="oudBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#693B11" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#251608" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#120A03" />
              </linearGradient>
              <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FAF8F4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FAF8F4" stopOpacity="0" />
              </linearGradient>
              <filter id="oudGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Internal ambient aura */}
            <rect x="75" y="115" width="150" height="250" rx="4" fill="#C88232" opacity="0.18" filter="url(#oudGlow)" />

            {/* Bronze Cap */}
            <rect x="110" y="24" width="80" height="66" rx="3" fill="url(#oudCapGrad)" stroke="#B59A68" strokeWidth="1.5" />
            <rect x="115" y="30" width="70" height="4" fill="#FAF8F4" opacity="0.4" />
            <line x1="110" y1="56" x2="190" y2="56" stroke="#5E481D" strokeWidth="1.5" />
            
            {/* Neck Collar */}
            <rect x="122" y="90" width="56" height="18" fill="#5E481D" stroke="#B59A68" strokeWidth="1" />
            <rect x="124" y="92" width="52" height="3" fill="#D4BE8D" opacity="0.6" />

            {/* Main Architectural Bottle Body */}
            <rect x="68" y="108" width="164" height="260" rx="6" fill="url(#oudGlassGrad)" stroke="#8C4E16" strokeWidth="2" />

            {/* Inner Smoked Liquid Volume */}
            <rect x="78" y="130" width="144" height="210" rx="4" fill="#542B0A" opacity="0.85" />
            
            {/* Liquid Level with slight meniscus */}
            <path d="M 80 148 Q 150 144 220 148 L 220 340 L 80 340 Z" fill="#753C0E" opacity="0.9" />

            {/* Heavy Crystal Glass Base (32mm) */}
            <rect x="68" y="342" width="164" height="36" rx="4" fill="url(#oudBaseGrad)" stroke="#B59A68" strokeWidth="1" />
            <line x1="72" y1="362" x2="228" y2="362" stroke="#B59A68" strokeWidth="0.8" opacity="0.5" />

            {/* Gold Plate Label */}
            <g transform="translate(95, 210)">
              <rect x="0" y="0" width="110" height="68" rx="2" fill="#1C1006" stroke="#B59A68" strokeWidth="1.2" />
              <rect x="4" y="4" width="102" height="60" rx="1" fill="none" stroke="#D4BE8D" strokeWidth="0.6" strokeDasharray="2,2" />
              <text x="55" y="22" fill="#D4BE8D" fontSize="8" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="3">VK PERFUME</text>
              <line x1="30" y1="28" x2="80" y2="28" stroke="#B59A68" strokeWidth="0.75" />
              <text x="55" y="42" fill="#FAF8F4" fontSize="11" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.5">ROYAL OUD</text>
              <text x="55" y="55" fill="#D4BE8D" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EXTRAIT DE PARFUM</text>
            </g>

            {/* Dynamic Glass Specular Reflection Highlight */}
            <path
              d={`M ${90 + highlightX * 0.4} 112 L ${104 + highlightX * 0.4} 112 L ${84 + highlightX * 0.4} 360 L ${74 + highlightX * 0.4} 360 Z`}
              fill="url(#goldHighlight)"
              opacity="0.5"
            />
            {/* Edge highlights */}
            <line x1="72" y1="110" x2="72" y2="370" stroke="#FAF8F4" strokeWidth="1" opacity="0.35" />
            <line x1="228" y1="110" x2="228" y2="370" stroke="#D4BE8D" strokeWidth="0.8" opacity="0.35" />
          </svg>
        )}

        {/* 2. JASMINE: Sculpted Teardrop Opaline Frosted Glass */}
        {type === 'jasmine' && (
          <svg viewBox="0 0 300 420" className="w-full h-full drop-shadow-2xl overflow-visible">
            <defs>
              <linearGradient id="jasmineGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#F9F4EE" stopOpacity="0.9" />
                <stop offset="80%" stopColor="#F2E6DC" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E5D3C5" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="roseGoldCap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E8B49B" />
                <stop offset="35%" stopColor="#F7D8CA" />
                <stop offset="70%" stopColor="#C9886D" />
                <stop offset="100%" stopColor="#8C533D" />
              </linearGradient>
              <linearGradient id="pearlShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="jasmineAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF0E6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FAF8F4" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Aura */}
            <circle cx="150" cy="240" r="110" fill="url(#jasmineAura)" />

            {/* Rose Gold Filigree Cap - Spherical & Sculpted */}
            <circle cx="150" cy="52" r="34" fill="url(#roseGoldCap)" stroke="#C9886D" strokeWidth="1" />
            <circle cx="140" cy="44" r="14" fill="#FFFFFF" opacity="0.4" />
            {/* Filigree Petal Details on Cap */}
            <path d="M 132 52 C 142 42 158 42 168 52 C 158 62 142 62 132 52 Z" fill="none" stroke="#FAF8F4" strokeWidth="1" opacity="0.6" />
            <path d="M 150 34 C 150 44 150 60 150 70" stroke="#FAF8F4" strokeWidth="1" opacity="0.5" />

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
              stroke="#E8B49B"
              strokeWidth="1.5"
            />

            {/* Inner Liquid Volume */}
            <path
              d="M 136 128 
                 C 116 142, 82 186, 82 245 
                 C 82 312, 112 356, 150 356 
                 C 188 356, 218 312, 218 245 
                 C 218 186, 184 142, 164 128 Z"
              fill="#FDF8F3"
              opacity="0.75"
            />

            {/* Embossed Floral Petal Lines */}
            <path d="M 150 160 C 130 210, 115 270, 120 320" stroke="#E8B49B" strokeWidth="0.8" fill="none" opacity="0.4" />
            <path d="M 150 160 C 170 210, 185 270, 180 320" stroke="#E8B49B" strokeWidth="0.8" fill="none" opacity="0.4" />

            {/* Delicate Silk Label */}
            <g transform="translate(98, 225)">
              <rect x="0" y="0" width="104" height="60" rx="30" fill="#FFFFFF" stroke="#E8B49B" strokeWidth="0.8" />
              <text x="52" y="20" fill="#C9886D" fontSize="7.5" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="2.5">VK PARFUMS</text>
              <line x1="32" y1="26" x2="72" y2="26" stroke="#E8B49B" strokeWidth="0.6" />
              <text x="52" y="38" fill="#3D3028" fontSize="10" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">MADURAI</text>
              <text x="52" y="49" fill="#8C533D" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="1.8">JASMINE LUMIÈRE</text>
            </g>

            {/* Dynamic Pearl Reflection */}
            <path
              d={`M ${95 + highlightX * 0.3} 125 
                 C ${80 + highlightX * 0.3} 180, ${82 + highlightX * 0.3} 280, ${100 + highlightX * 0.3} 340 
                 L ${110 + highlightX * 0.3} 338 
                 C ${94 + highlightX * 0.3} 280, ${92 + highlightX * 0.3} 180, ${105 + highlightX * 0.3} 125 Z`}
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
                <stop offset="0%" stopColor="#0B3C5D" />
                <stop offset="35%" stopColor="#1E607D" />
                <stop offset="70%" stopColor="#328CC1" />
                <stop offset="100%" stopColor="#D9F0F7" />
              </linearGradient>
              <linearGradient id="silverCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C9CA6" />
                <stop offset="35%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#B0C2CE" />
                <stop offset="100%" stopColor="#5B6D7A" />
              </linearGradient>
              <linearGradient id="waveReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Modern Silver Knurled Cap */}
            <rect x="115" y="28" width="70" height="58" rx="2" fill="url(#silverCap)" stroke="#7A8F9E" strokeWidth="1" />
            <rect x="115" y="38" width="70" height="2" fill="#5B6D7A" />
            <rect x="115" y="44" width="70" height="2" fill="#5B6D7A" />
            <rect x="115" y="50" width="70" height="2" fill="#5B6D7A" />
            <rect x="122" y="32" width="20" height="50" fill="#FFFFFF" opacity="0.3" />

            {/* Neck */}
            <rect x="128" y="86" width="44" height="16" fill="#A8BCC9" stroke="#7A8F9E" strokeWidth="0.8" />

            {/* Wave-Inspired Sculpted Asymmetric Bottle */}
            <path
              d="M 125 102 
                 L 72 135 
                 C 62 180, 58 260, 68 350 
                 L 232 350 
                 C 242 270, 236 170, 222 130 
                 L 175 102 Z"
              fill="url(#aquaticGlass)"
              stroke="#48A9C5"
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
              fill="#185674"
              opacity="0.8"
            />

            {/* Diagonal Wave Facet Lines */}
            <path d="M 72 135 L 150 350" stroke="#76C4DB" strokeWidth="1.2" opacity="0.5" />
            <path d="M 125 102 L 232 350" stroke="#76C4DB" strokeWidth="1.2" opacity="0.4" />

            {/* Heavy Ice Crystal Base */}
            <rect x="68" y="348" width="164" height="28" rx="2" fill="#D9F0F7" opacity="0.9" stroke="#48A9C5" strokeWidth="1" />
            <line x1="72" y1="362" x2="228" y2="362" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Minimalist Silver Plaque */}
            <g transform="translate(95, 210)">
              <rect x="0" y="0" width="110" height="62" rx="1" fill="#0C2D3D" stroke="#76C4DB" strokeWidth="1" />
              <text x="55" y="20" fill="#76C4DB" fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="3">VK COROMANDEL</text>
              <line x1="30" y1="26" x2="80" y2="26" stroke="#48A9C5" strokeWidth="0.8" />
              <text x="55" y="40" fill="#FFFFFF" fontSize="10.5" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.5">OCEANIC MIST</text>
              <text x="55" y="52" fill="#A8DCE8" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EAU DE PARFUM</text>
            </g>

            {/* Dynamic Water Surface Specular Reflection */}
            <path
              d={`M ${88 + highlightX * 0.4} 140 L ${100 + highlightX * 0.4} 140 L ${82 + highlightX * 0.4} 345 L ${72 + highlightX * 0.4} 345 Z`}
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
                <stop offset="0%" stopColor="#FFF9E6" />
                <stop offset="35%" stopColor="#F5DF76" />
                <stop offset="75%" stopColor="#E5B824" />
                <stop offset="100%" stopColor="#B3890F" />
              </linearGradient>
              <linearGradient id="goldCapFaceted" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="50%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#80620C" />
              </linearGradient>
              <linearGradient id="prismLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Gold Geometric Faceted Cap */}
            <polygon points="120,24 180,24 195,45 180,84 120,84 105,45" fill="url(#goldCapFaceted)" stroke="#B3890F" strokeWidth="1.2" />
            <polygon points="135,26 165,26 175,44 165,82 135,82 125,44" fill="#FAF8F4" opacity="0.3" />

            {/* Neck */}
            <rect x="130" y="84" width="40" height="18" fill="#80620C" stroke="#D4AF37" strokeWidth="1" />

            {/* Octagonal Diamond Prism Bottle Body */}
            <polygon
              points="110,102 190,102 245,155 245,325 190,375 110,375 55,325 55,155"
              fill="url(#citrusJuice)"
              stroke="#D4AF37"
              strokeWidth="2"
            />

            {/* Internal Diamond Facet Geometry */}
            <polygon points="110,102 150,155 190,102" fill="#FFFFFF" opacity="0.4" />
            <polygon points="55,155 150,155 110,102" fill="#FAF4D0" opacity="0.3" />
            <polygon points="245,155 150,155 190,102" fill="#D4AF37" opacity="0.25" />
            <polygon points="55,155 150,155 55,325" fill="#C49B17" opacity="0.2" />
            <polygon points="245,155 150,155 245,325" fill="#FAF4D0" opacity="0.3" />
            <polygon points="55,325 150,325 110,375" fill="#8A6707" opacity="0.4" />
            <polygon points="245,325 150,325 190,375" fill="#8A6707" opacity="0.4" />

            {/* Crisp Central Plaque */}
            <g transform="translate(85, 210)">
              <polygon points="15,0 115,0 130,28 115,58 15,58 0,28" fill="#FAF8F4" stroke="#D4AF37" strokeWidth="1.2" />
              <text x="65" y="18" fill="#80620C" fontSize="7" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="3">VK COONOOR</text>
              <line x1="40" y1="24" x2="90" y2="24" stroke="#D4AF37" strokeWidth="0.8" />
              <text x="65" y="38" fill="#25231F" fontSize="10" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">CITRUS SOLEIL</text>
              <text x="65" y="49" fill="#B3890F" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EAU DE PARFUM</text>
            </g>

            {/* Stepped Optical Base */}
            <polygon points="95,375 205,375 220,388 80,388" fill="#FFF2B2" stroke="#D4AF37" strokeWidth="1" />

            {/* Dynamic Crystal Facet Flare */}
            <path
              d={`M ${75 + highlightX * 0.4} 160 L ${90 + highlightX * 0.4} 160 L ${75 + highlightX * 0.4} 330 L ${60 + highlightX * 0.4} 330 Z`}
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
                <stop offset="0%" stopColor="#4A250E" />
                <stop offset="30%" stopColor="#854D27" />
                <stop offset="65%" stopColor="#C68B59" />
                <stop offset="90%" stopColor="#E2B180" />
                <stop offset="100%" stopColor="#4A250E" />
              </linearGradient>
              <linearGradient id="ribbedGoldCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C6F3E" />
                <stop offset="25%" stopColor="#E9D9BF" />
                <stop offset="50%" stopColor="#B59A68" />
                <stop offset="75%" stopColor="#FAF8F4" />
                <stop offset="100%" stopColor="#695126" />
              </linearGradient>
              <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="vanillaAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E2B180" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FAF8F4" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient Warm Honey Glow */}
            <circle cx="150" cy="240" r="120" fill="url(#vanillaAura)" />

            {/* Fluted Ribbed Champagne-Gold Cap */}
            <path d="M 120 28 Q 150 20 180 28 L 184 84 L 116 84 Z" fill="url(#ribbedGoldCap)" stroke="#8C6F3E" strokeWidth="1.2" />
            {/* Cap Ribs */}
            <line x1="130" y1="26" x2="128" y2="84" stroke="#695126" strokeWidth="1" />
            <line x1="140" y1="24" x2="139" y2="84" stroke="#695126" strokeWidth="1" />
            <line x1="150" y1="23" x2="150" y2="84" stroke="#FAF8F4" strokeWidth="1.2" />
            <line x1="160" y1="24" x2="161" y2="84" stroke="#695126" strokeWidth="1" />
            <line x1="170" y1="26" x2="172" y2="84" stroke="#695126" strokeWidth="1" />

            {/* Neck */}
            <rect x="126" y="84" width="48" height="18" fill="#8C6F3E" />

            {/* Sensual Curving Amphora Flacon Body */}
            <path
              d="M 126 102 
                 C 90 120, 62 170, 72 235 
                 C 80 285, 110 320, 110 345 
                 L 190 345 
                 C 190 320, 220 285, 228 235 
                 C 238 170, 210 120, 174 102 Z"
              fill="url(#caramelJuice)"
              stroke="#C68B59"
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
              fill="#96562A"
              opacity="0.8"
            />

            {/* Heavy Thick Curved Crystal Base (35mm) */}
            <path
              d="M 110 345 
                 C 110 365, 125 382, 150 382 
                 C 175 382, 190 365, 190 345 Z"
              fill="#E9D9BF"
              stroke="#B59A68"
              strokeWidth="1.2"
            />

            {/* Cream Textured Linen Label */}
            <g transform="translate(95, 205)">
              <rect x="0" y="0" width="110" height="66" rx="4" fill="#FAF6F0" stroke="#C68B59" strokeWidth="1" />
              <rect x="3" y="3" width="104" height="60" rx="2" fill="none" stroke="#E2B180" strokeWidth="0.5" />
              <text x="55" y="20" fill="#854D27" fontSize="7.5" fontFamily="'Cormorant Garamond', serif" textAnchor="middle" letterSpacing="2.5">VK HAUTE VINTAGE</text>
              <line x1="32" y1="26" x2="78" y2="26" stroke="#C68B59" strokeWidth="0.75" />
              <text x="55" y="40" fill="#3B1F0D" fontSize="10.5" fontWeight="600" fontFamily="'Bodoni Moda', serif" textAnchor="middle" letterSpacing="1.2">VELOURS VANILLA</text>
              <text x="55" y="52" fill="#854D27" fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif" textAnchor="middle" letterSpacing="2">EXTRAIT DE PARFUM</text>
            </g>

            {/* Dynamic Warm Caramel Reflection */}
            <path
              d={`M ${92 + highlightX * 0.35} 120 
                 C ${76 + highlightX * 0.35} 170, ${82 + highlightX * 0.35} 250, ${104 + highlightX * 0.35} 320 
                 L ${116 + highlightX * 0.35} 318 
                 C ${96 + highlightX * 0.35} 250, ${90 + highlightX * 0.35} 170, ${104 + highlightX * 0.35} 120 Z`}
              fill="url(#amberGlow)"
              opacity="0.65"
            />
          </svg>
        )}
      </motion.div>
    </div>
  );
};
