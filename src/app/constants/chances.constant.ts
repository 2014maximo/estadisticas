import { GrupoModel } from "../models/sorteo.model";

export const CHANCES: GrupoModel[] = [
    {
        referencia: 'Astro Sol',
        grupos: [
            { campo:'fecha', tipo:'text', ancho:'80', maxlength:'20', minlength:'', clase:''},
            { campo:'sorteo', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'uno', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'dos', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'tres', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'cuatro', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'signo', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
        ]
    },
    {
        referencia: 'Astro Luna',
        grupos: [
            { campo:'fecha', tipo:'text', ancho:'80', maxlength:'20', minlength:'', clase:''},
            { campo:'sorteo', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'uno', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'dos', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'tres', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'cuatro', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
            { campo:'signo', tipo:'text', ancho:'', maxlength:'', minlength:'', clase:''},
        ]
    },
]