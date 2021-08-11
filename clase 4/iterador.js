//iterador
function* Test(){
    let count = 0;
    while(true){
        yield count++
    }
}

let iterador = Test();

console.log(iterador.next().value)
console.log(iterador.next().value)