const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: [
        'Helvetica Neue',
        'Segoe UI',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Meiryo',
        'sans-serif',
      ],
      serif: ['Noto Serif JP', 'serif'],
    },
    extend: {
      // See https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: colors.indigo,
        secondary: colors.pink,
        error: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        success: colors.green,
      },
    },
  },
  variants: {},
  plugins: [],
};
