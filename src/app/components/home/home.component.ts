import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

import { Firestore, collectionData, collection, addDoc, CollectionReference, WithFieldValue } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { doc, setDoc } from 'firebase/firestore';
import { CityRef } from 'src/app/models/sorteo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  formIngreso: FormGroup;
  formGrupos: FormGroup;
  mostrarLogin: boolean;

  item$: Observable<any[]>;

  constructor(private firestore: Firestore, private fb: FormBuilder) {

    this.formIngreso = this.crearFormulario();
    this.formGrupos = this.crearFormularioGrupos();
    const collections = collection(this.firestore, 'todos-los-grupos');
    
    let data: WithFieldValue<any> = {
      "uno": 4,
      "cuatro": 7,
      "dos": 5,
      "sorteo": 1233,
      "signo": 12,
      "fecha": "2023-03-02",
      "tres": 7
  }

    // setDoc(CityRef, { capital: true }, { merge: true });

    this.item$ = collectionData(collections);

    this.mostrarLogin = true;
  }

    ngOnInit(): void {
      this.item$.subscribe({
        next:(resp)=>{
          console.log(resp)
        }
      });

/*       const cityRef = doc(this.firestore, 'todos-los-grupos', 'astro-luna');
setDoc(cityRef, { capital: true }, { merge: true }); */


  }

  private crearFormulario():FormGroup{
    return this.fb.group({
      email:['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  private crearFormularioGrupos():FormGroup{
    return this.fb.group({
      grupos:['', [Validators.required]]
    });
  }

  enviar(){
    if(this.formIngreso.value.email === 'alexuriel.777@gmail.com' &&
       this.formIngreso.value.password === 'Desarrollo2023$'){
        this.mostrarLogin = false;
    }
  }

  enviarGrupos(){

  }

}
