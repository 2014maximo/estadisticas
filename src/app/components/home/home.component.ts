import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  item$: Observable<any[]>;
  constructor(private firestore: Firestore) {
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

}
