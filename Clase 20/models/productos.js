import mongoose from 'mongoose';

const productosCollection = 'productos';

// const productosSchema = new mongoose.Schema({
//     // nombre: {type: String, require: true, max: 80},
//     // descripcion: {type: Sting, max: 200 },
//     // codigo: {type: String, require: true, max: 8},
//     // foto: {type: String, max: 400},
//     // precio: {type: Number, require: true},
//     // stock: {type: Number, require: true}
// })

// export const productos = mongoose.model(productosCollection, productosSchema);

export const productos = mongoose.model(productosCollection);