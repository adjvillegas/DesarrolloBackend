const express = require('express');
const app = express();
const faker = require('faker');

let msgExport = require('./models/mensaje.json')

let {normalize, schema} = require('normalizr');


const authorSchema = new schema.Entity('author', {}, { idAttribute: "email"})

const msgSchema = new schema.Entity('mensajes',{
   
    author: authorSchema
 
 })

 const normalizedData = normalize(msgExport, msgSchema);

 console.log(JSON.stringify(normalizedData))


app.use(express.json())
app.use(express.text())


app.use('/productos/vista-test',require('./routes/productos.vistatest.route'));
app.listen(8080,()=>{
    console.log('Listen')
})