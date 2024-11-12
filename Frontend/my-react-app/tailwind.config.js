/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '10vh': '10vh',
        '20vh': '20vh',
        '50vh': '50vh',
        '75vh': '75vh',
        '90vh': '90vh',
        '100vh': '100vh', // full viewport height
      },
      width: {
        '10vw': '10vw',
        '20vw': '20vw',
        '50vw': '50vw',
        '75vw': '75vw',
        '90vw': '90vw',
        '100vw': '100vw', 
      },
      fontSize: {
        '2.5xl': '1.75rem', // Customize this value as needed
      },
    },
  },
  plugins: [],
}