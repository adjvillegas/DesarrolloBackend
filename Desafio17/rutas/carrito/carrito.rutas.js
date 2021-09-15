const express = require('express');
const routerCarrito = express.Router();

routerCarrito.use(express.json());
routerCarrito.use(express.urlencoded({extended: true}))

const Archivo = require('../../controller/archivoClass');

const file = new Archivo();

routerCarrito.get('/listar/:id?', (req, res) => {

    const fileRead = async(id) => {
        const response = await file.readForId('carrito', id)
        res.json(response)
    }
 
    fileRead(req.params.id);

});

routerCarrito.post('/agregar/:id_producto', (req, res) => {

    const fileSave = async(id) => {

        let respose;
        const currentProduct = await file.readForId('productos', id);
        
        if (currentProduct.length > 0) {

            respose = await file.download('carrito', currentProduct);
        
        } else {

            respose = {};

        }

        res.json(respose);

    }

    fileSave(req.params.id_producto);

});


routerCarrito.delete('/borrar/:id', (req, res) => {

    const fileDelete = async(id) => {

        const respose = await file.delete('carrito', id);

        res.json(respose)

    };

    fileDelete( req.params.id )   

});

module.exports = routerCarrito;