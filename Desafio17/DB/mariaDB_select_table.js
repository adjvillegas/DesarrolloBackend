const { option } = require('../options/mariaDB.js');
const knex = require('knex')(option);

knex.from('productos').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['nombre']}`)
        }
    })
    .catch((err) => {console.log(err); throw err})
    .finally(() => knex.destroy());