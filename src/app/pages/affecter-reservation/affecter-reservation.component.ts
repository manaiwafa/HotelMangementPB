import { ChambreApiService } from './../../services/chambre-api.service';
import { Router } from '@angular/router';
import { Reservation } from '../../models/reservation';
import { Utilisateur } from '../../models/utilisateur.model';
import { ReservationApiService } from './../../services/reservation-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-affecter-reservation',
  templateUrl: './affecter-reservation.component.html',
  styleUrls: ['./affecter-reservation.component.scss']
})
export class AffecterReservationComponent implements OnInit {

  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  reservations: Reservation[];
  toastrService: any;
  typeChambre: string;
  vueChambre: string;


  constructor(
    private reservationApiService: ReservationApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.loadReservations();
  }
  loadReservations() {
    this.reservationApiService. getReservationByHotelByallaccepter(this.connectedUser.hotel.id)
      .subscribe(reservations => {
        this.reservations = reservations;
        this.router.navigateByUrl('/pages/reservationAffecter');
      }, error => {
        console.error('Erreur lors du chargement de votre reservation:', error);
      });
}



}
