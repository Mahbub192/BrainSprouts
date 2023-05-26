/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#87f2de",

          secondary: "#2ae07f",

          accent: "#9cdfe2",

          neutral: "#21323B",

          "base-100": "#FFFFFF",

          info: "#89A1F0",

          success: "#1B9D6D",

          warning: "#AE8C04",

          error: "#4bcbd6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
