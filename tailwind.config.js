/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'var(--font-familjen-grotesk)',
        sans: 'var(--font-nunito)'
      },
      keyframes: {
        enterFromUp: {
          from: { opacity: 0, transform: 'translatey(200px)' },
          to: { opacity: 1, transform: 'translatey(0)' },
        },
      },
      animation: {
        enterFromUp: 'enterFromUp 250ms ease',
      },
      colors: {
        pink: {
          100: '#f3e2e6',
          200: '#F3E2E6',
          300: '#F0AAB4',
          400: '#FF738C',
          500: '#FE2B8F',
          600: '#FF4478',
          700: '#C8195A',
          800: '#78003C',
          900: '#3C2D37',
        },
      },
      blur: {
        full: '200px',
      },
    },
  },
  plugins: [],
}
