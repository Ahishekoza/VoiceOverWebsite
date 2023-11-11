import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import nodemailer from 'nodemailer'
const app = express();


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.post('/sendEmail',(req,res)=>{

    const {email,name,message} = req.body;

    // transporter ---
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'abhishekoza11@gmail.com',
            pass:'sppk otzj sbps jtvu'
        },
        secure: true

    })

    // mailOptions ---
    const mailOptions = {
        from : 'abhishekoza11@gmail.com',
        to : 'abhishekoza11@gmail.com',
        subject : 'New Inquiry from Website',
        text : `Name :  ${name} , Email : ${email}  and message : ${message !== '' ?  message : 'Message Not Sent'}`
    }

    try {
        transporter.sendMail(mailOptions).then((response)=>{
            res.status(200).json({
                message : 'Thank you for Contacting'
            })
        })
    } catch (error) {
        res.status(404).json({
            message:`error occurred ${error}`
        })
    }

    // sendEmail ---

})



app.listen(3000,()=>{
    console.log('listening on port 3000')
})