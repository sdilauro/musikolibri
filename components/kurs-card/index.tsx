'use client'

import { Avatar, Box, Button, Card, CardBody, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { Gochi_Hand, Oswald } from 'next/font/google';
import { maxWidth } from '../../config/config';
 
const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
  })
  
  const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
   
type KursCardProps = { name: string, price: number, startOn:string, finishOn:string, details:Array<string>, imageSource:string, id:string }


const KursCard = (props:KursCardProps) => {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    
    return (
        <Card maxW='md' backgroundColor={'#f4e4dc'} borderRadius={'32px'} padding={isSmallScreen?'1rem':'2rem' } margin='2rem' width={'400px'} maxWidth={'80%'} key={props.id}>
            <CardBody>
                <Flex flex='1' gap='0' alignItems='center' flexWrap='wrap'>
                    <Box width={'100%'}>
                        <Flex flex='1' alignItems='center' alignContent='center' flexWrap='wrap' flexDir={isSmallScreen?'column-reverse':'row'} >
                            <Flex flexDir='column' flex='1' alignItems='top'>
                                <Text 
                                textColor={'black'} 
                                width={'100%'}
                                marginBottom={'-1rem'}
                                fontSize={isSmallScreen?'36':'48'}
                                className={gochi.className} 
                                bgGradient='linear(to-l, #7A59CA, #E6175B)'
                                bgClip='text'> 
                                    {props.name} 
                                </Text>
                                <Text textColor={'black'}  fontSize={isSmallScreen?'28':'36'} className={oswald.className}>{props.startOn} / {props.finishOn}</Text>
                            </Flex>
                            <Avatar name='Frühling' src={props.imageSource} size={'66'} />
                        </Flex>
                        <Text textColor={'black'} fontSize={isSmallScreen?'36':'48'} className={oswald.className} textAlign={isSmallScreen?'center':'left'}>€{props.price}</Text>
                    </Box>
                </Flex>
                <Box display={'flex'} flexDir={'column'} alignItems={'center'} marginY={'1rem'}>
                    <Link href={`/anmeldung#${props.id}`}>
                        <Button paddingX='1.5rem' colorScheme={'purple'}variant='solid' borderRadius={'1.5rem'} h={'3rem'}>
                            Jetzt Anmelden
                        </Button>
                    </Link>
                </Box>
                {props.details.map((detail:string, index:number)=>(
                    <Text textColor={'black'} className={oswald.className} fontSize={isSmallScreen?'28':'36'} key={index}>• {detail}</Text>
                ))}
            </CardBody>
        </Card>
    )
}
export default KursCard;