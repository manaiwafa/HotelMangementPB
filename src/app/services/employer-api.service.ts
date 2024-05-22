import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../models/employe.model';
import { Chambre } from '../models/chambre.model';
@Injectable({
  providedIn: 'root'
})
export class EmployerApiService {
  private baseUrl = 'http://localhost:8080/employers';

  constructor(private http: HttpClient) { }
  addEmployer(employer: Employe): Observable<Employe> {
    return this.http.post<Employe>(`${this.baseUrl}/`, employer);
  }
  getEmployersByHotelId(hotelId: number): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.baseUrl}/hotel/${hotelId}`);
  }
  deleteEmployer(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  findEmployerById(id: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.baseUrl}/${id}`);
  }
  getEmployesByRoleAndHotelId(hotelId: number): Observable<Employe[]> {
    const role = 'femme_menage'; // Vous pouvez spécifier directement le rôle ici
    return this.http.get<Employe[]>(`${this.baseUrl}/${role}/${hotelId}`);
}
getChambresByEmployerAndHotel(idEmployer: number): Observable<Chambre[]> {
  return this.http.get<Chambre[]>(`http://localhost:8080/historique/${idEmployer}/chambres`);
}
addEmployerAChambre(idEmployer: number, chambres: Chambre[]): Observable<Employe> {
  return this.http.post<Employe>(`http://localhost:8080/historique/employers/${idEmployer}/affecterChambres`, chambres); // Si vous devez envoyer des données avec la requête, remplacez null par l'objet à envoyer
}

}
