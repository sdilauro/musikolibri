import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

type kurseProps = { name: string, schedule: string, days:string, color:string, id:string }

type rowProps = { name: string, schedule: string, days: string, color: string, id: string }
  
type dataProps = {
  email: string,
  name: string, 
  vorname: string, 
  adresse: string,
  plz: string,
  ort: string,
  telefon: string,
  kurse: number, 
  child: string,
  geburtsdatum: string,
  nachricht?: string
}

type kurses_file = {
  kurses: Array<kurseProps>,
  rows: Array<rowProps>
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method = 'POST') {
        const data:dataProps = req.body
        if (!data.name || !data.email || !data.kurse || !data.child || !data.adresse || !data.geburtsdatum || !data.ort || !data.plz || !data.telefon || !data.vorname) {
            return res.status(400).json({message: "Bad request"})
      }
     


    const contents:kurses_file = require('public/assets/kurses.json');
    const kurses = contents.rows
     
    const kurse:kurseProps = kurses[data.kurse-1]

      try {
          
            await transporter.sendMail({
                ...mailOptions,
                to:process.env.NM_EMAIL,
                subject: `Musikolibri - Consulta por ${kurse.name}`,
                text: `Padre: ${data.vorname} ${data.name}, Niño: ${data.child}, Fecha de nacimiento: ${data.geburtsdatum}, Curso: ${kurse.name}, E-mail: ${data.email}, Teléfono: ${data.telefon}, Dirección: ${data.adresse}, PLZ: ${data.plz}, Ort: ${data.ort}, Mensaje opcional: ${data.nachricht}`,
                html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
                <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
                  <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Te ha llegado una consulta!</h2>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Padre: ${data.vorname} ${data.name} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Niño: ${data.child} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Fecha de nacimiento: ${data.geburtsdatum} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Curso: ${kurse.name} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Dirección: ${data.adresse} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> PLZ: ${data.plz} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Ort: ${data.ort} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Contacto: </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> E-mail: ${data.email} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Teléfono: ${data.telefon} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Mensaje opcional: ${data.nachricht} </p>

                  <p style="font-family:sans-serif; text-align: right;margin-right: 20px;">
                    <img style="margin: 20px auto; height: 100px;max-height: 40px" src="https://i.ibb.co/VVnZCn6/musikolibri-logo.png" alt="Musikolibri"></img>
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