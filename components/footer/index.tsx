'use client'

import { Flex } from '@chakra-ui/react';
import { Oswald } from 'next/font/google';
import Link from 'next/link';
import { footerPages } from '../../config/config';
 
const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})


function Footer() {
    return (
        <Flex className="footer" w='100%' >
            <Flex w='80%' direction={['column', 'row']} className="footer" height={'4rem'}>
                {footerPages.map((item, index) => <Link className={oswald.className} style={{ textDecoration: 'none', margin:'2rem' }} key={index} href={item.route}>{item.name}</Link>)}              
            </Flex>
        </Flex>
    )
}
export default Footer;