/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lq: {
          green: '#22c55e', // Verde mais elétrico (Neon Green)
          greenDark: '#15803d',
          pink: '#ec4899',   // Rosa mais vibrante
          purple: '#8b5cf6', // Roxo mais digital/moderno
          dark: '#050505',   // Preto quase absoluto para contraste
          surface: '#121212', // Superfície levemente mais clara
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(5, 5, 5, 0) 50%)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Certifique-se de usar uma fonte moderna como Inter ou Plus Jakarta Sans
      }
    },
  },
  plugins: [],
}