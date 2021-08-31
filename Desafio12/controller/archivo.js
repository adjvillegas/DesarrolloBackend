
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

    download = async( producto ) => {

        try {
            const fileInfo = await fs.promises.readFile(this.url);
            const producto = JSON.stringify(fileInfo.toString('utf-8'));
            console.log('pase por aca 1')
            producto.push({...producto[0], id: producto.length});
            console.log('pase por aca 2')
            
            try {
                console.log('pase por aca 3')
                await fs.promises.writeFile(this.url, JSON.stringify(producto, null, '\t'));
                console.log('pase por aca 4')
            } catch (error) {
                throw new Error(error)
            }

        } catch (error) {
            
            try {
                
                await fs.promises.writeFile(this.url, JSON.stringify([{ title: title, price: price, thumbnail: thumbnail, id: 0 }]));

            } catch (error) {

                throw new Error(error)

            }

        }

    }
};

module.exports = Archivo;