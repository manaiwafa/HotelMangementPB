import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:8080/api/images'; // Assurez-vous que l'URL correspond à votre endpoint API

  constructor(private http: HttpClient) { }

  uploadImage(file: File,hotelId: number) {
    const options = {
      headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          'enctype': 'multipart/form-data'
      })
    }
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/upload/${hotelId}`, formData);
  }

  getImage(id: number){
    return `${this.apiUrl}/${id}`;
  }
}
