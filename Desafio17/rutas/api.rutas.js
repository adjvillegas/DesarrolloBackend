const express = require('express');
const api = express();

//Rutas
const routeCarrito = require('./carrito/carrito.rutas');
const routeProducto = require('./productos/productos.rutas');

api.use('/carrito', routeCarrito);
api.use('/productos', routeProducto);

module.exports = api;