import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/company';
import type { PageTransitionConfig } from './pageTransitions';

export type CurtainPhase = 'cover' | 'reveal';

interface TransitionCurtainProps {
  phase: CurtainPhase;
  config: PageTransitionConfig;
  onRevealComplete: () => void;
}

const EASE_SILK = [0.76, 0, 0.24, 1] as const;
const EASE_LUXE = [0.16, 1, 0.3, 1] as const;

const ChapterCrest: React.FC<{
  phase: CurtainPhase;
  config: PageTransitionConfig;
  dark?: boolean;
  showMonogram?: boolean;
}> = ({ phase, config, dark = true, showMonogram = false }) => {
  const isCover = phase === 'cover';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={
        isCover
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 1.04, y: -8 }
      }
      transition={{
        duration: isCover ? 0.24 : 0.22,
        delay: isCover ? 0.08 : 0,
        ease: EASE_LUXE,
      }}
      className="relative z-20 flex flex-col items-center text-center px-6 select-none pointer-events-none"
    >
      {showMonogram && (
        <div className="mb-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-[#B9B52A]/50 flex items-center justify-center p-2 shadow-gold-glow">
          <img
            src={COMPANY_INFO.monogramAsset}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <span
        className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-semibold"
        style={{ color: dark ? '#E8E26A' : '#01706C' }}
      >
        {config.eyebrow}
      </span>
      <h2
        className="mt-1.5 font-serif text-2xl sm:text-4xl font-normal tracking-wide"
        style={{ color: dark ? '#F6FAF9' : '#013E43' }}
      >
        {config.title}
      </h2>
      <div className="mt-3 flex items-center gap-3">
        <span
          className="h-px w-8 opacity-60"
          style={{ backgroundColor: config.palette.accent }}
        />
        <span
          className="font-serif text-[11px] tracking-[0.26em] uppercase"
          style={{ color: dark ? '#2CEEEC' : '#757014' }}
        >
          {config.code}
        </span>
        <span
          className="h-px w-8 opacity-60"
          style={{ backgroundColor: config.palette.accent }}
        />
      </div>
    </motion.div>
  );
};

