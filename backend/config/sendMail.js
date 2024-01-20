import dotenv from 'dotenv';
import fs from 'fs';
import handlebar from 'handlebars';
import nodemailer from 'nodemailer';

dotenv.config();

const filePath = './views/mail.html';

const emailTemplateSource = fs.readFileSync(filePath, 'utf8');

const compliedTemplate = handlebar.compile(emailTemplateSource);


const sendMail = async (email, verificationLink) => {
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7b6b44efb9644c",
            pass: "f6e2a2f714d965"
        }
    });
    const message = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: 'Email Verification',
        html: compliedTemplate({ verificationLink }),
    }
    await transporter.sendMail(message, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return process.exit(1);
        }
    });

}

export { sendMail };
