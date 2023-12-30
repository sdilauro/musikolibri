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
          to:data.email,
          subject: `Musikolibri - Enviaste una consulta`,
          text: `Hola ${data.name}, nos has contactado a través de nuestra web. Recibimos tu consulta y nos comunicaremos a la brevedad para conocernos y poder evacuar todas tus dudas.`,
          html: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
          <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
            <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Gracias por contactarte!</h2>
            <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px">Hola ${data.name}, nos has contactado a través del formulario de contacto. Recibimos tu consulta y nos comunicaremos a la brevedad para conocernos y poder evacuar todas tus dudas.</p>
            <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Tu mensaje fue: </p>
            <p style="font-family:sans-serif;color:rgb(0, 0, 0); text-align: left;font-weight: bolder; font-style:italic; margin: 20px" > ${data.message} </p>
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