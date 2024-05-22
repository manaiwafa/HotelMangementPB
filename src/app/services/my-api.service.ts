import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscriptionRequest } from '../models/inscriptionRequest';
import { AutentificationRequest } from '../models/AutentificationRequest';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  addChambre(inscriptionRequest: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/utilisateurs';

  constructor(private http: HttpClient) { }

  inscription(inscriptionRequest: InscriptionRequest): Observable<InscriptionRequest> {
    return this.http.post<InscriptionRequest>(`${this.baseUrl}/inscription`, inscriptionRequest);
  }

  logiin(autentificationRequest: AutentificationRequest) {
    return this.http.post<Utilisateur>(`${this.baseUrl}/login`, autentificationRequest);
  }
  login(autentificationRequest: AutentificationRequest): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}/logiin`,autentificationRequest);
  }
  getEmployesByHotel(){}
}
