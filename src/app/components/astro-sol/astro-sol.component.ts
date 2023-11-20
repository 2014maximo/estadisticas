import { Component } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-astro-sol',
  templateUrl: './astro-sol.component.html',
  styleUrls: ['./astro-sol.component.scss']
})
export class AstroSolComponent {

  constructor( public estadisticaService: EstadisticasService ){}

  ngOnInit(): void {
    console.log(this.estadisticaService.grupo, 'LO QUE TRAE LAS ESTADISTICAS');
  }

  cambiarFechas(fecha: string):string{
    let partesFecha = fecha.split("-");
    return partesFecha[2] + "/" + partesFecha[1] + "/" + partesFecha[0];
  }

  numeroSigno(signo:string):number{
    switch(signo){
      case "aries":
        return 1;
      
      case "tauro":
        return 2;
      
      case "géminis" || "geminis":
        return 3;
      
      case "cancer" || "cáncer":
        return 4;

      case "leo":
        return 5;
      
      case "virgo":
        return 6;

      case "libra":
        return 7;
      
      case "escorpio":
        return 8;

      case "sagitario":
        return 9;
      
      case "capricornio":
        return 10;
      
      case "acuario":
        return 11;
      
      case "piscis":
        return 12;
      
      default:
        return 0;
    }
  }

  separarNumeros(numero:string): string{
    return numero.split("").join(",");
  }

}
