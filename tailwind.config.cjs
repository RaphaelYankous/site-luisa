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
          green: '#5AAF76',
          pink: '#B9486E',
          purple: '#4C3058',
          orange: '#F1B874',
          dark: '#0f0913',    // <--- CORRIGIDO: Agora é um preto/roxo bem profundo
          surface: '#181020', // <--- CORRIGIDO: Cartões levemente mais claros
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
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