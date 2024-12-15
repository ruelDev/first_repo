/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#fff',
          1: '#EEF0F4',
        },
        yellow: {
          DEFAULT: '#F6E96B',
          100: '#FCDE70',
          2: '#FCC426',
          3: '#FDD302',
          4: '#FFF6B3',
          5: '#FEE67E',
        },
        green: {
          DEFAULT: '#185519',
          100: '#387F39',
          200: '#8EC63F',
          3: '#ABE7C0',
        },
        black: {
          DEFAULT: '#000',
          1: '#241F25',
          2: '#211D0E',
        },
        brown: {
          DEFAULT: '#E8B86D',
          100: '#A0522D'
        },
        red: {
          DEFAULT: '#FF0000',
          1: '#F43A2D',
          2: '#F69E96',
        },
        purple: {
          DEFAULT: '#8A2BE2',
          1: '#C499E1',
          2: '#B413EC',
        },
        blue: {
          DEFAULT: '#0000FF',
          1: '#A5CDF3',
          2: '#00008B',
        },
      }
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}