'use client'

import { Box, Button, Card, CardBody, Flex, Link, Text } from '@chakra-ui/react';
import { Gochi_Hand, Oswald, Fira_Code } from 'next/font/google';
 
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
   
type GruppeItemProps = { name: string, schedule: string, days:string, color:string, id:string, key:number }


const GruppeItem = (props:GruppeItemProps) => {
    const withOutSpaces = (text: string) => {
        return text.replace(/\s/g, '')
    }

    return (
        <Box backgroundColor={props.color=='dark'?'#f4e4dc':'#f5eee6'} padding='2rem' minW={'400px'} textColor={'black'} id={props.id}>
            <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'1200'} width={'90%'} margin={'auto'}>
                <Text 
                    marginBottom={'-0.5rem'}
                    fontSize={'48px'} 
                    className={gochi.className} 
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'> 
                    {props.name} 
                </Text>
                <Text 
                    fontSize={'28px'} 
                    className={firaCode.className}>
                    Termin
                </Text>
                <Box display={'flex'} flexDir={'row'} alignItems={'center'} marginY={'1rem'} width={'100%'}>
                    <Text mr={'3rem'} className={oswald.className} fontSize={'24px'}>Donnerstag</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={'24px'} noOfLines={1} textAlign={'center'}>{props.schedule}</Text>
                    <Text mx={'3rem'} className={oswald.className} fontSize={'24px'} flex={1}>{props.days}</Text>

                    <Link style={{ textDecoration: 'none' }} href={`/form#${withOutSpaces(props.name).toLowerCase().replace("ü", "u")}`}>
                        <Button paddingX='2rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} ml={'3rem'} >
                            <Text className={gochi.className} fontSize={'24px'}>Auswählen</Text>    
                        </Button>
                    </Link>
                </Box>
            </Flex>        
        </Box>
    )
}

export default GruppeItem