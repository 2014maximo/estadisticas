import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CHANCES } from 'src/app/constants/chances.constant';
import { CampoModel, GrupoModel } from 'src/app/models/sorteo.model';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.scss']
})
export class IngresoDatosComponent {

  form: FormGroup;
  logo: string;
  chances = CHANCES;
  formularioSeleccionado: CampoModel[] = []

  constructor(private fb:FormBuilder){
    this.form = this.crearFormulario();
    this.logo = '';
  }

  grupoSeleccionado(e: any){
    console.log(e.target.value);
    let formulario: GrupoModel[] = [];
    formulario = this.chances.filter((element:GrupoModel) => {
      console.log(element.referencia);
      return element.referencia.includes(e.target.value)
    });
    this.formularioSeleccionado = formulario[0].grupos;
    console.log(formulario, 'HABER PUES')
    
  }

  crearFormulario():FormGroup{
    return this.fb.group({
      campo1: new FormControl({ value: '', disabled: false }),
      campo2: new FormControl({ value: '', disabled: false }),
      campo3: new FormControl({ value: '', disabled: false }),
      campo4: new FormControl({ value: '', disabled: false }),
      campo5: new FormControl({ value: '', disabled: false }),
      campo6: new FormControl({ value: '', disabled: false }),
      campo7: new FormControl({ value: '', disabled: false }),
      campo8: new FormControl({ value: '', disabled: false }),
      campo9: new FormControl({ value: '', disabled: false }),
      campo10: new FormControl({ value: '', disabled: false }),
      campo11: new FormControl({ value: '', disabled: false }),
      campo12: new FormControl({ value: '', disabled: false }),
    })
  }

  guardarSorteo(){
    console.log(this.form, 'HABER PUEST');
  }

}
