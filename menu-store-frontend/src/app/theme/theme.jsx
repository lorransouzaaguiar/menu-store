import { extendTheme} from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
      global: {
        body: {
            bg: 'black',
        }
      }
  },
  fonts: {
      headig: 'Roboto',
      body: 'Roboto',
  },
  components: {
      Button: {
          baseStyle: {
              bgColor: 'white',
              _focus: {
                    boxShadow: 'none'
              },
          },
          sizes: {
              'xl': {
                  w: '40%',
                  h: '80%'
              }
          },
          variants: {
              'menu': {
                  bgColor: 'none',
                  color: 'white',
                  fontWeight: 'none',
                  _hover: {
                    bgColor: 'red',
                  },
              },
              'cart': {
                  w: 'full',
                  borderRadius: 'none',
              },
              'cart-green': {
                w: 'full',
                h:'50px',
                borderRadius:'none',
                bgColor:'green.500',
                p:'20px',
                textTransform:'uppercase',
                color:'white',
                fontWeight:'none',
              },
              'header-login': {
                  h: '80%',
                  w: '30%'
              },
              'header-logout': {
                  h: '80%',
                  w: '40%'
              },
          }
      },
      Text: {
          baseStyle: {
              color: 'white'
          }
      },
      Heading: {
          baseStyle: {
              color: 'white',
              textTransform: 'uppercase'
          },
          variants: {
              'cardItem-title': {
                  color: 'red.600',
                  fontSize: '2rem',
              }
          }
      },
    },
})

export default Theme