/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "992px",
        // => @media (min-width: 1024px) { ... }
        xl: "1200px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "primary-color": "#820000", //red-color
        "primary-hover-color": "#630303",
        "secondary-color": "#D4AF37", //yellow-color
        "white-color": "#FFFFFF", //backgroud-color
        "base-100": "#FFFFFF",
        "text-color": "#222222",
        "black-color": "#000000",
        "gray-color": "#222222",
      },
    },
  },
  plugins: [],
};
