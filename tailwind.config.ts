import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c211b",
        coffee: "#4b2917",
        sand: "#eee3d3",
        cream: "#f7f1e8",
        gold: "#d8b277"
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(40, 24, 14, .14)"
      }
    }
  },
  plugins: []
};

export default config;
