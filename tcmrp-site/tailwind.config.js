/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1200px' },
    },
    extend: {
      colors: {
        // Brand greens (from rendered CSS — #1d6531 dominates)
        green: {
          DEFAULT: '#1d6531',
          deep: '#004f1b',
          dark: '#0d3d1a',
          mid: '#2a7a41',
          accent: '#439d55',
          bright: '#39b54a',
        },
        // Creams / sand
        cream: { DEFAULT: '#f5f3ed', light: '#faf8f4', pale: '#fdf9e5' },
        sand: '#dad7d0',
        gold: '#b8962e',
        // Neutrals
        ink: '#0b0b0b',
        body: '#4a4a4a',
        muted: '#6b6b6b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', '"Playfair Display"', 'Georgia', 'serif'],
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
        slab: ['var(--font-roboto-slab)', '"Roboto Slab"', 'serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 10px 30px rgba(16,40,24,0.07)',
        soft: '0 4px 18px rgba(16,40,24,0.06)',
      },
      borderRadius: { card: '16px', pill: '999px' },
    },
  },
  plugins: [],
};
