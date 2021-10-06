const {get} = require('../generadores/productos');
const {getFecha,nextId} = require('../utils');
let usuarios=[];

const generar  = (cant) => {
let arr = [];

for (let i = 0; i < cant; i++){

let producto = get();
producto.id = i + 1;
producto.fecha = getFecha();
 arr.push(producto)

}
producto = arr;
return arr;



}
// const getUsuarioById = (id) => {
//     return usuarios[getIndex(id,usuarios)];
// }
const agregar = ()=> {
    let producto = get();
    producto.id = nextId(producto);
    producto.fecha = getFecha();
    producto.push(producto)

    return producto;
}


const getProductos = ()=> producto;

module.exports = {
    generar,
    getProductos,
    agregar
}