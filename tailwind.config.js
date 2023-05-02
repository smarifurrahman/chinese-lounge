/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'dark': '#1A1919',
        'light-dark': '#474747',
        'gray': '#757575',
        'white': '#FFFFFF',
        'green-start': '#85B72C',
        'green-end': '#729e26',
        'pink-start': '#ff6767',
        'pink-end': '#ca5151',
        'deep-gray': '#E8E8E8',
        'deep-white': '#F4F4F4',
        'footer-dark': '#1D2228',
        'footer-white': 'rgba(255, 255, 255, 0.7)',
      },

      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },

      backgroundImage: {
        'green-gradient': 'linear-gradient(90deg, #85B72C 0%, #729e26 100%)',
        'gray-gradient': 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)',
        'deep-gray-gradient': 'linear-gradient(90deg, rgba(126, 144, 254, 0.1) 0%, rgba(152, 115, 255, 0.1) 100%)',
      },

    },
  },
  plugins: [require("daisyui")],
}

