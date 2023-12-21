import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";

export default function FormularPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            Anmeldung
        </ChakraProvider>
  )
}