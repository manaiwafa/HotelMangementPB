import { Employe } from './../../models/employe.model';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../models/utilisateur.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployerApiService } from '../../services/employer-api.service';
import { NbToastrService } from '@nebular/theme';
@Component({
  selector: 'ngx-gestion-employe',
  templateUrl: './gestion-employe.component.html',
  styleUrls: ['./gestion-employe.component.scss']
})
export class GestionEmployeComponent implements OnInit {

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
      this.employerApiService.getEmployersByHotelId(this.connectedUser.hotel.id)
        .subscribe(employe => {
          this.employe = employe;
        }, error => {
          console.error('Erreur lors du chargement des chambres:', error);
        });
    }


deleteEmployer(id: number) {
  this.employerApiService.deleteEmployer(id)
  .subscribe({
    next:(value: any)=> {
      console.log(value);
      this.employe = this.employe.filter(el => el.id!= id);
      this.toastrService.success("Room was deleted")},
    error:(err: any)=> {this.toastrService.danger(err)},
  })
}


  }



