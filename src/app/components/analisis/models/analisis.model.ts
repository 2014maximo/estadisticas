export class ParesArmadosModel {
    derecha:string[];
    izquierda:string[];

    constructor(){
        this.derecha = [];
        this.izquierda = [];
    }
}

export class ClasificacionParesModel{
    numero: string;
    cantidad:number;

    constructor(){
        this.numero = '';
        this.cantidad = 0;
    }
}

export class HistorialModel {
    numeros:string;
    serie:string;

    constructor(){
        this.numeros = '';
        this.serie = '';
    }
}