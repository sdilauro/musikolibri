import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";
import GruppeRow from "../../../components/gruppe-row";

export default function AnmeldungPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            <GruppeRow
                name='Frühling - Gruppe I' schedule={'15:30 - 16:30'} days={"01.02., 08.02., 15.02., 22.02., 29.02., 07.03., 14.03., 21.03."} color={"dark"} id={1}
            />
        </ChakraProvider>
  )
}

