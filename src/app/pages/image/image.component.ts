import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-api.service';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../../models/utilisateur.model';

@Component({
  selector: 'ngx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent  {
  connectedUser: Utilisateur = JSON.parse(localStorage.getItem('user'));

  constructor(private imageService: ImageService) { }

  onFileSelected(event) {
    const file: File = event.target.files[0];
    this.uploadImage(file);
  }

  uploadImage(file: File) {
    this.imageService.uploadImage(file,this.connectedUser.id).subscribe(
      _response => {
        console.log('Image uploaded successfully');
      },
      _error => {
        console.error('Failed to upload image');
      }
    );
  }
  findImage(id) {
    return this.imageService.getImage(id);
  }

}
