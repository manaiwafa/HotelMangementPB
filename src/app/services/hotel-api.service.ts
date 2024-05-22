import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { Observable } from 'rxjs';
import { SharedData } from '../models/shared-data.model';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {
  private baseUrl = 'http://localhost:8080/hotels';

  constructor(private http: HttpClient) { }

 findAllActive() {
    return this.http.get<Hotel[]>(`${this.baseUrl}/active`,);
  }
  
 findAllActiven(){
  return this.http.get<Hotel[]>(`${this.baseUrl}/inactive`,);

}
activateHotel(hotelId: number): Observable<Hotel> {
  return this.http.put<Hotel>(`${this.baseUrl}/${hotelId}/activate`, {});
}
findAllVilles(): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/villes`);
}

findByEmplacement(emplacementVille: string): Observable<Hotel[]> {
  return this.http.get<Hotel[]>(`${this.baseUrl}/emplacementHotel/${emplacementVille}`);
}
activatHotel(hotelId: number): Observable<Hotel> {
  return this.http.put<Hotel>(`${this.baseUrl}/active/${hotelId}`, {});
}
addHotel(hotel: Hotel): Observable<Hotel> {
  return this.http.post<Hotel>(`${this.baseUrl}`, hotel);
}

updateHotelPrices(hotelId: number, hotelData: Hotel): Observable<Hotel> {
  return this.http.put<Hotel>(`${this.baseUrl}/${hotelId}`, hotelData);
}
getHotelById(hotelId: number):Observable<Hotel>{
  return this.http.get<Hotel>(`${this.baseUrl}/${hotelId}/find`)
}
addHotell(hotel: Hotel): Observable<Hotel> {
  return this.http.post<Hotel>(`${this.baseUrl}/add`, hotel);
}

findHotelByRegionAndDate(sharedData: SharedData): Observable<Hotel[]> {
  return this.http.post<Hotel[]>(`${this.baseUrl}/filter`, sharedData);
}
}


