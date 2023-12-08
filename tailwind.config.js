const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{jsx,tsx,js,ts}'],
  theme: {
    extend: {},
    g: ({ theme }) => theme('spacing'),
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          //added to fix error - https://github.com/marklawlor/nativewind/issues/386
          g: (value) => ({
            gap: value,
          }),
        },
        { values: theme('g') },
      );
    }),
  ],
};
