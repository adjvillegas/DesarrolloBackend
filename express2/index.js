
const express = require('express')
const app = express()
// const router = express.Router()

const usuario = require('./rutas/usuarios.ruta')
const producto = require('./rutas/productos.rutas')


// router.get('', (req, res) => {
//     res.send('soy ()')
// })

// router.get('/test', (req, res) => {
//     res.send('soy test')
// })

// app.get('',(req, res) => {
//     res.send('hola')
// })
// app.use(router)

// 
app.use((req,res,next) => {
    console.log('Middleware a nivel aplicación (app)')
    next()
})

app.use('/usuarios', usuario)
app.use('/productos', producto)
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('escuchando')
})


