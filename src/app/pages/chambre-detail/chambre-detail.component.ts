import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../models/utilisateur.model';
import { ChambreApiService } from '../../services/chambre-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../models/chambre.model';

@Component({
  selector: 'ngx-chambre-detail',
  templateUrl: './chambre-detail.component.html',
  styleUrls: ['./chambre-detail.component.scss']
})
export class ChambreDetailComponent implements OnInit {
  chambreForm!: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));

  constructor(
    private formBuilder: FormBuilder,
    private chambreApiService: ChambreApiService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.initForm();
    if(this.id) this.findChambre();
  }
  initForm(chambre?: Chambre) {
    this.chambreForm = this.formBuilder.group({
      etage: [chambre?.etage, [Validators.required]],
      vue: [chambre?.vue, [Validators.required]],
      type: [chambre?.type, [Validators.required]],
      reserver: [chambre?.reserver, [Validators.required]],
      numero: [chambre?.numero, [Validators.required]],
      nettoyerr: [chambre?.nettoyerr, [Validators.required]],
      nbrShampoing: [chambre?.nbrShampoing, [Validators.required]],
      nbrDesLinges: [chambre?.nbrDesLinges, [Validators.required]],
      nbrGelDouche: [chambre?.nbrGelDouche, [Validators.required]],
      nbrPapier: [chambre?.nbrPapier, [Validators.required]],
      hotel: [this.connectedUser.hotel],
      id: [chambre?.id]

    });
  }

  findChambre() {
    this.chambreApiService.findChambreById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.initForm(value);
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur lors de la reuperation de la chambre");
      }
    });
  }


  onSubmit() {
    this.chambreApiService.addChambre(this.chambreForm.value).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigateByUrl('/pages/Chambres');
        this.toastrService.success("Chambre nettoyer");
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur ");
      }
    });
  }
}
