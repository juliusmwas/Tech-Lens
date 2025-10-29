// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables dark mode via class
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // important for purging unused styles
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
}
