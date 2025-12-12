/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lq: {
          green: '#5AAF76',  // Da apresentação
          pink: '#B9486E',   // Da apresentação
          purple: '#4C3058', // Da apresentação
          orange: '#F1B874', // Da apresentação
          dark: '#1A1025',   // Fundo escuro profundo
          glass: 'rgba(255, 255, 255, 0.05)', // Efeito de vidro
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}