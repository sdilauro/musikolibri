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
        <Box sx={{ w: '40%', paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1440px' }} width={isSmallScreen?'80%':'70%'} className='light'>
            <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize={isSmallScreen?'4xl':'5xl'}
                align={'center'}
                sx={{ paddingBottom: '2rem'}}
            >
                Danke für eure Anmeldung!
            </Text>
            <Text
                fontSize='1.25rem'
                align={'left'}
                sx={{ fontcolor: "black",  paddingBottom: '2rem' }}
                textAlign='justify'
            >
                {addLineBreak("Ich habe eure Anmeldung für den Musikworkshop eurer kleinen Maus erhalten. \n\n Eine Bestätigungsmail wurde soeben an die angegebene Adresse geschickt. (Bitte überprüft ggf. euren Spam-Ordner). \n\n Ich werde mich in Kürze mit weiteren Informationen zum Workshop bei euch melden.")}
            </Text>
            <Box sx={{display: 'flex', flex: '0.5' }} flexDir={'row'} alignItems={'center'} w={'100%'} className='light'>
                        <Image
                            width='25rem'
                            src='/assets/registration-success.png'
                            alt='Anabela'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'4'}
                            position={'relative'}
                            objectFit='contain'
                            mt={isSmallScreen?'2rem':'0rem'}
                        />
                    </Box>
        </Box>
    </Box>


    )



}