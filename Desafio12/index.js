const express = require('express');
const Items = require('./itemsClass/items');

const app = express();
const product = new Items();

const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.set('views', './views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    res.render('pages/index', {message: 'Bienvenido al desafio 12 con WebSocket 1', products: product.Items, registros: product.Items.length})

})

app.post('/productos/guardar', (req, res) => {
    let { title, price, thumbnail } = req.body;

    if ( title !== undefined && 
        price !== undefined && 
        thumbnail !== undefined) {
   
            product.guardar(title, price, thumbnail);
            
            res.json({nombre: title, precio: price, url: thumbnail})
    //    res.render('pages/index', {message: `Guardaste Algo ${title} ${price} ${thumbnail}`, view: 'home'})

   } 
//    else     res.render('pages/index', {message: `No pudiste guardar ${title} ${price} ${thumbnail}`, view: 'home'}) 
    res.render('pages/index', {message: 'Bienvenido al desafio 12 con WebSocket 1', registros: product.Items.length})
})

app.listen(PORT, () => {
    console.log(`Server iniciado en http://localhost:${PORT}/`)
})
