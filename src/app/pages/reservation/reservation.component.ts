import { Component, OnInit } from '@angular/core';
import { Chambre } from '../../models/chambre.model';
import { Utilisateur } from '../../models/utilisateur.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChambreApiService } from '../../services/chambre-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { ReservationApiService } from '../../services/reservation-api.service';
import { Reservation } from '../../models/reservation';

@Component({
  selector: 'ngx-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  chambres: Chambre[] = [];
  typeChambre: string;
  vue: string;
  chambreForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));
  reservation: Reservation;

  constructor(
    private chambreApiService: ChambreApiService,
    private reservationApiService: ReservationApiService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findReservation();
  }

  findReservation() {
    this.reservationApiService.findReservationById(this.id).subscribe(value => {
      this.reservation = value;
      const dateArrivee = this.reservation.dateArrivee;
      const dateDepart = this.reservation.dateDepart;
      this.loadChambres(dateArrivee, dateDepart);
    })
  }

  loadChambres(dateArrivee: Date, dateDepart: Date) {
    this.chambreApiService.getChambresAvaible(this.connectedUser.hotel.id, dateArrivee, dateDepart)
      .subscribe(chambres => {
        this.chambres = chambres.filter(chambre => chambre.type === this.reservation.type && chambre.vue === this.reservation.vue);
      }, error => {
        console.error('Erreur lors du chargement des chambres:', error);
      });
  }
  affectation(chambre: Chambre) {
    console.log(chambre);
    console.log(this.reservation);
    this.reservationApiService.addReservationChambre(this.reservation.id, chambre.id).subscribe(value => {
      this.toastrService.success("success registration")
    })
  }
}
