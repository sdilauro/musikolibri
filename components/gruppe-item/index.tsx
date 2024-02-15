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
   
type GruppeItemProps = { name: string, weekday: string, schedule: string, days:string, color:string, id:string, num:string, isFull:boolean }


const GruppeItem = (props:GruppeItemProps) => {
    const withOutSpaces = (text: string) => {
        return text.replace(/\s/g, '')
    }
    const [isSmallScreen] = useMediaQuery('(max-width: 1200px)');


    return (
        <Box backgroundColor={props.color=='dark'?'#f4e4dc':'#f5eee6'} padding='2rem' textColor={'black'} id={props.id}>
            <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'1200'} width={'100%'} margin={'auto'}>
                <Text 
                    marginBottom={'1rem'}
                    fontSize={isSmallScreen?'36':'48'} 
                    className={gochi.className} 
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'
                    noOfLines={2}
                    lineHeight={1}> 
                    {props.name} 
                </Text>
                <Text 
                    marginBottom={'-0.5rem'}
                    fontSize={isSmallScreen?'18':'24'} 
                    className={oswald.className} > 
                    Annastraße 27, 44793 Bochum
                </Text>
                <Box display={'flex'} flexDir={isSmallScreen?'column':'row'} alignItems={'center'} my={'1rem'} width={'100%'}>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} >{props.weekday}</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} noOfLines={1} textAlign={'center'}>{props.schedule}</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={isSmallScreen?'18':'24'} flex={1}>{props.days}</Text>

                    <Link style={{ textDecoration: 'none' }} href={`/anmeldung-form#${props.num}`}>
                        <Button paddingX='2rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} mx={'3rem'} my={'1rem'} isDisabled={props.isFull} >
                            <Text className={gochi.className} fontSize={isSmallScreen?'18':'24'}>{props.isFull?'Ausgebucht':'Auswählen'}</Text>    
                        </Button>
                    </Link>
                </Box>
            </Flex>        
        </Box>
    )
}

export default GruppeItem