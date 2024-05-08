import { Component } from '@angular/core';
import { EMPRESAS_EXTERNAS, EMPRESAS_LOCALES } from './constants/empresas.constant';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones.constant';

@Component({
  selector: 'app-empresas-dev',
  templateUrl: './empresas-dev.component.html',
  styleUrls: ['./empresas-dev.component.scss']
})
export class EmpresasDevComponent {
  public empresasLocales = EMPRESAS_LOCALES;
  public empresasExternas = EMPRESAS_EXTERNAS;


  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }



}
