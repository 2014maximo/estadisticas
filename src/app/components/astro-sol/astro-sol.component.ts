import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { cambiarFechas, numeroSigno } from 'src/app/shared/constants/funciones.constant';

@Component({
  selector: 'app-astro-sol',
  templateUrl: './astro-sol.component.html',
  styleUrls: ['./astro-sol.component.scss']
})
export class AstroSolComponent {

  constructor( public estadisticaService: EstadisticasService ){}

  ngOnInit(): void {
  }

  cambiarFechas(fecha: string):string{
    return cambiarFechas(fecha);
  }

  numeroSigno(signo:string):number{
    return numeroSigno(signo);
  }

  separarNumeros(numero:string): string{
    return numero.split("").join(",");
  }

}
