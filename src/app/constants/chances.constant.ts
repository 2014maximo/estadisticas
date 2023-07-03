import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { GrupoModel } from "../models/sorteo.model";

export const STYLO_UNO = 'text-light bg-dark border rounded border-warning pl-2 mt-3 f-merriweather';
export const STYLO_DOS = 'bg-dark text-light f-merriweather'
export let fb: FormBuilder;

export const CHANCES: GrupoModel[] = [
    {
        referencia: 'Astro Sol',
        premios: [
            '|500:$14.112.000|*|600:$16.934.400|*|700:$19.756.800|*|800:$22.579.200|*|900:$25.401.600|*|1000:$28.224.000|*|1100:$31.046.400|*|1200:$33.868.800|*|1300:$36.691.200|*|1400:$39.513.600|*|1500:$42.369.600|*|1600:$45.192.000|*|1700:$48.014.400|*|1800:$50.836.800|*|1900:$53.659.200|*|2000:$56.481.600|*|2100:$59.304.000|*|2200:$59.304.000|*|2300:$64.948.800|*|2400:$67.771.200|*|2500:$70.593.600|*|2600:$73.416.000|*|2700:$76.238.400|*|2800:$79.060.800|*|2900:$81.883.200|*|3000:$84.705.600|*|3100:$87.528.000|*|3200:$90.350.400|*|3300:$93.172.800|*|3400:$95.995.200|*|3500:$98.817.600|*|3600:$101.640.000|*|3700:$104.462.400|*|'
        ],
        grupos: [
            { campo:'fecha', tipo:'date', ancho:'80', maxlength:'', minlength:'', nombreCampo:'fecha', clase:STYLO_UNO},
            { campo:'sorteo', tipo:'text', ancho:'40', maxlength:'4', minlength:'', nombreCampo:'sorteo', clase:STYLO_UNO},
            { campo:'cifra uno', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c1', clase:STYLO_UNO},
            { campo:'cifra dos', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c2', clase:STYLO_UNO},
            { campo:'cifra tres', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c3', clase:STYLO_UNO},
            { campo:'cifra cuatro', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c4', clase:STYLO_UNO},
            { campo:'signo', tipo:'select', ancho:'', maxlength:'', minlength:'', nombreCampo:'signo', clase:STYLO_UNO, lista: ['acuario','piscis','aries','tauro','géminis','cancer','leo','virgo','libra','escorpio','sagitario','capricornio']},
        ],
        formulario: new FormGroup({
            fecha: new FormControl({ value: '', disabled: false }, Validators.required),
            sorteo: new FormControl({ value: '', disabled: false }, Validators.required),
            c1: new FormControl({ value: '', disabled: false }, Validators.required),
            c2: new FormControl({ value: '', disabled: false }, Validators.required),
            c3: new FormControl({ value: '', disabled: false }, Validators.required),
            c4: new FormControl({ value: '', disabled: false }, Validators.required),
            signo: new FormControl({ value: '', disabled: false }, Validators.required),
        })
    },
    {
        referencia: 'Astro Luna',
        premios: [],
        grupos: [
            { campo:'fecha', tipo:'date', ancho:'80', maxlength:'', minlength:'', nombreCampo:'fecha', clase:STYLO_UNO},
            { campo:'sorteo', tipo:'text', ancho:'40', maxlength:'4', minlength:'', nombreCampo:'sorteo', clase:STYLO_UNO},
            { campo:'cifra uno', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c1', clase:STYLO_UNO},
            { campo:'cifra dos', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c2', clase:STYLO_UNO},
            { campo:'cifra tres', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c3', clase:STYLO_UNO},
            { campo:'cifra cuatro', tipo:'text', ancho:'40', maxlength:'1', minlength:'', nombreCampo:'c4', clase:STYLO_UNO},
            { campo:'signo', tipo:'select', ancho:'', maxlength:'', minlength:'', nombreCampo:'signo', clase:STYLO_UNO, lista: ['acuario','piscis','aries','tauro','géminis','cancer','leo','virgo','libra','escorpio','sagitario','capricornio']},
        ],
        formulario: new FormGroup({
            fecha: new FormControl({ value: '', disabled: false }, Validators.required),
            sorteo: new FormControl({ value: '', disabled: false }, Validators.required),
            c1: new FormControl({ value: '', disabled: false }, Validators.required),
            c2: new FormControl({ value: '', disabled: false }, Validators.required),
            c3: new FormControl({ value: '', disabled: false }, Validators.required),
            c4: new FormControl({ value: '', disabled: false }, Validators.required),
            signo: new FormControl({ value: '', disabled: false }, Validators.required),
        })
    },
    {
        referencia: 'Chontico',
        premios: [],
        grupos: [
            { campo:'fecha', tipo:'date', ancho:'80', maxlength:'20', minlength:'', nombreCampo:'campo1', clase:STYLO_UNO},
            { campo:'sorteo', tipo:'text', ancho:'', maxlength:'', minlength:'', nombreCampo:'campo2', clase:STYLO_UNO},
            { campo:'uno', tipo:'text', ancho:'', maxlength:'', minlength:'', nombreCampo:'campo3', clase:STYLO_UNO},
        ]
    },
]