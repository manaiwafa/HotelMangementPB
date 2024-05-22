import { MagasinApiService } from './../../services/magasin-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ajouter-stock',
  templateUrl: './ajouter-stock.component.html',
  styleUrls: ['./ajouter-stock.component.scss']
})
export class AjouterStockComponent {
  idHotel: number = 18; // Remplacez 1 par l'ID de votre hôtel
 constructor(private MagasinApiService: MagasinApiService){}

  ajouterStock(nbrGelDouche: number, nbrShampoing: number, nbrPapier: number, nbrProduitMachine: number, nbrProduitSol: number): void {
    const requestProduit = {
      nbrGelDouche: nbrGelDouche,
      nbrShampoing: nbrShampoing,
      nbrPapier: nbrPapier,
      nbrProduitMachine: nbrProduitMachine,
      nbrProduitSol: nbrProduitSol
    };

    this.MagasinApiService.ajouterStockMagasin(this.idHotel, requestProduit)
      .subscribe(
        response => {
          console.log('Stock ajouté avec succès :', response);
          // Ajoutez ici la logique pour traiter la réponse
        },
        error => {
          console.log('Erreur lors de l\'ajout du stock :', error);
          // Ajoutez ici la logique pour traiter l'erreur
        }
      );
  }
}
