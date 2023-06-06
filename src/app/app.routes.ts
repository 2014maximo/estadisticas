import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AstroSolComponent } from './components/astro-sol/astro-sol.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'casa', component: HomeComponent },
    { path: 'astrosol', component: AstroSolComponent }
]