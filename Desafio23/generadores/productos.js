const faker = require('faker');

faker.locale = "es"

exports.get = ()=> ({
    nombre:faker.commerce.product(),
    precio:faker.commerce.price(),
    foto:faker.image.food()
})