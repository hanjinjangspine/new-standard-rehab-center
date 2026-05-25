import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10212B",
        muted: "#637381",
        calm: "#F4F8F7",
        line: "#E5ECEA",
        brand: {
          50: "#EFF8F5",
          100: "#D8EEE7",
          200: "#B9DED3",
          500: "#3A8C7A",
          600: "#2B7366",
          700: "#225E55",
          800: "#1B4A45",
          900: "#143B38"
        },
        accent: {
          100: "#FFF3D8",
          300: "#F5C861",
          600: "#B38319"
        }
      },
      boxShadow: {
        card: "0 18px 45px rgba(20, 59, 56, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
