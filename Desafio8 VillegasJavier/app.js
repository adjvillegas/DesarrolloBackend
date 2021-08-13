const express = require('express');

const Items = require('./itemsClass/items');
const items = new Items();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});

// Todo se responde en formato JSON --> Debe andar en POSTMAN
//    Devuelve array de productos --> Si no existen devuelve error
app.get('/api/productos/listar', (req, res) => {

    if (items.isHasExist())
        res.json({error: 'no hay productos cargados'})

    res.json(items)

});

// Lista en forma individual --> Si no existe devuelve error
app.get('/api/productos/listar/:id', (req, res) => {

});


// Almacena un producto --> Devuelve el producto guardado
app.post('api/productos/guardar/', (req, res) => {

});


server.on("error", err => console.error(`Error en servidor ${error}`));