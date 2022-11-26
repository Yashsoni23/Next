module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 15px 60px -20px rgba(0, 0, 0, 1)',
        '4xl': 'inset 0 0px 25px  rgba(59, 130, 246, .5)',
        '5xl': 'inset 0 0px 25px  #EF4444',
      },
     zIndex:{
      'z-1' :-1
     }

    },
  },
  plugins: [],

}