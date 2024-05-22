import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { equipementApiService } from '../../services/equipement-api.service';
import { Service } from '../../models/service';
import { Utilisateur } from '../../models/utilisateur.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent {
  serviceForm: FormGroup;
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));


  constructor(
    private formBuilder: FormBuilder,
    private serviceService: equipementApiService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.serviceForm = this.formBuilder.group({
      service: ['', Validators.required],
      description: [''],
      gratuit: [],
      noms: [''],
     
      hotel: [this.connectedUser.hotel], // Ajouter ici des validateurs si nécessaire
    });
  }

  onSubmit() {
    if (this.serviceForm.invalid) {
      return;
    }

    // Préparer les données à envoyer
    const formData = this.serviceForm.value;
    formData.noms = formData.noms.split(',').map(nom => nom.trim());

    // Appeler le service pour sauvegarder le service
    this.serviceService.addService(formData).subscribe({
      next: (response) => {
        // Gérer la réponse si nécessaire
        console.log('Service ajouté avec succès', response);
        this.toastrService.success('Service ajouté avec succès');
      },
      error: (error) => {
        // Gérer les erreurs si nécessaire
        console.error('Erreur lors de l\'ajout du service : ', error);
        this.toastrService.danger('Erreur lors de l\'ajout du service');
      }
    });
  }
}
