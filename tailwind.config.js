/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-courgette)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          neutral: '#DCDCDC',
          primary: '#BE4B92',
          'primary-focus': '#C765A2',
          'primary-content': '#ffffff',
          'neutral-content': '#000000',
          accent: '#000000',
          'accent-content': '#ffffff',
          'accent-focus': '#373737',
          'base-100': '#EDEDED',
          'base-200': '#DCDCDC',
          'base-300': '#CBCBCB',
          error: '#FF0000',
          'error-content': '#ffffff',
          info: '#ffffff',
          'info-content': '#000000',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          neutral: '#20373D',
          'neutral-focus': '#2A4850',
          primary: '#B44188',
          accent: '#ffffff',
          'accent-content': '#000000',
          'accent-focus': '#DEDEDE',
          'base-100': '#152428',
          'base-200': '#142125',
          'base-300': '#121F22',
          'base-content': '#DBDBDB',
          error: '#FF0000',
          'error-content': '#ffffff',
          info: '#ffffff',
          'info-content': '#000000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
