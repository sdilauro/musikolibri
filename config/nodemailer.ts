import nodemailer from 'nodemailer'

const email = process.env.NM_EMAIL
const pass = process.env.NM_PASS
const email_as = process.env.NM_EMAIL_AS

export const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: email,
            pass: pass
        }
    }
)

export const mailOptions = {
    from:'Anabela von Musikolibri <'+email_as+'>'
}