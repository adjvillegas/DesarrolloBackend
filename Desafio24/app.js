const express = require("express");
const cookie_parser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(cookie_parser());
app.use(
  session({
    secret: "lkdsjdkljskl",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json())

let arr = []
app.use((req,res,next)=>{
    
    if (arr)

    return next();
})

//localhost:6060/login?user=xxx&pass=456768

   //User incorrecto  

let count=0;
app.get('/mem-count',(req,res)=>{
    res.send({count:count++})


})

app.post('/login',(req,res)=>{
    console.log('aca')
    const {user,password} = req.body;

    console.log(`el user fue ${user} y el pass ${password}`)

})

/*
fetch('/login',{
 method:'POST',
 headers: {
    'content-type':'application/json'
 },
 body:JSON.stringify({user:'amy',pass:'1234})
}).then( r => r.json()).then(e => {
if (e.err == 2)
 console.log('password incorrecto')
})
*/

app.get("/", (req, res) => {
  res.send("Express-session server");
});
app.get("/my-session", (req, res) => {
  const { nombre } = req.query;
  if (req.session.count) {
    req.session.count++;
    res.send(`${nombre} el números de visitas es ${req.session.count}`);
  } else {
    req.session.count = 1;
    res.send(`Welcome to my server ${nombre}`);
  }
});
app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (!err) res.send("Ok");
    else res.send({ error: err });
  });
});
app.get('/info',(req,res)=>{
    console.log(req.session)
    res.json(req.session)
})

app.listen(6060, () => {
  console.log("Ready session server...");
});