const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hellen.gleichner@ethereal.email',
        pass: 'JHgaUYcrx3HNdVAscc'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: ['facundolitterio7@gmail.com', 'hellen.gleichner@ethereal.email'],
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return err
    }
    console.log(info)
})

const accountSid = 'AC0b439be5828c1a88f32b7125b0e73685';
const authToken = '9de493a9f76c17c32ce083db53cf7512';

const twilio = require('twilio')
const client = twilio(accountSid, authToken);

client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+19714071392',
      to: '+5491159617065'
})
.then(message => console.log(message.sid))
.catch(console.log)