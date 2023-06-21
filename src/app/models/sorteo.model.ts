export class CityRef{
    capital: boolean = false;
    merge: boolean = false;

}

export class SuperAstroModel {
    fecha: string;
    sorteo: number;
    uno: number;
    dos: number;
    tres: number;
    cuatro: number;
    signo: string;

    constructor(){
        this.fecha = '';
        this.sorteo = 0;
        this.uno = 0;
        this.dos = 0;
        this.tres = 0;
        this.cuatro = 0;
        this.signo = '';
    }
}