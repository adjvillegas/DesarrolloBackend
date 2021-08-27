const express = require('express');
const app = express();
const PORT = 8080;

const Items = require('./itemsClass/items');
const items = new Items();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.set('views', './views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    // res.render('index.pug', {message: 'Bienvenido al desafio 11 con PUG'})
    res.render('pages/index', {message: 'Bienvenido al desafio 11 con EJS', view: 'home'})    
})

app.get('/productos/vista', (req, res) => {

    try {

        res.render('pages/index', {message: 'Visualizar Producto', products: items.Items, view: 'get', registros: items.Items.length})
  
    } catch (error) {
        res.render('pages/index', {message: 'Visualizar Producto', products: items.Items, view: 'get', registros: false })        
    }


})

app.get('/productos/guardar', (req, res) => {
    res.render('pages/index', {message: 'Cargar nuevo producto', view: 'post'})
})

app.post('/productos/guardar', (req, res) => {
    let { title, price, thumbnail } = req.body;

    if ( title !== undefined && 
        price !== undefined && 
        thumbnail !== undefined) {
   
       items.guardar(title, price, thumbnail);

       res.render('pages/index', {message: `Guardaste Algo ${title} ${price} ${thumbnail}`, view: 'home'})

   } else     res.render('pages/index', {message: `No pudiste guardar ${title} ${price} ${thumbnail}`, view: 'home'}) 

})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})

