const express = require('express');
const Items = require('./controller/items');
const multer = require("multer");
// const Archivo = require('./controller/archivo');

const app = express();
const oProduct = new Items();
// const oArchivo = new Archivo();

const PORT = 8080;

let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "uploads");

    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + "-" + Date.now())
    }
})

let upload = multer({ storage });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('pages/index', { message: 'Bienvenido al desafio 12 con WebSocket 1', products: oProduct.getProducts(), registros: oProduct.Items.length })

});

app.post('/productos/guardar', upload.single('thumbnail'), (req, res, next) => {

    if (!req.body.title || !req.body.price || !req.body.thumbnail) {

        if (!req.file) {
            const error = new Error("Sin archivos");
            error.httpStatusCode = 400;
            return next(error)
        } else if (!req.body.title || !req.body.price) {
            const error = new Error(`Datos incompletos titulo: ${req.body.title} pice: ${req.body.price } thumbnail: ${req.body.thumbnail}`);
            error.httpStatusCode = 400;
            return next(error)
        }
    }

    let { title, price } = req.body;

    oProduct.saveProduct( title, price, req.file);

    res.send(title, price, req.file);

    // let { title, price, thumbnail } = req.body;

    // if ( title !== undefined && 
    //      price !== undefined && 
    //      thumbnail !== undefined) {

    //         oProduct.guardar(title, price, thumbnail);

    //         res.json({nombre: title, precio: price, url: thumbnail})
    //    res.render('pages/index', {message: `Guardaste Algo ${title} ${price} ${thumbnail}`, view: 'home'})

    //    } 
    //    else     res.render('pages/index', {message: `No pudiste guardar ${title} ${price} ${thumbnail}`, view: 'home'}) 
    // res.render('pages/index', {message: 'Bienvenido al desafio 12 con WebSocket 1', registros: product.Items.length})
});

app.get('/error', (req, res, next) => {

    return next(new Error('Error...'));
    res.status(500);
    res.render('error', { error: err });


})

app.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}/`)
});
