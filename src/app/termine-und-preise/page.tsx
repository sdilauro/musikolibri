import { Box, ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";
import KursCard from "../../../components/kurs-card";

export default function TermineUndPreisePage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar/>
            <Box className="light" p='2rem'>
                <KursCard
                    name='Frühling'
                    startOn='Februar'
                    finishOn='März'
                    price={80}
                    imageSource='/assets/fruhling.png'
                    details={[]}
                    
                />
            </Box>
        </ChakraProvider>
  )
}
