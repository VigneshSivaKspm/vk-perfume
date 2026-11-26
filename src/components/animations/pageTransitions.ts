import type { Variants } from 'framer-motion';
import { FRAGRANCES } from '../../data/fragrances';

export type PageTransitionStyleId =
  | 'sovereign-iris'
  | 'silk-diptych'
  | 'chromatic-louvers'
  | 'oud-monolith'
  | 'jasmine-veil'
  | 'aquatic-tide'
  | 'citrus-prism'
  | 'vanilla-amphora'
  | 'cleanroom-laser'
  | 'coffer-doors'
  | 'botanical-blades'
  | 'crystal-facet'
  | 'eight-stages'
  | 'premiere-letterbox'
  | 'camera-shutter'
  | 'sillage-ripple'
  | 'accordion-slats'
  | 'parchment-unroll'
  | 'folio-hinge'
  | 'compass-drift';

export interface PageTransitionPalette {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  text: string;
}

export interface PageTransitionConfig {
  id: PageTransitionStyleId;
  eyebrow: string;
  title: string;
  code: string;
  palette: PageTransitionPalette;
  exitDuration: number;
  enterDuration: number;
  curtainRevealDuration: number;
  stageVariants: Variants;
}

const EASE_LUXE = [0.16, 1, 0.3, 1] as const;
const EASE_SILK = [0.76, 0, 0.24, 1] as const;
const EASE_CRISP = [0.22, 1, 0.36, 1] as const;

const CLEAN_TRANSITION_END = {
  transform: 'none',
  clipPath: 'none',
  filter: 'none',
};

const makeVariants = ({
  initial,
  animate,
  exit,
  enterDuration,
  enterEase = EASE_LUXE,
  exitEase = EASE_SILK,
}: {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
  enterDuration: number;
  exitDuration?: number;
  enterEase?: readonly [number, number, number, number];
  exitEase?: readonly [number, number, number, number];
}): Variants => ({
  initial: initial as Variants['initial'],
  animate: {
    ...animate,
    transitionEnd: CLEAN_TRANSITION_END,
    transition: {
      duration: enterDuration,
      ease: enterEase,
    },
  } as Variants['animate'],
  exit: {
    ...exit,
    transition: {
      duration: 0.32,
      ease: exitEase,
    },
  } as Variants['exit'],
});

