import { Chambre } from './../../models/chambre.model';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { ChambreApiService } from '../../services/chambre-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-liste-verifier-chambre',
  templateUrl: './liste-verifier-chambre.component.html',
  styleUrls: ['./liste-verifier-chambre.component.scss']
})
export class ListeVerifierChambreComponent implements OnInit {
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  chambres: Chambre[] = [];


  constructor(
    private ChambreApiService: ChambreApiService,
    private toastrService: NbToastrService,
  ) { }
  ngOnInit(): void {
    this.loadChambres();
  }
  loadChambres() {
    this.ChambreApiService.findAllRoomForCleaning(this.connectedUser.hotel.id)
      .subscribe(chambres => {
        this.chambres = chambres;
      }, error => {
        console.error('Erreur lors du chargement des chambres pour verifier ', error);
      });
  }




  verifierChambre(id: number) {
    this.ChambreApiService.verifierChambre(id)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.chambres.find(el => el.id == id).nettoyerr= "Propre"
          this.toastrService.success("chambre propre")
        },
        error: (err: any) => { this.toastrService.danger(err) },
      })
  }
  getSeverity(nettoyerr: string) {
    switch (nettoyerr) {
      case 'Propre':
        return 'success';
      case 'nettoyer':
        return 'warning';
      case 'nn nettoyer':
        return 'danger';
    }
  }
  isInProgress(nettoyerr: string) {
    return "nettoyer" === nettoyerr;
  }


}

