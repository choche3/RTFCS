const config = {
  plugins: {
    "@tailwindcss/postcss": {
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
    },
  },
};

export default config;
