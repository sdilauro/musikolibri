"use client";

import React, { useEffect } from 'react';
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
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


export default function KonzeptPage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    useEffect(() => {
        document.title = 'Das pedagogische Konzept - Musikolibri Bochum';
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
                    marginBottom='1rem'
                    marginInline={'2rem'}
                    lineHeight={1}
                >
                    Das pedagogische Konzept
                </Text>
            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem'  textColor={'black'} id="1">
                <Flex flexDir='column' flex='0' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Box flexDir={'column'} alignItems={ 'center '} sx={{ display: 'flex' }}  className='light'>
                        <Text
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Musikolibri möchte durch Musik die gesunde körperliche und geistige Entwicklung des Kindes in einem harmonischen, liebevollen und belastbaren Familiensystem fördern.\n\n Mit der Geburt entwickelt sich die Beziehung zwischen Eltern und Kind allmählich zu einem komplexen System sozialer Beziehungen. Jedes Baby ist in seiner physischen und psychischen Konstitution einzigartig, ebenso wie die Umwelt und die sozialen Systeme, in denen es aufwächst.")}
                        </Text>
                        <Image
                            width={isSmallScreen ? '100%' : '45rem'}
                            src='/assets/konzept_1.JPG'
                            alt='konzept_1'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'2rem'}
                        />
                        <Text
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Kinder wollen die Welt für sich selbst entdecken. Musikolibri bietet dafür die richtige Umgebung, in der sie sich rundum wohl, sicher und geborgen fühlen. Die gemütliche Räumlichkeit schafft eine ausgesprochen familiäre Atmosphäre, in der sich Kinder besonders wohlfühlen. So können sich Eltern und Kinder frei entfalten, gemeinsam singen, tanzen, musizieren und Spaß haben.\n\n Ich biete eine musikalische Pädagogik an, die auf freiem Ausdruck, Kreativität und Klangexperimenten basiert und von einer musikalischen Ästhetik getragen wird, die auf dem Präsenz/Absenz von Tonalität und der Rückkehr zum Klang, der primären Quelle der Musik, beruht.")}
                        </Text>
                    </Box>
                </Flex>
            </Box>
            <Box className="dark" padding='2rem' textColor={'black'} id="2">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Box flexDir={isSmallScreen ? 'column' : 'row'} alignItems={isSmallScreen ? 'center' : 'center '} sx={{ display: 'flex'}}  className='dark'>
                        <Text
                            paddingRight={isSmallScreen ? '0rem' : '2rem'}
                            marginTop={'2rem'}
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Das Material wird sowohl aus klassischen und traditionellen deutschen Kinderliedern als auch aus Klangexperimenten entwickelt, wobei musikalische Ideen entstehen, die ständig variiert werden und neue Elemente bilden. Zeitgenössische Konzepte des Klangelements, der Idee, der kontinuierlichen Variation, der Improvisation, der Kontraste, der Überlagerungen usw. werden in den Kreationen der Kinder intuitiv angewendet.\n\n Musik wird heute als ein Grundbedürfnis des Lebens angesehen. Wenn sie Teil der kindlichen Realität ist und von klein auf als pädagogisches Mittel eingesetzt wird, kann sie die Entwicklung der kognitiven, perzeptiven und expressiven Fähigkeiten des Kindes fördern, insbesondere in Bezug auf die Muttersprache, in der das Lesen als Mittel zum Wissenserwerb eine grundlegende Rolle spielt.")}
                        </Text>
                        <Image
                            width={isSmallScreen ? '100%' : '30rem'}
                            src='/assets/konzept_2.JPG'
                            alt='konzept_2'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'2rem'}
                            top={isSmallScreen ? '0rem' :'0rem'}
                        />

                    </Box>
                </Flex>
            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' textColor={'black'} id="3">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Box flexDir={'column'} alignItems={ 'center '} sx={{ display: 'flex'}} className='light'>
                        <Text
                            marginBottom={'2rem'}
                            marginTop={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Die musikalische Erziehung in Verbindung mit spielerischen Aktivitäten motiviert die spontane Teilnahme der kleinen Mäuse, die sich zusammen mit ihren Eltern, angezogen von Rhythmen und Melodien, leichter in die Gruppe integrieren und eine positive Einstellung zum Lernen entwickeln. \n\n Die Musikerziehung ist eine aktive Methode, die auf den Grundprinzipien der ganzheitlichen Erziehung, der Integration, des Fortschritts, der Freiheit und Kreativität sowie auf ihrem spielerischen, interdisziplinären und vielseitigen Charakter beruht. Ihre drei Grundpfeiler sind der Rhythmus, der in der Musik Ordnung und Proportion bedeutet, die Melodie, eine Kombination von Tönen, die eine musikalische Idee ausdrückt, und die Harmonie, die musikalische Struktur, die Rhythmus und Melodie unterstützt.")}
                        </Text>
                        <Image
                            width={isSmallScreen ? '20rem' : '45rem'}
                            src='/assets/konzept_3.JPG'
                            alt='konzept_3'
                            fallbackSrc='https://via.placeholder.com/512'
                            borderRadius={'35px'}
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'2rem'}
                        />
                        <Text
                            marginBottom={'2rem'}
                            fontSize={isSmallScreen ? '18' : '20'}
                            className={oswald.className}>
                            {addLineBreak("Diese Aspekte sind eng mit unserem Leben verknüpft. Der Rhythmus ist mit der physiologischen Dimension verbunden, die sich in der Reaktion des Körpers auf musikalische Reize ausdrückt. Die Melodie ist mit der emotionalen Sphäre verbunden, die durch den Ausdruck von Gefühlen bei der Schaffung und Aufführung von Musik spürbar wird. Harmonie entspricht der intellektuellen Dimension, die die Entwicklung von Lesen, Schreiben, Sprechen, Gedächtnis, Phantasie, Zuhören und Lernen beeinflusst. \n\n Die musikalische Intelligenz entwickelt sich bereits in der frühen Kindheit, im Mutterleib und in der Wiege, und ist von grundlegender Bedeutung für die kognitive, psychomotorische, emotionale und soziale Entwicklung; es muss jedoch betont werden, dass sie bei jedem Kind anders ausgeprägt ist, da das Gehirn die Klangfarbe, die Intensität, den Rhythmus, die Tonhöhe, die Wahrnehmung und die Produktion von Liedern nur in dem Maße verarbeiten kann, in dem es sie erlebt und mit ihnen in Beziehung tritt, so dass die Fortschritte individuell sind.")}
                        </Text>
                    </Box>
                </Flex>
            </Box>
            

        </Box>
    )
}