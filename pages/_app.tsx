import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import './../styles/App.css'
import ResponsiveAppBar from '../components/navbar'
import Footer from '../components/footer'


function MyApp({Component, pageProps}:AppProps) {
  return(
    <ChakraProvider>
      <ResponsiveAppBar/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp