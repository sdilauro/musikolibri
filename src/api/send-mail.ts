import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email, name, kurse } = req.body;

  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: `<div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
          <div style=" padding:20px; background-color:#f5eee6; border-style:solid; border-width:0px;border-radius: 10px;">
            <h2 style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px; font-weight: bolder; text-align: center">¡Consulta recibida con éxito!</h2>
            <p style="font-family:sans-serif;color:rgb(0, 0, 0); margin: 20px"> Hola ${name}, has consultado por disponibilidad de cupos en el curso ${kurse}.</p>
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
        </div>`,
        },
      },
      Subject: {
        Data: `Musikolibri - Kurse ${kurse}`,
      },
    },
    Source: process.env.SES_EMAIL_ADDRESS || '',
  };

  try {
    await sendEmail(params);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
};

const sendEmail = (params: AWS.SES.SendEmailRequest) => {
  return new Promise<void>((resolve, reject) => {
    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.error('Error al enviar el correo electrónico:', err);
        reject(err);
      } else {
        console.log('Correo electrónico enviado:', data.MessageId);
        resolve();
      }
    });
  });
};

