export interface FragranceNote {
  name: string;
  description: string;
  origin?: string;
}

export interface Fragrance {
  id: string;
  slug: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'Oud & Woody' | 'Floral Luminous' | 'Fresh Aquatic' | 'Solar Citrus' | 'Sweet Gourmand';
  mood: string;
  visualType: 'oud' | 'jasmine' | 'aquatic' | 'citrus' | 'vanilla';
  designDirection: string;
  bottle: {
    silhouette: string;
    glass: string;
    cap: string;
    detailing: string;
    base: string;
    summary: string;
  };
  environment: {
    lighting: string;
    textures: string;
    atmosphere: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    glow: string;
    bgLight: string;
    pillBg: string;
    border: string;
  };
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  story: string;
  inspiration: string;
  regionalHeritage: string;
  sensoryDescription: string;
  images: {
    ingredient: string;
    mood: string;
    botanical: string;
  };
  launchStatus: string;
  concentration: string;
  targetProfile: string;
  price: {
    inr: number;
    formatted: string;
    volume: string;
    sizes: {
      ml50: { inr: number; formatted: string };
      ml100: { inr: number; formatted: string };
    };
    editionNote?: string;
  };
}

export interface ManufacturingProcessStep {
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  standards: string;
  iconName: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Bottles' | 'Ingredients' | 'Craftsmanship' | 'Packaging' | 'Factory';
  imageUrl: string;
  caption: string;
  ratio?: 'portrait' | 'landscape' | 'square';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Manufacturing' | 'Private Label' | 'Fragrances' | 'Launch & Distribution' | 'Quality & Standards';
}
