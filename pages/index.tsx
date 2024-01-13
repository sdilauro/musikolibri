import { Box, Button, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { gochi, maxWidth, oswald } from '../config/config';
 
export default function HomePage() {
  const [isSmallScreen] = useMediaQuery(maxWidth);
  return (
      <>
        <Box sx={{ w:'100%'}} className='light'>
          <Box className='content-size'>
            <Box sx={{ paddingY:'2rem', paddingBottom:'9rem', display:'flex', flexDir:'column', width:'100%' }} className='light'>
              <Text
                noOfLines={2}
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                className={gochi.className}
                fontSize='5xl'
                align={'center'}
                sx={{ marginBottom: "-2rem", marginTop:"3rem"}}
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
                sx={{ fontcolor:"black"}}

              >
              Entdecke, wie Musik die Entwicklung deines Kindes fördern kann.
              </Text>
              <Stack direction='row' spacing={4} display={'flex'} justifyContent={'center'} marginY={'1rem'}>
                <Button
                  colorScheme='purple'
                  variant='outline'
                  borderRadius={"1.5rem"}
                  height={"3rem"}>
                  Mehr Erfahren
                </Button>
                <Button
                  colorScheme='purple'
                  variant='solid'
                  borderRadius={"1.5rem"}
                  height={"3rem"}>
                  Jetzt Anmelden
                </Button>
                </Stack>
            </Box>
          </Box>
        </Box>
        <Box sx={{ w:'100%' }} className='dark' justifyContent={'space-between'}>
          <Box className='content-size'>
            <Box flexDir={isSmallScreen ? 'column' : 'row'}  alignItems={isSmallScreen ? 'center' : 'self-start'} sx={{paddingY:'2rem', display:'flex', width:'100%' }} className='dark'>
              <Box sx={{display:'flex', flexDir:'column', flex:'0.5', alignItems:'self-start'}} className='dark'>
                <Text
                  noOfLines={2}
                  bgGradient='linear(to-l, #7A59CA, #E6175B)'
                  bgClip='text'
                  className={gochi.className}
                  fontSize='4xl'
                  textAlign={'left'}
                  sx={{px:"0.5rem", marginTop:"1rem"}}
                >
                Die Workshops
                </Text>
                <Text
                  className={oswald.className}
                  fontSize='1.25rem'
                  align={'left'}
                  sx={{ fontcolor:"black", px:"0.5rem"}}

                >
                Musikolibri lädt dich ein, deine kleine Maus bei ihren ersten Schritten in die Welt der Klänge, Rhythmen, Harmonien und Melodien zu begleiten und gemeinsam, Hand in Hand, einen wunderbaren musikalischen Weg zu entdecken.
                </Text>
              </Box>
              <Box sx={{display:'flex', flexDir:'column', flex:'0.5', alignItems:'self-end'}} className='dark'>
              {isSmallScreen &&
                  <Image 
                    marginTop='1rem'
                    boxSize='30rem'
                    src='/assets/piano.png'
                    alt='Piano'
                    fallbackSrc='https://via.placeholder.com/512'
                    borderRadius='35px'
                  marginX='auto'
                  objectFit='contain'
                    />                
              }
              {!isSmallScreen && 
              <Image 
                  boxSize='30rem'
                  src='/assets/piano.png'
                  alt='Piano'
                  fallbackSrc='https://via.placeholder.com/512'
                  borderRadius={'35px'}
                  position={'relative'}
                  top={'-8rem'}
                  paddingBottom={'-192px'}
                  objectFit='contain'
                />
              }
              </Box>
            </Box>
          </Box>
        </Box>
      </>
  )
}
