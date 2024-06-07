/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    colors: {
      black: "var(--black)",
      blue: {
        10: "var(--blue10)",
        50: "var(--blue50)",
        5010: "var(--blue5010)",
      },
      gray: {
        5: "var(--gray5)",
        10: "var(--gray10)",
        20: "var(--gray20)",
        30: "var(--gray30)",
        40: "var(--gray40)",
        50: "var(--gray50)",
        60: "var(--gray60)",
        70: "var(--gray70)",
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
    fontSize: {
      1: "14px",
      2: "16px",
      3: "18px",
      4: "20px",
      5: "24px",
      6: "32px",
      7: "40px",
      8: "48px",
      9: "56px",
    },
  },
};
