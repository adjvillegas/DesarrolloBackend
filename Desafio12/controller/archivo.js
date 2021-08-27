const multer = require('multer');
const fs = require('fs');

class  Archivo {
    constructor(url) {
        this.url = url;
    };
};

module.exports = Archivo;