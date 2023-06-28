/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true, 
      padding : '16px',
    },
    extend: {
      colors: {
        primary : '#9f1239',
        dark : '#1e293b',
        coba : '#b91c1c',
        abu : '#374151',
        merah2: '#ef4444',
        secondary : '#1d4ed8',
        merah3: '#6e0f2c',
        puth: '#cbd5e1'
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
