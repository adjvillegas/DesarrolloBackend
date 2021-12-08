const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    codigo : String,
    descripcion: String
})

const producto = mongoose.model('productos', productoSchema)

module.exports = {
    producto
}