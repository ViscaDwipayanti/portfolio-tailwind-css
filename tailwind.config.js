 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   darkMode: 'class',
   theme: {
   container: {
     center: true,
     padding: '16px'
   },
     extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0891b2',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      }
     },
   },
   plugins: [],
 }