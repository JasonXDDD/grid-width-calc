/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  theme: {
    screens: {
      xs: "600px",
      sm: "900px",
      md: "1190px",
      lg: "1441px",
      xl: "1920px",
      "2xl": "2160px",
      "3xl": "2560px",
      "4xl": "3840px",
    },

    extend: {
      gridTemplateColumns: {
        7: "repeat(7,minmax(0,1fr))",
        8: "repeat(8,minmax(0,1fr))",
        9: "repeat(9,minmax(0,1fr))",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg) rotateZ(15deg)" },
          "100%": { transform: "rotateY(360deg) rotateZ(15deg)" },
        },
        flipBack: {
          "0%": { transform: "rotateY(-90deg) rotateZ(-15deg)" },
          "25%": { transform: "rotateY(-90deg) rotateZ(-15deg)" },
          "75%": { transform: "rotateY(90deg) rotateZ(-15deg)" },
          "100%": { transform: "rotateY(90deg) rotateZ(-15deg)" },
        },
      },
      animation: {
        flip: "flip 5s linear infinite",
        flipBack: "flipBack 5s linear infinite",
      },
      aspectRatio: {
        card: "635 / 889",
        cover: "4 / 3",
      },
      borderRadius: {
        card: "clamp(0.889rem,8.89%,3.556rem)/clamp(0.635rem,6.35%,2.54rem)",
      },
      colors: {
        base: "#121212",
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },
};
