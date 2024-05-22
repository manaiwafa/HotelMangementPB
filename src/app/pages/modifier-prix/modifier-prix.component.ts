import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../models/utilisateur.model';
import { ChambreApiService } from '../../services/chambre-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../models/chambre.model';
import { HotelApiService } from '../../services/hotel-api.service';
import { Hotel } from '../../models/hotel.model';
import { ImageService } from '../../services/image-api.service';

@Component({
  selector: 'ngx-modifier-prix',
  templateUrl: './modifier-prix.component.html',
  styleUrls: ['./modifier-prix.component.scss']
})
export class ModifierPrixComponent implements OnInit {

  hotelForm!: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number;
  hotel: Hotel;

  constructor(
    private formBuilder: FormBuilder,
    private hotelApiService: HotelApiService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) { }


  ngOnInit(): void {
    this.id = this.connectedUser.hotel.id;
    this.initForm();
    if (this.id) this.findPrix();
  }

  initForm(hotel?: Hotel) {
    this.hotelForm = this.formBuilder.group({
      nom: [hotel ? hotel.nom : '', [Validators.required]],
      nombreChambres: [hotel ? hotel.nombreChambres : '', [Validators.required]],
      emplacementVille: [hotel ? hotel.emplacementVille : '', [Validators.required]],
      description: [hotel ? hotel.description : '', [Validators.required]],
      nbrpiscine: [hotel ? hotel.nombrePiscines : '', [Validators.required]],
      nbrTerrains: [hotel ? hotel.nombreTerrains : '', [Validators.required]],
      parking: [hotel ? hotel.parking : '', [Validators.required]],
      resto: [hotel ? hotel.resto : '', [Validators.required]],
      coindecoffe: [hotel ? hotel.coindecoffe : '', [Validators.required]],
      activitéetanimation: [hotel ? hotel.activitéetanimation : '', [Validators.required]],
      prixAllInclusif: [hotel ? hotel.prixAllInclusif : '', [Validators.required]],
      prixDemiPension: [hotel ? hotel.prixDemiPension : '', [Validators.required]],
      prixPensionComplete: [hotel ? hotel.prixPensionComplete : '', [Validators.required]],
      prixPetitDej: [hotel ? hotel.prixPetitDej : '', [Validators.required]],
      prixPersonne: [hotel ? hotel.prixPersonne : '', [Validators.required]],
      typeDouble: [hotel ? hotel.typeDouble : '', [Validators.required]],
      typeSuite: [hotel ? hotel.typeSuite : '', [Validators.required]],
      typeTriple: [hotel ? hotel.typeTriple : '', [Validators.required]],
      typleSingle: [hotel ? hotel.typleSingle : '', [Validators.required]],
      active: [hotel ? hotel.active : '', [Validators.required]],
      nombrePiscines: [hotel ? hotel.nombrePiscines : '', [Validators.required]],
      nombreTerrains: [hotel ? hotel.nombreTerrains : '', [Validators.required]],
      prixVueSurMer: [hotel ? hotel.prixVueSurMer : '', [Validators.required]],
      prixVueNormal: [hotel ? hotel.prixVueNormal : '', [Validators.required]],
      prixVueMontagne: [hotel ? hotel.prixVueMontagne : '', [Validators.required]],
      prixVuePiscine: [hotel ? hotel.prixVuePiscine : '', [Validators.required]],
      id: [hotel ? hotel.id : null]
    });
  }

  findPrix() {
    this.hotelApiService.getHotelById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.hotel = value;
        this.initForm(value);
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur lors de la récupération de l'hôtel");
      }
    });
  }

  onSubmit() {
    this.hotelApiService.addHotell(this.hotelForm.value).subscribe({
        next: () => {
          this.toastrService.success("Hôtel mis à jour avec succès");
          this.router.navigate(['/pages/gestionPrix']);
        },
        error: (err) => {
          console.error(err);
          this.toastrService.danger("Erreur lors de la mise à jour de l'hôtel");
        }
      });
    }
    // onFileSelected(event) {
    //   const file: File = event.target.files[0];
    //   this.uploadImage(file);
    // }
    // uploadImage(file: File) {
    //   this.imageService.uploadImage(file,this.id).subscribe(
    //     response => {
    //       console.log('Image uploaded successfully');
    //     },
    //     error => {
    //       console.error('Failed to upload image');
    //     }
    //   );
    // }
  }

