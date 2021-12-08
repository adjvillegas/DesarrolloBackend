const faker = require('faker')

//faker.locale = 'es'

const get = () => ({
    codigo: faker.random.number(),
    descripcion: faker.commerce.productDescription()
})

module.exports = {
    get
}