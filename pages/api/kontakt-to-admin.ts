import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method = 'POST') {
        const data = req.body
        if (!data.email || !data.name || !data.message) {
            return res.status(400).json({message: "Bad request"})
      }


      try {
          
              await transporter.sendMail({
                ...mailOptions,
                to:process.env.NM_EMAIL,
                subject: `Musikolibri - Ha llegado una nueva consulta`,
                text: `Nombre: ${data.name}`,
                html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
                <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
                  <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Te ha llegado una consulta!</h2>
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Nombre: ${data.name}
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Email: ${data.email}
                  <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Mensaje: ${data.message}
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