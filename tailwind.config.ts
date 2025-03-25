module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        oldStandardTT: 'var(--font-old-standard-tt)',
      },
      boxShadow: {
        'primary-500': '0 0 10px 2px rgba(37, 205, 217, 0.5)', // Updated to match #25CDD9
      },
      colors: {
        primary: {
          800: '#0F5257',
          700: '#15737A',
          600: '#1EA5AE',
          500: '#25CDD9',
          400: '#74E0E7',
          300: '#B9EFF3',
          200: '#E5F9FB',
        },
        'grey-sertis': {
          800: '#1B1D22',
          700: '#3A3F4A',
          600: '#515866',
          500: '#81899C',
          400: '#AFB4C0',
          300: '#DDDFE4',
          200: '#F4F4F6',
        },
        error: '#FF5454',
        success: '#0DCA86',
      },
      opacity: {
        32: '0.32',
      },
    },
  },
  plugins: [],
}
