/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      height: {
        92: "92%",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
    colors: {
      black: "var(--black)",
      blue: {
        5: "var(--blue5)",
        10: "var(--blue10)",
        50: "var(--blue50)",
        5010: "var(--blue5010)",
        60: "var(--blue60)",
      },
      gray: {
        100: "var(--gray100)",
        200: "var(--gray200)",
        300: "var(--gray300)",
        400: "var(--gray400)",
        500: "var(--gray500)",
        600: "var(--gray600)",
        700: "var(--gray700)",
        800: "var(--gray800)",
        900: "var(--gray900)",
      },
      green: {
        400: "var(--green400)",
      },
      violet: {
        100: "var(--violet100)",
        200: "var(--violet200)",
        300: "var(--violet300)",
        400: "var(--violet400)",
        500: "var(--violet500)",
        600: "var(--violet600)",
        700: "var(--violet700)",
        900: "var(--violet900)",
      },
      white: "var(--white)",
    },
    fontFamily: {
      mono: ["JetBrains Mono, monospace"],
      sans: ["Inter", "ui-sans-serif", "system-ui"],
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
    boxShadow: {
      sm: "0 4px 6px 0px rgba(42, 46, 50, 0.1)",
      md: "0 8px 12px 0px rgba(42, 46, 50, 0.15)",
      lg: "0 10px 16px 0px rgba(42, 46, 50, 0.25)",
    },
    transitionTimingFunction: {
      easy: "cubic-bezier(0.7, 0.2, 0.25, 1)",
    },
  },
};
