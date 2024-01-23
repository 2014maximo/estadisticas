import { ReferenciaModel } from "src/app/shared/models/referencia.model";
import { ClienteModel } from "../models/clientes.model";

export const CLIENTES: ClienteModel[] = [
    {
        id:1,
        nombre: 'Manuela Espinal',
        direccion: 'Carrera 76 # 91 a 22',
        referenciaUbicacion: '',
        barrio: 'Robledo Kenedy',
        telefono: '3192323757',
        categoriaSector: 'Lejos-medio',
        ciudad: 'Medellín',
        departamento: 'Antioquia',
        maps:''
    },
    {
        id:2,
        nombre: 'Ana María Arango',
        direccion: 'Carrera 78 # 104 c 14',
        referenciaUbicacion: '',
        barrio: 'Doce de octubre',
        telefono: '3126093901',
        categoriaSector:'Lejos-medio',
        ciudad: 'Medellín',
        departamento: 'Antioquia',
        maps:''
    },
    {
        id:3,
        nombre:'Luisa Fernanda coronel',
        departamento:'Norte de Santander',
        ciudad:'Ocaña',
        direccion: 'Calle 15 10A88',
        referenciaUbicacion: '',
        telefono: '3134429501',
        categoriaSector:'',
        barrio:'',
        maps:''
    },
    {
        id:4,
        nombre: 'Valentina Garcia',
        ciudad: 'Envigado',
        departamento: 'Antioquia',
        barrio: 'Envigado',
        direccion: 'Transversal 34 c sur # 33-15 barrio obrero',
        referenciaUbicacion: 'Primer piso - El local se llama uñas mágicas',
        telefono: '3008828621',
        categoriaSector:'Lejos-normal',
        maps:''
    }
]

export const SECTOR: ReferenciaModel[]=[
    {
        id:1,
        nombre: 'Robledo Kenedy'
    },
    {
        id:2,
        nombre: 'Doce de octubre'
    }
]

export const CATEGORIA_SECTOR: ReferenciaModel[]=[
    {
        id:1,
        nombre:'Lejos-medio'
    },
    {
        id:2,
        nombre:'Lejos-normal'
    }
]