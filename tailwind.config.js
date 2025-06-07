/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073FF', // primary blue
          600: '#005cd9',
          700: '#0045b3',
          800: '#002e8c',
          900: '#001766',
        },
        secondary: {
          50: '#e6fcfc',
          100: '#ccf9f9',
          200: '#99f3f3',
          300: '#66eced',
          400: '#33e6e7',
          500: '#00E0E1', // secondary teal
          600: '#00b4b4',
          700: '#008788',
          800: '#005b5b',
          900: '#002e2f',
        },
        accent: {
          50: '#fff2e6',
          100: '#ffe6cc',
          200: '#ffcc99',
          300: '#ffb366',
          400: '#ff9933',
          500: '#FF8000', // accent orange
          600: '#cc6600',
          700: '#994d00',
          800: '#663300',
          900: '#331a00',
        },
        success: {
          500: '#10B981', // success green
        },
        warning: {
          500: '#F59E0B', // warning yellow
        },
        error: {
          500: '#EF4444', // error red
        },
        dark: {
          100: '#383A47',
          200: '#2A2C3A',
          300: '#1E1F2D',
          400: '#13141F',
          500: '#0A0A12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 115, 255, 0.15) 1px, transparent 1px), linear-gradient(to right, rgba(0, 115, 255, 0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '32px 32px',
      },
    },
  },
  plugins: [],
};