import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbStepperComponent } from '@nebular/theme';
import { InscriptionRequest } from '../../../models/inscriptionRequest';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  compteForm!: FormGroup;
  @Input() inscriptionRequest!: InscriptionRequest;
  @Input() stepper: NbStepperComponent;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.compteForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]],
      role:['Admin hotel',[Validators.required]],

    });
  }

  onSubmit() {
    if (this.compteForm.valid) {
      console.log(this.compteForm.value);
      this.inscriptionRequest.utilisateur = this.compteForm.value;
      this.stepper.next();
    }
  }
}
