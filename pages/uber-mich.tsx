"use client";
import React, { useEffect } from 'react';
import { Box, Flex, Image, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { gochi, maxWidth, oswald } from '../config/config';
import { IoMdMusicalNote } from "react-icons/io";
import DatedParagraphBig from "../components/dated-paragraph-big";
import 'public/assets/timeline.json'
import DatedParagraphSmall from "../components/dated-paragraph-small";

const addLineBreak = (str: string) =>
    str.split('\n').map((subStr) => {
        return (
            <>
                {subStr}
                <br />
            </>
        );
    });


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
    useEffect(() => {
        document.title = 'Über mich - Musikolibri Bochum';
      }, []);
    const [isSmallScreen] = useMediaQuery(maxWidth);

    return (
        <>
            <Box sx={{ w: '100%' }} className='light'>
                <Box marginBottom={isSmallScreen?'0':'3rem'} sx={{ paddingY: '2rem', display: 'flex', flexDir: 'column', maxWidth: '1200px', width: '80%' }} className='light'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize={isSmallScreen?'4xl':'5xl'}
                        align={'center'}
                        marginTop='3rem'
                    >
                        Über mich
                    </Text>

                </Box>
            </Box>
            <Flex  sx={{ w: '100%' }} className='dark'>
                <Box flexDir={isSmallScreen?'column':'row'} width={isSmallScreen?'90%':'70%'} sx={{ paddingY: '2rem', display: 'flex', alignItems: 'self-start', maxWidth: '1200px' }} className='dark'>
                    <Box textAlign={'left'} sx={{ display: 'flex', flexDir: 'column', flex: '0.5', alignItems: 'self-start' }} className='dark'>
                        <Text
                            noOfLines={2}
                            bgGradient='linear(to-l, #7A59CA, #E6175B)'
                            bgClip='text'
                            className={gochi.className}
                            fontSize={isSmallScreen?'4xl':'5xl'}
                            sx={{ px: "0.5rem", marginTop: "1rem" }}
                            width={'100%'}
                            textAlign={isSmallScreen ? 'center' : 'left'}
                            lineHeight={1}
                        >
                            Hallo! Ich bin Anabela
                        </Text>
                        <List p={2} fontSize={isSmallScreen ? '18' : '20'} textAlign={'left'} className={oswald.className}>
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
                            <ListItem>
                                <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                                Stud. Master Musiktherapie seit 2024
                            </ListItem>
                            
                        </List>
                        <Text
                            sx={{ fontcolor: "black", px: "0.5rem" }}
                            textAlign={'justify'}
                            className={oswald.className}
                            fontSize={isSmallScreen ? '18' : '20'}
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
                            top={isSmallScreen?'0rem':'-6rem'}
                            objectFit='contain'
                            mt={isSmallScreen?'2rem':'0rem'}
                        />
                    </Box>
                </Box>
            </Flex>
            <Box sx={{ w: '100%' }} className='light'>
                <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1200px' }} width={isSmallScreen?'90%':'70%'} className='light'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize={isSmallScreen?'4xl':'5xl'}
                        align={'center'}
                    >
                        Was mich bewegt
                    </Text>
                    <Text
                        align={'left'}
                        sx={{ fontcolor: "black" }}
                        textAlign='justify'
                        className={oswald.className}
                        fontSize={isSmallScreen ? '18' : '20'}
                    >
                         {addLineBreak("Ich widme mich der Förderung der Kreativität, der Entwicklung von Fähigkeiten, die spezifisch mit dem musikalischen Lernen verbunden sind, um die Tradition des Singens in der Familie und die ganzheitliche Entwicklung des Menschen zu bewahren.\n\n Ich empfinde große Leidenschaft und Verantwortung für meine Arbeit. Neben der geduldigen und liebevollen Zuwendung zu den Kindern suche ich nach geeigneten methodischen Strategien, um ihr Interesse zu wecken und dazu beizutragen, dass der Lehr- und Lernprozess gemeinsam mit den Eltern gelingt und zu einer bereichernden, lustigen und äußerst produktiven Erfahrung wird.")}
                    </Text>
                </Box>
            </Box>
            <Box sx={{ w: '100%' }} className='dark'>
                <Box sx={{ paddingY: '2rem', paddingBottom: '6rem', display: 'flex', flexDir: 'column', maxWidth: '1200px'}} width={isSmallScreen?'90%':'70%'} className='dark'>
                    <Text
                        noOfLines={2}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        className={gochi.className}
                        fontSize={isSmallScreen?'4xl':'5xl'}
                        align={'center'}
                    >
                        Mein musikalischer Weg
                    </Text>
                    {   isSmallScreen ? 
                        <>{data.map((item) => <DatedParagraphSmall date={item.date} paragraph={item.paragraph} im_src={item.im_src} im_alt={item.im_alt} key={item.id} />)}</> :
                        <>{data.map((item) => <DatedParagraphBig date={item.date} paragraph={item.paragraph} im_src={item.im_src} im_alt={item.im_alt} key={item.id} />)}</>
                    }
                </Box>
            </Box>
        </>
    )
}
