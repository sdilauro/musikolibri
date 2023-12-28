'use client'

import * as React from 'react';
import { Button, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link'
import { Gochi_Hand, Oswald } from 'next/font/google'
 
const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})

const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
  
   
type link = { name: string, route: string }

const pages: Array<link> = [
    { name: 'Über mich', route: '/uber-mich' },
    { name: 'Räumlichkeiten', route: '/raumlichkeiten' },
    { name: 'Termine & Preise', route: '/termine-und-preise' },
    { name: 'Kontakt', route: '/form' }
]

function ResponsiveAppBar() {
    return (
        <Flex className="navbar" w='100%' >
            <Flex w='80%' direction={['column', 'row']} className="navbar" height={'4rem'} justifyContent={'space-between'}>
                
                {/* <Stack direction={['column', 'row']} spacing='50px' alignItems={'center'}> */}
                    <Link style={{ textDecoration: 'none' }} href={'/'}>
                        <Image 
                                maxH={'3rem'}
                                src='/assets/musikolibri-logo.png'
                                alt='Logo'
                                
                            />
                    </Link>
                    {pages.map((item, index) => <Link className={oswald.className} style={{ textDecoration: 'none' }} key={index} href={item.route}>{item.name}</Link>)}
                    <Link style={{ textDecoration: 'none' }} href={'/anmeldung'}>
                        <Button paddingX='2rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} fontSize={'24px'} className={gochi.className} fontWeight={400}>Anmeldung</Button>
                    </Link>
                {/* </Stack> */}
                
            </Flex>
        </Flex>
    )
}
export default ResponsiveAppBar;