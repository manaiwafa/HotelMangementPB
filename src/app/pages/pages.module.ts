import { MagasinComponent } from './magasin/magasin.component';
import { NgModule } from '@angular/core';
import { NbAccordionModule, NbCardModule, NbCheckboxModule, NbInputModule, NbMenuModule, NbSelectModule, NbToastrModule, NbWindowModule } from '@nebular/theme';
import { AjouterChambreComponent } from './ajouter-chambre/ajouter-chambre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ThemeModule } from '../@theme/theme.module';
import { AffecterReservationComponent } from './affecter-reservation/affecter-reservation.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
import { AllReservationComponent } from './all-reservation/all-reservation.component';
import { ChambrePourNettoyageComponent } from './chambre-pour-nettoyage/chambre-pour-nettoyage.component';
import { ChambresComponent } from './chambres/chambres.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { GestionChambreComponent } from './gestion-chambre/gestion-chambre.component';
import { GestionEmployeComponent } from './gestion-employe/gestion-employe.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ChambreDetailComponent } from './chambre-detail/chambre-detail.component';
import { ListeVerifierChambreComponent } from './liste-verifier-chambre/liste-verifier-chambre.component';
import { HotelAVerifierComponent } from './hotel-averifier/hotel-averifier.component';
import { GestionPrixComponent } from './gestion-prix/gestion-prix.component';
import { HotelAccepterComponent } from './hotel-accepter/hotel-accepter.component';
import { ListeAllReservationComponent } from './liste-all-reservation/liste-all-reservation.component';
import { ModifierPrixComponent } from './modifier-prix/modifier-prix.component';
import { EspaceDeBuindierComponent } from './espace-de-buindier/espace-de-buindier.component';
import { ImageComponent } from './image/image.component';
import { ChartModule } from 'angular2-chartjs';
import { StaticComponent } from '../static/static.component';
import { EquipementEtServiceComponent } from './equipement-et-service/equipement-et-service.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';





@NgModule({
  imports: [
    NbThemeModule.forRoot(), NbLayoutModule, NbButtonModule, NbWindowModule.forRoot(),
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    TableModule,
    ButtonModule,
    NbInputModule,
    NbWindowModule,
    RouterModule,
    ReactiveFormsModule,
    NbCardModule,
    NbAccordionModule,
    NbToastrModule.forRoot(),
    TagModule,
    NbCheckboxModule,
    NbSelectModule,
    ChartModule,



  ],

  declarations: [
    PagesComponent,
    GestionChambreComponent,
    AjouterChambreComponent,
    GestionEmployeComponent,
    AjouterEmployeComponent,
    GestionReservationComponent,
    AjouterReservationComponent,
    GestionServiceComponent,
    ReservationComponent,
    AffecterReservationComponent,
    ChambresComponent,
    ChambrePourNettoyageComponent,
    AllReservationComponent,
    ChambreDetailComponent,
    ListeVerifierChambreComponent,
    HotelAVerifierComponent,
    GestionPrixComponent,
    HotelAccepterComponent,
    ListeAllReservationComponent,
    ModifierPrixComponent,
    MagasinComponent,
    EspaceDeBuindierComponent,

    ImageComponent,
    StaticComponent,
    EquipementEtServiceComponent,
    AjouterServiceComponent,







  ],
  exports: [
    GestionChambreComponent,
    AjouterChambreComponent,
    AjouterReservationComponent,
  ],


})
export class PagesModule {

}
