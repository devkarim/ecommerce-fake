/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: 'black',
          secondary: 'white',
          'primary-focus': '#1c1c1c',
          'primary-content': 'white',
          'secondary-content': 'black',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
