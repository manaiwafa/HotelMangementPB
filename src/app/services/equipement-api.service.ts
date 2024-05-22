import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
@Injectable({
  providedIn: 'root'
})
export class equipementApiService {

  private baseUrl = 'http://localhost:8080/services';


  constructor(private http: HttpClient) { }
  addService(Service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.baseUrl}`, Service);
  }
  findAllServices(): Observable<Service[]>{
    return this.http.get<Service[]>(`${this.baseUrl}/find`,);
  }
  findAllServicesByHotel(hotelId: number): Observable<Service[]>{
    return this.http.get<Service[]>(`${this.baseUrl}/find/${hotelId}`);
  }

}
