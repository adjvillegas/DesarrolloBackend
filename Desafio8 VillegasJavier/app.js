const express = require('express');

const items = {}

const app = express();

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
} );


app.get('/api/productos/listar', (req, res) => {

})

app.get('/api/productos/listar/:id', (req, res) => {

})

app.post('api/productos/guardar/', (req, res) => {

})


server.on("error", err => console.error(`Error en servidor ${error}`))