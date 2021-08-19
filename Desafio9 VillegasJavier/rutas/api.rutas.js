const express = require('express')
const routerApi = express.Router()

const Items = require('../itemsClass/items');
const items = new Items();

routerApi.use(express.json());
routerApi.use(express.text());
routerApi.use(express.urlencoded({extended: true}))

//    Devuelve array de productos --> Si no existen devuelve error
routerApi.get('/productos/listar', (req, res) => {
  
    if (items.isHasExist()) {
        res.json(items.Items)
    } else  res.json({error: `no hay productos cargados`})
    
});

// Lista en forma individual --> Si no existe devuelve error
routerApi.get('/productos/listar/:id', (req, res) => {

    let listar = items.listar(req.params.id)

    if (listar) {
        res.json(listar)
    } else res.json({error: 'Producto no cargado'})

});

// Almacena un producto --> Devuelve el producto guardado
routerApi.post('/productos/guardar', (req, res) => {

        if ( req.body.title !== undefined && 
             req.body.price !== undefined && 
             req.body.thumbnail !== undefined) {
        
            items.guardar(req.body.title, req.body.price, req.body.thumbnail);

            res.json(items.Items);

        } else res.json({error: 'Error al guardar'});

});

routerApi.put('/productos/actualizar/:id', (req, res) => {
    items.update(req.params.id)
})

routerApi.delete('/productos/borrar/:id', (req, res) => {
    res.json(items.delete(req.params.id, res.body))
})

module.exports = routerApi;