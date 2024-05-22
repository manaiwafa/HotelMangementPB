import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { Reservation } from '../../models/reservation';
import { ReservationApiService } from '../../services/reservation-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-liste-all-reservation',
  templateUrl: './liste-all-reservation.component.html',
  styleUrls: ['./liste-all-reservation.component.scss']
})
export class ListeAllReservationComponent implements OnInit {
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  Reservation: Reservation[];


  constructor(
    private reservationApiService: ReservationApiService,
    private toastrService: NbToastrService,
  ) { }
  ngOnInit(): void {
    this.loadReservations();
  }
  loadReservations() {
    this.reservationApiService.getReservationByHotel(this.connectedUser.hotel.id)
      .subscribe(Reservation => {
        this.Reservation = Reservation;
      }, error => {
        console.error('Erreur lors du chargement de reservation:', error);
      });
  }
}
