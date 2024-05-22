import { Reservation } from './../../models/reservation';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { ReservationApiService } from '../../services/reservation-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from '../../models/hotel.model';


@Component({
  selector: 'ngx-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.scss']
})
export class AjouterReservationComponent implements OnInit {
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));
  ReservationForm: FormGroup;
  hotel: Hotel = new Hotel(); // Add default hotel object
  prixRepas: number = 0;
  prixTotal: number;
  prixType: number = 0;
  prixVue: number = 0;
  vueSelectionnee: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private reservationApiService: ReservationApiService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.calculateReservationPrice();

    this.initForm();
    if (this.id) this.findReservationById();
  }

  initForm(reservation?: Reservation) {
    this.ReservationForm = this.formBuilder.group({
      nom: [reservation?.nom, [Validators.required]],
      prenom: [reservation?.prenom, [Validators.required]],
      cin: [reservation?.cin, [Validators.required]],
      telephone: [reservation?.telephone, [Validators.required]],
      email: [reservation?.email, [Validators.required]],
      nombreClients: [reservation?.nombreClients, [Validators.required]],
      vue: [reservation?.vue, [Validators.required]],
      type: [reservation?.type, [Validators.required]],
      repas: [reservation?.repas, [Validators.required]],
      dateArrivee: [reservation?.dateArrivee, [Validators.required]],
      dateDepart: [reservation?.dateDepart, [Validators.required]],
      hotel: [this.connectedUser.hotel],
      status: [reservation?.status ?? "en cours"],
      id: [reservation?.id]
    });
  }

  findReservationById() {
    this.reservationApiService.findReservationById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.initForm(value);
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur lors de la récupération ");
      }
    });
  }

  onSubmit() {
    this.reservationApiService.addReservation(this.ReservationForm.value).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigateByUrl('/pages/gestionReservation')
        this.toastrService.success("reservation ajoutée avec succès");
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur lors de l'ajout de reservation");
      }
    });
  }

  calculateReservationPrice(): void {
    if (!this.ReservationForm) return; // Check if the form exists
    const formValues = this.ReservationForm.value;
    const prixRepas = this.getRepasPrice(formValues.repas);
    const prixType = this.getTypePrice(formValues.type);
    const prixVue = this.getVuePrice(formValues.vue);
    this.prixTotal = prixRepas + prixType + prixVue;
  }

  getRepasPrice(repas: string): number {
    switch (repas) {
      case 'allInclusive':
        return this.hotel.prixAllInclusif;
      case 'demiPension':
        return this.hotel.prixDemiPension;
      case 'petitDej':
        return this.hotel.prixPetitDej;
      case 'pensionComplete':
        return this.hotel.prixPensionComplete;
      default:
        return 0;
    }
  }

  getTypePrice(type: string): number {
    switch (type) {
      case 'double':
        return this.hotel.typeDouble;
      case 'simple':
        return this.hotel.typeSuite;
      case 'triple':
        return this.hotel.typeTriple;
      default:
        return 0;
    }
  }

  getVuePrice(vue: string): number {
    switch (vue) {
      case 'vue sur la mer':
        return this.hotel.prixVueSurMer;
      case 'vue normale':
        return this.hotel.prixVueNormal;
      case 'vue sur la piscine':
        return this.hotel.prixVuePiscine;
      case 'vue sur la montagne':
        return this.hotel.prixVueMontagne;
      default:
        return 0;
    }
  }

  calculateNightlyPrice(dateArrivee: Date, dateDepart: Date): number {

    return 0 ;
  }


}
