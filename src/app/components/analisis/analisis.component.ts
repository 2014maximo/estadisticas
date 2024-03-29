import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TARJETAS } from './constants/analisis.constant';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { ClasificacionParesModel, HistorialModel, ParesArmadosModel } from './models/analisis.model';

@Component({
    selector: 'app-analisis',
    templateUrl: './analisis.component.html',
    styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit {

    form: FormGroup;
    tarjetas = TARJETAS;
    gruposFormados:string[]=[];
    paresFormados = new ParesArmadosModel();
    clasificacionParesIz:ClasificacionParesModel[]=[];
    clasificacionParesDer:ClasificacionParesModel[]=[];
    numeros:HistorialModel[]=[];



    constructor(private fb: FormBuilder, private estadisticaService: EstadisticasService) {
        this.form = this.crearFormulario();
    }

    ngOnInit(): void {
        this.cargarNumeros();
        this.cargarStorage();
    }

    cargarNumeros(){
        this.estadisticaService.pasoAnalisis.forEach((e:any) =>{
            this.numeros.push(e.numero)
        });
    }

    crearFormulario(): FormGroup {
        return this.fb.group({
            col1: new FormControl({ value: '', disabled: false }),
            col2: new FormControl({ value: '', disabled: false }),
            col3: new FormControl({ value: '', disabled: false }),
            col4: new FormControl({ value: '', disabled: false }),
            col5: new FormControl({ value: '', disabled: false })
        })
    }

    generarGrupos(){
        let gruposSegmentado = {
            col1: this.form.value.col1,
            col2: this.form.value.col2,
            col3: this.form.value.col3,
            col4: this.form.value.col4,
            col5: this.form.value.col5
        }
        let grupos = {
            grupo1: gruposSegmentado.col1.split(','),
            grupo2: gruposSegmentado.col2.split(','),
            grupo3: gruposSegmentado.col3.split(','),
            grupo4: gruposSegmentado.col4.split(','),
            grupo5: gruposSegmentado.col5.split(',')
        }

        this.guardarStorage(gruposSegmentado);
        
        grupos.grupo1.forEach((e:string) => {
            grupos.grupo2.forEach((f:string) => {
                grupos.grupo3.forEach((g:string) => {
                    grupos.grupo4.forEach((h:string) => {
                        grupos.grupo5.forEach((j:string) => {
                            let armado = `${e}${f}${g}${h}-${j}`
                            this.gruposFormados.push(armado);
                        })
                    });
                });
            });
        });

        grupos.grupo1.forEach((e:any, i:number) => {
            grupos.grupo2.forEach((f:any, fi:number) => {
                let armado = `${e}${f}`
                this.paresFormados.derecha.push(armado);
            });
        });
        grupos.grupo2.forEach((e:any, i:number) => {
            grupos.grupo3.forEach((f:any, fi:number) => {
                let armado = `${e}${f}`
                this.paresFormados.izquierda.push(armado);
            });
        });

        this.clasificacionParesIz = (this.clasificandoPares(this.paresFormados.izquierda)).sort(this.compararPorEdad);
        this.clasificacionParesDer = (this.clasificandoPares(this.paresFormados.derecha)).sort(this.compararPorEdad);
        
    }

    compararPorEdad(a:ClasificacionParesModel, b:ClasificacionParesModel) {
        return a.cantidad - b.cantidad;
    }

    clasificandoPares(grupoPares:string[]):ClasificacionParesModel[]{
        let clasificar:ClasificacionParesModel[]=[];
        grupoPares.forEach(e => {
            let contaParesIz:number=0;
            this.numeros.forEach(f => {
                if(f.toString().includes(e)){
                    contaParesIz++;
                }
            });
            let clasificado = {
                numero: e,
                cantidad: contaParesIz
            }
            clasificar.push(clasificado);
        });
        return clasificar;
    }

    guardarStorage(grupos:Object) {
        const datosFormularioJSON = JSON.stringify(grupos);
        localStorage.setItem('grupos', datosFormularioJSON);
    }
    cargarStorage(){
        const datosFormularioJSON = localStorage.getItem('grupos');
        if (datosFormularioJSON) {
            const grupos = JSON.parse(datosFormularioJSON);
            this.form.patchValue(grupos);
        }

    }

}
