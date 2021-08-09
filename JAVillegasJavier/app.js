const text = 'Prueba Unica de Equipos'

const fin = () => console.log('Finalizo la operacion');

function mostrarPalabras (str, callback, seg = 10000, i = 0) {

    
    if (str.length > i) {
        new Promise((resolve, reject) => {

            console.log(str[i]);
            setTimeout(() => {
                resolve();
            },seg);

    }).then(
        mostrarPalabras.bind(null, str, callback, seg, i+1)
        ).catch(err => {
        console.log(err)
        
    }
    );
    } else {
        callback()
        console.log('Proceso Completo')
        console.log('Cantidad de Palabras:', str.length)
    }
};

mostrarPalabras(text.split(' '), fin, 2500)