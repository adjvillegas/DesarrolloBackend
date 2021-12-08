//const getNextId = productos => productos.length + 1
const getNextId = productos => productos.length? (productos[productos.length-1].id + 1) : 1
const getTimestamp = () => Date.now()
const getFechayHora = () => new Date().toLocaleString()

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const getIndex = (id,productos) => productos.findIndex(producto => producto.id == id)

//const getFechayHora = new Date().toLocaleString()

module.exports = {
    getNextId,
    getTimestamp,
    getFechayHora,
    getIndex
}