/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      colors: {
        primary100: '#EEE3FF',
        primary600: '#8054C7',
        primary700: '#5A3696',
        secondary600: '#63D838',
        primaryPurple: '#8B5CF6', 
        lightPurple: '#F3E8FF', 
        favoriteGreen: '#10B981',
        gray100: '#F3F4F6',
        gray100: '#E5E7EB',     
        gray500: '#6B7280',
        primariblack: '#111827',
      },
      fontFamily: {
        greycliff: ['"Greycliff CF Figma 001"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
