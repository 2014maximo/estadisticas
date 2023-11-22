import { Component } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, CollectionReference, WithFieldValue } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CHANCES } from 'src/app/constants/chances.constant';
import { CampoModel, GrupoModel, TablaModel } from 'src/app/models/sorteo.model';
import { doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

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
  querySnapshot: any;
  scientists: any;
  elementosTabla = new TablaModel();

  gruposTabla:any[]=[];
  retornoGruposTabla:any[]=[];


  constructor(private fb:FormBuilder, private firestore: Firestore, private router:Router, private estadisticaService: EstadisticasService){
    this.form = this.crearFormulario();
    this.logo = '';
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const collections = collection(this.firestore, 'todos-los-grupos');
    this.item$ = collectionData(collections);
  }

  seleccionarGrupo(e: any){
    let formulario: GrupoModel[] = [];
    formulario = this.chances.filter((element:GrupoModel) => {
      return element.referencia.includes(e.target.value)
    });
    this.logo = `${e.target.value.split(' ').join('')}.png`;
    this.formularioSeleccionado = formulario[0].grupos;
    this.grupoSeleccionado = formulario[0];
    this.form = formulario[0].formulario ? formulario[0].formulario : this.crearFormulario();
    this.permitirGuardar = true;
    this.elementosTabla.grupos = [];

    this.recargaTabla();
  }



  recargaTabla(){
    this.elementosTabla.grupos = [];
    let p = {
      f: this.firestore,
      b: 'todos-los-grupos',
      r: this.grupoSeleccionado.referencia.toLowerCase().split(' ').join('-')
    }
    const docRef = doc(p.f, p.b, p.r);
    const docSnap = getDoc(docRef);

    
    docSnap.then( resp => {
      let datos:any = resp.data();
      this.elementosTabla.grupos = Object.assign([], this.mapearGruposTablas(Object.values(datos)));
      this.elementosTabla.grupos = this.elementosTabla.grupos.sort((x:any,y:any) => y.sorteo - x.sorteo);
      this.elementosTabla.keys = Object.keys(this.elementosTabla.grupos[0]);
    });
  }

  mapearGruposTablas(grupos:any[]):any[]{
    let grupoRetorno = new Object();
    
    grupos.forEach( (grupo:any,i:number) => {
      let cif:string='';
      let referencias = Object.keys(grupo).sort();
      let contador = -1;

      referencias.forEach((e, i) => {
        e.includes('cifra')? cif = cif+grupo[e] : this.gruposTabla[++contador] = {[e]:grupo[e]};
      })
      this.gruposTabla[contador+1] = {numero:cif}
      grupoRetorno = Object.assign({}, ...this.gruposTabla);
      this.retornoGruposTabla[i] = grupoRetorno;
    });
    return this.retornoGruposTabla
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
    setDoc(cityRef, sorteo, { merge: true }).then((res:any) => {
        this.recargaTabla();
        this.form.reset();
    });
  }

  entregarValor(DatosSorteo:any): any[]{
    let grupoValoresSorteo: string[]=[];
    Object.values(DatosSorteo).forEach((e:any, i:number, grupo:any) => {
      grupoValoresSorteo[i] = DatosSorteo[this.grupoSeleccionado.titulos[i]];        //   this.grupoSeleccionado.titulos[i]
    });
    return grupoValoresSorteo
  }

  exportable(){
    let componente = this.grupoSeleccionado.referencia.toLowerCase().split(' ').join('-');
    this.estadisticaService.grupo = this.elementosTabla.grupos;
    this.router.navigate(['/', componente]);
  }

}
