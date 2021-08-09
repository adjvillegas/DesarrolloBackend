document.addEventListener("DOMContentLoaded",() => {

let input = document.querySelector("#inp");
let txt = document.querySelector('#text');

const {fromEvent, throwError, of } = rxjs;
const {mergeMap,retry  } = rxjs.operators;

    const observer = fromEvent(input, 'keyup').pipe(mergeMap(evnt => {

        if (inp.value.search('error') >= 0)
            return throwError('Finalizado por error');

        if ( inp.value.search('complete') >= 0 ) 
            onserverUnsuscribe('Termino en forma normal, Complete')
        
        if (inp.value.search('complete') < 0 && inp.value.search('error') < 0)  
        return of(evnt.target.value.split('').reverse().join(''))
    }),retry(0)); 

    const onserverUnsuscribe = (msg) => {
        console.log(msg);
        txt.innerText = ''
        inp.disabled = true;        
        subscribe.unsubscribe();
    }

    const subscribe = observer.subscribe({
        error: err =>  onserverUnsuscribe(err),
        next: val => txt.innerText = val,
        complete: () => console.log('asdasd')
    });

    setTimeout(() => {
        onserverUnsuscribe('Termino en forma normal, cumplio los 30seg')
     },30000)

});

