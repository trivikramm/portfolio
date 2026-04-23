import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        elevated: 'var(--elevated)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        brand: {
          dark: 'var(--brand-dark)',
          normal: 'var(--brand-normal)',
          light: 'var(--brand-light)',
        },
        accent: {
          turquoise: 'var(--accent-turquoise)',
          yellow: 'var(--accent-yellow)',
        },
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config