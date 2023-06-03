import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-astro-sol',
  templateUrl: './astro-sol.component.html',
  styleUrls: ['./astro-sol.component.scss']
})
export class AstroSolComponent {

  constructor( private estadisticaService: EstadisticasService ){}

  ngOnInit(): void {
    this.estadisticaService.getData('todos-los-grupos').then( resp => {
      console.log(resp)
    })
  }

}
