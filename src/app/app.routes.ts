import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngresoDatosComponent } from './shared/ingreso-datos/ingreso-datos.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'ingreso-datos', component: IngresoDatosComponent }
]