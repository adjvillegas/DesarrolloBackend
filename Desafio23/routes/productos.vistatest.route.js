const express = require('express');
const router = express.Router();
const {get} = require('../generadores/productos');
const productos = require('../controllers/productos.controllers');


router.get('/',(req,res)=>{

    res.json(productos.getUsuarios());


})

router.post('/', (req, res) => {

    let {cant} = req.query || 10;

    res.json(productos.generar(cant));



})

module.exports = router;