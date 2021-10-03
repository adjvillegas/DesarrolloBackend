const express = require('express');
const app = express();
const faker = require('faker');


app.use(express.json())
app.use(express.text())


app.use('/productos/vista-test',require('./routes/productos.vistatest.route'));
app.listen(8080,()=>{
    console.log('Listen')
})