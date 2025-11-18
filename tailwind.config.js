module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif']
      },
      colors: {
        tpp: '#f7941d',
        tppDark: '#f95f2a'
      },
      keyframes: {
        glowText: {
          '0%': { textShadow: '0 0 10px rgba(255,167,38,.7)' },
          '50%': { textShadow: '0 0 25px rgba(255,167,38,.9)' },
          '100%': { textShadow: '0 0 15px rgba(255,167,38,.7)' }
        },
        softPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' }
        }
      },
      animation: {
        glow: 'glowText 4s ease-in-out infinite',
        softPulse: 'softPulse 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
