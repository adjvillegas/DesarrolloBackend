function Usuario (nombre = '', apellido = '', libros = [{}], mascotas = [] ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas
};

Usuario.prototype.getFullName = function (params) {
    console.log(`${this.nombre} ${this.apellido}`)
};

Usuario.prototype.addMascota = function (mascota) {
    this.mascotas.push(mascota);
};

Usuario.prototype.getMascotas = function () {
    console.log(this.mascotas.length)
};

Usuario.prototype.addBook = function (book = "", autor ="") {
    this.libros.push({nombre: book, autor: autor});
};

Usuario.prototype.getBooks = function () {
    console.log(this.libros.map( libro => {
        return libro.nombre;
    }))
}

let aMascotas = ['perro', 'gato'];
let oBook = [{
        nombre: 'El señor de las moscas',
        autor: 'William Golding',
    },{
        nombre: 'Fundacion',
        autor: 'Isaac Asimov',
    }]

let Javier = new Usuario("Javier", "Villegas", oBook, aMascotas);
Javier.getFullName()
Javier.addMascota("loro")
Javier.getMascotas()
Javier.addBook("El silmarillon", "JRR Tolkien")
Javier.getBooks()