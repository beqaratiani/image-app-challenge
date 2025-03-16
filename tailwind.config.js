/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        secondary: 'rgba(var(--secondary))',
        secondary: 'rgba(var(--secondary))',
        background: 'rgba(var(--background))',
        authBackground: 'rgba(var(--authBackground))',
        headerBg: 'rgba(var(--headerBg))',
        border: 'rgba(var(--border))',
        hover: 'rgba(var(--hover))',
        errorText: 'rgba(var(--errorText))',
        errorSubtitle: 'rgba(var(--errorSubtitle))',
        buttonBg: 'rgba(var(--buttonBg))',
        buttonText: 'rgba(var(--buttonText))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
