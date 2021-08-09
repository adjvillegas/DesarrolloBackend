document.addEventListener("DOMContentLoaded", () => {
   let inp = document.querySelector('#inp');
   let txt = document.querySelector('#text');

   const { fromEvent } = rxjs;
   //Creamos un observable a partir de la escucha de tipeado del input
   const observable = fromEvent(inp, 'keyup')

   const subscription = observable.subscribe(evnt => {

      let status = ''

      if (inp.value.search('error') > 0) {
         status = 'error'
      } else if (inp.value.search('complete') > 0) {
         status = 'complete'
      }

      switch (status) {
         case 'error':
            onserverUnsuscribe('Termino por error')
            break;
         case 'complete':
            onserverUnsuscribe('Termino en forma normal')
            break;
         default:
            txt.innerText = evnt.target.value.split('').reverse().join('')
            break;
      }

   });

   const onserverUnsuscribe = (msg) => {

      console.log(msg);
      txt.innerText = ''
      inp.disabled = true;
      subscription.unsubscribe();

   }

   setTimeout(() => {
      onserverUnsuscribe('Termino en forma normal, cumplio los 30seg')
   },30000)


});