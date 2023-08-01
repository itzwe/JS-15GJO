/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html","./client/**/*.js"],
  theme: {
    extend: {
      colors: {
        lionPrimary: '#8cb488',// 기본색
        lionSecondary: '#355133', // 버튼색
        lionContent: '#4f4f4f', //글자색
        lionTertiary: '#cddfcb',
        lightGreen100: '#7dab78',
        lightGreen200: '#8cb488',
        lightGreen300: '#9bbe97',
        lightGreen400: '#aac8a7',
        lightGreen500: '#b9d2b7',
        lightGreen600: '#c8dcc6',
        lightGreen700: '#d7e5d6',//가장 밝은색
        lightGray500: '#6B6B6B',
        lightGray600:'#A6A6A6',
        lightGray700: '#F9F9F9',
        darkGray: '#404040',
        lightBlue: '#AAC4FA', // 리뷰 추가
        error: '#F03F40' // 빨간색 강조
      },
      screens: {
        'xs': {min: '320px', max: '480px'},
        // => @media (min-width: 320px) { ... }
      },
      fontFamily: {
        'pretendard': ['pretendard']
      },
      backgroundImage: {
        'custom-gradient' :
        "linear-gradient(3deg, #FFF 45%, rgba(255, 255, 255, 0.00) 100%) , url('../assets/images/food/cake.svg')"
      },
    },
  },
};