"use client";

import React, { useEffect } from 'react';
import { Box, Flex, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { IoMdMusicalNote } from "react-icons/io";
import { Gochi_Hand } from 'next/font/google';
import { maxWidth } from "../config/config";

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


export default function GruppePage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    return (

        <Box>
            <Box className='light'>
                <Text
                    noOfLines={2}
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'
                    className={gochi.className}
                    fontSize={isSmallScreen ? '4xl' : '5xl'}
                    align={'center'}
                >
                    Die Workshops
                </Text>

            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' minW={'400px'} textColor={'black'} id="1">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'1200'} width={'90%'} margin={'auto'}>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>

                        Gruppe I
                    </Text>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        4 bis 18 Monate
                    </Text>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '18' : '24'}>
                        {addLineBreak("Diese Gruppe ist für Babys von 4 bis 18 Monaten geeignet. Jedes Kind sollte immer von einem Erwachsenen wie zum Beispiel Mama, Papa, Oma oder Opa begleitet werden. \n\n Musikolibri möchte Eltern und Kindern die nötigen Werkzeuge an die Hand geben, damit sie als Familie selbst Musik machen können, wo, wann und wie sie wollen. Es ist ein Raum, der dazu einlädt, eine Welt voller rhythmischer und klanglicher Möglichkeiten zu entdecken, die das aktive Lernen der Kinder durch spielerische und kreative Aktivitäten wie Singen, Tanzen und Improvisieren mit Musikinstrumenten fördert.\n\n Die Eltern bzw. die Bezungspersonen spielen eine wichtige Rolle, da sie aktiv an allen Aktivitäten teilnehmen. Auf diese Weise wird die Bindung zur kleinen Maus gestärkt und das Selbstvertrauen und Selbstwertgefühl des Kindes gesteigert.")}
                    </Text>
                    <Text
                        marginBottom={'-2.5rem'}
                        fontSize={isSmallScreen ? '18' : '24'}>
                        {addLineBreak("\n\Was braucht ihr für den Kurs?: \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '24'} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                            Eine Decke für das Baby
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Stoppersocken (wenn das Baby schon laufen kann)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Texte*
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Musikinstrumente für Kinder (Holzrassel und Klanghölzer) und einen Nylontuch**
                        </ListItem>
                        
                    </List>
                </Flex>
            </Box>
            <Box backgroundColor={'#f4e4dc'} padding='2rem' minW={'400px'} textColor={'black'} id="2">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'1200'} width={'90%'} margin={'auto'}>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        Gruppe II
                    </Text>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        19 bis 36 Monate
                    </Text>
                    <Text
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '18' : '24'}>
                        {addLineBreak("Diese Gruppe ist für Kinder von 19 bis 36 Monaten geeignet. Jedes Kind sollte immer von einem Erwachsenen wie zum Beispiel Mama, Papa, Oma oder Opa begleitet werden. \n\n Musikolibri möchte Eltern und Kindern die nötigen Werkzeuge an die Hand geben, damit sie als Familie selbst Musik machen können, wo, wann und wie sie wollen. Es ist ein Raum, der dazu einlädt, eine Welt voller rhythmischer und klanglicher Möglichkeiten zu entdecken, die das aktive Lernen der Kinder durch spielerische und kreative Aktivitäten wie Singen, Tanzen und Improvisieren mit Musikinstrumenten fördert.\n\n Die Eltern bzw. die Bezungspersonen spielen eine wichtige Rolle, da sie aktiv an allen Aktivitäten teilnehmen. Auf diese Weise wird die Bindung zur kleinen Maus gestärkt und das Selbstvertrauen und Selbstwertgefühl des Kindes gesteigert.")}
                    </Text>
                    <Text
                        marginBottom={'-2.5rem'}
                        fontSize={isSmallScreen ? '18' : '24'}>
                        {addLineBreak("\n\Was braucht ihr für den Kurs?: \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '24'} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                            Eine Decke für das Kind
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Stoppersocken
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Texte*
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Musikinstrumente für Kinder (Holzrassel und Klanghölzer) und einen Nylontuch**
                        </ListItem>
                        
                    </List>
                </Flex>
            </Box>
        </Box>


    )

}