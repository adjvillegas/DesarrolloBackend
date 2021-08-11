const {Observable} = rxjs;
const {filter, map} = rxjs.operators;

const observable = new Observable(observer => {
    observer.nex(1)
    observer.nex(2)
    observer.nex(3)
    observer.nex(4)
    observer.nex(5)    
    observer.complete();

}).pipe(map(e => e + 1))

observable.subscribe()
