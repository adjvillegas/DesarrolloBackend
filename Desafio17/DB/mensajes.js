const { options } = require('../options/SQLite3');
const knex = require('knex')(options);

knex.schema.createTable('mensajes', table => {
    table.increments('id')
    table.string('type')
    table.string('msg')
})
    .then(() => console.log('table mensajes Create'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => knex.destroy() );