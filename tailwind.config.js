/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      maxWidth: {
        content: '1440px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000321',
        'grey-light': '#F9F9F9',
        background: '#FCFDFF',
        sidebar: '#EEF1FF',
        border: '#EFF0F3',
        tag: '#ECECEE',
        muted: '#8A8B91',
        primary: '#4638E0',
        'primary-dark': '#3B2FC4',
        'logo-from': '#6D2CF0',
        'logo-to': '#FB04FA',
      },
    },
  },
  plugins: [],
}
