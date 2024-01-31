/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["32px", "50px"],
      "3.5xl": ["36px", "44px"],
      "4xl": ["48px", "58px"],
      "6xl": ["60px", "68px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        mea: ["Mea Culpa", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        sofia: ["Sofia Sans Condensed", "sans-serif"],
      },
      colors: {
        primary: "#FDC6BB",
        "dark-pink": "#CE9C9C",
        "medium-pink": "#b78478",
        "soft-pink": "#F3D7D3",
        "light-pink": "##fbdcd1",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "soft-brown": "#E1B954",
        "dark-brown": "#80673A",
      },
      boxShadow: {
        "3xl": "10px 10px 10px 10px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        hero: "url('assets/images/photo_background.jpg')",
        sabana: "url('assets/images/background_sabana.jpg')",
        circulo: "url('assets/icons/circuloRosa.png')",
        banner: "url('assets/icons/banner.png')",
        agradecimiento: "url('assets/images/cover_background.jpg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
