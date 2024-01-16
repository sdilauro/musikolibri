'use client'

import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Gochi_Hand } from 'next/font/google';


  const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
   
export type DatedParagraphProps = { date: string, paragraph: string, im_src: string, im_alt: string }

const addLineBreak = (str: string) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        {subStr}
        <br />
      </>
    );
  });

const DatedParagraphSmall = (props:DatedParagraphProps) => {   
    return (
        <Flex flexDir='row' alignContent='center' maxW={'800px'} marginX={'auto'}>
            <Flex flexDir='column' alignItems='center' maxW={'1rem'}>
                <Text 
                    textAlign={'center'}
                transform="rotate(-90deg)"
                className={gochi.className} 
                fontSize='2rem' bgGradient='linear(to-l, #7A59CA, #E6175B)' 
                bgClip='text'
                my='2rem'
                >
                    {props.date}
                </Text>
                <Divider orientation='vertical' flex={1} borderColor={'#E6175B'} marginBottom={'1rem'} />
            </Flex>
            <Flex flexDir='column' alignItems='center' marginLeft={'1rem'} minWidth={'8rem'}>
                <Text fontSize='1.25rem' marginBottom={'1rem'} ml={'1rem'} textAlign='justify'>{addLineBreak(props.paragraph)}</Text>
                <Image
                    width='25rem'
                    src={props.im_src}
                    alt={props.im_alt}
                    fallbackSrc='https://via.placeholder.com/512'
                    position={'relative'}
                    objectFit='contain'
                    marginBottom={'3rem'}
                    borderRadius={'35px'}/>
            </Flex>
        </Flex>
    )
}
export default DatedParagraphSmall;