const getIndex = (id,productos) => productos.findIndex(producto => producto.id == id)
const getFecha = ()=> new Date().toDateString()
const nextId = productos => productos.length && productos[productos.length -1].id+1 || 1
module.exports = {
    getIndex,
    getFecha,
    nextId

}