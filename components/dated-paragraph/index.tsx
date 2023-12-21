'use client'

import { Divider, Flex, Text, Image } from '@chakra-ui/react';
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
   
export type DatedParagraphProps = { date: string, paragraph: string, im_src: string, im_alt: string }


const DatedParagraph = (props:DatedParagraphProps) => {
    
    return (
        <Flex flexDir='row' alignContent='center' maxW={'800px'} marginX={'auto'}>
            <Flex flexDir='column' alignItems='center' marginRight={'3rem'} minWidth={'8rem'}>
                <Text 
                className={gochi.className} 
                fontSize='4xl' bgGradient='linear(to-l, #7A59CA, #E6175B)' 
                bgClip='text'
                paddingX= '0.5rem'
                >
                    {props.date}
                    </Text>
                <Divider orientation='vertical' flex={1} borderColor={'#E6175B'} marginBottom={'1rem'} />
            </Flex>
            <Flex flexDir='column' alignItems='center' marginRight={'3rem'} minWidth={'8rem'}>
            <Text fontSize='1.25rem' marginBottom={'1rem'}>{props.paragraph}</Text>
            <Image
                            width='25rem'
                            src={props.im_src}
                            alt={props.im_alt}
                            fallbackSrc='https://via.placeholder.com/512'
                            position={'relative'}
                            objectFit='contain'
                            marginBottom={'3rem'}
                            borderRadius={'35px'}
                        />
                        </Flex>
        </Flex>
    )
}
export default DatedParagraph;