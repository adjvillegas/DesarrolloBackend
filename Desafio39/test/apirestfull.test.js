const supertest = require('supertest');
const request = supertest('http://localhost:8080')
const expect = require('chai').expect
const generador = require('../generador/productos')

// let producto = generador.get()
// console.log(producto)

describe('test api rest full', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await request.get('/api')
            //console.log(response.status)
            //console.log(response.body)
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un producto', async () => {
            /* let producto = {
                codigo: '5242',
                descripcion: 'Mantecol'
            } */
            let producto = generador.get()
            console.log(producto)
            let response = await request.post('/api').send(producto)
            //console.log(response.status)
            //console.log(response.body)
            expect(response.status).to.eql(200)

            const product = response.body
            expect(product).to.include.keys('codigo','descripcion')
            /* expect(user.codigo).to.eql('5242')
            expect(user.descripcion).to.eql('Mantecol') */
            expect(user.codigo).to.eql(producto.nombre)
            expect(user.descripcion).to.eql(producto.email)
        })
    })
})