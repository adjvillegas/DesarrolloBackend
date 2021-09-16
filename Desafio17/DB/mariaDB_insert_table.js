const { option } = require('../options/mariaDB.js');
const knex = require('knex')(option);

const items = [
    { 
        nombre: "Producto 1",
        descripcion: "producto de prueba mySQL 2",
        codigo: "AN1TT3S",
        foto: "NUEVA URL",
        precio: 170,
        stock: 101
    },
    { 
        nombre: "Producto 2",
        descripcion: "producto de prueba mySQL 2",
        codigo: "AN11G3S",
        foto: "URL",
        precio: 70,
        stock: 81
  }
]

knex('productos').insert(items)
    .then(() => console.log("data insert"))
    .catch((err) => {console.log(err); throw err;})
    .finally(() => knex.destroy());