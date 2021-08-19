const express = require('express')
const fs = require('fs')

const app = express()

const PORT = 5010

app.engine("ntl", function(fp, ops, callback) {
    fs.readFile(fp, function(err, content) {
        if (err) return callback(new Error(err))
        let rendered = content.toString().replace("#title#", `Es valor es ${ops.title}`)
        return callback(null, rendered)
    })
})

app.set("views", "./views")
app.set("view engine", "ntl")

app.get('/', (req, res) => {
    res.send('/')
})

app.listen(PORT, () => {

})