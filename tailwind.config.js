module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'xlm': {
          max: '1280px'
        },
        'mbm': {
          max: '900px'
        },
        'xsm': {
          max: '380px'
        },
        'ttm': {
          max: '550px'
        },
        'dtm': {
            max: '450px'
          },
        'mb': '900px',
        'xs': '380px',
        'xl': '1280px',

      },
      extend: {
        colors: {
          'ts': 'rgba(0, 0, 0, 0.164)'
        }
      },
    },
    plugins: [],
  }
  