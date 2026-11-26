/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pure: '#FFFFFF',
        porcelain: '#EAF2EE',
        platinum: '#D2E2DD',
        graphite: '#335054',
        silver: '#7B9A94',
        ivory: {
          DEFAULT: '#F6FAF9',
          50: '#FAFDFC',
          100: '#F6FAF9', // Soft pearl-teal ivory matching VK Perfume monogram
          200: '#EAF2EE', // Mist porcelain surface
          300: '#DCE9E4', // Light mist text on dark surfaces
          400: '#B8D0C8',
          500: '#7B9A94',
        },
        champagne: {
          DEFAULT: '#D2E2DD',
          light: '#EAF2EE',
          dark: '#A8C4BC',
        },
        brand: {
          navy: '#001442',       // Isolated VK Perfume Logo "PREMIUM FRAGRANCE" navy
          ocean: '#00303F',      // Deep ocean teal base
          deep: '#013E43',       // Dominant monogram deep teal
          teal: '#01706C',       // Jewel teal primary UI accent
          emerald: '#02A262',    // Monogram center emerald green
          mint: '#1AE2BD',       // Luminous emerald-aqua
          aqua: '#2CEEEC',       // Crown & K highlight aqua-cyan
          gold: '#B9B52A',       // Crown & V metallic gold
          goldDark: '#757014',   // Accessible crown gold on light
          goldLight: '#E8E26A',  // Luminous crown gold on dark
        },
        gold: {
          light: '#2CEEEC',
          DEFAULT: '#01706C',
          dark: '#013E43',
          metallic: '#B9B52A',
        },
        charcoal: {
          light: '#335054',
          DEFAULT: '#013E43',
          dark: '#001442',
        },
        botanical: {
          light: '#1AE2BD',
          DEFAULT: '#02A262',
          dark: '#016840',
        },
        brandTeal: {
          light: '#2CEEEC',
          DEFAULT: '#01706C',
          dark: '#013E43',
          deep: '#001442',
        },
        brandNavy: {
          DEFAULT: '#001442',
          dark: '#000D2B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Bodoni Moda', 'Didot', 'serif'],
        display: ['"Cormorant Garamond"', 'Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        accent: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 35px -5px rgba(0, 20, 66, 0.06), 0 0 0 1px rgba(1, 62, 67, 0.04)',
        'luxury-hover': '0 20px 45px -10px rgba(1, 112, 108, 0.14), 0 0 0 1px rgba(2, 162, 98, 0.18)',
        'gold-glow': '0 0 25px rgba(185, 181, 42, 0.28)',
        'teal-glow': '0 0 30px rgba(44, 238, 236, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 20, 66, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
