import type { Fragrance } from '../types';

export const FRAGRANCES: Fragrance[] = [
  {
    id: 'vk-01',
    slug: 'oud-woody-musky',
    number: '01',
    name: 'Imperial Oud & Smoked Musk',
    subtitle: 'N° 01 — Haute Collection',
    tagline: 'Royal. Mysterious. Uncompromising power in shadow and gold.',
    category: 'Oud & Woody',
    mood: 'Deep & Mysterious',
    visualType: 'oud',
    designDirection: 'Royal, mysterious, powerful, sophisticated.',
    bottle: {
      silhouette: 'Tall architectural smoked amber monolithic flacon',
      glass: 'Graduated deep walnut brown to translucent obsidian black crystal',
      cap: 'Chiseled metallic bronze crown with subtle brushed satin bevels',
      detailing: 'Precision micro-etched gold monogram lineaments & recessed label niche',
      base: 'Heavy 32mm solid optical crystal base reflecting warm amber refractions',
      summary: 'An imposing sculptural presence inspired by royal palatial architecture, balancing ancient smoky depth with razor-sharp modern symmetry.'
    },
    environment: {
      lighting: 'Warm dusk desert illumination with sharp directional bronze rim reflections',
      textures: 'Aged agarwood grain, polished black obsidian, and hand-troweled terracotta sandstone',
      atmosphere: 'Suspended micro-incense wisps, drifting golden dust particles, and deep amber glow'
    },
    colors: {
      primary: '#693B11',
      secondary: '#251A10',
      accent: '#B59A68',
      glow: 'rgba(181, 154, 104, 0.35)',
      bgLight: '#FAF4EB',
      pillBg: '#F3E5D4',
      border: 'rgba(105, 59, 17, 0.25)'
    },
    notes: {
      top: ['Wild Saffron Thread', 'Smoked Bergamot Rind', 'Pimento Berry'],
      heart: ['Aged Cambodian Agarwood', 'Atlas Cedar Heart', 'Resinous Frankincense'],
      base: ['Black Musks', 'Distilled Amber Tears', 'Dark Leather Accord', 'Mysore Sandalwood']
    },
    story: 'Conceived as an homage to timeless royalty and nighttime palace courtyards, Imperial Oud balances the untamed resinous heart of rare agarwood with the aristocratic softness of black velvet musks. Each drop embodies supreme authority and whispered allure.',
    inspiration: 'The historic incense chambers of Southern India and ancient spice maritime trade routes that connected the Coromandel coast to the royal courts of the Levant.',
    regionalHeritage: 'Distilled with respect for classical Indian perfumery (Attar tradition) married to modern European maceration technology in Tamil Nadu.',
    sensoryDescription: 'An opening of dry saffron fire gently gives way to opulent, brooding agarwood, settling into a twenty-hour sillage of warm skin musk and molten golden resin.',
    images: {
      ingredient: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80',
      mood: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
      botanical: 'https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=1200&q=80'
    },
    launchStatus: 'Upcoming Launch Showcase — Exclusive Preview',
    concentration: 'Extrait de Parfum (28% Concentration)',
    targetProfile: 'Bold presence for formal evenings, collectors, and distinguished signatures',
    price: {
      inr: 14500,
      formatted: '₹14,500',
      volume: '100ml / 3.4 FL. OZ.',
      sizes: {
        ml50: { inr: 8500, formatted: '₹8,500' },
        ml100: { inr: 14500, formatted: '₹14,500' }
      },
      editionNote: 'Pre-Launch Preview Edition • Hand-Numbered Flacons'
    }
  },
  {
    id: 'vk-02',
    slug: 'jasmine',
    number: '02',
    name: 'Madurai Jasmine Lumière',
    subtitle: 'N° 02 — Haute Collection',
    tagline: 'Delicate. Floral. The luminescent poetry of dawn blossoms.',
    category: 'Floral Luminous',
    mood: 'Elegant & Floral',
    visualType: 'jasmine',
    designDirection: 'Delicate, floral, elegant, luminous.',
    bottle: {
      silhouette: 'Soft sculpted teardrop flacon with undulating feminine contours',
      glass: 'Frosted pearl-white opaline glass with subtle translucent pearlescence',
      cap: 'Polished rose-gold metallic sphere with laser-engraved floral arabesque filigree',
      detailing: 'Subtle embossed petal contours and rose-gilded calligraphy',
      base: 'Gently curved, water-clear crystal plinth with radiant white highlights',
      summary: 'A luminous, ethereal silhouette echoing the delicate form of an unfurling dawn jasmine blossom, radiating soft morning light.'
    },
    environment: {
      lighting: 'Diffuse morning twilight filtered through diaphanous ivory silk drapes',
      textures: 'Freshly plucked Sambac jasmine garlands, unspun silk, and smoothed Makrana marble',
      atmosphere: 'Suspended morning dew droplets, soft-focus glowing bokeh, and drifting white petals'
    },
    colors: {
      primary: '#9C7A68',
      secondary: '#4A3B32',
      accent: '#D4A373',
      glow: 'rgba(212, 163, 115, 0.3)',
      bgLight: '#FBF8F5',
      pillBg: '#F3EBE3',
      border: 'rgba(212, 163, 115, 0.25)'
    },
    notes: {
      top: ['Morning Green Sap', 'Mandarin Blossom', 'Crisp White Nectarine'],
      heart: ['Madurai Sambac Jasmine Absolute', 'Tuberose Enfleurage', 'Orange Flower Water'],
      base: ['White Cashmeran', 'Silken Benzoin', 'Clean Petal Musk', 'Creamy Sandalwood']
    },
    story: 'Madurai Jasmine Lumière captures the sacred breath of dawn in the flower gardens of Madurai. Plucked by hand before the first sunbeam strikes the bud, the jasmine Sambac releases a nectarous, intoxicating aroma that is both spiritually tranquil and utterly hypnotic.',
    inspiration: 'The world-celebrated "Madurai Malli" (GI Tagged Jasmine) of Tamil Nadu, revered for centuries in royal courts, sacred garlands, and poetry.',
    regionalHeritage: 'Harvested directly from partner farmer cooperatives across the Madurai and Dindigul belts of Tamil Nadu, processed via cold enfleurage and green solvent extraction.',
    sensoryDescription: 'An ethereal crystalline floral burst that never turns heavy—floating on silken skin musks like fresh jasmine garlands draped across cool morning marble.',
    images: {
      ingredient: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
      mood: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=80',
      botanical: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80'
    },
    launchStatus: 'Upcoming Launch Showcase — Exclusive Preview',
    concentration: 'Eau de Parfum Intense (24% Concentration)',
    targetProfile: 'Effortless daytime sophistication, bridal celebrations, and luminous signature scent seekers',
    price: {
      inr: 11500,
      formatted: '₹11,500',
      volume: '100ml / 3.4 FL. OZ.',
      sizes: {
        ml50: { inr: 6800, formatted: '₹6,800' },
        ml100: { inr: 11500, formatted: '₹11,500' }
      },
      editionNote: 'Pre-Launch Preview Edition • Hand-Numbered Flacons'
    }
  },
  {
    id: 'vk-03',
    slug: 'fresh-aquatic',
    number: '03',
    name: 'Coromandel Oceanic Mist',
    subtitle: 'N° 03 — Haute Collection',
    tagline: 'Refreshing. Modern. Serene currents born of ocean winds and salt-spray.',
    category: 'Fresh Aquatic',
    mood: 'Fresh & Serene',
    visualType: 'aquatic',
    designDirection: 'Refreshing, modern, serene, ocean-inspired.',
    bottle: {
      silhouette: 'Dynamic wave-inspired sculptural flacon with asymmetric crystal facets',
      glass: 'Graduated cerulean blue fading into crystalline optical ocean transparency',
      cap: 'Mirror-polished nautical silver cylindrical cap with knurled grip detailing',
      detailing: 'Clean silver-leaf foil geometric typography and marine latitude coordinates',
      base: 'Heavy monolithic clear base evoking sunlight passing through deep coastal reefs',
      summary: 'A kinetic, fluid glass composition capturing the energy of a breaking ocean crest, crisp and endlessly refreshing.'
    },
    environment: {
      lighting: 'High-noon oceanic brilliance with dancing caustic water ripple reflections',
      textures: 'Weathered seaside driftwood, sun-bleached granite boulders, and fine sea-salt crust',
      atmosphere: 'Suspended microscopic sea spray droplets, cool coastal breeze, and crystalline cyan highlights'
    },
    colors: {
      primary: '#1E607D',
      secondary: '#0C2D3D',
      accent: '#48A9C5',
      glow: 'rgba(72, 169, 197, 0.35)',
      bgLight: '#F2F8FA',
      pillBg: '#E0F0F5',
      border: 'rgba(72, 169, 197, 0.28)'
    },
    notes: {
      top: ['Coromandel Sea Salt Mist', 'Crushed Juniper Berries', 'Italian Calamansi'],
      heart: ['Ocean Mineral Accord', 'Water Lily', 'Wild Sea Fennel', 'Crisp Bamboo'],
      base: ['Sun-bleached Driftwood', 'Grey Ambergris Accord', 'Clean White Cedar', 'Sea Moss']
    },
    story: 'Coromandel Oceanic Mist is an architectural ode to the vast Bay of Bengal coastal winds sweeping across Tamil Nadu shores. Crisp marine minerals meet salted coastal woods in an invigorating symphony that rejuvenates the spirit.',
    inspiration: 'The ancient maritime harbors of Mamallapuram, where centuries of sea spray have caressed carved granite shore temples under endless blue skies.',
    regionalHeritage: 'Infused with mineral salinity notes extracted from coastal marine flora alongside Nilgiri juniper.',
    sensoryDescription: 'A shock of icy sea spray and tart coastal citrus immediately gives way to tranquil oceanic minerals and warm sun-drenched driftwood that clings for hours.',
    images: {
      ingredient: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      mood: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80',
      botanical: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80'
    },
    launchStatus: 'Upcoming Launch Showcase — Exclusive Preview',
    concentration: 'Eau de Parfum (20% Concentration)',
    targetProfile: 'Modern professionals, summer luxury wear, and seekers of clean coastal serenity',
    price: {
      inr: 9500,
      formatted: '₹9,500',
      volume: '100ml / 3.4 FL. OZ.',
      sizes: {
        ml50: { inr: 5500, formatted: '₹5,500' },
        ml100: { inr: 9500, formatted: '₹9,500' }
      },
      editionNote: 'Pre-Launch Preview Edition • Hand-Numbered Flacons'
    }
  },
  {
    id: 'vk-04',
    slug: 'citrus',
    number: '04',
    name: 'Soleil de Coonoor Citrus',
    subtitle: 'N° 04 — Haute Collection',
    tagline: 'Bright. Energetic. A golden prism of mountain sunlight and crisp zest.',
    category: 'Solar Citrus',
    mood: 'Bright & Energizing',
    visualType: 'citrus',
    designDirection: 'Bright, energetic, contemporary, uplifting.',
    bottle: {
      silhouette: 'Precision octagonal prism flacon with hand-cut diamond-faceted edges',
      glass: 'Ultra-clear low-iron optical crystal displaying effervescent champagne-citron liquid',
      cap: 'Satin champagne-gold faceted cap mirroring the geometry of the bottle shoulders',
      detailing: 'Fine gold border debossed plaque and sunburst laser engraving on bottle crown',
      base: 'Precision-cut stepped bevel base that casts prism rainbow refractions on any surface',
      summary: 'A modern geometric tour-de-force designed to refract ambient daylight like an Italian cut diamond, radiating infectious vitality.'
    },
    environment: {
      lighting: 'Golden morning sunshine illuminating dust motes and sparkling through citrus slices',
      textures: 'Zested bergamot peels, dew-sprinkled tea leaves, and polished light travertine stone',
      atmosphere: 'Microscopic suspended citrus essential oil vapors and sparkling golden prism flares'
    },
    colors: {
      primary: '#9B7B1E',
      secondary: '#4A3907',
      accent: '#D4AF37',
      glow: 'rgba(212, 175, 55, 0.35)',
      bgLight: '#FCFAF2',
      pillBg: '#F7F1D8',
      border: 'rgba(212, 175, 55, 0.3)'
    },
    notes: {
      top: ['Cold-pressed Bergamot', 'Tamil Nadu Green Lime Zest', 'Sunlit Mandora', 'Pink Grapefruit'],
      heart: ['Nilgiri Green Tea Accord', 'Verbena Leaf', 'Neroli Petals', 'Crushed Petitgrain'],
      base: ['Vetiver of Cuddalore', 'Golden Amber Resin', 'Blonde Woods', 'Clean Musk']
    },
    story: 'Soleil de Coonoor captures the intoxicating elevation where lush citrus orchards meet misty mountain tea estates in the Western Ghats. It bursts open with effervescent optimism before melting into a sophisticated green tea and vetiver cadence.',
    inspiration: 'The sun-drenched hill slopes of Coonoor and Ooty in Tamil Nadu, where cool mountain air mingles with wild lime trees and high-grown tea bushes.',
    regionalHeritage: 'Features cold-pressed lime oils from Dindigul orchards and distilled green tea isolates from Nilgiris plantations.',
    sensoryDescription: 'An exhilarating explosion of sparkling citrus zest that stays crisp and vibrant for hours without turning sour, anchored by aristocratic green tea and smoky golden vetiver.',
    images: {
      ingredient: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      mood: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
      botanical: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=1200&q=80'
    },
    launchStatus: 'Upcoming Launch Showcase — Exclusive Preview',
    concentration: 'Eau de Parfum (22% Concentration)',
    targetProfile: 'Daytime vibrancy, creative leadership, warm weather distinction',
    price: {
      inr: 8800,
      formatted: '₹8,800',
      volume: '100ml / 3.4 FL. OZ.',
      sizes: {
        ml50: { inr: 5200, formatted: '₹5,200' },
        ml100: { inr: 8800, formatted: '₹8,800' }
      },
      editionNote: 'Pre-Launch Preview Edition • Hand-Numbered Flacons'
    }
  },
  {
    id: 'vk-05',
    slug: 'vanilla-gourmand',
    number: '05',
    name: 'Velours Vanilla & Spiced Amber',
    subtitle: 'N° 05 — Haute Collection',
    tagline: 'Warm. Indulgent. The hypnotic embrace of molten bourbon vanilla and caramel.',
    category: 'Sweet Gourmand',
    mood: 'Warm & Indulgent',
    visualType: 'vanilla',
    designDirection: 'Warm, indulgent, sensual, comforting.',
    bottle: {
      silhouette: 'Sensual curved amphora flacon with ergonomic sweeping hourglass contours',
      glass: 'Heavy weight crystal revealing deep golden caramel and honeyed liquid inside',
      cap: 'Warm champagne-gold fluted crown with magnetic haptic closure',
      detailing: 'Hand-applied cream textured linen label with gold hot-stamped VK crest',
      base: 'Generous 35mm thick rounded teardrop plinth with warm amber internal caustics',
      summary: 'A voluptuous, tactile bottle that feels like warm silk in the palm, celebrating the opulent warmth of golden South Indian vanilla pods.'
    },
    environment: {
      lighting: 'Low-lit candlelight and golden hearth ambient glow creating rich honeyed reflections',
      textures: 'Velvety cured vanilla beans, crystallized brown sugar, toasted tonka, and cashmere wool',
      atmosphere: 'Warm confectionery vapors, soft golden halo gradients, and gentle drifting amber sparks'
    },
    colors: {
      primary: '#854D27',
      secondary: '#3B1F0D',
      accent: '#C68B59',
      glow: 'rgba(198, 139, 89, 0.35)',
      bgLight: '#FAF5F0',
      pillBg: '#F3E7DC',
      border: 'rgba(198, 139, 89, 0.3)'
    },
    notes: {
      top: ['Toasted Almond Milk', 'Cardamom Pod Infusion', 'Golden Honey Drizzle'],
      heart: ['Pollachi Bourbon Vanilla Bean CO2', 'Caramelized Benzoin', 'Roasted Tonka Bean'],
      base: ['Warm Cashmere Amber', 'Velvet White Musk', 'Sandalwood Cream', 'Tobacco Leaf']
    },
    story: 'Velours Vanilla is an unapologetically decadent gourmand masterpiece. Far from synthetic sweetness, it honors the dark, resinous, smoky nuances of whole cured vanilla pods steeped in warm spiced cream and molten golden amber.',
    inspiration: 'The artisanal vanilla bean curing sheds of Pollachi and the Anamalai foothills in Tamil Nadu, where pods are slowly sun-cured to achieve complex balsamic richness.',
    regionalHeritage: 'Crafted with premium Grade-A vanilla beans sourced from ethical agroforestry farms in Pollachi, Tamil Nadu.',
    sensoryDescription: 'Opens like warm spiced caramel milk, melting seamlessly into intoxicating balsamic dark vanilla, creating an irresistible cocoon that lingers onto clothing for days.',
    images: {
      ingredient: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
      mood: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80',
      botanical: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'
    },
    launchStatus: 'Upcoming Launch Showcase — Exclusive Preview',
    concentration: 'Extrait de Parfum (30% Concentration)',
    targetProfile: 'Sensual winter evenings, gourmand connoisseurs, intimate gatherings',
    price: {
      inr: 13200,
      formatted: '₹13,200',
      volume: '100ml / 3.4 FL. OZ.',
      sizes: {
        ml50: { inr: 7800, formatted: '₹7,800' },
        ml100: { inr: 13200, formatted: '₹13,200' }
      },
      editionNote: 'Pre-Launch Preview Edition • Hand-Numbered Flacons'
    }
  }
];
