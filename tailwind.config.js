/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "poppins": ['Poppins', 'sans-serif'] ,
        "lato": ['Lato', 'sans-serif'] 
    } 
    },
    colors: {
      'white': '#ffffff',
      'orange': '#EF7B3E',
      'light-orange': '#EF7E43',
      'orange-hover': '#ea580c',
      'metal': '#313131',
      'silver': '#2E2E2E',
      'light-silver': '#050505',
      'light-silver1': '#515151',

    },
  },
  plugins: [],
}

