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
        background: '#0A0A0F', // AI21 Dark mode base
        surface: '#12121A',
        elevated: '#1A1A25',
        primary: '#F2F2F2',
        secondary: '#8A8A9A',
        brand: {
          start: '#7C3AED',
          end: '#C084FC',
          glow: 'rgba(124,58,237,0.15)',
        },
        gold: {
          DEFAULT: '#D4A853',
          hover: '#FCD34D',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(124,58,237,0.15)',
      },
    },
  },
  plugins: [],
}

export default config