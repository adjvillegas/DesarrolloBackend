const express = require('express');
const app = express();

const Items = require('./itemsClass/items');
const items = new Items();
//Carga del modulo handlebars
const handlebars = require('express-handlebars')

// Establecer la configuración de handlebars
app.engine("hbs",
            handlebars({
                extname: ".hbs",
                defaultLayout: "index.hbs",
                layoutsDir: __dirname + "/views/layouts",
                partialsDir: __dirname + "/views/partials/"
            })
            );

            app.set("view engine", "hbs");
            app.set("views", "./views")


// app.use('/api', api)
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("main",{listarProducto: false, crearProducto: false})
})

app.get('/productos/vista', (req, res) => {

    if (items.isHasExist()) {
        res.render("main", {productos: items.Items, listarProducto: true} )
    } else  res.json({error: `no hay productos cargados`})    

})

app.get('/productos/crear', (req, res) => {

        res.render("main",{listarProducto: false, crearProducto: true})
 
})

//    Devuelve array de productos --> Si no existen devuelve error
app.get('/productos/listar', (req, res) => {
  
    if (items.isHasExist()) {
        res.json(items.Items)
    } else  res.json({error: `no hay productos cargados`})
    // 

});

// Lista en forma individual --> Si no existe devuelve error
app.get('/productos/listar/:id', (req, res) => {

    let listar = items.listar(req.params.id)

    if (listar) {
        res.json(listar)
    } else res.json({error: 'Producto no cargado'})

});

// Almacena un producto --> Devuelve el producto guardado
app.post('/productos/guardar', (req, res) => {

    if ( req.body.title !== undefined && 
         req.body.price !== undefined && 
         req.body.thumbnail !== undefined) {
    
        items.guardar(req.body.title, req.body.price, req.body.thumbnail);

        res.json(items.Items);

    } else res.json({error: 'Error al guardar'});

});

app.put('/productos/actualizar/:id', (req, res) => {

    try {
        items.update(req.params.id, req.body)
        res.json({success: 'Modificado'});
    } catch (error) {
        res.json({error: 'no se guardo'})
    }
        
})

app.delete('/productos/borrar/:id', (req, res) => {
    res.json(items.delete(req.params.id));
})


const server = app.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
});

server.on("error", err => console.error(`Error en servidor ${err}`));
