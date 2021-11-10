const express = require('express');
const compression = require('compression');
const logger = require('pino')()

const app = express();
const childInfo = logger.child({info: 'info'});
const childWarnig = logger.child({warn: 'warning'})
const childError = logger.child({error: 'error'})

app.use(compression());

app.get('/', (req, res) => {
    childInfo.info('Iniciado correctamente')
});

app.get('/error', (req, res) => {
  childError.info('Error por procesamiento')
});

app.get('/warning', (req, res) => {
    childWarnig.info('Advertencia de mensaje')
});



app.listen(8080, () => console.log('APP RUNNING...'));