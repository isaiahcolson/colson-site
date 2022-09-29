/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      black: "var(--black)",
      gray: {
        5: "var(--gray5)",
        10: "var(--gray10)",
        20: "var(--gray20)",
        30: "var(--gray30)",
        40: "var(--gray40)",
        50: "var(--gray50)",
        60: "var(--gray60)",
        70: "var(--gray70)",
        80: "var(--gray80)",
        90: "var(--gray90)",
      },
      indigo: {
        90: "var(--indigo90)",
      },
      white: "var(--white)",
    },
    fontFamily: {
      mono: ["Roboto mono, monospace"],
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
      serif: ["PT Serif", "ui-serif", "Georgia"],
    },
  },
};
