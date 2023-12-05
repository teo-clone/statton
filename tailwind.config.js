/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['label-checked'], // you need add new variant to a property you want to extend
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
            const eClassName = e(`label-checked${separator}${className}`); // escape class
            const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
            return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ],
}
