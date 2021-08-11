//cada vez que entre a una funcion me tiene que mostrar la fecha y generar un código aleatorio y un numero de pedido que le estoy haciendo

function numeroRandom(min,max) {
    return Math.floor(Math.random() * (max-min)) + min;
}; 

//Generador
function* Random(min,max) {
//Contador de numero de pedido
    let count = 0;

    while (true)
    yield {
        order: count++,
        numero: numeroRandom(min,max),
        fecha: new Date().toString()
    }
}

let gen = Random(100,200)


console.log(
    console.log(gen.next().value)
);
console.log(
    console.log(gen.next().value)
);
console.log(
    console.log(gen.next().value)
);
console.log(
    console.log(gen.next().value)
);