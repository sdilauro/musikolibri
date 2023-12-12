import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";

export default function RaumlichkeitenPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            Raumlichkeiten
        </ChakraProvider>
  )
}