export const TRANSITION_PROFILES: Record<PageTransitionStyleId, PageTransitionConfig> = {
  // 1. HOME — Radial Iris Bloom from Sovereign Center
  'sovereign-iris': {
    id: 'sovereign-iris',
    eyebrow: 'Maison VK • Tamil Nadu',
    title: 'Haute Parfumerie',
    code: 'MAISON',
    palette: {
      primary: '#001442',
      secondary: '#013E43',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#F6FAF9',
    },
    exitDuration: 0.34,
    enterDuration: 0.68,
    curtainRevealDuration: 0.62,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 1.04,
        clipPath: 'circle(0vmax at 50% 44vh)',
        transformOrigin: '50% 44vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        clipPath: 'circle(155vmax at 50% 44vh)',
      },
      exit: {
        opacity: 0,
        scale: 0.97,
        transformOrigin: '50% 44vh',
      },
      enterDuration: 0.68,
      exitDuration: 0.34,
    }),
  },

  // 2. ABOUT — Botanical Silk Diptych Parting
  'silk-diptych': {
    id: 'silk-diptych',
    eyebrow: 'Heritage & Terroir',
    title: 'Our Story',
    code: 'HERITAGE',
    palette: {
      primary: '#013E43',
      secondary: '#02A262',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#013E43',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 36,
        scale: 0.985,
        transformOrigin: '50% 35vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        y: -24,
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 3. COLLECTIONS — Five-Fragrance Chromatic Silk Louvers
  'chromatic-louvers': {
    id: 'chromatic-louvers',
    eyebrow: 'Launch Showcase',
    title: 'Five Collections',
    code: 'N° 01–05',
    palette: {
      primary: '#01706C',
      secondary: '#001442',
      accent: '#2CEEEC',
      surface: '#EAF2EE',
      text: '#FFFFFF',
    },
    exitDuration: 0.36,
    enterDuration: 0.64,
    curtainRevealDuration: 0.62,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 54,
        scale: 0.975,
        transformOrigin: '50% 40vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        y: -30,
        scale: 0.985,
        transformOrigin: '50% 40vh',
      },
      enterDuration: 0.64,
      exitDuration: 0.36,
    }),
  },

  // 4. FRAGRANCE N° 01 OUD — Obsidian & Crown-Gold Monolith Rise
  'oud-monolith': {
    id: 'oud-monolith',
    eyebrow: 'N° 01 • Oud & Woody',
    title: 'Imperial Oud & Smoked Musk',
    code: 'N° 01',
    palette: {
      primary: '#001442',
      secondary: '#013E43',
      accent: '#B9B52A',
      surface: '#F2F8F6',
      text: '#E8E26A',
    },
    exitDuration: 0.36,
    enterDuration: 0.68,
    curtainRevealDuration: 0.62,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 62,
        scale: 0.96,
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        y: -28,
        scale: 0.97,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.68,
      exitDuration: 0.36,
    }),
  },

  // 5. FRAGRANCE N° 02 JASMINE — Dawn Petal Diagonal Satin Veil
  'jasmine-veil': {
    id: 'jasmine-veil',
    eyebrow: 'N° 02 • Floral Luminous',
    title: 'Madurai Jasmine Lumière',
    code: 'N° 02',
    palette: {
      primary: '#0F8F7A',
      secondary: '#013E43',
      accent: '#1AE2BD',
      surface: '#F3FBF8',
      text: '#013E43',
    },
    exitDuration: 0.34,
    enterDuration: 0.64,
    curtainRevealDuration: 0.6,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        x: -28,
        y: -20,
        scale: 1.02,
        transformOrigin: '50% 40vh',
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        x: 24,
        y: 16,
      },
      enterDuration: 0.64,
      exitDuration: 0.34,
    }),
  },

  // 6. FRAGRANCE N° 03 AQUATIC — Coromandel Liquid Wave Crest Sweep
  'aquatic-tide': {
    id: 'aquatic-tide',
    eyebrow: 'N° 03 • Fresh Aquatic',
    title: 'Coromandel Oceanic Mist',
    code: 'N° 03',
    palette: {
      primary: '#00303F',
      secondary: '#01706C',
      accent: '#2CEEEC',
      surface: '#F2FAFA',
      text: '#FFFFFF',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.6,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        x: 72,
        scale: 0.99,
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        x: -56,
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 7. FRAGRANCE N° 04 CITRUS — Octagonal Sunburst Prism Refraction
  'citrus-prism': {
    id: 'citrus-prism',
    eyebrow: 'N° 04 • Solar Citrus',
    title: 'Soleil de Coonoor Citrus',
    code: 'N° 04',
    palette: {
      primary: '#757014',
      secondary: '#3A3708',
      accent: '#E8E26A',
      surface: '#FAFBF0',
      text: '#FFFFFF',
    },
    exitDuration: 0.32,
    enterDuration: 0.62,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 0.94,
        clipPath:
          'polygon(50vw 45vh, 50vw 45vh, 50vw 45vh, 50vw 45vh, 50vw 45vh, 50vw 45vh, 50vw 45vh, 50vw 45vh)',
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        clipPath:
          'polygon(50vw -140vh, 170vw -75vh, 240vw 45vh, 170vw 165vh, 50vw 230vh, -70vw 165vh, -140vw 45vh, -70vw -75vh)',
      },
      exit: {
        opacity: 0,
        scale: 1.03,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.62,
      exitDuration: 0.32,
      enterEase: EASE_CRISP,
    }),
  },

  // 8. FRAGRANCE N° 05 VANILLA — Molten Emerald Amphora Iris
  'vanilla-amphora': {
    id: 'vanilla-amphora',
    eyebrow: 'N° 05 • Sweet Gourmand',
    title: 'Velours Vanilla & Spiced Amber',
    code: 'N° 05',
    palette: {
      primary: '#016840',
      secondary: '#013E43',
      accent: '#02A262',
      surface: '#F2FAF6',
      text: '#FFFFFF',
    },
    exitDuration: 0.36,
    enterDuration: 0.68,
    curtainRevealDuration: 0.64,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 0.96,
        clipPath: 'ellipse(4vmax 6vmax at 50% 45vh)',
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        clipPath: 'ellipse(155vmax 155vmax at 50% 45vh)',
      },
      exit: {
        opacity: 0,
        scale: 0.98,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.68,
      exitDuration: 0.36,
    }),
  },

  // 9. MANUFACTURING — Cleanroom Precision Grid & Laser Aperture
  'cleanroom-laser': {
    id: 'cleanroom-laser',
    eyebrow: 'Class 10,000 Cleanroom',
    title: 'Precision Manufacturing',
    code: 'IFRA 51',
    palette: {
      primary: '#013E43',
      secondary: '#001442',
      accent: '#2CEEEC',
      surface: '#F6FAF9',
      text: '#2CEEEC',
    },
    exitDuration: 0.34,
    enterDuration: 0.58,
    curtainRevealDuration: 0.56,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 1.025,
        y: 12,
        transformOrigin: '50% 42vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        scale: 0.98,
        transformOrigin: '50% 42vh',
      },
      enterDuration: 0.58,
      exitDuration: 0.34,
      enterEase: EASE_CRISP,
    }),
  },

  // 10. PRIVATE LABEL — 3D Luxury Coffer Double-Door Hinge
  'coffer-doors': {
    id: 'coffer-doors',
    eyebrow: 'B2B OEM Atelier',
    title: 'Private Label Manufacturing',
    code: 'OEM',
    palette: {
      primary: '#001442',
      secondary: '#013E43',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#E8E26A',
    },
    exitDuration: 0.36,
    enterDuration: 0.66,
    curtainRevealDuration: 0.64,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 0.93,
        rotateY: -7,
        transformPerspective: 1400,
        transformOrigin: '50% 42vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transformPerspective: 1400,
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        rotateY: 5,
        transformPerspective: 1400,
        transformOrigin: '50% 42vh',
      },
      enterDuration: 0.66,
      exitDuration: 0.36,
    }),
  },

  // 11. CRAFTSMANSHIP — Botanical Canopy Dual Diagonal Blades
  'botanical-blades': {
    id: 'botanical-blades',
    eyebrow: 'South Indian Terroir',
    title: 'Botanical Craftsmanship',
    code: 'TERROIR',
    palette: {
      primary: '#02A262',
      secondary: '#013E43',
      accent: '#1AE2BD',
      surface: '#EAF2EE',
      text: '#FFFFFF',
    },
    exitDuration: 0.34,
    enterDuration: 0.64,
    curtainRevealDuration: 0.6,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 42,
        rotate: -0.65,
        transformOrigin: '50% 42vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        rotate: 0,
      },
      exit: {
        opacity: 0,
        y: -26,
        rotate: 0.45,
        transformOrigin: '50% 42vh',
      },
      enterDuration: 0.64,
      exitDuration: 0.34,
    }),
  },

  // 12. PACKAGING — Faceted Crystal Diamond Unboxing
  'crystal-facet': {
    id: 'crystal-facet',
    eyebrow: 'Flacon Architecture',
    title: 'Bespoke Glass & Boxes',
    code: 'CRYSTAL',
    palette: {
      primary: '#013E43',
      secondary: '#01706C',
      accent: '#1AE2BD',
      surface: '#F6FAF9',
      text: '#1AE2BD',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 0.95,
        clipPath: 'polygon(50vw 44vh, 50vw 44vh, 50vw 44vh, 50vw 44vh)',
        transformOrigin: '50% 44vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        clipPath: 'polygon(50vw -120vh, 220vw 44vh, 50vw 210vh, -120vw 44vh)',
      },
      exit: {
        opacity: 0,
        scale: 0.96,
        transformOrigin: '50% 44vh',
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 13. PROCESS — Eight-Stage Stepped Timeline Cascade
  'eight-stages': {
    id: 'eight-stages',
    eyebrow: '16-Week Roadmap',
    title: 'Eight-Stage Process',
    code: '01 → 08',
    palette: {
      primary: '#01706C',
      secondary: '#02A262',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#FFFFFF',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.62,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: -36,
        transformOrigin: '50% 30vh',
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: 28,
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 14. UPCOMING LAUNCH — 2026 Sovereign Premiere Cinema Letterbox
  'premiere-letterbox': {
    id: 'premiere-letterbox',
    eyebrow: 'Tamil Nadu 2026',
    title: 'Sovereign Launch Premiere',
    code: '2026',
    palette: {
      primary: '#001442',
      secondary: '#01706C',
      accent: '#2CEEEC',
      surface: '#000D2B',
      text: '#E8E26A',
    },
    exitDuration: 0.36,
    enterDuration: 0.68,
    curtainRevealDuration: 0.64,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 44,
        scale: 0.92,
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        scale: 0.94,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.68,
      exitDuration: 0.36,
    }),
  },

  // 15. LOOKBOOK — Medium-Format Camera Aperture Shutter
  'camera-shutter': {
    id: 'camera-shutter',
    eyebrow: 'Visual Archive',
    title: 'Editorial Lookbook',
    code: 'F/1.4',
    palette: {
      primary: '#001442',
      secondary: '#013E43',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#FFFFFF',
    },
    exitDuration: 0.34,
    enterDuration: 0.6,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 1.055,
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
      },
      exit: {
        opacity: 0,
        scale: 0.95,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.6,
      exitDuration: 0.34,
    }),
  },

  // 16. CONTACT — Concentric Sillage Ripple & Letterpress Fold
  'sillage-ripple': {
    id: 'sillage-ripple',
    eyebrow: 'Direct Concierge',
    title: 'Initiate Consultation',
    code: 'CONCIERGE',
    palette: {
      primary: '#013E43',
      secondary: '#01706C',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#013E43',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: 36,
        rotateX: 5,
        transformPerspective: 1200,
        transformOrigin: '50% 35vh',
      },
      animate: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transformPerspective: 1200,
      },
      exit: {
        opacity: 0,
        y: -22,
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 17. FAQ — Six-Slat Accordion Archive Louver
  'accordion-slats': {
    id: 'accordion-slats',
    eyebrow: 'Operational Dossier',
    title: 'Questions & Standards',
    code: 'FAQ',
    palette: {
      primary: '#013E43',
      secondary: '#335054',
      accent: '#01706C',
      surface: '#EAF2EE',
      text: '#013E43',
    },
    exitDuration: 0.32,
    enterDuration: 0.58,
    curtainRevealDuration: 0.56,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        x: -44,
        transformOrigin: '50% 40vh',
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: 36,
      },
      enterDuration: 0.58,
      exitDuration: 0.32,
    }),
  },

  // 18. PRIVACY — Archival Parchment Scroll Unroll
  'parchment-unroll': {
    id: 'parchment-unroll',
    eyebrow: 'Data Stewardship',
    title: 'Privacy Policy',
    code: 'PRIVACY',
    palette: {
      primary: '#013E43',
      secondary: '#757014',
      accent: '#B9B52A',
      surface: '#FAFDFC',
      text: '#013E43',
    },
    exitDuration: 0.32,
    enterDuration: 0.6,
    curtainRevealDuration: 0.56,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        y: -18,
        clipPath: 'inset(0% 0% 100% 0%)',
      },
      animate: {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
      },
      exit: {
        opacity: 0,
        y: 16,
      },
      enterDuration: 0.6,
      exitDuration: 0.32,
    }),
  },

  // 19. TERMS — Bilateral Folio 3D Book-Leaf Hinge
  'folio-hinge': {
    id: 'folio-hinge',
    eyebrow: 'Commercial Governance',
    title: 'Terms of Formulation',
    code: 'TERMS',
    palette: {
      primary: '#013E43',
      secondary: '#001442',
      accent: '#B9B52A',
      surface: '#F6FAF9',
      text: '#F6FAF9',
    },
    exitDuration: 0.34,
    enterDuration: 0.62,
    curtainRevealDuration: 0.58,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        x: 38,
        rotateY: 11,
        transformPerspective: 1600,
        transformOrigin: 'left 40vh',
      },
      animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transformPerspective: 1600,
      },
      exit: {
        opacity: 0,
        x: -28,
        rotateY: -6,
        transformPerspective: 1600,
        transformOrigin: 'left 40vh',
      },
      enterDuration: 0.62,
      exitDuration: 0.34,
    }),
  },

  // 20. NOT FOUND — Compass Nebula Drift & Vignette Focus
  'compass-drift': {
    id: 'compass-drift',
    eyebrow: 'Uncharted Scent Trail',
    title: 'Archive Not Located',
    code: '404',
    palette: {
      primary: '#001442',
      secondary: '#013E43',
      accent: '#2CEEEC',
      surface: '#F6FAF9',
      text: '#FFFFFF',
    },
    exitDuration: 0.32,
    enterDuration: 0.58,
    curtainRevealDuration: 0.54,
    stageVariants: makeVariants({
      initial: {
        opacity: 0,
        scale: 0.92,
        rotate: -2.2,
        transformOrigin: '50% 45vh',
      },
      animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
      },
      exit: {
        opacity: 0,
        scale: 0.94,
        rotate: 1.5,
        transformOrigin: '50% 45vh',
      },
      enterDuration: 0.58,
      exitDuration: 0.32,
    }),
  },
};

