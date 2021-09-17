const { option } = require('../options/mariaDB.js');
const knex = require('knex')(option);

knex.from('productos').where('codigo', 'AN1TT3S').update({precio: 1})
.then(() => console.log("productos update"))
.catch((err) => {console.log(err); throw err;})
.finally(() => knex.destroy());