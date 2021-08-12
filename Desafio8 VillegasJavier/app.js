const express = require('express');

const items = {}

const app = express();

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
} );







server.on("error", err => console.error(`Error en servidor ${error}`))