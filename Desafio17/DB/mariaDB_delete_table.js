const { option } = require('../options/mariaDB.js');
const knex = require('knex')(option);

knex.from('productos').del()
.then(() => console.log("borrado todos los productos"))
.catch((err) => {console.log(err); throw err;})
.finally(() => knex.destroy());