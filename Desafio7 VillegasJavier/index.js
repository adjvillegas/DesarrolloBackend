//npm i nodemon
//npm i --save-dev @babel/cli
//npm i --save-dev @babel/core
//npm i --save-dev @babel/node
//npm i --save-dev @babel/preset-env
//npm i express
const  express = require('express');

const app = express();

const puerto = 8080;

const oObject = {
    items: [{
        title: "Tarjetas Personales",
        price: 3.5, 
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/imprentaneografreact.appspot.com/o/producto-tarjetas.jpeg?alt=media&token=a4034b1b-1222-4bc0-8383-d749116faf50",
        id: 0
    },{
        title: "Talonarios",
        price: 4.22, 
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/imprentaneografreact.appspot.com/o/producto-talonario.png?alt=media&token=1a3db0d9-2161-4c88-923f-71a2513eb186",
        id: 1
    },{
        title: "Ploteado",
        price: 722, 
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/imprentaneografreact.appspot.com/o/producto-ploteado.png?alt=media&token=6afb0ae8-7443-4b39-80b3-ab1f987c28c1",
        id: 2
    },{
        title: "Stickers en Vinilo",
        price: 3.32, 
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/imprentaneografreact.appspot.com/o/producto-auto.jpg?alt=media&token=afa1abec-0571-446b-be59-0947150d2fa3",
        id: 3
    }],
    cantidad: 22
}

const server = app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
} );

app.get('/', (req, res) => {

    res.send('<h1 style="color: blue";>Bienvenidos al servidor Express</h1>')
})

app.get('/items', (req, res) => {
    res.json(oObject);
})

app.get('/item-random', (req, res) => {
    
    let randomId = Math.floor(Math.random() * ((oObject.items.length + 0) - 1));
    res.json(`Mi objeto ${randomId} = ${oObject.items[randomId]}`);

})
