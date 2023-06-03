import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AstroSolComponent } from './components/astro-sol/astro-sol.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'astro-sol', component: AstroSolComponent }
]