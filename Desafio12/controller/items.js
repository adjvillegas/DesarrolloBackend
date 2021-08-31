const Archivo = require('./archivo');
const archivo = new Archivo();

class Items {
    constructor () {
        this.Items = [];
    };

    // isHasExist = () => (this.Items.length > 0);

    // searchIndexOf = id => this.Items.findIndex( item => item.id === parseInt(id) );
    
    // getId = () => this.Items.length || 0;

    // listar = (id) => {

    //     let current = this.searchIndexOf(id)

    //     return (this.Items[current]);
    // };

    getProducts = async () => {
        let products = [] 
        products.push(await archivo.get());
        console.log(products)
    }

    saveProduct = async(title, price, thumbnail) => {

        const currentProduct = {title: title, price: price, thumbnail: thumbnail}

        await archivo.download(currentProduct)
        // this.Items.push({"id": this.getId(), "title": title, "price": price, "thumbnail": thumbnail});

    };

    // update = (id, data) => {
    //     let current = this.searchIndexOf(id);

    //     this.Items.map( (item, indx) => {
    //         if (indx === current) {
    //             for (let element in data) {
    //                 item[element] = data[element];
    //             }
    //         }
    //     })
    // }

    // delete = (id) => {

    //     let current = this.searchIndexOf(id)

    //     return this.Items.splice(current,1)

    // }
}

module.exports = Items;