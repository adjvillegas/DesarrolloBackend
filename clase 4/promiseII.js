
//Promise.resolve()
//Promise.reject()
let promesa = new Promise ((res,rej) => {
    res(20)
})

promesa.then(x => x + 1).then( e => console.log(e))

let Promesa = Promise.resolve(20)
Promesa.then( e => {
    if (e == 30)
        throw 'Error'
    else
        return 'Ok'
}).then( e => console.log(e)).catch( error => {
    console.log('Reject:', error)
})

let Promesas = Promise.resolve(30)
Promesas.then( e => {
    if (e == 30)
        throw 'Error'
    else
        return e
}).then( e => e / 2).then( e => {
    if (e == 10)
    console.log('Ok Listo 10')
}).catch( error => {
    console.log('Reject:', error)
})

