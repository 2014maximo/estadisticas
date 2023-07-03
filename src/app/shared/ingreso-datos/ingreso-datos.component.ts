import { Component } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, CollectionReference, WithFieldValue } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CHANCES } from 'src/app/constants/chances.constant';
import { CampoModel, GrupoModel } from 'src/app/models/sorteo.model';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.scss']
})
export class IngresoDatosComponent {

  form: FormGroup;
  logo: string;
  chances = CHANCES;
  respuesta: any;
  permitirGuardar: boolean = false;
  formularioSeleccionado: CampoModel[] = []
  grupoSeleccionado: GrupoModel = new GrupoModel();
  item$: Observable<any[]> = new Observable();

  constructor(private fb:FormBuilder, private firestore: Firestore,){
    this.form = this.crearFormulario();
    this.logo = '';
  }

  seleccionarGrupo(e: any){
    let formulario: GrupoModel[] = [];
    formulario = this.chances.filter((element:GrupoModel) => {
      console.log(element.referencia);
      return element.referencia.includes(e.target.value)
    });
    this.logo = `${e.target.value.split(' ').join('')}.png`;
    this.formularioSeleccionado = formulario[0].grupos;
    this.grupoSeleccionado = formulario[0];
    this.form = formulario[0].formulario ? formulario[0].formulario : this.crearFormulario();
    this.permitirGuardar = true;
    this.respuesta = this.getDocument();
    console.log(this.respuesta, '')
  }

  async getDocument(){
    let grupo =  this.grupoSeleccionado.referencia.toLowerCase().split(' ').join('-');
    let docSnap = await getDoc(doc(this.firestore, 'todos-los-grupos', grupo));
    return docSnap.data();
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
    });
  }
     

  guardarSorteo(){
    const cityRef = doc(this.firestore, 'todos-los-grupos', this.grupoSeleccionado.referencia.toLowerCase().split(' ').join('-'));
    let id = Number(this.form.value.fecha.split('-').join(''));

    let sorteo = {
      [id]: this.form.value
    }
    setDoc(cityRef, sorteo, { merge: true });
  }

}
