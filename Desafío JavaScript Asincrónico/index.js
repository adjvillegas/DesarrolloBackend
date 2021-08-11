


// //Caso 2
// const time = () => new Promise((resolv, reject) => {
//     setTimeout(()=>{
//         resolv()
//     },1000)
// })

// async function mostrarLetra(str) {
//     for (let i=0; i < str.length; i++) {
//         console.log(str[i])
//         await time()
//     }
// }

// function mostrarLetras(str,i,callback) {

// }

let text = "Hola como estan todos"

// Caso 1
function mostrarpalabras(arr,i,callback) {
    if (arr.length == i) {
        console.log('finalizado')
        console.log(`palabras totales: ${arr.length}`)
        return
    }
setTimeout(()=>{
    callback(arr[i])
    mostrarpalabras(arr,i+1,callback)
}, 1000)
}

mostrarpalabras(text.split(' '), 0, (e) => {
    console.log(e)
})
