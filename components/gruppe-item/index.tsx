'use client'

import { Box, Button, Card, CardBody, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Gochi_Hand, Oswald, Fira_Code } from 'next/font/google';
import { maxWidth } from '../../config/config';
 
const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})
  
const firaCode = Fira_Code({
    weight: '700',
    subsets: ['latin'],
  })
  
  const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
   
type GruppeItemProps = { name: string, schedule: string, days:string, color:string, id:string, num:string }


const GruppeItem = (props:GruppeItemProps) => {
    const withOutSpaces = (text: string) => {
        return text.replace(/\s/g, '')
    }
    const [isSmallScreen] = useMediaQuery('(max-width: 1200px)');


    return (
        <Box backgroundColor={props.color=='dark'?'#f4e4dc':'#f5eee6'} padding='2rem' minW={'400px'} textColor={'black'} id={props.id}>
            <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'1200'} width={'90%'} margin={'auto'}>
                <Text 
                    marginBottom={'-0.5rem'}
                    fontSize={isSmallScreen?'36':'48'} 
                    className={gochi.className} 
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'> 
                    {props.name} 
                </Text>
                <Text 
                    fontSize={isSmallScreen?'21':'28'} 
                    className={firaCode.className}>
                    Termin
                </Text>
                <Box display={'flex'} flexDir={isSmallScreen?'column':'row'} alignItems={'center'} my={'1rem'} width={'100%'}>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} >Donnerstag</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} noOfLines={1} textAlign={'center'}>{props.schedule}</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} flex={1}>{props.days}</Text>

                    <Link style={{ textDecoration: 'none' }} href={`/anmeldung-form#${props.num}`}>
                        <Button paddingX='2rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} mx={'3rem'} my={'1rem'} >
                            <Text className={gochi.className} fontSize={isSmallScreen?'18':'24'}>Auswählen</Text>    
                        </Button>
                    </Link>
                </Box>
            </Flex>        
        </Box>
    )
}

export default GruppeItem