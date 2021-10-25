const express = require('express');
const app = express();

const http = require('http');
const { fork } = require('child_process')

const server = http.Server(app)
const cookieParser = require('cookie-parser')
const session = require('express-session')

const PROCESS = process.argv.slice(1);

const myPort = (port) => {

    if (PROCESS[1]) {
       return PROCESS[1]
    } else {
        return port
    }
}

const myID = (id) => {
    if (PROCESS[2]) {
        return PROCESS[2]
     } else {
         return id
     }
}

const mySecret = (secret) => {
    if (PROCESS[3]) {
        return PROCESS[3]
     } else {
         return secret
     }
}

let conf = {
    PORT: myPort('9090'),
    FACEBOOK_CLIENT_ID: myID('311476593672094'),
    FACEBOOK_CLIENT_SECRET: mySecret('e2401f57ccd71f336905693766ced753')
}

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
    clientID: conf.FACEBOOK_CLIENT_ID,
    clientSecret: conf.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/aut/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'emails'],
    scope:['email']
},
    function(accessToken, refreshToken,profile,done){
        console.log(profile)
        let userProfile = profile;
        return done(null, userProfile)
    }));

    passport.serializeUser(function(user,cb){
        cb(null, user);
    })

    passport.deserializeUser(function(obj,cb){
        cb(null,obj)
    })

    let usuarios = [];

    //crea aplicacion
    // const app = express()
    app.use(cookieParser)
    app.use(session({
        secret: 'asdqe12123asdad',
        resave: false,
        saveUninitialized: false,
        cookie: 
        {
            maxAge: 60000
        }
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))


    server.on('request' , (req, res) => {
        let { url } = req

        switch ( url ) {
            case '/auth/facebook':
                passport.authenticate('facebook')
                break;
            case '/auth/facebook/callback': 

                passport.authenticate('facebook', {
                successRedirect: '/',
                failureRedirect: '/faillogin'
            })

            break;

            case '/faillogin': 
                res.send('error al logearse')
            break;

            case '/datos': 

            if (req.isAuthenticated()) {
                if(!req.user.cound) req.user.count = 0;
                req.user=count++;
                req.send(`estas adentro ${req.user.displayName} --> foto: ${req.user.photos[0].value}`)
            } else
            res.redirect('/login')

            break;

            case '/logout': 

            req.logOut()
            res.redirect('/')

            break;    

            case '/info': 

            res.end({
                'Argumentos de Entrada': conf,
                'Nombre de plataforma (Sistema Operativo)': process.platform,
                'Versión de Node': process.version,
                'Uso de Memoria': process.memoryUsage(),
                'Path de EjeSSScución': PROCESS[0],
                'Process ID': process.pid,
                'Carpeta Corriente': process.cwd()
            })
            break;

            case '/randoms/:cant': 

                let { cant } = req.params

                if (!cant) cant = 100000000

                const computo = fork('./computo.js')
                computo.send('start')
                computo.on('message', sum => {
                    res.end(`La suma es ${sum}`)
                })

            break;

            case '/login': 

            break;
            default:
                if(req.isAuthenticated())
                res.send('/datos')
                else
                res.redirect('/login')
                break;                

        }
    })

    server.listen(conf.PORT, () => {
        console.log(`Escuchando en puerto ${conf.PORT}`)
        console.log(conf)
    })

