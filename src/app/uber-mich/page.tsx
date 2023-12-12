import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";

export default function UberMichPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            Uber Mich
        </ChakraProvider>
  )
}
