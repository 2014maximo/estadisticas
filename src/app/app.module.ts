import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Firebase
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage'; 

import { AstroSolComponent } from './components/astro-sol/astro-sol.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoDatosComponent } from './shared/components/ingreso-datos/ingreso-datos.component';
import { SharedModule } from './shared/shared.module';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { AstroLunaComponent } from './components/astro-luna/astro-luna.component';
import { EmpresasDevComponent } from './components/empresas-dev/empresas-dev.component';



@NgModule({
  declarations: [
    AppComponent,
    AstroSolComponent,
    HomeComponent,
    IngresoDatosComponent,
    AnalisisComponent,
    AstroLunaComponent,
    EmpresasDevComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule.initializeApp(environment.firebase, 'estadisticas'),
    RouterModule.forRoot (ROUTES),
    AppRoutingModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),  
    provideStorage(() => getStorage()),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
