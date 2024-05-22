import { EmployerApiService } from './../../services/employer-api.service';
import { Component, OnInit } from '@angular/core';
import { Chambre } from '../../models/chambre.model';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.scss']
})
export class ChambresComponent
implements OnInit {
  chambres: Chambre[] = [];
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));

  constructor(
    private employerApiService:  EmployerApiService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.loadChambresByEmployerAndHotel();
  }

  loadChambresByEmployerAndHotel(): void {
    const idEmployer = this.connectedUser.id; // Modifier en fonction de votre modèle Utilisateur
    const idHotel = this.connectedUser.hotel.id; // Modifier en fonction de votre modèle Utilisateur
    this.employerApiService.getChambresByEmployerAndHotel(idEmployer)
      .subscribe(chambres => {
        this.chambres = chambres;
      }, error => {
        console.error('Erreur lors du chargement des chambres:', error);
      });
  }}
