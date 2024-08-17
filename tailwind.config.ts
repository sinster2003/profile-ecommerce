import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "darkblue": "#2c3e5b",
        "headerblue": "#0e2084",
        "red": {
          "main": "#fe5a59",
          "light": "#feefe0"
        }
      }
    },
  },
  plugins: [],
};
export default config;
