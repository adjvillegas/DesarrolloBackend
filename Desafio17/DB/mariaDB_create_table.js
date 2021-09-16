const { option } = require('../options/mariaDB.js');
const knex = require('knex')(option);

knex.schema.createTable('productos', table => {
    table.increments('id')
    table.string('nombre')
    table.string('descripcion')
    table.string('codigo')
    table.string('foto')
    table.integer('precio')
    table.integer('stock')
})
    .then(() => console.log('table Productos Create'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => knex.destroy() );
