const express = require('express');
const app = express();

//Ruta a API
const api = require('./rutas/api.rutas')

app.use('/api', api)
app.use(express.static('public'))

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});

server.on("error", err => console.error(`Error en servidor ${err}`));
