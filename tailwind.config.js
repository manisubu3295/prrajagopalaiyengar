/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf7',
          100: '#c5d0ea',
          200: '#9fb1db',
          300: '#7892cc',
          400: '#5a7ac1',
          500: '#3c62b6',
          600: '#2d4f9e',
          700: '#1e3880',
          800: '#122263',
          900: '#0B1F4B',
          950: '#060e26',
        },
        brand: {
          blue:   '#1D4ED8',
          light:  '#3B82F6',
          gold:   '#F59E0B',
          orange: '#EA580C',
          green:  '#16A34A',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0B1F4B 0%, #1D4ED8 50%, #0B1F4B 100%)',
        'cta-gradient':  'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
      animation: {
        'float':     'float 3s ease-in-out infinite',
        'pulse-slow':'pulse 3s ease-in-out infinite',
        'bounce-slow':'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'premium': '0 20px 60px -10px rgba(11,31,75,0.3)',
        'card':    '0 4px 24px rgba(11,31,75,0.10)',
        'hover':   '0 12px 40px rgba(11,31,75,0.20)',
      },
    },
  },
  plugins: [],
}
