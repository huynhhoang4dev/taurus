import nodemailer from 'nodemailer'
import xoauth2 from 'xoauth2'

// const transport = nodemailer.createTransport({
//     host: '',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: account.user, // generated ethereal user
//         pass: account.pass  // generated ethereal password
//     }
// })






export const sendMail = () => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: 'hoangvuhuynh4dev@gmail.com',
                clientId: '899867769981-r6euup1jubfscouh59b7j6rln59b2d7c.apps.googleusercontent.com',
                clientSecret: 'RNBzDbNHfwvcDh6vXz2B5HRG',
                refreshToken: '1/lTJlsCQqUPRcw7efl4VC_M-ztI0JyTIsOMa4W4fbwh0'
            })
        }
    })
    
    const mailOptions = {
        from: 'Huynh Hoang <hoangvuhuynh4dev@gmail.com>',
        to: 'hvhuynh046@gmail.com',
        subject: 'Confirmed Code To Sign-Up Taurus App',
        text: '12345'
    }
    
    transporter.sendMail(mailOptions, (err, res) => {
        if(err){
            console.log('OMG')
        } else {
            console.log('Email was Sent')
        }
    })
} 