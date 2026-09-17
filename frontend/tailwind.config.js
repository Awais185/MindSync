/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#dce7ff',
          200: '#b9ceff',
          300: '#8babff',
          400: '#5c82ff',
          500: '#3b5bff',
          600: '#2540e6',
          700: '#1c33b8',
          800: '#182b91',
          900: '#152672',
        },
        navy: {
          900: '#0a1230',
          800: '#0d1838',
          700: '#111f45',
        },
        ink: {
          900: '#0b1020',
          700: '#1a2240',
          500: '#4a5578',
          400: '#6b7493',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(28, 51, 184, 0.15)',
        card: '0 20px 40px -20px rgba(13, 24, 56, 0.15)',
        glow: '0 0 40px rgba(59, 91, 255, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 4.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
