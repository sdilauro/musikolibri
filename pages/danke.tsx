import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { gochi, maxWidth, oswald } from '../config/config';
import React, { useEffect } from 'react';


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
    useEffect(() => {
        document.title = 'Danke! - Musikolibri Bochum';
      }, []);
    const [isSmallScreen] = useMediaQuery(maxWidth);
    return (
        <Box sx={{ w: '100%' }} className='light'>
        <Box sx={{paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column'}} maxWidth= '600px' width={isSmallScreen?'90%':'70%'} className='light'>
            <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize={isSmallScreen?'4xl':'5xl'}
                align={'center'}
                sx={{ paddingBottom: '2rem'}}
                marginTop='5rem'
            >
                Danke für eure Anmeldung!
            </Text>
            <Text
                fontSize='1.25rem'
                align={'left'}
                sx={{ fontcolor: "black",  paddingBottom: '2rem' }}
                textAlign='justify'
                className={oswald.className}
            >
                {addLineBreak("Ich habe Eure Anmeldung für den Musikworkshop Eurer kleinen Maus erhalten. \n\n Eine Bestätigungsmail wurde soeben an die angegebene Adresse geschickt. (Bitte überprüft ggf. Euren Spam-Ordner). \n\n Ich werde mich in Kürze mit weiteren Informationen zum Workshop bei Euch melden.")}
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