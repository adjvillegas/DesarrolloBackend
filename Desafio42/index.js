// server.js
const config = require('./config.js');
const express = require('express');
const app = express();

import cluster from 'cluster'
import * as os from 'os'


/* --------------------------------------------------------------------------- */
/* MASTER */
if(modoCluster && cluster.isMaster) {
    const numCPUs = os.cpus().length
    
    console.log(`Número de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
else {
    const app = express()

    const PORT = parseInt(process.argv[2]) || 8080
    let HOST = require('yargs').argv.HOST;
    let PORT = require('yargs').argv.PORT || 8080;

    app.get('/datos', (req,res) => {
        res.send(`Server en PORT(${PORT}) - PID(${process.pid}) - FYH(${new Date().toLocaleString()})`)
    })

    app.listen(PORT, err => {
        if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}