const { AppStream } = require('aws-sdk')
var cluster = require('cluster')
const { appendFile } = require('fs')

if (cluster.isMaster) {

    var cpuCount = require('os').cpus.length()

    for (var i = 0 ; i < cpuCount; i += 1) {
        cluster.fork()
    }

    cluster.on('exit', function (worker) {

        console.log('worker ' + worker.id + ' died' )
        cluster.fork()

    })

} else {

    var AWS = require('aws-sdk')
    var express = require('express')
    var bodyParser = require('body-parser')

    AWS.config.region = process.env.REGION

    var sns = new AWS.SNS()
    var ddb = new  AWS.DynamoDB()

    var ddbTable = process.env.STARTUP_SIGNUP_TABLE
    var snsTopic = process.env.NEW_SIGNUP_TOPIC
    var app = express()

    app.set('view engine', 'ejs')
    app.set('views', __dirname + '/views')
    app.use(bodyParser.urlencoded({extended:false}))

    app.get('/', function(req,res) {
        res.render('index', {
            static_path: 'static',
            theme: process.env.THEME || 'flatly',
            flask_debug: process.env.FLASK_DEBUG || 'false'
        })
    })

    app.post('/signup', function(req,res) {
        var item = {
            'email': {'S': req.body.email}
        }

        ddb.putItem({
            'TableName': ddbTable,
            'Item': item,
            'Expected': {email: {Exists:false}}
        }, function(err, data) {

            if (err) {

            var returnStatus = 500

            if (err.code === 'ConditionalCheckFailedExeption') {

                returnStatus = 400

            }

            res.status(returnStatus).end()
            console.log('DDB ERROR: ' + err )
        } else {
            sns.publish({
                'Message': 'Name' + req.body.email,
                'Subject': 'New user ON',
                'TopicArn': snsTopic
            }, function (err, data) {
                if(err){
                    res.status(500).end()
                } else {
                    res.status(201).end()
                }
            })
        }
        })
    })

    var PORT = process.env.PORT || 8080

    var server = app.listen(PORT, function() {
        console.log('Server Runnig')
    })

}