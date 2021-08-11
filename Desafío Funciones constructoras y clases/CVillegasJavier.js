class Usuario {

    constructor (nombre = '', apellido = '', libros = [{}], mascotas = [] ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    };

    getFullName (params) {
        console.log(`${this.nombre} ${this.apellido}`)
    };

    addMascota (mascota) {
        this.mascotas.push(mascota);
    };

    getMascotas () {
        console.log(this.mascotas.length)
    };

    addBook (book = "", autor ="") {
        this.libros.push({nombre: book, autor: autor});
    };

    getBooks () {
        console.log(this.libros.map( libro => {
            return libro.nombre;
        }))
    }
};

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