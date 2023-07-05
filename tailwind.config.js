/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-hr-4.png')",
      },
      fontFamily: {
        title: 'var(--font-familjen-grotesk), font-mono',
        sans: 'var(--font-nunito)',
      },
      keyframes: {
        enterFromUp: {
          from: { opacity: 0, transform: 'translatey(200px)' },
          to: { opacity: 1, transform: 'translatey(0)' },
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        dropMenu: {
          from: { height: 0 },
          to: { height: 'var(--radix-navigation-menu-viewport-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },

        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },

        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

        // Accordion
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        enterFromUp: 'enterFromUp 250ms ease',
        slideDown: 'slideDown 300ms ease-out',
        slideUp: 'slideUp 300ms ease-out',
        dropMenu: 'dropMenu 300ms ease-out',

        scaleIn: 'scaleIn 300ms ease',
        scaleOut: 'scaleOut 200ms ease',

        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',

        // Accordion
        'accordion-down': 'accordion-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        'accordion-up': 'accordion-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
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
