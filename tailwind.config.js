module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./assets/albumcover01.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
      zIndex: {
        '-10': '-10',
        '60': '60'
      },
      colors: {
        'main': '#A327D6',
        'dark': '#181818',
        'darkest': '#121212',
        'light': '#282828',
        'lightest': '#B3B3B3'
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '130': '32.5rem',
        '132': '33rem',
        '136': '34rem',
        '180': '45rem',
        '200': '50rem'
      },
      width: {
        '7/10': '70%',
        '3/10': '30%',
        '180' : '45rem'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}
