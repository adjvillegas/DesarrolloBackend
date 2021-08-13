const express = require('express')
const router = express.Router()

router.get('', (req,res) => {
    res.send('trae todo slos productos')
} )

router.get("/delete/:id", (req,res) => {
    res.send('esta ruta borra el productos ' + req.params.id)
} )

router.get('/update/:id', (req,res) => {
    res.send('esta ruta actualiza el productos ' + req.params.id)
} )

module.exports = router;