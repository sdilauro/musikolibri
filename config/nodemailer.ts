import nodemailer from 'nodemailer'

const email = process.env.NM_EMAIL
const pass = process.env.NM_PASS

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
    from:email,
}