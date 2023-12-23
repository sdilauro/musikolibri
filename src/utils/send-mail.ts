import AWS, { SES } from 'aws-sdk';

AWS.config.logger = console;
const ses = new SES({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCES_KEY
});
let email:string
if(process.env.SES_EMAIL_ADDRESS){
  email = process.env.SES_EMAIL_ADDRESS
} else {email=""}


export const sendEmail = async (to: string, name: string, kurse: string) => {
  console.log({ses})
  const params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: { Data: `
        <div style="width:80%; max-width: 500px; align-items:center; justify-content: center; margin:0px;">
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
      </div>
    ` },
      },
      Subject: { Data: `Musikolibri - ${kurse}` },
    },
    Source: email,
  };

  try {
    await ses.sendEmail(params).promise();
    console.log('Correo enviado exitosamente');
  } catch (error) {
    console.error('Error al enviar el correo', error);
  }
};