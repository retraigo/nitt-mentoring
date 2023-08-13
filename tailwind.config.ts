import type { Config } from "tailwindcss";
const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        nitMaroon: {
          950: "#0f0401",
          900: "#1e0901",
          850: "#2d0d02",
          800: "#3c1103",
          750: "#4b1604",
          700: "#5a1a04",
          650: "#691e05",
          600: "#782206",
          550: "#872706",
          500: "#962b07",
          450: "#a14020",
          400: "#ab5539",
          350: "#b66b51",
          300: "#c0806a",
          250: "#cb9583",
          200: "#d5aa9c",
          160: "#e0bfb5",
          100: "#ead5cd",
          50: "#f5eae6",
        },
      },
    },
  },
};
export default config;
