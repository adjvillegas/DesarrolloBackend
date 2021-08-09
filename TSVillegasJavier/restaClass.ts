export default class Resta {
    private calculado: number = 0;

    constructor (a:number, b:number) {
        this.calculado = a - b;
    };

    public resultado() {
        return this.calculado;
    };
};