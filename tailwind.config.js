/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          100: '#ccfbef',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        furto: { DEFAULT: '#0891b2', light: '#e0f2fe', dark: '#0e7490' },
        assalto: { DEFAULT: '#d97706', light: '#fef3c7', dark: '#b45309' },
        tiroteio: { DEFAULT: '#dc2626', light: '#fee2e2', dark: '#b91c1c' },
      },
    },
  },
  plugins: [],
};
