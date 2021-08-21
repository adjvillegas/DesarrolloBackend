const express = require('express')
const app = express()
///http//localhost:3030/datos?min=5&nivel=10&max=20&titulo=Hola
app.get("/datos", (req, res) => {

    let {min, nivel, max, titulo } = req.query;
    console.log(req.query);
    if (true) {
        nivel = ((nivel-min) * 100) / (max-min)
        console.log(parseFloat(nivel).toFixed(2))
        res.render("index", {mensaje: titulo, min, max, nivel})
    } else 
        res.send("fuera de rango")
})

app.set("views","./views")
app.set("view engine", "pug")

app.listen(3030, () => {
    console.log("listen")
})