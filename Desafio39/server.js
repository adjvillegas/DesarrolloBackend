const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const util = require('./util/productos')
const validaciones = require('./validaciones/productos')
const model = require('./model/productos')

/* ------------ SWAGGER DOCUMENTATION --------------- */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


/* ------------ INSTANCIA 1 DE SERVIDOR --------------- */
const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({extended: true}))
app.use(express.json())

/* Middleware custom */
app.use((req,res,next) => {
    next()
})


let productos = []

/* ---------------------------------------------------- */
/*                   Ruta GET: params                   */
/* ---------------------------------------------------- */
app.get('/datos/:codigo?/:descripcion?', (req,res) => {
    let { url, method } = req
    //let descripcion = req.query.descripcion
    //let { descripcion } = req.query  //destructuring object
    //let descripcion = req.params.descripcion
    let { codigo, descripcion  } = req.params  //destructuring object
    res.send(`<h3>Ruta: ${method} - url: ${url} - descripcion: ${descripcion} - codigo: ${codigo}</h3>`)
})


/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
/*                     API REST FULL                    */
/* ---------------------------------------------------- */
/* ---------------------------------------------------- */

/* ---------------------------------------------------- */
/*     Definición de rutas GET (Pedir información)      */
/* ---------------------------------------------------- */
router.get('/:id?', (req,res) => {
    let {id} = req.params

    let query = id? {_id:id} : {}
    model.producto.find(query, (err,productos) => {
        if(err) throw new Error(`error en lectura de productos: ${err}`)
        productos.forEach(producto => {
            console.log(producto)
        })
        res.send(productos)
    })
    /*
    if(id) {
        let index = util.getIndex(id, productos)
        let producto = productos[index]
        res.send(producto)
    }
    else {
        res.send(productos)
    }
    */
})
/* ---------------------------------------------------- */
/*     Definición de rutas POST  (Enviar información)   */
/* ---------------------------------------------------- */
router.post('/', (req,res) => {
    let producto = req.body
    
    let val = validaciones.validar(producto)
    if(val.result) {
        const productoNuevo = new model.producto(producto)
        productoNuevo.save(err => {
            if(err) throw new Error(`error en escritura de producto: ${err}`)
            console.log('producto incorporado')
            //res.send({...producto, descripcion: 'Mantecol'}) //Para causar error de test en post
            res.send(producto)
        })

        /*
        producto.id = util.getNextId(productos)
        producto.timestamp = util.getTimestamp()
        producto.fyh = util.getFechayHora()
        //producto.fyh = util.getFechayHora
        productos.push(producto)
        res.send(producto)
        */
    }
    else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas PUT (Actualizar información)   */
/* ---------------------------------------------------- */
router.put('/:id', async (req,res) => {
    let {id} = req.params

    let producto = req.body

    let val = validaciones.validar(producto)
    if(val.result) {
        let rta = await model.producto.updateOne({_id:id},{$set: producto })
        res.send(rta)
        /*
        producto.timestamp = util.getTimestamp()
        producto.fyh = util.getFechayHora()
        let index = util.getIndex(id, productos)
        if(index != -1) {
            producto.id = id
            //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            productos.splice(index,1,producto)
        }
        else {
            producto.id = util.getNextId(productos)
            productos.push(producto)
        }
        res.send(producto)
        */
    }
    else {
        res.send(val.error)
    }
})

/* ---------------------------------------------------- */
/*   Definición de rutas DELETE (Eliminar información)  */
/* ---------------------------------------------------- */
router.delete('/:id', async (req,res) => {
    let {id} = req.params

    let rta = await model.producto.deleteOne({_id:id},)
    res.send(rta)
    //let index = util.getIndex(id, productos)
    //let producto = productos.splice(index,1)
    //res.send(producto)
})
//----------------------------------------------------------------

app.use('/api',router)


const PORT = process.env.PORT || 8080

/* ---------------------------------------------------------------------------------- */
/* Conexión a MongoDB */
mongoose.connect('mongodb://localhost/mibase', {
//mongoose.connect('mongodb+srv://daniel:daniel123@misdatos.fs00f.mongodb.net/mibase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw new Error(`Error de conexión en la base de datos: ${err}`)
    console.log('Base de datos conectada!')

    /* ----------- app.listen : pone en marcha el listen del servidor ------------------ */
    const server = app.listen(PORT, () => {
        console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
    })
    server.on('error', error => console.log(`Error en Servidor: ${error}`))
})