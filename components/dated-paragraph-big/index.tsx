'use client'

import { Divider, Flex, Text, Image, useMediaQuery } from '@chakra-ui/react';
import { gochi, oswald } from '../../config/config';
import { maxWidth } from '../../config/config';
 
   
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


const DatedParagraphBig = (props:DatedParagraphProps) => {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    
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
            <Flex flexDir='column' alignItems='center'>
                <Text fontSize='1.25rem' marginBottom={'1rem'} textAlign='justify' className={oswald.className} >{addLineBreak(props.paragraph)}</Text>
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
export default DatedParagraphBig;