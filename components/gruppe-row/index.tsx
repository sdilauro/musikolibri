'use client'

import { Box, Button, Card, CardBody, Flex, Text, Link } from '@chakra-ui/react';
import { Gochi_Hand, Oswald } from 'next/font/google';
import './../../styles/App.css';

const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})

const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
})

type GruppeCardProps = { name: string, schedule: string, days: string, color: string, id: number }


const GruppeRow = (props: GruppeCardProps) => {

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            backgroundColor={'#f4e4dc'}
            borderRadius={'32px'}
            padding='2rem'
            margin='2rem'
            maxW='%60'
            key={props.id}>
            <CardBody>
                <Flex flexDir='column' flex='1' alignItems='top'>
                    <Text
                        marginBottom={'-1rem'}
                        fontSize={'48px'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'>
                        {props.name}
                    </Text>
                    <Text
                        fontSize={'28px'}
                        className={oswald.className}>
                        Termin
                    </Text>
                    <Box display={'flex'} flexDir={'row'} alignItems={'center'} marginY={'1rem'} justifyContent={'space-between'} width={'100%'}>
                        <Text className={oswald.className} fontSize={'24px'}>Donnerstag</Text>
                        <Text className={oswald.className} fontSize={'24px'}>{props.schedule}</Text>
                        <Text className={oswald.className} fontSize={'24px'}>{props.days}</Text>
                        <Link style={{ textDecoration: 'none' }} href={'/formular'}>
                            <Button paddingX='5rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} >
                                <Text className={gochi.className} fontSize={'24px'}>Auswählen</Text>
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </CardBody>
        </Card>
    )
}
export default GruppeRow;