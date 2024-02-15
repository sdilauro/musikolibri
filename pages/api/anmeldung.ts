import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method = 'POST') {
        const data = req.body
        if (!data.name || !data.email || !data.kurse || !data.child || !data.adresse || !data.geburtsdatum || !data.ort || !data.plz || !data.telefon || !data.vorname) {
            return res.status(400).json({message: "Bad request"})
      }
     

      type kurses_file = {
        kurses: Array<kurseProps>,
        rows: Array<rowProps>
    }
 
    type kurseProps = { name: string, schedule: string, days:string, color:string, id:string }

    type rowProps = { name: string, schedule: string, days:string, color:string, id:string }

    const contents:kurses_file = require('public/assets/kurses.json');
    const kurses = contents.rows
     
    const kurse:kurseProps = kurses[data.kurse-1]

      try {
          
            await transporter.sendMail({
                ...mailOptions,
                to:data.email,
                subject: `Musikolibri - Kurs ${kurse.name}`,
                text: `Hallo ihr Lieben, ${data.vorname} und ${data.child}, vielen Dank für Eure Anmeldung zum Kurs ${kurse.name}, der am ${kurse.days} im Zeitraum ${kurse.schedule} Uhr stattfindet. Ich werde mich in Kürze mit weiteren Informationen zum Workshop bei euch melden. `,
                html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
                <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
                  <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center"> &#x1F3B5; Danke für Eure Anmeldung! &#x1F3B5; </h2>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Hallo ihr Lieben, ${data.vorname} und ${data.child},</p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> vielen Dank für Eure Anmeldung zum Kurs ${kurse.name}, der am</p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; text-align: center; font-weight: bolder">${kurse.days} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> im Zeitraum </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); text-align: center;font-weight: bolder" > ${kurse.schedule} Uhr </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> stattfindet. </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Ich werde mich in Kürze mit weiteren Informationen zum Kurs bei euch melden &#x1F642;. </p>
                  <p style="font-family:sans-serif; text-align: right;margin-right: 20px;">
                    <img style="margin: 20px auto; height: 100px;max-height: 40px" src="https://i.ibb.co/VVnZCn6/musikolibri-logo.png" alt="Musikolibri"></img>
                  </p>
                  <br>
                  <br>

                  <p style="font-size:xx-small; font-family:sans-serif; text-align: center;margin-right: 20px;color: rgb(132, 132, 132)">Noch Fragen? Ihr könnt Euch direkt über unsere <a href="https://musikolibri.vercel.app">Website</a> an mich wenden.</a>
                  </p>
                </div>
              </div>`
            })
            return res.status(200).json({success:true})
        } catch (error) {
            console.log(error)
            return res.status(400).json({message: "error.message"})
        }
    }
}

export default handler