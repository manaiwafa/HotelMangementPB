import { ChambreApiService } from './../../services/chambre-api.service';
import { Magasin } from './../../models/magasin.model';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrService } from '@nebular/theme';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MagasinApiService } from '../../services/magasin-api.service';
import { HotelApiService } from '../../services/hotel-api.service';
import { Hotel } from '../../models/hotel.model';
import { Chambre } from '../../models/chambre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.scss']
})
export class MagasinComponent implements OnInit {
  MagasinForm!: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  magasin: Magasin;
  toastrService: NbToastrService;
  hotel: Hotel;
  quantitesProduits: number[];
 constructor(private  magasinApiService: MagasinApiService,
             private  ChambreApiService: ChambreApiService,
              ) { }

  ngOnInit(): void {
    this.loadMagasin();
    this.loadQuantitesProduits()

  }

  loadMagasin() {
    this.magasinApiService.getmagasinByIdHotel(this.connectedUser.hotel.id)
      .subscribe(magasin=> {
        this.magasin = magasin;

      }, error => {
        console.error('Erreur lors du magasin ', error);
      });
  }



  loadQuantitesProduits() {
    this.ChambreApiService.getQuantitesProduits(this.connectedUser.hotel.id)
      .subscribe(quantites => {
        this.quantitesProduits = quantites;

        console.log(quantites);
      }, error => {
        console.error('Erreur lors de la récupération des quantités de produits :', error);
      });
  }

  updateStock() {
    this.magasinApiService.updateStock(this.connectedUser.hotel.id)
      .subscribe(() => {
        this.loadMagasin();
        this.loadQuantitesProduits();

      }, error => {
        console.error('Erreur lors de la mise à jour du stock du magasin :', error);
        });
  }



  }
