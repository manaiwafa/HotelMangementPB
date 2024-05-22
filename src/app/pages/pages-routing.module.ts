
import { RouterModule, Routes } from '@angular/router';
import { NgModule, } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionChambreComponent } from './gestion-chambre/gestion-chambre.component';
import { AjouterChambreComponent } from './ajouter-chambre/ajouter-chambre.component';
import { GestionEmployeComponent } from './gestion-employe/gestion-employe.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import { GestionReservationComponent } from './gestion-reservation/gestion-reservation.component';
import { AjouterReservationComponent } from './ajouter-reservation/ajouter-reservation.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AffecterReservationComponent } from './affecter-reservation/affecter-reservation.component';
import { ChambresComponent } from './chambres/chambres.component';
import { ChambrePourNettoyageComponent } from './chambre-pour-nettoyage/chambre-pour-nettoyage.component';
import { AllReservationComponent } from './all-reservation/all-reservation.component';
import { ChambreDetailComponent } from './chambre-detail/chambre-detail.component';
import { ListeVerifierChambreComponent } from './liste-verifier-chambre/liste-verifier-chambre.component';
import { HotelAVerifierComponent } from './hotel-averifier/hotel-averifier.component';
import { GestionPrixComponent } from './gestion-prix/gestion-prix.component';
import { HotelAccepterComponent } from './hotel-accepter/hotel-accepter.component';
import { ListeAllReservationComponent } from './liste-all-reservation/liste-all-reservation.component';
import { ModifierPrixComponent } from './modifier-prix/modifier-prix.component';
import { MagasinComponent } from './magasin/magasin.component';
import { EspaceDeBuindierComponent } from './espace-de-buindier/espace-de-buindier.component';
import { ImageComponent } from './image/image.component';
import { StaticComponent } from '../static/static.component';
import { AjouterStockComponent } from './ajouter-stock/ajouter-stock.component';
import { EquipementEtServiceComponent } from './equipement-et-service/equipement-et-service.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';


const routes: Routes = [{

  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'Chambres',
      component: ChambresComponent,
    },

    {
      path: 'Hotel',
      component: HotelAVerifierComponent,
    },
    {
      path: 'Static',
      component: StaticComponent,
    },
    {
      path: 'ServiceEtEquipement',
      component: EquipementEtServiceComponent,
    },
    {
      path: 'AjouterService',
      component: AjouterServiceComponent,
    },
    {
      path: 'AddStock',
      component: AjouterStockComponent,
    },
    {
      path: 'ChambresDetail',
      component: ChambreDetailComponent,
    },
    {
      path: 'images',
      component: ImageComponent,
    },

    {
      path: 'ChambresDetail/:id',
      component: ChambreDetailComponent,
    },

    {
      path: 'espace',
      component: EspaceDeBuindierComponent,
    },
    {
      path: 'NotreMagasin',
      component: MagasinComponent,
    },
    {
      path: 'prix',
      component: ModifierPrixComponent,
    },
    {
      path: 'Liste',
      component: ListeVerifierChambreComponent,
    },
    {
      path: 'ChambresNettoyage/:id',
      component: ChambrePourNettoyageComponent,
    },
    {
      path: 'AllReservation',
      component: AllReservationComponent,
    },

    {
      path: 'gestionService',
      component: GestionServiceComponent,
    },

    {
      path: 'gestionChambre',
      component: GestionChambreComponent,
    },
    {
      path: 'reservationAffecter',
      component: AffecterReservationComponent,
    },
    {
      path: 'hotelAccepter',
      component: HotelAccepterComponent,
    },
    {
      path: 'gestionPrix',
      component: GestionPrixComponent,
    },

    {
      path: 'reservation',
      component: ReservationComponent,
    },


    {
      path: 'ajouterChambre',
      component: AjouterChambreComponent,
    },
    {
      path: 'ListeAllReservation',
      component: ListeAllReservationComponent,
    },
    {
      path: 'modifierChambre/:id',
      component: AjouterChambreComponent,
    },
    {
      path: 'reservation/:id',
      component: ReservationComponent,
    },
    {
      path: 'gestionEmploye',
      component: GestionEmployeComponent,
    },
    {
      path: 'ajouterEmploye',
      component: AjouterEmployeComponent,
    },
    {
      path: 'modifierEmploye/:id',
      component: AjouterEmployeComponent,
    },
    {
      path: 'gestionReservation',
      component: GestionReservationComponent,
    },
    {
      path: 'ajouterReservation',
      component: AjouterReservationComponent,
    },
    {
      path: 'modifierReservation/:id',
      component: AjouterReservationComponent,
    },

    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },



  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
