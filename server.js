const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'AC30d512b9a089988f7f906f7c07b2058c';
const authToken  = '7fc2b2215b3b37f4a7a07826b672115e';
const client = twilio(accountSid, authToken);

const fromNumber = 'whatsapp:+14155238886';

// Ruta principal para probar servidor
app.get('/', (req, res) => {
    res.send('Servidor de WhatsApp activo y listo!');
});

// Ruta que recibe mensajes del Sandbox
app.post('/send-test', (req, res) => {
    const incomingMsg = req.body.Body;
    const sender = req.body.From;

    console.log(`Mensaje recibido de ${sender}: ${incomingMsg}`);

    client.messages.create({
        from: fromNumber,
        to: sender,
        body: `Recibí tu mensaje: ${incomingMsg}`
    })
    .then(message => {
        console.log(`Mensaje enviado. SID: ${message.sid}`);
        res.sendStatus(200);
    })
    .catch(err => {
        console.error('Error al responder:', err);
        res.sendStatus(500);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
