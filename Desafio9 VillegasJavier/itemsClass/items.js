class Items {
    constructor () {
        this.Items = [];
    };

    isHasExist = () => {
        return (this.Items.length > 0);
    };

    getId = () => {
        return this.Items.length || 0;
    };

    listar = (id) => {

        return (this.Items[id]);
    };

    guardar = (title, price, thumbnail) => {

        this.Items.push({"id": this.getId(), "title": title, "price": price, "thumbnail": thumbnail});

    };

    update = (id, modify) => {

        console.log(modify)

    }

    delete = (id) => {
        return this.Items.splice(id, 1)
    }
}

module.exports = Items;