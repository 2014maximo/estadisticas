export class ClienteModel {
    id:number;
    nombre: string;
    numeroDocumento:string;
    direccion: string;
    barrio: string;
    referenciaUbicacion: string;
    telefono: string;
    categoriaSector: string;
    ciudad: string;
    departamento: string;
    maps:string;
    valorRuta:string;
    pago?:string;
    yapago?:string;
    abono?:string;
    resta?:string;

    constructor(){
        this.id = 0;
        this.direccion = '';
        this.nombre = '';
        this.barrio = '';
        this.telefono = '';
        this.categoriaSector = '';
        this.ciudad = '';
        this.departamento = '';
        this.maps = '';
        this.referenciaUbicacion = '';
        this.numeroDocumento = '';
        this.valorRuta = '';
    }
}