"use client";

import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveAppBar from "../../../components/navbar";
import { Box, Text, ListItem, ListIcon, List, Image, Divider, defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { IoMdMusicalNote } from "react-icons/io";
import { Gochi_Hand } from 'next/font/google'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
})

const xl = defineStyle({
    border: "10px solid",
    borderRadius: 'lg',
})

export const dividerTheme = defineStyleConfig({
    sizes: { xl },
})


export default function UberMichPage() {
    return (
        <ChakraProvider>
            <ResponsiveAppBar />
            <Box sx={{ w: '100%' }} className='light'>
                <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1440px', width: '80%' }} className='light'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize='5xl'
                        align={'center'}
                    >
                        Über mich
                    </Text>

                </Box>
            </Box>
            <Box sx={{ w: '100%' }} className='dark'>
                <Box sx={{ paddingY: '2rem', display: 'flex', flexDir: 'row', width: '75%', alignItems: 'self-start' }} className='dark'>
                    <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '0.5', alignItems: 'self-start' }} className='dark'>
                        <Text
                            noOfLines={2}
                            bgGradient='linear(to-l, #7A59CA, #E6175B)'
                            bgClip='text'
                            className={gochi.className}
                            fontSize='4xl'
                            textAlign={'left'}
                            sx={{ px: "0.5rem", marginTop: "1rem" }}
                        >
                            Hallo! Ich bin Anabela
                        </Text>
                        <List p={2} fontSize="1.2em">
                            <ListItem>
                                <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                                Pianistin
                            </ListItem>
                            <ListItem>
                                <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                                Klavierlehrerin
                            </ListItem>
                            <ListItem>
                                <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                                Bachelor of Music
                            </ListItem>
                        </List>
                        <Text

                            fontSize='1.25rem'
                            align={'left'}
                            sx={{ fontcolor: "black", px: "0.5rem" }}
                        >
                            Seit 2006 unterrichte ich Klavier. Ich bin ein leidenschaftlicher Mensch, der die Musik, das Unterrichten und die Kinder sehr liebt.
                        </Text>
                    </Box>
                    <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '0.5' }} className='dark'>
                        <Image
                            boxSize='25rem'
                            src='/assets/anabela.jpg'
                            alt='Anabela'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'full'}
                            position={'relative'}
                            top={'-6rem'}
                            objectFit='contain'
                        />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ w: '100%' }} className='light'>

                <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1440px', width: '80%' }} className='light'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize='5xl'
                        align={'center'}
                    >
                        Mein Werdegang
                        
                    </Text>
                    
                    <Box sx={{ paddingY: '2rem', display: 'flex', flexDir: 'row', width: '100%', alignItems: 'self-start' }} className='light'>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '-2', alignItems: 'self-start' }} className='light'>
                            <Text
                                noOfLines={1}
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'
                                className={gochi.className}
                                fontSize='4xl'
                                textAlign={'left'}
                                sx={{ px: "0.5rem", marginTop: "1rem" }}
                            >
                                1990s
                            </Text>
                            
                        </Box>

                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '5' }} className='light'>
                            <Text
                                fontSize='1.25rem'
                                align={'left'}
                                sx={{ fontcolor: "black", px: "0.5rem" }}
                            >
                                Schon als Kind hatte ich eine besondere Beziehung zur Musik. Ich erinnere mich zum Beispiel noch daran, wie ich als kleines Kind auf einem Spielzeugklavier gespielt habe, das eigentlich ein Geschenk für meinen älteren Bruder war. Ich komponierte bereits als junge Mädchen meine eigene Musik und hatte schon immer eine Neigung zum Musizieren und zum Erlernen von Musikinstrumenten.


                            </Text>
                        </Box>
                    </Box>
                    <Box sx={{ paddingY: '2rem', display: 'flex', flexDir: 'row', width: '100%', alignItems: 'self-start' }} className='light'>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '-2', alignItems: 'self-start' }} className='light'>
                            <Text
                                noOfLines={1}
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'
                                className={gochi.className}
                                fontSize='4xl'
                                textAlign={'left'}
                                sx={{ px: "0.5rem", marginTop: "1rem" }}
                            >
                                2000s
                            </Text>
                            <Divider orientation="vertical" />
                        </Box>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '5' }} className='light'>
                            <Text
                                fontSize='1.25rem'
                                align={'left'}
                                sx={{ fontcolor: "black", px: "0.5rem" }}
                            >
                                Aus familiären Gründen konnte ich erst mit 17 Jahren ein formales Musikstudium beginnen. Für einen relativ späten Start (viele professionelle Musiker beginnen ihr Studium im Kindesalter (!)) gelang es mir jedoch, meine Karriere sehr schnell voranzutreiben.
                            </Text>
                        </Box>
                    </Box>
                    <Box sx={{ paddingY: '2rem', display: 'flex', flexDir: 'row', width: '100%', alignItems: 'self-start' }} className='light'>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '-2', alignItems: 'self-start' }} className='light'>
                            <Text
                                noOfLines={1}
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'
                                className={gochi.className}
                                fontSize='4xl'
                                textAlign={'left'}
                                sx={{ px: "0.5rem", marginTop: "1rem" }}
                            >
                                2010s
                            </Text>
                            <Divider orientation="vertical" />
                        </Box>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '5' }} className='light'>
                            <Text
                                fontSize='1.25rem'
                                align={'left'}
                                sx={{ fontcolor: "black", px: "0.5rem" }}
                            >
                                In meiner Heimatstadt Buenos Aires studierte ich von 2011 bis 2017 Musik an der Universidad Nacional de las Artes mit dem Schwerpunkt Klavier. Während dieser Zeit habe ich auch viele Konzerte in verschiedenen Konzertsälen im ganzen Land gegeben.

                                Am Ende meines Studiums habe ich mich weitergebildet. Besonders hervorzuheben ist ein einjähriger Aufenthalt in Barcelona, um bei Maestro Josep Culom zu studieren.
                            </Text>
                        </Box>
                    </Box>
                    <Box sx={{ paddingY: '2rem', display: 'flex', flexDir: 'row', width: '100%', alignItems: 'self-start' }} className='light'>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '-2', alignItems: 'self-start' }} className='light'>
                            <Text
                                noOfLines={1}
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'
                                className={gochi.className}
                                fontSize='4xl'
                                textAlign={'left'}
                                sx={{ px: "0.5rem", marginTop: "1rem" }}
                            >
                                2020s
                            </Text>
                            <Divider orientation="vertical" />
                        </Box>
                        <Box sx={{ mx: '3rem', display: 'flex', flexDir: 'column', flex: '5' }} className='light'>
                            <Text
                                fontSize='1.25rem'
                                align={'left'}
                                sx={{ fontcolor: "black", px: "0.5rem" }}
                            >
                                Im Jahr 2022 wurde meine Tochter geboren und ich entdeckte die wunderbare Welt der Mutterschaft. Zu dieser Zeit wurde mir klar, dass ich Musikunterricht für Babys und Kleinkinder wirklich beruflich machen wollte.
                            </Text>
                        </Box>
                    </Box>
                    <Text
                                fontSize='1.25rem'
                                align={'left'}
                                sx={{ fontcolor: "black", px: "0.5rem" }}
                            >
                                Was mich aber mein ganzes Leben lang am meisten geprägt hat, ist das Unterrichten. Seit meinem 19. Lebensjahr unterrichte ich Klavier und genieße es jeden Tag ein bisschen mehr. Ich habe Schüler aller Altersstufen unterrichtet und war immer fasziniert von den Gemeinsamkeiten und Unterschieden zwischen meinen jüngeren und älteren Schülern.
                            </Text>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
