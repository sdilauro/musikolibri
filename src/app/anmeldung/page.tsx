import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";

export default function AnmeldungPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            Anmeldung
        </ChakraProvider>
  )
}
