module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      primary: {
        0: '#FFFFFF',
        200: '#C2C2C2',
        400: '#56575A',
        500: '#4B4B4B',
        600: '#363636',
        800: '#2A2A2B',
        1000: '#0D0D0D',
      },
      secondary: {
        light: '#00FF00',
        dark: '#068506',
      },
    },
    fontSize: {
      h1: ['48px', { lineHeight: 'normal' }],
      h2: ['36px', { lineHeight: 'normal' }],
      h3: ['30px', { lineHeight: 'normal' }],
      h4: ['24px', { lineHeight: 'normal' }],
      subtitle: ['20px', { lineHeight: 'normal' }],
      button: ['18px', { lineHeight: 'normal' }],
      p1: ['16px', { lineHeight: 'normal' }],
      p2: ['12px', { lineHeight: 'normal' }],
    },
    fontFamily: {
      epilogue: ['Epilogue'],
    },
    dropShadow: {
      neon: '0px 0px 10px #00FF01',
    },
    extend: {},
  },
  plugins: [],
};
