// server.ts
import express, { Request, Response } from 'express';
import * as AWS from 'aws-sdk';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

AWS.config.update({
  accessKeyId: 'TU_ACCESS_KEY_ID',
  secretAccessKey: 'TU_SECRET_ACCESS_KEY',
  region: 'TU_REGION', // por ejemplo, 'us-east-1'
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

app.post('/enviar-correo', (req: Request, res: Response) => {
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

  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log(data);
      res.send('Correo enviado con éxito');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});