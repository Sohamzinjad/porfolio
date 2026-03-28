import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#f3efe8",
        sand: "#e4ddd1",
        line: "rgba(17, 17, 17, 0.12)"
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica Neue", "Nimbus Sans", "sans-serif"],
        display: ["Arial Narrow", "Avenir Next Condensed", "Helvetica Neue", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"]
      },
      boxShadow: {
        panel: "0 30px 80px rgba(17, 17, 17, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
