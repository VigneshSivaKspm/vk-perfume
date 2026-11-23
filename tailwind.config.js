/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF8F4', // Warm Ivory primary background
          200: '#F4EFE6',
          300: '#EDE7DF', // Warm Sand
          400: '#D8CEBE',
          500: '#C2B59F',
        },
        champagne: {
          DEFAULT: '#E9D9BF',
          light: '#F5ECE0',
          dark: '#D4BF9D',
        },
        gold: {
          light: '#D4BE8D',
          DEFAULT: '#B59A68', // Muted Antique Gold
          dark: '#8C7243',
          metallic: '#C8A96E',
        },
        charcoal: {
          light: '#3D3A35',
          DEFAULT: '#25231F', // Charcoal Ink
          dark: '#161513',
        },
        botanical: {
          light: '#A3B09B',
          DEFAULT: '#8E9C85', // Subtle Botanical Green
          dark: '#6E7C65',
        },
        brandTeal: {
          light: '#00C9A7',
          DEFAULT: '#009688', // Matching VK monogram teal
          dark: '#00695C',
          deep: '#044343',
        },
        brandNavy: {
          DEFAULT: '#0C2340',
          dark: '#061324',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Bodoni Moda', 'Didot', 'serif'],
        display: ['"Cormorant Garamond"', 'Italiana', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        accent: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(37, 35, 31, 0.07)',
        'luxury-hover': '0 30px 60px -12px rgba(37, 35, 31, 0.12)',
        'gold-glow': '0 0 25px rgba(181, 154, 104, 0.25)',
        'teal-glow': '0 0 30px rgba(0, 150, 136, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
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
