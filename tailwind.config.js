/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 this is critical
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
      },
    },
  },
  plugins: [],
}
