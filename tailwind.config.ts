import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#11110f',
        paper: '#f1f0ea',
        signal: '#d95436'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace']
      }
    }
  },
  plugins: []
} satisfies Config;
