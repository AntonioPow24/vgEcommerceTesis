/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text-white': '#EDEDED',
        'text-blueClient': '#505AB6',
        'textDark':'#272727',
        'textInputForm':'#636363',

        'popUpDropDown':'#171717B3',
        'categorySelected':'#54BFE1B2',
        'logOut':'#F17777',
        'skyBlueApp':'#54BFE1',

        'appBgWhite':'#EEE',
        'appBgBlack':'#282828',


        'footerBg':'#05090B',
        'bgContactHeader':'#4E57A6',
        'formContactBg':'#DDE1E2',

      },
    },

    screens: {
      'smallPhone':{'max':'350px'} ,
      // => @media (min-width: 640px) { ... }

      'bigPhone':{'max':'520px'} ,
      // => @media (min-width: 768px) { ... }

      '580':{'max':'580px'},

      '685':{'max':'685px'},

      'smallTablet':{'max':'620px'} ,


      '700':{'max':'700px'} ,

      '730':{'max':'730px'} ,

      '849':{'max':'849px'} ,

      'tablet':{'max':'820px'} ,

      'bigTablet':{'max':'950px'},

      '1000':{'max':'1000px'},

      '1070':{'max':'1070px'},

  

      'ipad':{'max':'1050px'} ,

      
      '1320':{'max':'1320px'},
      
      '1360':{'max':'1360px'},
      
      '1500':{'max':'1500px'},

      '1780':{'max':'1780px'},

      '1880':{'max':'1880px'},

      'laptop':{'max':'1480px'} ,
      // => @media (min-width: 1280px) { ... }


      'bigLaptop':{'max':'1480px'} ,
      // => @media (min-width: 1280px) { ... }
      
      'smallDesktop':{'max':'1550px'} ,
      // => @media (min-width: 1280px) { ... }

      '1570':{'max':'1570px'} ,
      // => @media (min-width: 1280px) { ... }

      

      'laptopMin':'1460px',
      'tabletMin':'850px',



      '1880tomax': {'min': '1880px', 'max': '1920px'},
      '1580to1880': {'min': '1500px', 'max': '1880px'},
      '1500to1650': {'min': '1500px', 'max': '1650px'},
      '849to1480': {'min': '849px', 'max': '1480px'},
      '730to1500': {'min': '730px', 'max': '1500px'},
    }
  },
  plugins: [],
}
