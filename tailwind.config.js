/** @type {import('tailwindcss').Config} */
const animate = require('tailwindcss-animate');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#6F9DE2',
        purple: '#9871F3',
        danger: '#F05D6C',
        gray: {
          100: '#DAE4F2',
          200: '#C8D0DA',
          300: '#95A1B1',
          400: '#6F7D90',
          500: '#2A313C',
          600: '#21252C',
          700: '#191D24',
          800: '#13161B',
          900: '#0F1216',
        },
      },
      fontFamily: {
        heading: 'var(--font-oxanium)',
        sans: 'var(--font-montserrat)',
      },
      borderRadius: {
        xl: '0.625rem',
      },
      animation: {
        dance: 'dance 3s infinite ease-in-out',
      },
      keyframes: {
        dance: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-15px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '75%': {
            transform: 'translateY(-15px)',
          },
        },
      },
    },
  },
  plugins: [animate],
};