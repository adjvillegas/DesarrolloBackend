// getting-started.js
const mongoose = require('mongoose');


main().catch(err => console.log(err));

async function main() {
  let rta = await mongoose.connect('mongodb://localhost:27017/ecommerce');

  console.log('Base de datos Conectada')

  const productosCollection = 'productos';

  const productosSchema = new mongoose.Schema({
      nombre: String,
      descripcion: String,
      codigo: String,
      foto: String,
      precio: Number,
      stock: Number,
  })
  
  const mongoProducto = mongoose.model(productosCollection, productosSchema);

  console.log('Inicio de proceso de Alta')

  const producto = {
    nombre: "Producto 2",
    descripcion: "producto de prueba MongoDb",
    codigo: "AN1TT3S",
    foto: "NUEVA URL",
    precio: 170,
    stock: 101
  }

  const productoSaveModel = new mongoProducto(producto)

  let productoSave = productoSaveModel.save()

  console.log(productoSave)

  console.log('Producto Guardado')

  console.log('Inicio de proceso de Read All')

  let productoReadAll = await mongoProducto.find({})

  console.log(productoReadAll)
  console.log('producto Leido')

  console.log('Inicio de proceso de Update')

  let productoUpdate = await mongoProducto.updateOne( {codigo: "AN1TT3S"}, {
      $set: {precio: 110}
  } )

  console.log(productoUpdate)
  console.log('Finalizado de proceso de Update')

  console.log('Inicio de Borrado de producto')

  let productoDelete = await mongoProducto.deleteOne( {codigo: "AN1TT3S"} )
  
  console.log(productoDelete)

  console.log('Fin de Borrado de producto')
}