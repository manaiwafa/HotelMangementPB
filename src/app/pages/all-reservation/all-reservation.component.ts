import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { Reservation } from '../../models/reservation';
import { ChambreApiService } from '../../services/chambre-api.service';
import { ReservationApiService } from '../../services/reservation-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-all-reservation',
  templateUrl: './all-reservation.component.html',
  styleUrls: ['./all-reservation.component.scss']
})
export class AllReservationComponent implements OnInit {

  reservationForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));
  reservation: Reservation[];


  constructor(

    private reservationApiService: ReservationApiService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.  loadReservation();
  }

  loadReservation() {
    this.reservationApiService. getReservationsAccepterTodayByHotel(this.connectedUser.hotel.id)
      .subscribe(reservation => {
        this.reservation = reservation;
      }, error => {
        console.error('Erreur lors du chargement des chambres:', error);
      });
  }

    }
