import { Component, OnInit } from '@angular/core';
import { NbToastrService,  } from '@nebular/theme';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ChambreApiService } from '../../services/chambre-api.service';
import { Chambre } from './../../models/chambre.model';
import { Utilisateur } from '../../models/utilisateur.model';
@Component({
  selector: 'ngx-gestion-chambre',
  templateUrl: './gestion-chambre.component.html',
  styleUrls: ['./gestion-chambre.component.scss']
})
export class GestionChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  chambreForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));

  constructor(
    private chambreApiService: ChambreApiService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,

  ) { }

  ngOnInit(): void {

    this.loadChambres();
  }

  // initForm() {
  //   this.chambreForm = this.formBuilder.group({
  //     Number: ['', [Validators.required]],
  //     Floor: ['', [Validators.required]],
  //     Vue: ['', [Validators.required]],
  //     type: ['', [Validators.required]],
  //     reserver: [false, [Validators.required]],
  //     nettoyer: [false, [Validators.required]],
  //   });
  // }

  loadChambres() {
    this.chambreApiService.getChambresByHotel(this.connectedUser.hotel.id)
      .subscribe(chambres => {
        this.chambres = chambres;
      }, error => {
        console.error('Erreur lors du chargement des chambres:', error);
      });
  }

  deleteRoom(id: number) {
    this.chambreApiService.deleteChambres(id)
    .subscribe({
      next:(value: any)=> {
        console.log(value);
        this.chambres = this.chambres.filter(el => el.id!= id);
        this.toastrService.success("Room was deleted")},
      error:(err: any)=> {this.toastrService.danger(err)},
    })
  }



}
