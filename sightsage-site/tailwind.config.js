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
        // Brand purple (from rendered CSS — #533178 dominates)
        brand: {
          DEFAULT: '#533178',
          dark: '#3f2560',
          light: '#ede9f1',
          tint: 'rgba(83,49,120,0.1)',
        },
        gold: '#f4a400',
        ink: '#000000',
        body: '#3a3a3a',
        muted: '#6b6b6b',
        success: { DEFAULT: '#518b22', text: '#366d12' },
        error: '#be2119',
        cream: '#faf7f2',
        sand: '#f2ede6',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', '"Nunito Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        head: ['var(--font-cabin)', 'Cabin', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1200px' },
      boxShadow: {
        card: '0 10px 30px rgba(40,24,60,0.08)',
        soft: '0 4px 18px rgba(40,24,60,0.06)',
      },
      borderRadius: { card: '24px', pill: '999px' },
    },
  },
  plugins: [],
};
