import GruppeRow from "../components/gruppe-row";

export default function AnmeldungPage() {

    type kurses_file = {
        kurses: Array<kurse>,
        rows: Array<row>
    }

    type kurse = { name: string, schedule: string, days:string, color:string, id:number }

    type row = { name: string, schedule: string, days:string, color:string, id:number }

    const contents:kurses_file = require('public/assets/kurses.json');
    const data = contents.rows

    return (
        <>
            {data.map((item: row, index: number) => (
                <GruppeRow
                    key={index}
                    name={item.name}
                    schedule={item.schedule}
                    days={item.days}
                    color={item.color}
                    />
                ))
            } 
        </>
  )
}
