/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      black: "#171717",
      code: {
        comment: "#708090",
        function: "#DD4A68",
        inline: "#EB5757",
        keyword: "#0077AA",
        number: "#990055",
        operator: "#9A6E3A",
        property: "#990055",
        punctuation: "#999999",
        selector: "#669900",
        string: "#669900",
        unknown: "#37352F",
        variable: "#EE9900",
      },
      gray: {
        50: "#707070",
      },
      white: "#F7F7F7",
    },
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      serif: ["PT Serif", "ui-serif", "Georgia"],
    },
  },
};
