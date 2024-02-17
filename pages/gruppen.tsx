"use client";

import React, { useEffect } from 'react';
import { Box, Flex, Image, List, ListIcon, ListItem, Text, useMediaQuery } from "@chakra-ui/react";
import { IoMdMusicalNote } from "react-icons/io";
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


export default function GruppePage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    useEffect(() => {
        document.title = 'Die Gruppen - Musikolibri Bochum';
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
                    marginTop='5rem'
                >
                    Die Gruppen
                </Text>

            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' textColor={'black'} id="1">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
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
                        bgClip='text'
                        paddingBottom={'1rem'}>
                        4 bis 18 Monate
                    </Text>
                    <Box flexDir={isSmallScreen ? 'column' : 'column'} alignItems={isSmallScreen ? 'center' : 'center '} sx={{ display: 'flex', width: '100%'  }} className='light'>
                        <Text
                            paddingRight='3rem'
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Dies ist eine Gruppe für die Kleinsten und ihren Eltern, die gemeinsam mit den Kindern musizieren. \n\n Schon im Mutterleib gewöhnt sich das Baby an den Herzschlag und die Stimme der Mutter. Je älter das Baby wird, desto mehr nimmt es die Geräusche seiner Umgebung wahr. Sie hören Musik und werden, ohne es zu merken, musikalisch geboren. Rhythmus und Melodie werden uns schon vor der Geburt in die Wiege gelegt und begleiten uns ein Leben lang. Deshalb kann Musik eine so große Wirkung auf Kinder und ihre Gefühle haben. \n\n Während des Kurses werdet Ihr sehen und fühlen, wie Eure kleine Maus auf Musik reagiert. Ihr erlernt und/oder erweitert Euer Repertoire, um Euer Baby mit verschiedenen Liedern zum Entspannen, Aktivieren, Lachen und Genießen einzuladen.\n\n Kinder lernen durch Imitation, und wenn sie sehen, dass Ihre Eltern aktiv sind und Spaß an der Bewegung haben, motiviert das sie, selbst Musik zu machen und sich zu bewegen. Auf diese Weise wird die Bindung zur kleinen Maus gestärkt und das Selbstvertrauen und Selbstwertgefühl des Kindes gesteigert.")}
                        </Text>
                        <Image
                            width='35rem'
                            src='/assets/gruppe_i_description.JPG'
                            alt='Piano'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                        />
                    </Box>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        lineHeight={1}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        marginBottom={'-1.5rem'}>
                        {addLineBreak("\n\Zu den Aktivitäten gehören, unter anderem: \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '20'} className={oswald.className} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                            Lieder zur körperlichen Bindung des Babys
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Lieder zur Körpererfahrung
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Kniereiter
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Fingerspiele
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Tanzen und Bewegen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Schaukeln
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Singen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Echospiele
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Instrumenten spielen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Musik hören
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Improvisation
                        </ListItem>

                    </List>
                    <Text
                        lineHeight={1}
                        marginBottom={'-1.5rem'}
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        {addLineBreak("\n\Was braucht Ihr für den Kurs? \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '20'} className={oswald.className} textAlign={'left'}>
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
                            Musikinstrumente für Kinder (Holzrassel, Klanghölzer und Glöckchen) und einen Tanztuch**
                        </ListItem>

                    </List>
                    <Text
                    marginTop={'1rem'}
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("* Nach der Anmeldung erhaltet Ihr per E-Mail die Texte der Lieder, die wir im Kurs gemeinsam singen werden. \n ** Wenn ihr diese Instrumente nicht zu Hause habt, gebe ich Euch gerne Tipps, wo Ihr sie kaufen könnt.")}
                    </Text>
                </Flex>

            </Box>
            <Box backgroundColor={'#f4e4dc'} padding='2rem' textColor={'black'} id="2">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
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
                        bgClip='text'
                        paddingBottom={'1rem'}>
                        19 bis 36 Monate
                    </Text>
                    <Box flexDir={isSmallScreen ? 'column' : 'column'} alignItems={isSmallScreen ? 'center' : 'center '} sx={{ display: 'flex', width: '100%'  }} className='dark'>
                        <Text
                            paddingRight='3rem'
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Dies ist eine Gruppe für Kleinkinder von 19 bis 36 Monaten und ihren Eltern, die gemeinsam mit den Kindern musizieren. \n\n Schon das Musikhören fördert die Entwicklung des Gehirns. Noch mehr aber fördert es Säuglinge und Kleinkinder, wenn sie selbst musizieren oder Bewegungsspiele mit Rasseln oder Klanghölzern machen. Denn dabei werden nicht nur die Feinmotorik (z.B. Greifen und Drücken von Gegenständen), sondern auch sprachliche und mathematische Fähigkeiten (z.B. beim Zählen von Takten) sowie die Kreativität gefordert - mehrere Gehirnbereiche werden gleichzeitig beansprucht. \n\n Wenn kleine Kinder spielerisch mit anderen interagieren, werden die positiven Effekte des Musikhörens noch verstärkt. Auch Persönlichkeitsmerkmale wie Freundlichkeit und Kooperationsbereitschaft werden auf diese Weise unterstützt.\n\n Dieser Kurs bietet Aktivitäten, die dem Alter und den Bedürfnissen der Kinder angepasst sind, um ihre Entwicklung zu fördern und einen Raum des Vertrauens zu schaffen, in dem Bindungen gestärkt werden. Singen und Tanzen, Orff-Instrumente und bunte Tücher, Musikhören und Improvisation begleiten uns durch diese magische musikalische Erfahrung.\n\n Imitation ist für das Lernen von Kindern von grundlegender Bedeutung, und wenn Kinder sehen, dass ihre Eltern aktiv sind und Freude an Bewegung und Musik haben, motiviert sie das, ebenfalls aktiv zu sein. Dies stärkt die Bindung zum Kind und steigert sein Selbstvertrauen und Selbstwertgefühl.")}
                        </Text>
                        <Image
                            width='25rem'
                            src='/assets/gruppe_ii_description.JPG'
                            alt='Piano'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                        />
                    </Box>
                    <Text
                        lineHeight={1}
                        marginBottom={'-1.5rem'}
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        {addLineBreak("\n\Zu den Aktivitäten gehören, unter anderem: \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '20'} className={oswald.className} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                            Lieder zur körperlichen Bindung des Kindes
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Lieder zur Körpererfahrung
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Kniereiter
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Fingerspiele
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Tanzen und Bewegen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Singen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Echospiele
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Instrumenten spielen
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Musik hören
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            Improvisation
                        </ListItem>

                    </List>
                    <Text
                        lineHeight={1}
                        marginBottom={'-1.5rem'}
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        {addLineBreak("\n\Was braucht Ihr für den Kurs? \n")}
                    </Text>
                    <List p={2} fontSize={isSmallScreen ? '18' : '20'} className={oswald.className} textAlign={'left'}>
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
                            Musikinstrumente für Kinder (Holzrassel, Klanghölzer und Glöckchen) und einen Tanztuch**
                        </ListItem>

                    </List>
                    <Text
                    marginTop={'1rem'}
                        marginBottom={'-0.5rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("* Nach der Anmeldung erhaltet Ihr per E-Mail die Texte der Lieder, die wir im Kurs gemeinsam singen werden. \n ** Wenn ihr diese Instrumente nicht zu Hause habt, gebe ich Euch gerne Tipps, wo Ihr sie kaufen könnt.")}
                    </Text>               </Flex>
            </Box>
        </Box>


    )

}