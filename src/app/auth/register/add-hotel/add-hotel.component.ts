import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepperComponent } from "@nebular/theme";
import { InscriptionRequest } from '../../../models/inscriptionRequest';
import { ImageService } from '../../../services/image-api.service';

@Component({
  selector: 'ngx-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

  HotelForm!: FormGroup;
  @Input() inscriptionRequest!: InscriptionRequest;
  @Input() stepper: NbStepperComponent;
  selectedFile: File | undefined;

  constructor(private formBuilder: FormBuilder,
    imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.HotelForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      nombreChambres: ['', [Validators.required,]],
      emplacementVille: ['', [Validators.required]],
      description: ['', [Validators.required]],
      nbrpiscine: ['', [Validators.required]],
      nbrdeterrains: ['', [Validators.required]],
      parking: ['', [Validators.required]],
      resto: ['', [Validators.required]],
      coindecoffe: ['', [Validators.required]],
      activitéetanimation: ['', [Validators.required]],
     // Ajoutez un champ pour l'image
    });
  }
   onFileSelected(event) {
      const file: File = event.target.files[0];
      // this.uploadImage(file);
    }
    // uploadImage(file: File) {
    //   this.imageService.uploadImage(file).subscribe(
    //     response => {
    //       console.log('Image uploaded successfully');
    //     },
    //     error => {
    //       console.error('Failed to upload image');
    //     }
    //   );
    // }

  onSubmit() {
    if (this.HotelForm.valid) {
      console.log(this.HotelForm.value);
      this.inscriptionRequest.hotel = this.HotelForm.value

      this.stepper.next();
    }

  }

}



