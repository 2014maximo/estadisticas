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