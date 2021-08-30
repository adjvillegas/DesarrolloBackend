
const fs = require('fs');

class  Archivo {

    constructor() {

        this.url = "./models/productos.txt"

    };

    get = async() => {

        let oFile = [];

        try {
            // await fs.promises.readFile(this.url, 'utf-8')
            await fs.promises.readFile(this.url, 'utf-8'
            )            
            .then( contenido => {
                console.log(contenido.split('{'))
            })
            
            return oFile;

        } catch (error) {

                return new Array()
        
            }

        }

    download = async( title, price, thumbnail, id ) => {
        console.log(`Archivo: ${title} ${price} ${thumbnail} ${id}`)
        try {
            await fs.promises.appendFile(
                this.url, 
                JSON.stringify({
                    title: title,
                    price: price,
                    thumbnail: thumbnail,
                    id: id
                }))  
   
        } catch (error) {
            console.log('error')
        }

    }
};

module.exports = Archivo;