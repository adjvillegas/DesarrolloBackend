// async function test(operacion:string) {
    async function test() {    
    
    // switch (operacion) {
    //     case "sumar":
    //         operaciones.sumar
    //         break
    // }

    let {default:suma} = await import('./sumaclase');
    
    let sumar = new suma(3,4);
    return sumar.ver()
}

test().then(e=> console.log(e))