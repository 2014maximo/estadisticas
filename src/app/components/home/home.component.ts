import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

import { Firestore, collectionData, collection, addDoc, CollectionReference, WithFieldValue } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { doc, setDoc } from 'firebase/firestore';
import { SuperAstroModel } from 'src/app/models/sorteo.model';
import { MENU } from 'src/app/constants/menu.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  formIngreso: FormGroup;
  formGrupos: FormGroup;
  mostrarLogin: boolean;
  errorClave: boolean;
  menu = MENU;

  item$: Observable<any[]>;

  constructor(private firestore: Firestore, private fb: FormBuilder) {

    this.formIngreso = this.crearFormulario();
    this.formGrupos = this.crearFormularioGrupos();
    const collections = collection(this.firestore, 'todos-los-grupos');

    this.item$ = collectionData(collections);

    this.mostrarLogin = true;
    this.errorClave = true;

    
  }

    ngOnInit(): void {
      this.item$.subscribe({
        next:(resp)=>{
          console.log(resp, 'HABER PUES')
        }
      });


    let numeroAleatorio = Math.floor(Math.random() * 9000000000) + 1000000000;

/*     const cityRef = doc(this.firestore, 'todos-los-grupos', 'astro-sol')
    setDoc(cityRef, {20230632:sorteoDia}, { merge: true }); */



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
         this.errorClave = true;
    } else {
      this.errorClave = false;
    }
  }

  enviarGrupos(){

  }

}
