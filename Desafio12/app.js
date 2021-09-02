
const express = require('express');

const producto = []
// const multer = require("multer");


// const Items = require('./controller/items');

// const Archivo = require('./controller/archivo');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

// const oProduct = new Items();
// const oArchivo = new Archivo();

const PORT = 8080;

// let storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, "uploads");

//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname + "-" + Date.now())
//     }
// })

// let upload = multer({ storage });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static(__dirname + '/public'));
app.use(express.static('./public'));

// app.set('views', './views');
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    // const fnGetProducts = async() => { const product = await oProduct.getProducts(); return product}

    // fnGetProducts().then( products => {
    //     res.render('pages/index', { 
    //         message: 'Bienvenido al desafio 12 con WebSocket 1',
    //         products: products,
    //         registros: products.length
    //     })
    // })

    res.send('index.html')

});

app.get('/producto', (req, res) => {
    res.json(producto);
})

// app.post('/productos/guardar', upload.single('thumbnail'), (req, res, next) => {
    
//     if (!req.body.title || !req.body.price || !req.body.thumbnail) {

//         if (!req.file) {
//             const error = new Error("Sin archivos");
//             error.httpStatusCode = 400;
//             return next(error)
//         } else if (!req.body.title || !req.body.price) {
//             const error = new Error(`Datos incompletos titulo: ${req.body.title} pice: ${req.body.price} thumbnail: ${req.body.thumbnail}`);
//             error.httpStatusCode = 400;
//             return next(error)
//         }
//     }

//     let { title, price } = req.body;


//     oProduct.saveProduct(title, price, req.file);

//     res.json({termino: true});

// });

// app.get('/error', (req, res, next) => {

//     return next(new Error('Error...'));
//     res.status(500);
//     res.render('error', { error: err });


// })

// app.listen(PORT, () => {
//     console.log(`Server iniciado en http://localhost:${PORT}/`)
// });


io.on('connection', (socket) => {

    socket.emit('message',{producto})
    
    socket.on('submit',(data)=>{
       producto.push({title:data.title, price: data.price, id:socket.id})    
       console.log(producto)    
       io.emit("visualizar",{ producto })

    })

})

http.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}/`)
});