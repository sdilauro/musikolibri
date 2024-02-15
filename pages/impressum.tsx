import { Box, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from 'react';
import { gochi, maxWidth, oswald } from '../config/config';

const addLineBreak = (str: string) =>
    str.split('\n').map((subStr) => {
        return (
            <>
                {subStr}
                <br />
            </>
        );
    });

export default function ImpresumPage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    useEffect(() => {
        document.title = 'Impressum - Musikolibri Bochum';
    }, []);
    return (
        <Box margin={'auto'} alignItems={'center'} justifyItems={'center'}>
            <Box className='light' >
                <Text
                    noOfLines={2}
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'
                    className={gochi.className}
                    fontSize={isSmallScreen ? '4xl' : '5xl'}
                    align={'center'}
                    marginTop='5rem'
                >
                    Impressum
                </Text>

            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' minW={'400px'} textColor={'black'} id="1">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>

                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        lineHeight={1}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        Angaben gemäß § 5 TMG
                    </Text>

                    <Text
                        marginTop={'1rem'}
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Anabela Chirizola \n Klavier- und Musiklehrerin \n Weitmarer Str. 157\n 44795 Bochum")}
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        lineHeight={1}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        Kontakt
                    </Text>

                    <Text
                        marginTop={'1rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Anabela Chirizola
                    </Text>
                    <Text
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        <Link href='mailto:anabela@musikolibri.de'>
                            anabela@musikolibri.de
                        </Link>
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        lineHeight={1}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        EU-Streitschlichtung
                    </Text>
                    <Text
                        marginTop={'1rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        <Link href='https://ec.europa.eu/consumers/odr/'>
                            https://ec.europa.eu/consumers/odr/.
                        </Link>
                    </Text>
                    <Text
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Meine E-Mail-Adresse finden Sie oben im Impressum.
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        lineHeight={1}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        {addLineBreak("Verbraucherstreitbeilegung\n/Universalschlichtungsstelle")}

                    </Text>

                    <Text
                        marginTop={'1rem'}
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen
                    </Text>
                </Flex>

            </Box>
            <Box className='dark' padding='2rem' minW={'400px'} textColor={'black'} id="1">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>

                    <Text
                        marginTop={'2rem'}

                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Copyright © Anabela Chirizola. Alle Rechte vorbehalten. Das Kopieren, Vervielfältigen oder jegliche sonstige Verwendung von Bildern oder anderen Inhalten dieser Website ist ohne ausdrückliche Genehmigung nicht gestattet.
                    </Text>
                    <Text
                        marginTop={'2rem'}

                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Webdesign und -entwicklung:{<br />}
                        J.S. Di Lauro,{' '}
                        <Link href='https://sdl.ar/'>
                            https://sdl.ar/
                        </Link>{<br />}
                        S. Benito
                    </Text>
                    <Text
                        marginTop={'2rem'}

                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Fotografie:{<br />}
                        S. Benito{<br />}
                    </Text>
                </Flex>

            </Box>
        </Box>

    )
}
