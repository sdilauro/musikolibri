import React, { useEffect } from 'react';

import GruppeItem from "../components/gruppe-item";

export default function AnmeldungPage() {
    
    useEffect(() => {
        const url = window.location.href;
        const params = new URLSearchParams(url.split('#')[1]);
        const myElement = document.getElementById(params.toString());
        if (myElement) {
            myElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, []);

    type kurses_file = {
        kurses: Array<kurse>,
        rows: Array<row>
    }

    type kurse = { name: string, schedule: string, days:string, color:string, id:number }

    type row = { name: string, weekday:string, schedule: string, days:string, color:string, id:string, num:string }

    const contents:kurses_file = require('public/assets/kurses.json');
    const data = contents.rows


    return (
        <>
            {data.map((item: row, index: number) => (
                <GruppeItem
                    id={item.id}
                    key={index}
                    name={item.name}
                    schedule={item.schedule}
                    days={item.days}
                    color={item.color}
                    num={item.num}
                    weekday={item.weekday}
                    />
                ))
            } 
        </>
  )
}
