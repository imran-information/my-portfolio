/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'minBg': '#1b1f24',
      'white': '#ffffff',
      'dressTxt': '#ffffff',
      'secondBg': '#22282f',
    },
    fontFamily: {
      serif: '"Sora", serif'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

