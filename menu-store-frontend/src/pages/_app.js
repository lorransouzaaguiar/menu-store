import {ChakraProvider} from '@chakra-ui/react'
import Theme from '../app/theme/theme'
import '@fontsource/roboto'

import Provider from '../app/store/store'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Provider>
          <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
