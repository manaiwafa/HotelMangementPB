import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { Observable } from 'rxjs';
import { Magasin } from '../models/magasin.model';

@Injectable({
  providedIn: 'root'
})
export class MagasinApiService {
  private baseUrl = 'http://localhost:8080/magasin';

  constructor(private http: HttpClient) { }
  getmagasinByIdHotel(hotelId: number): Observable<Magasin> {
    return this.http.get<Magasin>(`${this.baseUrl}/${hotelId}`);
  }
  updateStock(hotelId: number):Observable<Magasin> {
    return this.http.post<Magasin>(`${this.baseUrl}/updateStock/${hotelId}`,{});
  }
  ajouterStockMagasin(idHotel: number, quantites: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idHotel}/add`, quantites);
  }
}