export const TransitionCurtain: React.FC<TransitionCurtainProps> = ({
  phase,
  config,
  onRevealComplete,
}) => {
  const isCover = phase === 'cover';
  const coverDuration = 0.32;
  const revealDuration = config.curtainRevealDuration;

  const notifyOnReveal = () => {
    if (!isCover) {
      onRevealComplete();
    }
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[45] pointer-events-none overflow-hidden flex items-center justify-center"
    >
      {/* 1. HOME — Royal Sovereign Iris & Monogram Halo */}
      {config.id === 'sovereign-iris' && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isCover ? 1 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.85, ease: EASE_LUXE }}
            className="absolute inset-0 bg-[#001442]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 45%, rgba(1,112,108,0.55) 0%, rgba(0,20,66,0.98) 65%)',
            }}
          />
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotate: -25 }}
            animate={
              isCover
                ? { scale: 1, opacity: 0.9, rotate: 0 }
                : { scale: 2.35, opacity: 0, rotate: 35 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#B9B52A]/55"
          />
          <motion.div
            initial={{ scale: 0.25, opacity: 0, rotate: 20 }}
            animate={
              isCover
                ? { scale: 0.78, opacity: 0.75, rotate: 0 }
                : { scale: 2.6, opacity: 0, rotate: -30 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#2CEEEC]/50 border-dashed"
          />
          <ChapterCrest phase={phase} config={config} dark showMonogram />
        </>
      )}

      {/* 2. ABOUT — Dual Botanical Silk Curtains */}
      {config.id === 'silk-diptych' && (
        <>
          <motion.div
            initial={{ x: '-102%' }}
            animate={{ x: isCover ? '0%' : '-104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-y-0 left-0 w-1/2 bg-[#F6FAF9] border-r border-[#B9B52A]/60"
          />
          <motion.div
            initial={{ x: '102%' }}
            animate={{ x: isCover ? '0%' : '104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[#013E43] border-l border-[#B9B52A]/60"
          />
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={
              isCover
                ? { scaleY: 1, opacity: 1 }
                : { scaleY: 0, opacity: 0 }
            }
            transition={{ duration: 0.28, ease: EASE_LUXE }}
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#B9B52A] to-transparent z-10"
          />
          <div className="relative z-20 px-6 py-4 rounded-2xl bg-white/95 border border-[#D2E2DD] shadow-luxury">
            <ChapterCrest phase={phase} config={config} dark={false} />
          </div>
        </>
      )}

      {/* 3. COLLECTIONS — Five-Fragrance Chromatic Silk Louvers */}
      {config.id === 'chromatic-louvers' && (
        <>
          {[
            { bg: '#013E43', num: '01', accent: '#B9B52A' },
            { bg: '#0F8F7A', num: '02', accent: '#1AE2BD' },
            { bg: '#01706C', num: '03', accent: '#2CEEEC' },
            { bg: '#757014', num: '04', accent: '#E8E26A' },
            { bg: '#016840', num: '05', accent: '#02A262' },
          ].map((col, idx) => (
            <motion.div
              key={col.num}
              initial={{ y: '-104%' }}
              animate={{ y: isCover ? '0%' : '-105%' }}
              transition={{
                duration: isCover ? coverDuration * 0.88 : revealDuration * 0.82,
                delay: idx * 0.038,
                ease: EASE_SILK,
              }}
              onAnimationComplete={idx === 4 ? notifyOnReveal : undefined}
              className="absolute inset-y-0 flex flex-col justify-end items-center pb-10 border-r border-white/10"
              style={{
                left: `${idx * 20}%`,
                width: '20.4%',
                backgroundColor: col.bg,
              }}
            >
              <span
                className="font-serif text-sm sm:text-xl tracking-widest opacity-55"
                style={{ color: col.accent }}
              >
                N° {col.num}
              </span>
            </motion.div>
          ))}
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 4. OUD — Obsidian & Crown-Gold Monolith Blocks */}
      {config.id === 'oud-monolith' && (
        <>
          <motion.div
            initial={{ y: '-102%' }}
            animate={{ y: isCover ? '0%' : '-104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-x-0 top-0 h-[50.5%] bg-gradient-to-b from-[#001442] to-[#013E43] border-b-2 border-[#B9B52A]"
          />
          <motion.div
            initial={{ y: '102%' }}
            animate={{ y: isCover ? '0%' : '104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            className="absolute inset-x-0 bottom-0 h-[50.5%] bg-gradient-to-t from-[#001442] to-[#013E43] border-t-2 border-[#B9B52A]"
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 5. JASMINE — Dawn Petal Diagonal Satin Veil */}
      {config.id === 'jasmine-veil' && (
        <>
          <motion.div
            initial={{ x: '-120%', y: '120%' }}
            animate={
              isCover
                ? { x: '0%', y: '0%' }
                : { x: '120%', y: '-120%' }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute -inset-[35vmax] -rotate-12 bg-gradient-to-tr from-[#EAF2EE] via-[#F3FBF8] to-[#DDF5EE] border-y-2 border-[#1AE2BD]/70 shadow-2xl"
          />
          <motion.div
            initial={{ scale: 0.7, opacity: 0, rotate: -15 }}
            animate={
              isCover
                ? { scale: 1, opacity: 0.25, rotate: 0 }
                : { scale: 1.4, opacity: 0, rotate: 20 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            className="absolute w-72 h-72 rounded-full bg-[#1AE2BD]/20 blur-2xl"
          />
          <ChapterCrest phase={phase} config={config} dark={false} />
        </>
      )}

      {/* 6. AQUATIC — Coromandel Liquid Wave Crest Sweep */}
      {config.id === 'aquatic-tide' && (
        <>
          <motion.div
            initial={{ x: '110%' }}
            animate={{ x: isCover ? '-8%' : '-125%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-y-0 -left-16 -right-16"
          >
            <svg
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="vkWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2CEEEC" stopOpacity="0.95" />
                  <stop offset="14%" stopColor="#01706C" />
                  <stop offset="65%" stopColor="#00303F" />
                  <stop offset="100%" stopColor="#001442" />
                </linearGradient>
              </defs>
              <path
                d="M120,0 C40,220 190,540 90,800 L1200,800 L1200,0 Z"
                fill="url(#vkWaveGrad)"
              />
              <path
                d="M120,0 C40,220 190,540 90,800"
                fill="none"
                stroke="#2CEEEC"
                strokeWidth="5"
                strokeOpacity="0.85"
              />
            </svg>
          </motion.div>
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 7. CITRUS — Octagonal Sunburst Prism Refraction */}
      {config.id === 'citrus-prism' && (
        <>
          <motion.div
            initial={{ x: '-105%', opacity: 0.7 }}
            animate={{ x: isCover ? '0%' : '-105%', opacity: isCover ? 1 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.9, ease: EASE_LUXE }}
            className="absolute inset-0 bg-gradient-to-br from-[#757014] via-[#B9B52A] to-[#3A3708]"
            style={{ clipPath: 'polygon(0 0, 75% 0, 25% 100%, 0 100%)' }}
          />
          <motion.div
            initial={{ x: '105%', opacity: 0.7 }}
            animate={{ x: isCover ? '0%' : '105%', opacity: isCover ? 1 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.9, ease: EASE_LUXE }}
            className="absolute inset-0 bg-gradient-to-tl from-[#3A3708] via-[#B9B52A] to-[#E8E26A]"
            style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 25% 100%)' }}
          />
          <motion.div
            initial={{ scale: 0.4, rotate: 0, opacity: 0 }}
            animate={
              isCover
                ? { scale: 1, rotate: 45, opacity: 0.9 }
                : { scale: 2.8, rotate: 135, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute w-64 h-64 border-2 border-[#FAFBF0]/75"
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 8. VANILLA — Molten Emerald Amphora Vignette */}
      {config.id === 'vanilla-amphora' && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isCover ? 1 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.85, ease: EASE_LUXE }}
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 45%, #02A262 0%, #016840 48%, #013E43 100%)',
            }}
          />
          <motion.div
            initial={{ scale: 0.35, opacity: 0 }}
            animate={
              isCover
                ? { scale: 1, opacity: 0.85 }
                : { scale: 2.2, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute w-64 h-80 rounded-[999px] border border-[#E8E26A]/50"
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 9. MANUFACTURING — Cleanroom Precision Grid & Aqua Laser Beam */}
      {config.id === 'cleanroom-laser' && (
        <>
          <motion.div
            initial={{ y: '-102%' }}
            animate={{ y: isCover ? '0%' : '-104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-x-0 top-0 h-[50.4%] bg-[#013E43]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(44,238,236,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(44,238,236,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <motion.div
            initial={{ y: '102%' }}
            animate={{ y: isCover ? '0%' : '104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            className="absolute inset-x-0 bottom-0 h-[50.4%] bg-[#001442]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(44,238,236,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(44,238,236,0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isCover
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 1.1, opacity: 0 }
            }
            transition={{ duration: 0.25, ease: EASE_LUXE }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#2CEEEC] shadow-teal-glow z-10"
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 10. PRIVATE LABEL — 3D Vault Double-Door Coffer */}
      {config.id === 'coffer-doors' && (
        <div
          className="absolute inset-0 flex"
          style={{ perspective: '1400px' }}
        >
          <motion.div
            initial={{ rotateY: 88, opacity: 0.5 }}
            animate={
              isCover
                ? { rotateY: 0, opacity: 1 }
                : { rotateY: -92, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            style={{ transformOrigin: 'left center' }}
            className="w-1/2 h-full bg-gradient-to-r from-[#000D2B] to-[#001442] border-r-2 border-[#B9B52A] p-4 sm:p-8 flex items-center justify-end"
          >
            <div className="w-full h-full border border-[#B9B52A]/25 rounded-l-lg" />
          </motion.div>
          <motion.div
            initial={{ rotateY: -88, opacity: 0.5 }}
            animate={
              isCover
                ? { rotateY: 0, opacity: 1 }
                : { rotateY: 92, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            style={{ transformOrigin: 'right center' }}
            className="w-1/2 h-full bg-gradient-to-l from-[#000D2B] to-[#001442] border-l-2 border-[#B9B52A] p-4 sm:p-8 flex items-center justify-start"
          >
            <div className="w-full h-full border border-[#B9B52A]/25 rounded-r-lg" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ChapterCrest phase={phase} config={config} dark />
          </div>
        </div>
      )}

      {/* 11. CRAFTSMANSHIP — Botanical Canopy Dual Diagonal Blades */}
      {config.id === 'botanical-blades' && (
        <>
          <motion.div
            initial={{ x: '-110%', y: '-110%' }}
            animate={
              isCover
                ? { x: '0%', y: '0%' }
                : { x: '-110%', y: '-110%' }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute -inset-24 bg-gradient-to-br from-[#013E43] via-[#02A262] to-[#1AE2BD]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
          <motion.div
            initial={{ x: '110%', y: '110%' }}
            animate={
              isCover
                ? { x: '0%', y: '0%' }
                : { x: '110%', y: '110%' }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            className="absolute -inset-24 bg-gradient-to-tl from-[#013E43] via-[#01706C] to-[#02A262]"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 12. PACKAGING — Faceted Crystal Diamond Frame */}
      {config.id === 'crystal-facet' && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isCover ? 1 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.78, ease: EASE_LUXE }}
            className="absolute inset-0 bg-[#013E43]/95"
          />
          <motion.div
            initial={{ scale: 0.3, rotate: 0, opacity: 0 }}
            animate={
              isCover
                ? { scale: 1, rotate: 45, opacity: 1 }
                : { scale: 2.9, rotate: 90, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 border-2 border-[#1AE2BD]/80 shadow-teal-glow"
          />
          <motion.div
            initial={{ scale: 0.2, rotate: 45, opacity: 0 }}
            animate={
              isCover
                ? { scale: 0.82, rotate: 45, opacity: 0.9 }
                : { scale: 2.5, rotate: 45, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            className="absolute w-64 h-64 sm:w-80 sm:h-80 border border-[#B9B52A]/75"
          />
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 13. PROCESS — Eight-Stage Stepped Timeline Cascade */}
      {config.id === 'eight-stages' && (
        <>
          {Array.from({ length: 8 }).map((_, idx) => {
            const colors = [
              '#001442',
              '#002543',
              '#00303F',
              '#013E43',
              '#015657',
              '#01706C',
              '#018967',
              '#02A262',
            ];
            return (
              <motion.div
                key={idx}
                initial={{ x: '-103%' }}
                animate={{ x: isCover ? '0%' : '105%' }}
                transition={{
                  duration: isCover ? coverDuration * 0.8 : revealDuration * 0.78,
                  delay: idx * 0.022,
                  ease: EASE_SILK,
                }}
                onAnimationComplete={idx === 7 ? notifyOnReveal : undefined}
                className="absolute inset-x-0 flex items-center justify-between px-6 sm:px-12 border-b border-white/10"
                style={{
                  top: `${idx * 12.5}%`,
                  height: '13%',
                  backgroundColor: colors[idx],
                }}
              >
                <span className="text-[10px] font-serif tracking-[0.3em] text-[#E8E26A]/55">
                  STAGE 0{idx + 1}
                </span>
                <span className="h-px w-12 bg-[#2CEEEC]/25" />
              </motion.div>
            );
          })}
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 14. UPCOMING LAUNCH — 2026 Premiere Cinema Letterbox & Spotlight */}
      {config.id === 'premiere-letterbox' && (
        <>
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: isCover ? '0%' : '-105%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-x-0 top-0 h-[50.5%] bg-[#001442] border-b border-[#2CEEEC]/45"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isCover ? '0%' : '105%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            className="absolute inset-x-0 bottom-0 h-[50.5%] bg-[#000D2B] border-t border-[#B9B52A]/45"
          />
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={
              isCover
                ? { scale: 1.1, opacity: 0.45 }
                : { scale: 2.2, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            className="absolute w-[34rem] h-[34rem] rounded-full"
            style={{
              background:
                'radial-gradient(circle closest-side, rgba(44,238,236,0.45), rgba(185,181,42,0.2) 55%, transparent 100%)',
            }}
          />
          <ChapterCrest phase={phase} config={config} dark showMonogram />
        </>
      )}

      {/* 15. LOOKBOOK — Medium-Format Camera Aperture Shutter */}
      {config.id === 'camera-shutter' && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isCover ? 0.96 : 0 }}
            transition={{ duration: isCover ? coverDuration * 0.7 : revealDuration * 0.85, ease: EASE_LUXE }}
            className="absolute inset-0 bg-[#001442]"
          />
          {[0, 90, 180, 270].map((deg, idx) => (
            <motion.div
              key={deg}
              initial={{ scale: 0.5, rotate: deg + 45, opacity: 0 }}
              animate={
                isCover
                  ? { scale: 1.08, rotate: deg, opacity: 1 }
                  : { scale: 2.3, rotate: deg - 55, opacity: 0 }
              }
              transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
              onAnimationComplete={idx === 3 ? notifyOnReveal : undefined}
              className="absolute w-[112vmax] h-[112vmax] border border-[#B9B52A]/40 bg-[#013E43]/40"
              style={{
                clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)',
              }}
            />
          ))}
          {/* Editorial Viewfinder Brackets */}
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={
              isCover
                ? { scale: 1, opacity: 0.9 }
                : { scale: 1.25, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.7 }}
            className="absolute w-64 h-44 sm:w-96 sm:h-60 border border-[#2CEEEC]/30"
          >
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#B9B52A]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#B9B52A]" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#B9B52A]" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#B9B52A]" />
          </motion.div>
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}

      {/* 16. CONTACT — Concentric Sillage Ripple & Letterpress Card */}
      {config.id === 'sillage-ripple' && (
        <>
          <motion.div
            initial={{ y: '104%' }}
            animate={{ y: isCover ? '0%' : '-105%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-0 bg-[#F6FAF9] border-y-4 border-[#01706C]"
          />
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={
                isCover
                  ? { scale: 0.7 + ring * 0.35, opacity: 0.45 }
                  : { scale: 1.6 + ring * 0.45, opacity: 0 }
              }
              transition={{
                duration: isCover ? coverDuration : revealDuration,
                delay: ring * 0.04,
                ease: EASE_LUXE,
              }}
              className="absolute w-48 h-48 rounded-full border border-[#01706C]/45"
            />
          ))}
          <ChapterCrest phase={phase} config={config} dark={false} />
        </>
      )}

      {/* 17. FAQ — Six-Slat Accordion Archive Louver */}
      {config.id === 'accordion-slats' && (
        <>
          {Array.from({ length: 6 }).map((_, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ x: fromLeft ? '-103%' : '103%' }}
                animate={{
                  x: isCover ? '0%' : fromLeft ? '104%' : '-104%',
                }}
                transition={{
                  duration: isCover ? coverDuration * 0.85 : revealDuration * 0.82,
                  delay: idx * 0.025,
                  ease: EASE_SILK,
                }}
                onAnimationComplete={idx === 5 ? notifyOnReveal : undefined}
                className="absolute inset-x-0 border-b border-[#D2E2DD]"
                style={{
                  top: `${idx * (100 / 6)}%`,
                  height: `${100 / 6 + 0.6}%`,
                  backgroundColor: idx % 2 === 0 ? '#EAF2EE' : '#DCE9E4',
                }}
              />
            );
          })}
          <ChapterCrest phase={phase} config={config} dark={false} />
        </>
      )}

      {/* 18. PRIVACY — Archival Parchment Scroll Unroll & Gold Seal Bar */}
      {config.id === 'parchment-unroll' && (
        <>
          <motion.div
            initial={{ y: '-103%' }}
            animate={{ y: isCover ? '0%' : '104%' }}
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_SILK }}
            onAnimationComplete={notifyOnReveal}
            className="absolute inset-0 bg-[#FAFDFC] border-b-[3px] border-[#B9B52A] shadow-luxury"
          />
          <ChapterCrest phase={phase} config={config} dark={false} />
        </>
      )}

      {/* 19. TERMS — 3D Bilateral Folio Book-Leaf Turn */}
      {config.id === 'folio-hinge' && (
        <div
          className="absolute inset-0"
          style={{ perspective: '1600px' }}
        >
          <motion.div
            initial={{ rotateY: 92, opacity: 0.4 }}
            animate={
              isCover
                ? { rotateY: 0, opacity: 1 }
                : { rotateY: -96, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            style={{ transformOrigin: 'left center' }}
            className="absolute inset-0 bg-gradient-to-r from-[#001442] via-[#013E43] to-[#01706C] border-r-4 border-[#B9B52A]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <ChapterCrest phase={phase} config={config} dark />
          </div>
        </div>
      )}

      {/* 20. NOT FOUND — Compass Nebula Drift & Crosshair */}
      {config.id === 'compass-drift' && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isCover ? 0.96 : 0 }}
            transition={{ duration: isCover ? coverDuration : revealDuration * 0.85, ease: EASE_LUXE }}
            className="absolute inset-0 bg-[#001442]"
          />
          <motion.svg
            viewBox="0 0 120 120"
            initial={{ rotate: -60, scale: 0.4, opacity: 0 }}
            animate={
              isCover
                ? { rotate: 0, scale: 1, opacity: 0.45 }
                : { rotate: 75, scale: 2.2, opacity: 0 }
            }
            transition={{ duration: isCover ? coverDuration : revealDuration, ease: EASE_LUXE }}
            onAnimationComplete={notifyOnReveal}
            className="absolute w-72 h-72 text-[#2CEEEC]"
            fill="none"
          >
            <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
            <path d="M60 4V116M4 60H116" stroke="#B9B52A" strokeWidth="0.75" />
          </motion.svg>
          <ChapterCrest phase={phase} config={config} dark />
        </>
      )}
    </div>
  );
};
