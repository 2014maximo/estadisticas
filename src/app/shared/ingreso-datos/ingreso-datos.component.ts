import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CHANCES } from 'src/app/constants/chances.constant';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.scss']
})
export class IngresoDatosComponent {

  public form: FormGroup;
  public logo: string;
  public chances = CHANCES;

  constructor(private fb:FormBuilder){
    this.form = this.crearFormulario();
    this.logo = '';
  }

  grupoSeleccionado(e: any){
    console.log(e.target.value);
    
  }

  crearFormulario():FormGroup{
    return this.fb.group({
      campo1: new FormControl({ value: '', disabled: true }),
      campo2: new FormControl({ value: '', disabled: true }),
      campo3: new FormControl({ value: '', disabled: true }),
      campo4: new FormControl({ value: '', disabled: true }),
      campo5: new FormControl({ value: '', disabled: true }),
      campo6: new FormControl({ value: '', disabled: true }),
      campo7: new FormControl({ value: '', disabled: true }),
      campo8: new FormControl({ value: '', disabled: true }),
      campo9: new FormControl({ value: '', disabled: true }),
      campo10: new FormControl({ value: '', disabled: true }),
      campo11: new FormControl({ value: '', disabled: true }),
      campo12: new FormControl({ value: '', disabled: true }),
    })
  }

}
