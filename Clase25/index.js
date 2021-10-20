const express = require('express');
const session = require('express-session');
const cookieparser = require('cookie-parser')
const FileStore = require('session-file-store')(session)
const app = express();
app.use(cookieparser())
app.use(session({
    store:new FileStore({path:'./sesiones',ttl:300,retries:0}),
    key:'hello',
    secret:'kkddkdlld',
    resave:false,
    saveUninitialized:false
}))
app.get('/',(req,res)=>{
    res.send('OK...')
})
app.get('/save/:name',(req,res)=>{

    req.session.name = req.params.name;
    res.send('OK')cd

})
app.get('/name',(req,res)=>{

    res.send(req.session.name)
})

app.listen(8080,()=>console.log('Listen'))