import { Component, OnInit } from '@angular/core';
import { Employe } from '../../models/employe.model';
import { Utilisateur } from '../../models/utilisateur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployerApiService } from '../../services/employer-api.service';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.scss']
})
export class AjouterEmployeComponent implements OnInit {
    employe: Employe[] = [];
    EmployeForm: FormGroup;
    connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));
    id: number = parseInt(this.route.snapshot.paramMap.get('id'));

  constructor(
      private employerApiService: EmployerApiService,
      private formBuilder: FormBuilder,
      private toastrService: NbToastrService,
      private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.initForm();
   if(this.id) this.findEmployerById();
  }
  initForm(employe?: Employe) {
    this. EmployeForm = this.formBuilder.group({
      nom: [employe?.nom, [Validators.required]],
      prenom: [employe?.prenom, [Validators.required]],
      cin: [employe?.cin, [Validators.required]],
      telephone: [employe?.telephone, [Validators.required]],
      email: [employe?.email, [Validators.required]],
      dateNaissance: [employe?.dateNaissance, [Validators.required]],
      motDePasse: [employe?.motDePasse, [Validators.required]],
      type: [employe?.type, [Validators.required]],
      salaire: [employe?.salaire, [Validators.required]],
      role: [employe?.role, [Validators.required]],
      hotel: [this.connectedUser.hotel],
      id: [employe?.id]

    });
  }

  findEmployerById() {
    this.employerApiService.findEmployerById(this.id).subscribe({
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
    this.employerApiService.addEmployer(this.EmployeForm.value).subscribe({
      next: (value) => {
        console.log(value);
        this.toastrService.success("employe ajoutée avec succès");
      },
      error: (err) => {
        console.error(err);
        this.toastrService.danger("Erreur lors de l'ajout de l'employe'");
      }
    });
  }
}

