"use client";

import { Box, Flex, Image, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { Gochi_Hand } from 'next/font/google';
import { IoMdMusicalNote } from "react-icons/io";
import DatedParagraph from "../components/dated-paragraph";
import { maxWidth } from "../config/config";
import 'public/assets/timeline.json'

const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
})

let data: {
    date: string;
    paragraph: string;
    id: number;
    im_src: string;
    im_alt: string;
}[]
const contents = require('public/assets/timeline.json');
data = contents.timeline

export default function UberMichPage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);

    return (
        <>
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
            <Flex  sx={{ w: '100%' }} className='dark'>
                <Box flexDir={isSmallScreen?'column-reverse':'row'} sx={{ paddingY: '2rem', display: 'flex', width: '75%', alignItems: 'self-start' }} className='dark'>
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
                        <List p={2} fontSize="1.25em">
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
                    <Box sx={{display: 'flex', flex: '0.5' }} flexDir={'row'} alignItems={'center'} w={'100%'} className='dark'>
                        <Image
                            width='25rem'
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
            </Flex>
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
                        Was mich bewegt
                    </Text>
                    <Text
                        fontSize='1.25rem'
                        align={'left'}
                        sx={{ fontcolor: "black", px: "0.5rem" }}
                    >
                        Was mich mein ganzes Leben lang am meisten geprägt hat, ist das Unterrichten. Seit meinem 17. Lebensjahr unterrichte ich Klavier und genieße es jeden Tag ein bisschen mehr. Ich habe Schüler aller Altersstufen unterrichtet und war immer fasziniert von den Gemeinsamkeiten und Unterschieden zwischen meinen jüngeren und älteren Schülern.
                    </Text>
                </Box>
            </Box>
            <Box sx={{ w: '100%' }} className='dark'>
                <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1440px', width: '80%' }} className='dark'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize='5xl'
                        align={'center'}
                    >
                        Mein musikalischer Weg
                    </Text>
                    {data.map((item) =>
                        <DatedParagraph date={item.date} paragraph={item.paragraph} im_src={item.im_src} im_alt={item.im_alt} key={item.id} />)}
                </Box>
            </Box>
        </>
    )
}
