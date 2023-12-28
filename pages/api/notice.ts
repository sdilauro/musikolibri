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
                to:process.env.NM_EMAIL,
                subject: `Musikolibri - Consulta por ${kurse.name}`,
                text: `Padre: ${data.name}, Niño: ${data.child}, Curso: ${kurse.name}`,
                html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
                <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
                  <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Te ha llegado una consulta!</h2>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Padre: ${data.name}
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Niño: ${data.child}
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Curso: ${kurse.name}
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