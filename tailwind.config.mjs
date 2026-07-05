/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        dt: {
          950: '#060D18',
          900: '#0B1522',
          800: '#111E2D',
          700: '#172741',
        },
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      letterSpacing: {
        'label': '0.18em',
        'display': '-0.03em',
      },
    },
  },
  plugins: [],
};
