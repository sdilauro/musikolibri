import Page from '@/app/page'
import { ChakraProvider } from '@chakra-ui/react'
import '../../styles/App.css'
 


export default function Main() {
  return (
    <ChakraProvider>
        <Page/>
    </ChakraProvider>
  )
}
