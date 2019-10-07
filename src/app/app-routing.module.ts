import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';

import { GestionpatientsComponent } from './sidnav/gestionpatients/gestionpatients.component';
import { GestionmedecinsComponent } from './sidnav/gestionmedecins/gestionmedecins.component';
import { GestionRDVComponent } from './sidnav/gestion-rdv/gestion-rdv.component';
import { DossiermedicalComponent } from './sidnav/dossiermedical/dossiermedical.component';
import { RechercheComponent } from './sidnav/recherche/recherche.component';
import { GestioncaisseComponent } from './sidnav/gestioncaisse/gestioncaisse.component';
import { HomeComponent } from './home/home.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { AjoutpatientComponent } from './sidnav/ajoutpatient/ajoutpatient.component';
import { ErreurComponent } from './erreur/erreur.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AuthGuard } from './auth.guard';
import { Role } from './role';
import { EmailComponent } from './sidnav/gestioncaisse/email/email.component';
import { ImboxComponent } from './sidnav/gestioncaisse/imbox/imbox.component';
const routes: Routes = [
    {path:'', component: FirstPageComponent},
    {path:'registre',component:RegistreComponent },
    {path:'login',component:LoginComponent},
       
    {path:'erreur',component:ErreurComponent},
    {path:'registre',component:RegistreComponent },
      
    {path:'recherche',component:RechercheComponent },
    {path:'home',component:SidnavComponent, children: [
      {path:'gestionpatients',component:GestionpatientsComponent,canActivate:[AuthGuard],data: { roles: [Role.Admin, Role.User2]}},
      {path:'gestionmedical',component:DossiermedicalComponent,canActivate:[AuthGuard],data: { roles: [Role.Admin, Role.User2, Role.User1]} },
      {path:'gestionmedecins',component:GestionmedecinsComponent,canActivate:[AuthGuard],data: { roles: [Role.Admin]}},
      {path:'gestion-rdv',component:GestionRDVComponent},
      {path:'gestioncaisse',component:GestioncaisseComponent,canActivate:[AuthGuard],data: { roles: [Role.Admin, Role.User2]} },
      {path:'email',component:EmailComponent},
      {path:'imbox',component:ImboxComponent}
    ] },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
