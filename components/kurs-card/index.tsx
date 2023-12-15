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
   
type KursCardProps = { name: string, price: number, startOn:string, finishOn:string, details:Array<string>, imageSource:string }


const KursCard = (props:KursCardProps) => {
    
    return (
        <Card maxW='md' backgroundColor={'#f4e4dc'} borderRadius={'32px'}>
            <CardHeader>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Box>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Flex flexDir='column' flex='1' alignItems='center' flexWrap='wrap'>
                                <Text 
                                fontSize={'4xl'} 
                                className={gochi.className} 
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'> 
                                    {props.name} 
                                </Text>
                                <Text fontSize={'2xl'} className={oswald.className}>{props.startOn} / {props.finishOn}</Text>
                            </Flex>
                            <Avatar name='Frühling' src={props.imageSource} />
                        </Flex>
                        <Text fontSize={'4xl'} className={oswald.className}>€{props.price}</Text>
                    </Box>
                </Flex>
            </CardHeader>
            <CardBody>
                <Box display={'flex'} flexDir={'column'} alignItems={'center'}>
                    <Button flex='1' variant='solid'>
                        Jetzt Anmelden
                    </Button>
                </Box>
                <Text>
                With Chakra UI, I wanted to sync the speed of development with the speed
                of design. I wanted the developer to be just as excited as the designer to
                create a screen.
                </Text>
            </CardBody>
        </Card>
    )
}
export default KursCard;