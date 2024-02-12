/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: 'hsl(0deg 0% 10%)',
          300: 'hsl(0deg 0% 25%)',
          500: 'hsl(0deg 0% 50%)',
          700: 'hsl(0deg 0% 75%)',
          900: 'hsl(0deg 0% 90%)',
        },
        success: 'hsl(150deg 70% 30%)',
        warning: 'hsl(50deg 100% 30%)',
        error: 'hsl(0deg 70% 45%)',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 750ms cubic-bezier(0, 0.72, 0.24, 1.02)',
      },
    },
  },
  plugins: [],
};
