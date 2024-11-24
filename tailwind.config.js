module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      body1: [
        '14px',
        {
          lineHeight: '22.4px',
          fontWeight: '400',
        },
      ],
      body2: [
        '12px',
        {
          lineHeight: '20.4px',
          fontWeight: '400',
        },
      ],
      title1: [
        '26px',
        {
          lineHeight: '28px',
          fontWeight: '600',
        },
      ],
      title2: [
        '20px',
        {
          lineHeight: '24px',
          fontWeight: '600',
        },
      ],
      title3: [
        '17px',
        {
          lineHeight: '22px',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      colors: {
        white: '#FFF',
        divider: '#DCDEE3',
        mediumGray: '#EBEBEB',
        opacityGray: '#F8F8F8',
        darkGray: '#E1E1E1',
        deepGray: '#989898',
      },
      extend: {
        opacity: ['disabled'],
      },
    },
  },
  plugins: [],
};
