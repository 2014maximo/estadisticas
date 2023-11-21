import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { cambiarFechas, numeroSigno } from 'src/app/shared/constants/funciones.constant';

@Component({
  selector: 'app-astro-luna',
  templateUrl: './astro-luna.component.html',
  styleUrls: ['./astro-luna.component.scss']
})
export class AstroLunaComponent {

  constructor(public estadisticaService: EstadisticasService){}

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
