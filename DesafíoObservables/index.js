document.addEventListener("DOMContentLoaded", ()=>{
    let inp = document.querySelector('#inp');
    let texto = document.querySelector("#text")


    const { Observable, fromEvent } = rxjs;
    const { filter, map } = rxjs.operators;
    const observable = fromEvent(inp, 'keyup').pipe(map(e => e.target.value.split('').reverse().join('')));

    observable.subscribe((e) => {
    
        texto.innerText = e;
    })
})


