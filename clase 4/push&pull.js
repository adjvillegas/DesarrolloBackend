//PULL
function push(){
    return 1
}
//PUSH
let push = () => new Promise((res,rej) => {
    
    setTimeout(() => {
        res(1)
    },2500)
    
})
//Funcion Generadora Imitacion
function Test(){
    let i = 0;
    while (true)
    i++
}

Test(); /// i=0
Test(); /// i=1
Test(); /// i=2
Test(); /// i=...
//Funcion Generadora
function* test(){
    let i = 0;
    while (true)
    yield i++
}
 let gen = test();
 console.log(gen.next().value)/// i=0
 console.log(gen.next().value)/// i=1
 console.log(gen.next().value)/// i=2

