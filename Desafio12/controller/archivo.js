
const fs = require('fs');

class  Archivo {

    constructor() {

        this.url = "./models/productos.txt"

    };

    get = async() => {


        try {

            const fileInfo = await fs.promises.readFile(this.url);
            return JSON.parse(fileInfo.toString('utf-8'));

        } catch (error) {

                return new Array()
        
            }

        }

    download = async( producto ) => {

        try {
            
            const fileInfo = await fs.promises.readFile(this.url);
            const fileProducto = JSON.parse(fileInfo.toString('utf-8'));

            fileProducto.push({...producto, id: fileProducto.length});
            
            try {
 
                await fs.promises.writeFile(this.url, JSON.stringify(fileProducto, null, '\t'));

 
            } catch (error) {

                throw new Error(error)

            }

        } catch (error) {
            
            try {
   
                await fs.promises.writeFile(this.url, JSON.stringify([{ ...producto, id: 0 }]));

            } catch (error) {
   
                throw new Error(error)

            }

        }

    }
};

module.exports = Archivo;