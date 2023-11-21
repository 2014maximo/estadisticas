import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IngresoDatosComponent } from './shared/components/ingreso-datos/ingreso-datos.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { AstroSolComponent } from './components/astro-sol/astro-sol.component';
import { AstroLunaComponent } from './components/astro-luna/astro-luna.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'ingreso-datos', component: IngresoDatosComponent },
    { path: 'analisis', component: AnalisisComponent },
    { path: 'astro-sol', component: AstroSolComponent },
    { path: 'astro-luna', component: AstroLunaComponent }
]