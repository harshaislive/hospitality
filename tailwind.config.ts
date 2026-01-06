import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-earth': '#342e29',
        'rich-red': '#86312b',
        'forest-green': '#344736',
        'deep-blue': '#002140',
        'dark-brown': '#4b3c35',
        'warm-yellow': '#ffc083',
        'soft-green': '#b8dc99',
        'soft-gray': '#e7e4df',
        'off-white': '#fdfbf7',
        'light-blue': '#b0ddf1',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
