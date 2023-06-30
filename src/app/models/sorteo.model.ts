
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

export class SorteoChanceModel {
    fecha: string;
    sorteo: number;
    nUno: number;
    nDos: number;
    nTres: number;
    nCuatro: number;

    constructor(){
        this.fecha = '';
        this.sorteo = 0;
        this.nUno = 0;
        this.nDos = 0;
        this.nTres = 0;
        this.nCuatro = 0;
    }
}

export class CampoModel {
    campo: string;
    tipo: string;
    ancho: string;
    maxlength: string;
    minlength: string;
    clase: string;
    nombreCampo: string;

    constructor(){
        this.campo = '';
        this.ancho = '';
        this.tipo  = '';
        this.maxlength = '';
        this.minlength = '';
        this.clase = '';
        this.nombreCampo = '';
    }
}

export class GrupoModel{
    referencia: string;
    premios: string[];
    grupos: CampoModel[];

    constructor(){
        this.referencia = '';
        this.grupos = [];
        this.premios = [];
    }
}