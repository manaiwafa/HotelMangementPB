import { ChambreApiService } from './../../services/chambre-api.service';
import { EmployerApiService } from './../../services/employer-api.service';
import { Employe } from './../../models/employe.model';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chambre } from '../../models/chambre.model';
@Component({
  selector: 'ngx-chambre-pour-nettoyage',
  templateUrl: './chambre-pour-nettoyage.component.html',
  styleUrls: ['./chambre-pour-nettoyage.component.scss']
})
export class ChambrePourNettoyageComponent implements OnInit {


  chambreForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));
  employe: Employe;
  chambres: Chambre[];
  selectedChambres: Chambre[] = [];

  constructor(
    private employeApiService: EmployerApiService,
    private chambreApiService: ChambreApiService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.findEmploye();
  }

  findEmploye() {
    this.employeApiService.findEmployerById(this.id).subscribe(value => {
      this.employe = value;
      this.loadChambres();
    })
  }

  loadChambres() {
    this.chambreApiService.findAllRoomForCleaning(this.connectedUser.hotel.id)
      .subscribe(chambres => {
        this.chambres = chambres;
      }, error => {
        console.error('Erreur lors du chargement des chambres nn nettoyer', error);
      });
  }

  affectation(chambre: Chambre, checked: boolean) {
    // console.log(chambre);
    // console.log(this.employe);
    console.log(checked);

    if (checked) {
      this.selectedChambres.push(chambre);
    } else {
      this.selectedChambres = this.selectedChambres.filter(c => c.id != chambre.id);
    }
    console.log(this.selectedChambres);


  }

  save() {
    this.employeApiService.addEmployerAChambre(this.employe.id, this.selectedChambres).subscribe(value => {
      this.toastrService.success("success affectation")
    })
  }
  modifier() {
    this.chambreApiService.modifier( this.selectedChambres)
      .subscribe(
        () => {
          this.toastrService.success("Mise à jour réussie");
        },
      )
  }

}

