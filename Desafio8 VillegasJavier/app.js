const express = require('express');

const Items = require('./itemsClass/items');
const items = new Items();

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}))

const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});

// Todo se responde en formato JSON --> Debe andar en POSTMAN
//    Devuelve array de productos --> Si no existen devuelve error
app.get('/api/productos/listar', (req, res) => {
  
    if (items.isHasExist()) {
        res.json(items.Items)
    } else  res.json({error: `no hay productos cargados`})
    // 

});

// Lista en forma individual --> Si no existe devuelve error
app.get('/api/productos/listar/:id', (req, res) => {

    let listar = items.listar(req.params.id)
    
    if (listar) {
        res.json(listar)
    } else res.json({error: 'Producto no cargado'})

});


// Almacena un producto --> Devuelve el producto guardado
app.post('/api/productos/guardar', (req, res) => {

        if ( req.body.title !== undefined && 
             req.body.price !== undefined && 
             req.body.thumbnail !== undefined) {
        
            items.guardar(req.body.title, req.body.price, req.body.thumbnail);

            res.json(items.Items);

        } else res.json({error: 'Error al guardar'});

});


server.on("error", err => console.error(`Error en servidor ${error}`));