'use client'

import * as React from 'react';
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react';
import './../../styles/App.css';
import { Oswald, Gochi_Hand} from 'next/font/google'
 
const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
  })
  
  const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
   
type GruppeCardProps = { name: string, price: number, startOn:string, finishOn:string, details:Array<string>, imageSource:string, id:number}


const GruppeCard = (props:GruppeCardProps) => {
    
    return (
        <Card maxW='md' backgroundColor={'#f4e4dc'} borderRadius={'32px'} padding='2rem' margin='2rem' minW={'400px'} key={props.id}>
            <CardBody>
                <Flex flex='1' gap='0' alignItems='center' flexWrap='wrap'>
                    <Box>
                        <Flex flex='1' alignItems='center' flexWrap='wrap'>
                            <Flex flexDir='column' flex='1' alignItems='top'>
                                <Text 
                                marginBottom={'-1rem'}
                                fontSize={'48px'} 
                                className={gochi.className} 
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'> 
                                    {props.name} 
                                </Text>
                                <Text fontSize={'24px'} className={oswald.className}>{props.startOn} / {props.finishOn}</Text>
                            </Flex>
                            <Avatar marginLeft='1rem' name='Frühling' src={props.imageSource} size={'66px'} />
                        </Flex>
                        <Text fontSize={'48px'} className={oswald.className}>€{props.price}</Text>
                    </Box>
                </Flex>
                <Box display={'flex'} flexDir={'column'} alignItems={'center'} marginY={'1rem'}>
                    <Button paddingX='5rem' colorScheme={'purple'}variant='solid' borderRadius={'1.5rem'} h={'3rem'}>
                        Jetzt Anmelden
                    </Button>
                </Box>
                {props.details.map((detail:string, index:number)=>(
                    <Text className={oswald.className} fontSize={'24px'} key={index}>• {detail}</Text>
                ))}
            </CardBody>
        </Card>
    )
}
export default GruppeCard;