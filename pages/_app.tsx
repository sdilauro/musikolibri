import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import './../styles/App.css'
import ResponsiveAppBar from '../components/navbar'


function MyApp({Component, pageProps}:AppProps) {
  return(
    <ChakraProvider>
      <ResponsiveAppBar/>
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}

export default MyApp