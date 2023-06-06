import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  formIngreso: FormGroup;

  item$: Observable<any[]>;
  constructor(private firestore: Firestore, private fb: FormBuilder) {
    this.formIngreso = this.crearFormulario();
    const collections = collection(this.firestore, 'todos-los-grupos');

    this.item$ = collectionData(collections);
  }

    ngOnInit(): void {

      this.item$.subscribe({
        next:(resp)=>{
          console.log(resp)
        }
      })
    //this.estadisticaService.getData('todos-los-grupos');
  }

  private crearFormulario():FormGroup{
    return this.fb.group({
      email:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  enviar(){
    
  }

}
