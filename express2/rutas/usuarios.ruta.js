const express = require('express')
const router = express.Router()

router.get('', (req,res) => {
    res.send('trae todo slos usuairos')
} )


// function middle1 (req, res, next) {
//     // if (!isNaN(req.query.q))
//     //     res.send("Error no puede ser un numero")
//     //  next(new Error("Error no puede ser un numero"))
//     console.log('middlewere por ruta 1')
//     next()
// }

// function middle2 (req, res, next) {
//     // if (!isNaN(req.query.q))
//     //     res.send("Error no puede ser un numero")
//     //  next(new Error("Error no puede ser un numero"))
//     console.log('middlewere por ruta 2')
//     next()
// }

///usuarios/buscar?q=qa
router.get("/buscar",middle1, middle2, (req,res) => {
    // res.send('se buscara el usuario que comience con  ' + req.query.q)
    res.send('primer manejo de la ruta /buscar')
    next() //--> Le da control a la segunda ruta, si no se pone queda colgado (cuando existen 2 iguales)
} )

///usuarios/buscar?q=qa
router.get("/buscar",middle1, middle2, (req,res) => {
    res.send('se buscara el usuario que comience con  ' + req.query.q)
} )

router.get("/delete/:id", (req,res) => {
    res.send('esta ruta borra el usuario ' + req.params.id)
} )

router.get('/update/:id', (req,res) => {
    res.send('esta ruta actualiza el usuario ' + req.params.id)
} )

module.exports = router;