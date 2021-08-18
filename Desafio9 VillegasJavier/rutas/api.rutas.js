const express = require('express')
const router = express.Router()

const Items = require('../itemsClass/items');
const items = new Items();

router.use(express.json());
router.use(express.text());
router.use(express.urlencoded({extended: true}))

//    Devuelve array de productos --> Si no existen devuelve error
router.get('/productos/listar', (req, res) => {
  
    if (items.isHasExist()) {
        res.json(items.Items)
    } else  res.json({error: `no hay productos cargados`})
    // 

});

// Lista en forma individual --> Si no existe devuelve error
router.get('/productos/listar/:id', (req, res) => {

    let listar = items.listar(req.params.id)

    if (listar) {
        res.json(listar)
    } else res.json({error: 'Producto no cargado'})

});

// Almacena un producto --> Devuelve el producto guardado
router.post('/productos/guardar', (req, res) => {

    if ( req.body.title !== undefined && 
         req.body.price !== undefined && 
         req.body.thumbnail !== undefined) {
    
        items.guardar(req.body.title, req.body.price, req.body.thumbnail);

        res.json(items.Items);

    } else res.json({error: 'Error al guardar'});

});

router.put('/productos/actualizar/:id', (req, res) => {

    try {
        items.update(req.params.id, req.body)
        res.json({success: 'Modificado'});
    } catch (error) {
        res.json({error: 'no se guardo'})
    }
        
})

router.delete('/productos/borrar/:id', (req, res) => {
    res.json(items.delete(req.params.id));
})

module.exports = router;