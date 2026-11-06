export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        brand: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb' },
      },
    },
  },
  plugins: [],
}