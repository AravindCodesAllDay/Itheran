/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background-to)",
        accent: "var(--color-accent)",
        textcolor: "var(--color-text)",
      },
    },
  },
  plugins: [],
};
