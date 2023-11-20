import { FormGroup, Validators } from "@angular/forms";

export class AstroSolModel {
    fecha: string;
    sorteo: number;
    numero: NumeroAstroSolModel;
    signo: string;

    constructor(){
        this.numero = {
            uno: 0,
            dos: 0,
            tres: 0,
            cuatro: 0
        };
        this.fecha = '';
        this.sorteo = 0;
        this.signo = '';
    }
}

export class NumeroAstroSolModel{
    uno: number;
    dos: number;
    tres: number;
    cuatro: number;

    constructor(){
        this.uno = 0;
        this.dos = 0;
        this.tres = 0;
        this.cuatro = 0;
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
    lista?:any[];

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
    ruta:string;
    premios: string[];
    grupos: CampoModel[];
    formulario?: FormGroup;
    titulos: string[];

    constructor(){
        this.referencia = '';
        this.ruta = '';
        this.grupos = [];
        this.premios = [];
        this.titulos = [];
    }
}

export class TablaModel {
    keys: string[];
    grupos: any[];

    constructor(){
        this.keys = [];
        this.grupos = [];
    }
}