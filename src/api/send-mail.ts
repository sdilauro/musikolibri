// pages/api/enviar-correo.ts
import { NextApiRequest, NextApiResponse } from 'next';
import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'TU_ACCESS_KEY_ID',
  secretAccessKey: 'TU_SECRET_ACCESS_KEY',
  region: 'TU_REGION', // por ejemplo, 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { destinatario, asunto, mensaje } = req.body;

    const params: AWS.SES.SendEmailRequest = {
      Destination: {
        ToAddresses: [destinatario],
      },
      Message: {
        Body: {
          Text: {
            Data: mensaje,
          },
        },
        Subject: {
          Data: asunto,
        },
      },
      Source: 'jsdilauro@gmail.com',
    };

    try {
      const data = await ses.sendEmail(params).promise();
      console.log(data);
      res.status(200).json({ mensaje: 'Correo enviado con éxito' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}