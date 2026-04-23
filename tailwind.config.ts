import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a071b', // AI21 --neutral-900
        surface: '#141125', // AI21 --neutral-800
        elevated: '#2a263f', // AI21 --neutral-700
        primary: '#f0f0f1', // AI21 --white-smoke
        secondary: '#bcb8d0', // AI21 --neutral-300
        brand: {
          start: '#6e42e1', // AI21 --write-primary-normal
          end: '#f06b98', // AI21 --primary-magenta
          glow: 'rgba(110, 66, 225, 0.15)',
        },
        accent: {
          turquoise: '#5ec6e8', // AI21 --turquoise-normal
          yellow: '#f9bd64', // AI21 --yellow-normal
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 40px rgba(110, 66, 225, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config