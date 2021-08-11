const webService = new Promise((res,rej) => {
    setTimeout(()=>{
        res({msg:'Hola soy un Ws',code:1})
    },1500)
})

const {Observable} = rxjs;

const observable = new Observable(observer => {
    observer.nex(1)
    observer.nex(2)
    observer.nex(3)
    webService.then (e => observer.next(e))

})

observable.subscribe( (e) => {
    next: (e) => { console.log(e)}
    complete: (e) => console.log('Complete..')
})

observable.subscribe((e) => {
    console.log('soy otro:', e)
})