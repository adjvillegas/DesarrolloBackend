const productoConInfo = producto => {
    return {
        fyh : new Date().toLocaleString(),
        pid: process.pid,
        producto : producto.nombre.toUpperCase(),
        precioEnPesos: producto.precio,
        precioEnUSD: producto.precio / 157,
    }
}

export default {
    productoConInfo
}