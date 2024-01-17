import { Button, Card, CardBody, Heading, Image, Link, Stack, Text, useMediaQuery } from '@chakra-ui/react';
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

type AlterCardProps = { name: string, alter: string, imageSource: string, id: string, link: string }

const AlterCard = (props: AlterCardProps) => {
    const [isSmallScreen] = useMediaQuery(maxWidth);

    return (
        <Link href={props.link}>
            <Card maxW='md' backgroundColor={'#F5EEE6'} borderRadius={'lg'} padding={isSmallScreen ? '1rem' : '1rem'} margin='2rem' width={'500px'} maxWidth={'80%'} key={props.id}>

                <CardBody>
                    <Image
                        src={props.imageSource}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='0'>
                        <Text
                            bgGradient='linear(to-l, #7A59CA, #E6175B)'
                            bgClip='text'
                            className={gochi.className}
                            fontSize='4xl'>
                            {props.name}
                        </Text>
                        <Text
                            bgGradient='linear(to-l, #7A59CA, #E6175B)'
                            bgClip='text'
                            className={gochi.className}
                            fontSize='4xl'>
                            {props.alter}
                        </Text>

                    </Stack>
                </CardBody>
            </Card>
        </Link>

    )
}
export default AlterCard;