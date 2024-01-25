import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioDinamicoComponent } from './components/formulario-dinamico/formulario-dinamico.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormularioDinamicoComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormularioDinamicoComponent
  ]
})
export class SharedModule { }
