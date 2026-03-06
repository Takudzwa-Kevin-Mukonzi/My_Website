module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1f1f38",
        "bg-variant": "#2c2c6c",
        primary: "#4db5ff",
        "primary-variant": "rgba(77, 181, 255, 0.4)",
        light: "rgba(255, 255, 255, 0.6)",
        white: "#ffffff"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};