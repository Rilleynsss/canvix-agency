const { Roboto, DM_Sans } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["var(--roboto)"],
      dm: ["var(--dm-sans)"],
    },
    colors: {
      "light-green": "rgba(100, 204, 197, 1)",
      blk: "rgba(12, 12, 12, 1)",
      "light-black": "rgba(12, 12, 12, 0.9)",
      "light-gray": "rgba(244, 244, 244, 1)",
      "dark-gray": "rgba(223, 223, 223, 1)",
    },
    extend: {},
  },
  plugins: [],
};
