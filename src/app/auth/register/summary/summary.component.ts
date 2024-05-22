import { Component, Input } from '@angular/core';
import { InscriptionRequest } from '../../../models/inscriptionRequest';
import { MyApiService } from '../../../services/my-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() inscriptionRequest!: InscriptionRequest;

  constructor(private myApiService: MyApiService,
     private toastrService: NbToastrService) { }

  onSubmit() {
    this.myApiService.inscription(this.inscriptionRequest).subscribe({
      next:(value)=> {
        console.log(value);
        this.toastrService.success("success registration")},
      error:(err)=> {
        this.toastrService.danger(err)},
    })
  }
}
