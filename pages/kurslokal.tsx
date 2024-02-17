"use client";

import React, { useEffect } from 'react';
import { Box, Flex, Image, List, ListIcon, ListItem, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { gochi, maxWidth, oswald } from '../config/config';
import { FaBus, FaCar, FaWalking } from "react-icons/fa";
import { FaTrainTram } from "react-icons/fa6";

const addLineBreak = (str: string) =>
    str.split('\n').map((subStr) => {
        return (
            <>
                {subStr}
                <br />
            </>
        );
    });

const AddressMap = (isSmallScreen: boolean) => {

    return (
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4969.650409007211!2d7.207733292043167!3d51.47972269347484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e06b8d65e331%3A0x4b4c2f2bead4ffe0!2sAnnastra%C3%9Fe%2027%2C%2044793%20Bochum!5e0!3m2!1ses-419!2sde!4v1708013226670!5m2!1ses-419!2sde"
                width={isSmallScreen ? "200%" : "600"}
                height={isSmallScreen ? "300" : "400"}
                style={{ border: 0 }}

                aria-hidden="false"
            />
        </div>
    );
};
export { AddressMap };


export default function KonzeptPage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    useEffect(() => {
        document.title = 'Kurslokal - Musikolibri Bochum';
    }, []);
    return (

        <Box>
            <Box className='light' >
                <Text
                    noOfLines={2}
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'
                    className={gochi.className}
                    fontSize={isSmallScreen ? '4xl' : '5xl'}
                    align={'center'}
                    marginTop='6rem'
                    lineHeight={1}
                    marginInline={'2rem'}
                    paddingBottom= '2rem'
                >
                    Kurslokal im Herzen von Bochum
                </Text>
            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' textColor={'black'} id="1">
                <Flex flexDir='column' flex='0' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>

                    <Text
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Die Musikkurse von Musikolibri finden in den Räumlichkeiten der kreativen Tagespflege Mondgesicht statt. Zur Verfügung steht der Hauptraum, der genügend Platz für musikalischen Spaß und Bewegung bietet. Es gibt einen separaten Wickelraum mit Treppe zum Wickeltisch. Für die Größeren gibt es eine Toilette mit Kindersitz.\n\n Das Kurslokal befindet sich im Herzen von Bochum. Die Adresse lautet Annastraße 27, 44793 Bochum")}
                    </Text>
                    <Box className='light' width={isSmallScreen ? '50%' : '100%'}>
                        {AddressMap(isSmallScreen)}
                    </Box>
                    <Text
                        marginTop={'2rem'}
                        marginBottom={'1rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Anreise:")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '20'} className={oswald.className} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={FaWalking} color='#E6175B' />
                            Zehn Minuten Fußweg vom Rathaus Bochum
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaBus} color='#E6175B' />
                            Linen 345/355, Haltestelle Bochum Sportplatz Papenholz
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaTrainTram} color="#E6175B" />
                            Linien 302/305, Haltestelle Bochumer Verein/Jahrhunderthalle
                        </ListItem>
                        <ListItem>
                            <ListIcon as={FaCar} color="#E6175B" />
                            Ausreichende Parkmöglichkeiten sind in der näheren Umgebung vorhanden.
                        </ListItem>


                    </List>

                </Flex>
            </Box>
            <Box className="dark" padding='2rem' textColor={'black'} id="2">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Box flexDir={'column'} alignItems={isSmallScreen ? 'center' : 'center '} sx={{ display: 'flex' }} className='dark'>
                        <Tooltip hasArrow label='Spielbereich und einige Musikinstrumente' fontSize='md'>
                            <Image
                                width={isSmallScreen ? '100%' : '30rem'}
                                src='/assets/kursort_1.JPG'
                                alt='kursort_1'
                                fallbackSrc='https://via.placeholder.com/512'
                                borderRadius={'35px'}
                                position={'relative'}
                                objectFit='contain'
                                marginBottom={'2rem'}
                                top={isSmallScreen ? '0rem' : '0rem'}
                            />
                        </Tooltip>
                        <Tooltip hasArrow label='Küche und Waschbecken' fontSize='md'>
                        <Image
                            width={isSmallScreen ? '100%' : '45rem'}
                            src='/assets/kursort_2.JPG'
                            alt='kursort_2'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'2rem'}
                            top={isSmallScreen ? '0rem' : '0rem'}
                        />
                        </Tooltip>
                        <Tooltip hasArrow label='Wickelbereich' fontSize='md'>
                        <Image
                            width={isSmallScreen ? '100%' : '30rem'}
                            src='/assets/kursort_3.JPG'
                            alt='kursort_3'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'2rem'}
                            top={isSmallScreen ? '0rem' : '0rem'}
                        />
                        </Tooltip>
                    </Box>
                </Flex>
            </Box>



        </Box>
    )
}