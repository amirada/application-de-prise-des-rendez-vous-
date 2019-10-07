import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidnavComponent } from './sidnav/sidnav.component';
import { GestionpatientsComponent } from './sidnav/gestionpatients/gestionpatients.component';
import { GestionRDVComponent } from './sidnav/gestion-rdv/gestion-rdv.component';
import { GestionmedecinsComponent } from './sidnav/gestionmedecins/gestionmedecins.component';
import { DossiermedicalComponent } from './sidnav/dossiermedical/dossiermedical.component';
import { GestioncaisseComponent } from './sidnav/gestioncaisse/gestioncaisse.component';
import { RechercheComponent } from './sidnav/recherche/recherche.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';

import { HomeComponent } from './home/home.component';
import { AjoutpatientComponent } from './sidnav/ajoutpatient/ajoutpatient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ErreurComponent } from './erreur/erreur.component';
import { MdbTablePaginationComponent} from 'angular-bootstrap-md';
import { FirstPageComponent } from './first-page/first-page.component';

import { EmailComponent } from './sidnav/gestioncaisse/email/email.component';
import { ImboxComponent } from './sidnav/gestioncaisse/imbox/imbox.component';
@NgModule({
  declarations: [
    AppComponent,
    
    SidnavComponent,
    
    GestionpatientsComponent,
    
    GestionRDVComponent,
    
    GestionmedecinsComponent,
    
    DossiermedicalComponent,
    
    GestioncaisseComponent,
    
    RechercheComponent,
    
    LoginComponent,
    
    RegistreComponent,
    

    MdbTablePaginationComponent,
    HomeComponent,
    
    AjoutpatientComponent,
    
    ErreurComponent,
    
    FirstPageComponent,
    
    
    
    EmailComponent,
    
    
    
    ImboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
     

  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
