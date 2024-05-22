// gestion-prix.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hotel } from './../../models/hotel.model';
import { Utilisateur } from '../../models/utilisateur.model';
import { HotelApiService } from '../../services/hotel-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-gestion-prix',
  templateUrl: './gestion-prix.component.html',
  styleUrls: ['./gestion-prix.component.scss']
})
export class GestionPrixComponent implements OnInit {
  HotelForm!: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  hotel: Hotel;
  toastrService: NbToastrService;
  constructor(private formBuilder: FormBuilder,
             private  hotelApiService: HotelApiService
  ) { }

  ngOnInit(): void {
    this.loadPrix();
  }

  loadPrix() {
    this.hotelApiService.getHotelById(this.connectedUser.hotel.id)
      .subscribe(hotel=> {
        this.hotel = hotel;
      }, error => {
        console.error('Erreur lors du chargement ', error);
      });
  }
}
