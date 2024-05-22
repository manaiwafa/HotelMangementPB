import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilisateur } from '../../models/utilisateur.model';
import { Magasin } from '../../models/magasin.model';
import { NbToastrService } from '@nebular/theme';
import { Hotel } from '../../models/hotel.model';
import { MagasinApiService } from '../../services/magasin-api.service';
import { ChambreApiService } from '../../services/chambre-api.service';

@Component({
  selector: 'ngx-espace-de-buindier',
  templateUrl: './espace-de-buindier.component.html',
  styleUrls: ['./espace-de-buindier.component.scss']
})
export class EspaceDeBuindierComponent implements OnInit {
  MagasinForm!: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  magasin: Magasin;
  toastrService: NbToastrService;
  hotel: Hotel;
  quantitesProduits: number[];
 constructor(private  magasinApiService: MagasinApiService,
             private  ChambreApiService: ChambreApiService
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

  }