export function getCanonicalRouteKey(pathname: string): string {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (normalized === '/ingredients') return '/craftsmanship';
  if (normalized === '/gallery') return '/lookbook';

  if (normalized.startsWith('/fragrances/')) {
    const slug = normalized.slice('/fragrances/'.length);
    const exists = FRAGRANCES.some((f) => f.slug === slug);
    return exists ? normalized : '/collections';
  }

  const knownRoutes = new Set([
    '/',
    '/about',
    '/collections',
    '/manufacturing',
    '/private-label',
    '/craftsmanship',
    '/packaging',
    '/process',
    '/upcoming-launch',
    '/lookbook',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
  ]);

  return knownRoutes.has(normalized) ? normalized : '__not_found__';
}

export function getTransitionConfig(pathname: string): PageTransitionConfig {
  const key = getCanonicalRouteKey(pathname);

  switch (key) {
    case '/':
      return TRANSITION_PROFILES['sovereign-iris'];
    case '/about':
      return TRANSITION_PROFILES['silk-diptych'];
    case '/collections':
      return TRANSITION_PROFILES['chromatic-louvers'];
    case '/fragrances/oud-woody-musky':
      return TRANSITION_PROFILES['oud-monolith'];
    case '/fragrances/jasmine':
      return TRANSITION_PROFILES['jasmine-veil'];
    case '/fragrances/fresh-aquatic':
      return TRANSITION_PROFILES['aquatic-tide'];
    case '/fragrances/citrus':
      return TRANSITION_PROFILES['citrus-prism'];
    case '/fragrances/vanilla-gourmand':
      return TRANSITION_PROFILES['vanilla-amphora'];
    case '/manufacturing':
      return TRANSITION_PROFILES['cleanroom-laser'];
    case '/private-label':
      return TRANSITION_PROFILES['coffer-doors'];
    case '/craftsmanship':
      return TRANSITION_PROFILES['botanical-blades'];
    case '/packaging':
      return TRANSITION_PROFILES['crystal-facet'];
    case '/process':
      return TRANSITION_PROFILES['eight-stages'];
    case '/upcoming-launch':
      return TRANSITION_PROFILES['premiere-letterbox'];
    case '/lookbook':
      return TRANSITION_PROFILES['camera-shutter'];
    case '/contact':
      return TRANSITION_PROFILES['sillage-ripple'];
    case '/faq':
      return TRANSITION_PROFILES['accordion-slats'];
    case '/privacy':
      return TRANSITION_PROFILES['parchment-unroll'];
    case '/terms':
      return TRANSITION_PROFILES['folio-hinge'];
    default:
      return TRANSITION_PROFILES['compass-drift'];
  }
}
