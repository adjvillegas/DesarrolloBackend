const fs = require('fs')

class Archivo {

    constructor (url) {
        this.url = url
    }

    leer = async () => {
        try {
            await fs.promises.readFile(this.url, 'utf-8')
            .then( contenido => {
                console.log(contenido)
            }) 
        } catch (error) {
                console.log(new Array())
        }

    }

    guardar = async (title, price, thumbnail) => {

        const newValues = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id: ''
        }

        newValues.id = JSON.stringify(newValues).length + 1

        try {
            await fs.promises.appendFile(this.url, JSON.stringify(newValues))
        } catch (error) {
            console.log('error')
        }

        console.log(JSON.stringify(newValues))
    } 

    borrar = async () => {
        fs.promises.unlink(this.url, error => {
            if (error) {
                console.log(error)
            } else console.log('Operación exitosa') 
        })
    }     

}

const file = new Archivo('/Users/Javier Villegas/Documents/productos.txt')

// 
file.guardar('Escuadra', 123.45, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Squadra_45.jpg/900px-Squadra_45.jpg')
file.leer()
file.borrar()

