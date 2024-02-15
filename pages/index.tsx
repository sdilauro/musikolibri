import React, { useEffect } from 'react';
import { Box, Button, Flex, Image, Link, List, ListIcon, ListItem, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { gochi, maxWidth, oswald } from '../config/config';
import AlterCard from "../components/alter-card";
import { IoMdMusicalNote } from "react-icons/io";

const addLineBreak = (str: string) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

export default function HomePage() {
  const [isSmallScreen] = useMediaQuery(maxWidth);
  useEffect(() => {
    document.title = 'Musikolibri Bochum';
  }, []);
  return (
    <>
      <Box sx={{ w: '100%' }} className='light'>
        <Box className='content-size'>
          <Box sx={{ paddingY: '2rem', paddingBottom: '9rem', display: 'flex', flexDir: 'column', width: '100%' }} className='light'>
            <Text
              noOfLines={2}
              bgGradient='linear(to-l, #7A59CA, #E6175B)'
              bgClip='text'
              className={gochi.className}
              fontSize='5xl'
              align={'center'}
              sx={{ marginBottom: "-2rem", marginTop: "3rem" }}
            >
              Gemeinsam muzisieren,
            </Text>
            <Text
              noOfLines={2}
              bgGradient='linear(to-l, #7A59CA, #E6175B)'
              bgClip='text'
              className={gochi.className}
              fontSize='5xl'
              align={'center'}
            >
              gemeinsam wachsen
            </Text>
            <Text
              className={oswald.className}
              fontSize='2xl'
              align={'center'}
              sx={{ fontcolor: "black" }}

            >
              Entdecke, wie Musik die Entwicklung deines Kindes fördern kann.
            </Text>
            <Stack direction='row' spacing={4} display={'flex'} justifyContent={'center'} marginY={'1rem'}>
            <Link style={{ textDecoration: 'none' }} href={'/konzept'}>
              <Button
                colorScheme='purple'
                variant='outline'
                borderRadius={"1.5rem"}
                height={"3rem"}
                className={gochi.className}
                fontSize={'22px'}
                fontWeight={400}>
                Mehr Erfahren
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} href={'/anmeldung'}>
              <Button
                colorScheme='purple'
                variant='solid'
                borderRadius={"1.5rem"}
                height={"3rem"}
                className={gochi.className}
                fontSize={'22px'}
                fontWeight={400}>
                Jetzt Anmelden
              </Button>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box sx={{ w: '100%' }} className='dark' justifyContent={'space-between'}>
        <Box className='content-size'>
          <Box flexDir={isSmallScreen ? 'column' : 'row'} alignItems={isSmallScreen ? 'center' : 'self-start'} sx={{ display: 'flex', width: '100%'  }} marginInline={'2rem'} className='dark'>
            <Box sx={{ display: 'flex', flexDir: 'column', flex: '0.5', alignItems: 'self-start' }} className='dark'>
              <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize='4xl'
                textAlign={'left'}
                sx={{ px: "0.5rem", marginTop: "1rem" }}
              >
                Die Musikkurse in Bochum
              </Text>
              <Text
                className={oswald.className}
                fontSize={isSmallScreen ? '18' : '20'}
                align={'left'}
                sx={{ fontcolor: "black", px: "0.5rem" }}

              >
                {addLineBreak("Musikolibri lädt Dich ein, deine kleine Maus bei ihren ersten Schritten in die Welt der Klänge, Rhythmen, Harmonien und Melodien zu begleiten und gemeinsam, Hand in Hand, einen wunderbaren musikalischen Weg zu entdecken. \n\n Mit den Musikolibri-Kursen kann die Musik\n")}
                
              </Text>
              <List p={2} className={oswald.className} fontSize={isSmallScreen ? '18' : '20'} textAlign={'left'}>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color='#E6175B' />
                            die kognitive und motorische Entwicklung des Kindes fördern.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            die Bindung zwischen Kind und Eltern stärken.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMdMusicalNote} color="#E6175B" />
                            viel Spaß machen und Freude bereiten. 
                        </ListItem>

                    </List>
            </Box>
            <Box sx={{ display: 'flex', flexDir: 'column', flex: '0.5', alignItems: 'self-end' }} className='dark'>
              {isSmallScreen &&
                <Image
                  marginTop='1rem'
                  width='30rem'
                  src='/assets/main_image.jpg'
                  alt='Piano'
                  fallbackSrc='https://via.placeholder.com/512'
                  borderRadius='35px'
                  marginX='auto'
                  objectFit='contain'
                />
              }
              {!isSmallScreen &&
                <Image
                  width='30rem'
                  src='/assets/main_image.jpg'
                  alt='Piano'
                  fallbackSrc='https://via.placeholder.com/512'
                  borderRadius={'35px'}
                  position={'relative'}
                  top={'-5rem'}
                  objectFit='contain'
                />
              }
            </Box>
          </Box>
          <Flex className="dark" alignItems={isSmallScreen ? 'center' : 'self-start'} flexDir={isSmallScreen ? 'column' : 'row'} >
          <Text
            marginTop={isSmallScreen ? '1rem' : '-2.5rem'}
            marginInline={'2rem'}
            className={oswald.className}
            fontSize={isSmallScreen ? '18' : '20'}>
            {addLineBreak("Musikolibri möchte Eltern und Kindern die nötigen Werkzeuge an die Hand geben, damit sie als Familie selbst Musik machen können, wo, wann und wie sie wollen. Es ist ein Raum, der dazu einlädt, eine Welt voller rhythmischer und klanglicher Möglichkeiten zu entdecken, die das aktive Lernen der Kinder durch spielerische und kreative Aktivitäten wie Singen, Tanzen und Improvisieren mit Musikinstrumenten fördert.\n\n Die Eltern bzw. die Bezungspersonen spielen eine wichtige Rolle, da sie aktiv an allen Aktivitäten teilnehmen. Auf diese Weise wird die Bindung zur kleinen Maus gestärkt und das Selbstvertrauen und Selbstwertgefühl des Kindes gesteigert.\n")}
          </Text>
          </Flex>

        </Box>
      </Box>
      <Box sx={{ w: '100%' }} className='light' justifyContent={'space-between'}>
        <Box className='content-size' >
        <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize='4xl'
                textAlign={'left'}
                marginInline={'2rem'}
                sx={{ px: "0.5rem", marginTop: "2rem" }}
              >
                Die Gruppen
              </Text>
              <Text
                className={oswald.className}
                fontSize={isSmallScreen ? '18' : '20'}
                align={'left'}
                sx={{ fontcolor: "black", px: "0.5rem" }}
                marginInline={'2rem'}
              >
                {addLineBreak("Die Kurse sind in zwei Gruppen unterteilt, wobei die Aktivitäten dem Alter und den Bedürfnissen der Kinder angepasst sind.")}
                
              </Text>
        <Flex className="light" alignItems={isSmallScreen ? 'center' : 'self-start'} flexDir={isSmallScreen ? 'column' : 'row'} >
            <AlterCard
              name="Gruppe I"
              alter="4 bis 18 Mo."
              imageSource="/assets/gruppe_i.jpg"
              link="/gruppen#1"
              id={"gruppe-i"}
            />
            <AlterCard
              name="Gruppe II"
              alter="19 bis 36 Mo."
              imageSource="/assets/gruppe_ii.jpg"
              link="/gruppen#2"
              id={"gruppe-ii"}
            />
          </Flex>
        </Box>
        </Box>
    </>
  )
}
