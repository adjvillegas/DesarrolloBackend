const operacion = async (val1: number, val2: number, operacion: string) => {

        switch (operacion) {

                case 'sumar':
                        let { default: suma } = await import('./sumaClass');
                        let sumar = new suma(val1, val2);
                        return sumar.resultado();

                case 'restar':
                        let { default: resta } = await import('./restaClass');
                        var restar = new resta(val1, val2);
                        return restar.resultado();

                default:
                        return Promise.resolve('Solo permitimos "sumar" o "restar"')
        };

}

const operaciones = () => {

        Promise.all([
                operacion(1, 4, 'sumar').then((result) => console.log(result)),
                operacion(71, 11, 'restar').then((result) => console.log(result)),
                operacion(1, 4, 'multiplicar').then((result) => console.log(result))
                ]).then((values) => console.log(values))

}

operaciones()


