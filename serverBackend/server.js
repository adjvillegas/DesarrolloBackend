const express = require('express')

const APP = express()

const PORT = 8081

APP.use(express.json())
APP.use(express.urlencoded({extended: true}))

//  PETICIONES
APP.get('/items', (req, res) => {
    res.json({items: 'mis items', cantidad: '200'})
})

APP.get('item-random', (req, res) => {
    res.json({item: 'item-random'})
})

APP.get('/visitas', (req, res) => {
    res.json({visitas: { items: 'mis items', cantidad: '22'}})
})


const server = APP.listen(PORT, () => {
    console.log(`Servidor inicializado en puerto ${server.address().port}` )
})

server.on('err', err => console.log(`Error en servidor ${err}`))

