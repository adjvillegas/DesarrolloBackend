const express = require('express');

// const Items = require('./itemsClass/items');
// const items = new Items();

const api = require('./rutas/api.rutas')

const app = express();

app.use('/api', api)

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});


server.on("error", err => console.error(`Error en servidor ${error}`));