import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrService } from '@nebular/theme';
import { EmployerApiService } from '../../services/employer-api.service';
import { Employe } from '../../models/employe.model';

@Component({
  selector: 'ngx-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.scss']
})
export class GestionServiceComponent implements OnInit {

  employe: Employe[] = [];
  EmployeForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));

  constructor(
    private employerApiService: EmployerApiService,
    //private formBuilder: FormBuilder,
    private toastrService: NbToastrService,

  ) { }

  ngOnInit(): void {

    this.loadEmployers();
  }


  loadEmployers() {
    this.employerApiService.getEmployesByRoleAndHotelId(this.connectedUser.hotel.id)
      .subscribe(employe => {
        this.employe = employe;
      }, error => {
        console.error('Erreur lors du chargement des chambres:', error);
      });
  }
}
