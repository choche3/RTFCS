import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f172a",
        steel: "#6b7280",
        industrial: "#facc15",
      },
      letterSpacing: {
        wideHeavy: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;