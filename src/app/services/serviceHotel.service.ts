import { Reservation } from './../models/reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';


@Injectable({
  providedIn: 'root'
})
export class  ServiceHotelApi {
  private baseUrl = 'http://localhost:8080/services';

  constructor(private http: HttpClient) { }


  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl, service);
  }
  deleteService(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  getServiceByHotel(hotelId: number): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.baseUrl}/find/${hotelId}`);

  }
  
}
