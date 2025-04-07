/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./Shared*/**/*.{html,js}'],
    theme: {
      extend: {
        colors: {
          'nostash-blue': '#0a3b66',
          'nostash-gold': '#f4b731',
          'nostash-gold-dark': '#d29e2a',
          'nostash-gold-light': '#f9d57a',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
};
