import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import './../styles/App.css'
import ResponsiveAppBar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'


function MyApp({Component, pageProps}:AppProps) {
  return(
    <ChakraProvider>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Flex minH={'100vh'} flexDir={'column'}>
        <ResponsiveAppBar />
          <Box flex={1} alignContent={'center'}>
            <Component {...pageProps} />
          </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp