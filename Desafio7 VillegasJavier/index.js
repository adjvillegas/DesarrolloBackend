//npm i nodemon
//npm i --save-dev @babel/cli
//npm i --save-dev @babel/core
//npm i --save-dev @babel/node
//npm i --save-dev @babel/preset-env
//npm i express
const  express = require('express');

const app = express();

const puerto = 3000;

const server = app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
} );

app.get('/', (req, res) => {

    res.send('<h1 style="color: blue";>Bienvenidos al servidor Express</h1>')
})
app.get('/items', (req, res) => {
    res.json({msg: 'text'});
})