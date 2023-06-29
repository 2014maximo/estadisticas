import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioDinamicoComponent } from './formulario-dinamico/formulario-dinamico.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormularioDinamicoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormularioDinamicoComponent
  ]
})
export class SharedModule { }
