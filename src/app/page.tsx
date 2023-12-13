import '../../styles/App.css'
import ResponsiveAppBar from '../../components/navbar'
import { Box, Button, Stack, Text, Image } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
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

export default function Page() {
  return (
    <ChakraProvider>
      <main>
        <ResponsiveAppBar />
        <Box sx={{ w:'100%'}} className='light'>
          <Box sx={{ paddingY:'2rem', paddingBottom:'9rem', display:'flex', flexDir:'column', maxWidth:'1440px', width:'80%' }} className='light'>
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
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='text'
                variant='outline'
                outlineColor='#7A59CA'
                outlineOffset={"-2px"}
                border={'3px'}
                borderRadius={"1.5rem"}
                height={"3rem"}>
                Mehr Erfahren
              </Button>
              <Button
                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                bgClip='background'
                variant='solid'
                borderRadius={"1.5rem"}
                height={"3rem"}>
                Jetzt Anmelden
              </Button>
              </Stack>
          </Box>
        </Box>
        <Box sx={{ w:'100%' }} className='dark'>
          <Box sx={{paddingY:'2rem', display:'flex', flexDir:'row', width:'75%', alignItems:'self-start' }} className='dark'>
            <Box sx={{mx:'3rem', display:'flex', flexDir:'column', flex:'0.5', alignItems:'self-start'}} className='dark'>
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
            <Box sx={{mx:'3rem', display:'flex', flexDir:'column', flex:'0.5'}} className='dark'>
              <Image 
                boxSize='30rem'
                src='/assets/piano.png'
                alt='Piano'
                fallbackSrc='https://via.placeholder.com/512'
                borderRadius={'35px'}
                position={'relative'}
                top={'-8rem'}
                paddingBottom={'-192px'}
              />
            </Box>
          </Box>
        </Box>
      </main>
    </ChakraProvider>
  )
}
