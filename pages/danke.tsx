import { Box, Flex, Image, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { Gochi_Hand } from 'next/font/google';
import { IoMdMusicalNote } from "react-icons/io";
import DatedParagraphBig from "../components/dated-paragraph-big";
import { maxWidth } from "../config/config";
import 'public/assets/timeline.json'
import DatedParagraphSmall from "../components/dated-paragraph-small";

const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
})

const addLineBreak = (str: string) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

export default function DankePage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    return (
        <Box sx={{ w: '100%' }} className='light'>
        <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1440px' }} width={isSmallScreen?'80%':'70%'} className='light'>
            <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize={isSmallScreen?'4xl':'5xl'}
                align={'center'}
            >
                Danke für deine Anmeldung!
            </Text>
            <Text
                fontSize='1.25rem'
                align={'left'}
                sx={{ fontcolor: "black" }}
                textAlign='justify'
            >
                {addLineBreak("Wir haben die Anmeldung für den Musikworkshop deiner kleinen Maus erhalten. \n\n Wir werden uns in Kürze mit dir in Verbindung setzen, um dir weitere Informationen zum Workshop zukommen zu lassen.")}
            </Text>
        </Box>
    </Box>


    )



}