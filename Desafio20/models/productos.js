import mongoose from 'mongoose';

const productosCollection = 'productos';

const productosSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    codigo: String,
    foto: String,
    precio: Number,
    stock: Number,
})

export const productos = mongoose.model(productosCollection, productosSchema);

// export const productos = mongoose.model(productosCollection);