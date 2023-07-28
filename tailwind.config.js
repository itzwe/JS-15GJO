/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html"],
  theme: {
    extend: {
      colors: {
        lionPrimary: '#8cb488',// 기본색
        lionSecondary: '#355133', // 버튼색
        lionContent: '#4f4f4f', //글자색
        lionTertiary: '#cddfcb',//
        liteGray:'#F9F9F9'
      },
    },
  },
  plugins: [],
};
