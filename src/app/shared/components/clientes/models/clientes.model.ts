export class ClienteModel {
    id:number;
    nombre: string;
    direccion: string;
    barrio: string;
    telefono: string;
    categoriaSector: string;

    constructor(){
        this.id = 0;
        this.direccion = '';
        this.nombre = '';
        this.barrio = '';
        this.telefono = '';
        this.categoriaSector = '';
    }
}