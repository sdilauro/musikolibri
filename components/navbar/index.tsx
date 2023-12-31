'use client'

import * as React from 'react';
import { Button, Flex, Image, useMediaQuery, IconButton  } from '@chakra-ui/react';
import Link from 'next/link'
import { Gochi_Hand, Oswald } from 'next/font/google'
import { maxWidth, navBarPages } from '../../config/config';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

 


const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})


const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
  })
  
   

function ResponsiveAppBar() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    const [hidden, setHidden] = useState<boolean>(true)

    function toggleMenu() {
        setHidden(!hidden)
    }

    const fullNavbar =
    <Flex className="navbar" w='100%' >
        <Flex w='80%' direction={['column', 'row']} className="navbar" height={'4rem'} justifyContent={'space-between'}>
                <Link style={{ textDecoration: 'none' }} href={'/'}>
                    <Image 
                        maxH={'3rem'}
                        src='/assets/musikolibri-logo.png'
                        alt='Logo'     
                        />
                </Link>
                {navBarPages.map((item, index) => <Link className={oswald.className} style={{ textDecoration: 'none' }} key={index} href={item.route}>{item.name}</Link>)}
                <Link style={{ textDecoration: 'none' }} href={'/anmeldung'}>
                    <Button paddingX='2rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} fontSize={'24px'} className={gochi.className} fontWeight={400}>Anmeldung</Button>
                </Link>
        </Flex>
    </Flex>
    
    const tinyNavbar =
    <Flex className="navbar" w='100%' direction={['column']} zIndex={1000}>
        <Flex w='80%' direction={['row']} className="navbar" height={'4rem'} justifyContent={'space-between'} zIndex={1000}>
                <Link style={{ textDecoration: 'none' }} href={'/'}  >
                    <Image 
                        maxH={'3rem'}
                        src='/assets/musikolibri-logo.png'
                        alt='Logo' 
                        zIndex={1000}
                    />
                    
                </Link>
                <IconButton
                    aria-label='Call Segun'
                    size='lg'
                    color={'black'}
                    onClick={toggleMenu}
                    icon={hidden ? <HamburgerIcon /> : <CloseIcon />}
                    zIndex={1000}
                />
        </Flex>
        <Flex p='2rem'w='100%' direction={['column']} className="navbar" hidden={hidden} position={'absolute'} top={0} left={0} zIndex={999} height={'100vh'}>
                {navBarPages.map((item, index) =>
                    <Flex p='1rem'key={index}>
                        <Link onClick={toggleMenu} className={oswald.className} style={{ textDecoration: 'none' }}  href={item.route}>{item.name}</Link>
                    </Flex>
                )
                }
                <Flex p='1rem'>
                    <Link onClick={toggleMenu} style={{ textDecoration: 'none' }} href={'/anmeldung'}>
                        <Button  paddingX='1rem' colorScheme={'purple'} variant='solid' borderRadius={'1.5rem'} h={'3rem'} fontSize={'24px'} className={gochi.className} fontWeight={400}>Anmeldung</Button>
                    </Link>
                </Flex>
        </Flex>
        
    </Flex>


    return (
        <>
            {isSmallScreen ? tinyNavbar : fullNavbar}
        </>
    )
}
export default ResponsiveAppBar;