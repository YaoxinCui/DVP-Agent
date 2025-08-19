/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: require('./typography'),
    extend: {
      colors: {
        gray: {
          50: '#F7F7F7', // 浅灰色
          100: '#E1E1E1', // 浅灰色
          200: '#CCCCCC', // 轻灰色
          300: '#B3B3B3', // 中灰色
          400: '#999999', // 深灰色
          500: '#666666', // 主要灰色
          700: '#333333', // 深灰色
          800: '#1A1A1A', // 更深灰色
          900: '#111111', // 几乎黑色
        },
        primary: {
          50: '#E7F4F2', // 浅色
          100: '#D0E8E1', // 浅色
          200: '#B2E1DB', // 浅色
          300: '#94D7D4', // 中等颜色
          600: '#00726C', // 主要颜色
          700: '#012D28', // 深色
        },
        blue: {
          500: '#00726C', // 使用的主要蓝色
        },
        green: {
          50: '#E7F9F7', // 浅绿色
          100: '#DEF7ED', // 浅绿色
          800: '#00726C', // 深绿色
        },
        yellow: {
          100: '#E1E0C0', // 柔和的黄色
          800: '#D6A26A', // 主要黄色
        },
        purple: {
          50: '#F9FAFA', // 浅紫色
        },
        indigo: {
          25: '#F3F8F8', // 浅蓝色
          100: '#D0EBE9', // 中等蓝色
          600: '#00726C', // 深蓝色
        },
      },
      screens: {
        mobile: '100px',
        // => @media (min-width: 100px) { ... }
        tablet: '640px', // 391
        // => @media (min-width: 600px) { ... }
        pc: '769px',
        // => @media (min-width: 769px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
