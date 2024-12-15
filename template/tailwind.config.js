/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
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
        yellow: {
          DEFAULT: '#F6E96B',
          100: '#FCDE70'
        },
        green: {
          DEFAULT: '#185519',
          100: '#387F39',
          200: '#8EC63F',
        },
        black: {
          DEFAULT: '#1c1c1c',
          1: '#000',
          100: '#211D0E',
        },
        brown: {
          DEFAULT: '#E8B86D',
          100: '#A0522D'
        },
        white: {
          DEFAULT: '#fefefe',
          100: '#fff'
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