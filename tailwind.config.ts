import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        grotesk: ['var(--font-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF3366',
          dark: '#E61E4D',
        },
        secondary: {
          DEFAULT: '#00F5FF',
          dark: '#00D4E0',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFC107',
        },
        background: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-y2k': 'linear-gradient(45deg, #FF3366 0%, #00F5FF 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #FF3366, 0 0 20px #FF3366, 0 0 30px #FF3366' },
          '100%': { textShadow: '0 0 20px #00F5FF, 0 0 30px #00F5FF, 0 0 40px #00F5FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 