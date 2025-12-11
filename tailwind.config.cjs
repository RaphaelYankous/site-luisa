/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lq: {
          green: '#5AAF76',
          pink: '#B9486E',
          purple: '#4C3058', // Roxo médio
          orange: '#F1B874',
          dark: '#2A1B36',   // NOVO: Um roxo mais claro e elegante (antes era #1A1025)
          surface: '#382649', // Cor para os cards (um pouco mais claro que o fundo)
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(100%)' },
          '50%': { opacity: 0.8, filter: 'brightness(120%)' },
        }
      }
    },
  },
  plugins: [],
}