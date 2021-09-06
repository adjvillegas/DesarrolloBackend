
const express = require('express');
const moment = require('moment');

const producto = []
const mensajes = [];

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 8080;

app.use(express.static('./public'));

app.get('/', (req, res) => {


    res.send('index.html')

});

app.get('/producto', (req, res) => {
    res.json(producto);
})
app.get('/mensajes',(req,res)=>{
    res.json(mensajes);
})


io.on('connection', (socket) => {

    socket.emit('welcome',{ producto })
    socket.emit('message',{ mensajes })
    
    socket.on('submit',(data)=>{
       producto.push({title:data.title, price: data.price, id:socket.id})    
       io.emit("visualizar",{ producto })

    })

    socket.on('msgClick',(data)=>{

        let msg = { email: data.email, text: data.text, fecha: moment().format('DD/MM/YYYY HH:mm'), id:socket.id}

       io.emit("user_msg", msg )
       mensajes.push( { email:data.email,
                        fecha: moment().format('DD/MM/YYYY HH:mm'),
                        mensaje: data.text,
                        id:socket.id })
    })    

})

http.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}/`)
});