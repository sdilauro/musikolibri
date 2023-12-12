'use client'

import * as React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import './../../styles/App.css';
import Link from 'next/link'
import { Oswald } from 'next/font/google'
 
const oswald = Oswald({
  weight: '400',
  subsets: ['latin'],
})
   
type link = { name: string, route: string }

const pages: Array<link> = [
    { name: 'Home', route: '/' },
    { name: 'Über mich', route: '/uber-mich' },
    { name: 'Räumlichkeiten', route: '/raumlichkeiten' },
    { name: 'Termine & Preise', route: '/termine-und-preise' }
]

function ResponsiveAppBar() {
    return (
        <Stack className="navbar" w='100%' direction={['column', 'row']} spacing='40px'>
            {pages.map((item, index) => <Link className={oswald.className} style={{ textDecoration: 'none' }} key={index} href={item.route}>{item.name}</Link>)}
        </Stack>
    )
}
export default ResponsiveAppBar;