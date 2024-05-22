import { Reservation } from './../../models/reservation';
import { Component, OnInit } from '@angular/core';
import { ReservationApiService } from '../../services/reservation-api.service';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrModule, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-gestion-reservation',
  templateUrl: './gestion-reservation.component.html',
  styleUrls: ['./gestion-reservation.component.scss']
})
export class GestionReservationComponent implements OnInit {
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


  deleteReservation(id: number) {
    this.reservationApiService.cancelReservation(id)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.Reservation.find(el => el.id == id).status = "annuler"
          this.toastrService.success("reservation Annuler")
        },
        error: (err: any) => { this.toastrService.danger(err) },
      })
  }

  acceptReservation(id: number) {
    this.reservationApiService.acceptReservation(id)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.Reservation.find(el => el.id == id).status = "accepter"
          this.toastrService.success("reservation accepter")
        },
        error: (err: any) => { this.toastrService.danger(err) },
      })
  }
  getSeverity(status: string) {
    switch (status) {
      case 'accepter':
        return 'success';
      case 'en cours':
        return 'warning';
      case 'annuler':
        return 'danger';
    }
  }

  isInProgress(status: string) {
    return "en cours" === status;
  }

  isCanceled(status: string) {
    return "annuler" === status;
  }
}
