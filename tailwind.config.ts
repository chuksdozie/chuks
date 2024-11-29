import * as Colors from './src/themes/colors';

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
      },
      colors: {
        ...Colors,
      },
    },
  },
  plugins: [],
};
