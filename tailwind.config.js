/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT : "#f97316",
        }, 
        secondary: {
          DEFAULT : "#F5F5F5",
          50 : "#EFF0F5",
          100 : "#F0F1F1",

        },
         
      },
    },
  },
  plugins: [],
};
