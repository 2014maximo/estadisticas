import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.scss']
})
export class IngresoDatosComponent {

  // public form: FormGroup;

  constructor(private fb:FormBuilder){
    // this.form = this.crearFormulario();
  }

  grupoSeleccionado(e: any){
    console.log(e.target.value)
  }

/*   crearFormulario():FormGroup{
    return 
  } */

}
