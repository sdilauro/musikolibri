import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method = 'POST') {
        const data = req.body
        if (!data.email || !data.name || !data.kurse) {
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
                subject: `Musikolibri - Kurse ${kurse.name}`,
                text: `Hola ${data.name}, has consultado por disponibilidad de cupos en el curso ${kurse.name} que se dicta los días ${kurse.days} en el horario ${kurse.schedule}. Recibimos tu consulta y nos comunicaremos a la brevedad para conocernos y ultimar detalles. `,
                html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
                <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
                  <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Consulta recibida con éxito!</h2>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Hola ${data.name}, has consultado por disponibilidad de cupos en el curso ${kurse.name} que se dicta los días:</p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; text-align: center; font-weight: bolder">${kurse.days} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> en el horario </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); text-align: center;font-weight: bolder" > ${kurse.schedule} </p>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Recibimos tu consulta y nos comunicaremos a la brevedad para conocernos y ultimar detalles. </p>
                  <p style="font-family:sans-serif; text-align: right;margin-right: 20px;">
                    <img style="margin: 20px auto; height: 100px;max-height: 40px" src="https://i.ibb.co/VVnZCn6/musikolibri-logo.png" alt="Musikolibri"></img>
                  </p>
                  <br>
                  <br>
                  <p style="font-size:smaller; font-family:sans-serif; margin: 20px;color: rgb(132, 132, 132)">Por favor no respondas a este correo, el mismo fue enviado desde una casilla que no es monitoreada por humanos.</p>
                  <p style="font-size:xx-small; font-family:sans-serif; text-align: center;margin-right: 20px;color: rgb(132, 132, 132)">¿Dudas? Puedes comunicarte con nosotros directamente por nuestra <a href="https://musikolibri.vercel.app">web</a>
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