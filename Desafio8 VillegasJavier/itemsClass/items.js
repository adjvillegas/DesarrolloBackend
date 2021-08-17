class Items {
    constructor () {
        this.Items = [];
    }

    isHasExist = () => {
        return (this.Items > 0)
    }

    listar = (id) => {
    }

    guardar = (title, price, thumbnail) => {

        // if (!this.isHasExist) {
            this.Items.push({"title": title, "price": price, "thumbnail": thumbnail})
        // } else {
            // this.Items = [{
            //     "title": title, 
            //     "price": price, 
            //     "thumbnail": thumbnail
            // }]
        }

            

    }
}

module.exports = Items;