import { Gochi_Hand, Oswald } from "next/font/google"

type link = { name: string, route: string }

export const navBarPages: Array<link> = [
    { name: 'Über mich', route: '/uber-mich' },
    { name: 'Räumlichkeiten', route: '/raumlichkeiten' },
    { name: 'Termine & Preise', route: '/termine-und-preise' },
    { name: 'Kontakt', route: '/kontakt' }
]

export const footerPages: Array<link> = [
    { name: 'Kontakt', route: '/kontakt' },
    { name: 'Impressum', route: '/impressum' }
]

export type kurses_file = { kurses: Array<kurse>, rows: Array<row> }
export type kurse = { name: string, schedule: string, days:string, color:string, id:number }
export type row = { name: string, schedule: string, days: string, color: string, id: string }

export const gochi = Gochi_Hand({
    weight: '400',
    subsets: ['latin'],
})
  
export const oswald = Oswald({
    weight: '400',
    subsets: ['latin'],
})
  
export const maxWidth:string = '(max-width: 900px)'