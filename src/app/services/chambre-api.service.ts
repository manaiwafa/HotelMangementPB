import { Value } from 'sass';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from './../models/chambre.model';


@Injectable({
  providedIn: 'root'
})
export class ChambreApiService {
  private baseUrl = 'http://localhost:8080/chambres';

  constructor(private http: HttpClient) { }

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/find`);
  }
  findChambreById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/${id}`);

  }
  getChambresByHotel(hotelId: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/hotel/${hotelId}`);
  }

  deleteChambres(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}`, chambre);
  }

  addChambreByIdHotel(hotelId: number): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}/save/${hotelId}/chambre`, Chambre);
  }

  getChambresReseByHotel(hotelId: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/nonreservees/${hotelId}`);
  }

  getChambresNonReserveesByAttributes(hotelId: number, type: string, vue: string): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/nonreserveees/${hotelId}?type=${type}&vue=${vue}`);
  }

  findAllRoomForCleaning(hotelId: number): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/hotel/${hotelId}/forCleaning`);
  }
  verifierChambre(idChambre: number) {
    return this.http.put<Chambre>(`${this.baseUrl}/verifier/${idChambre}`, null);
  }
  modifier(chambres: Chambre[]): Observable<Chambre[]> {
    return this.http.put<Chambre[]>(`${this.baseUrl}/verification`, chambres);
  }
  getChambresAvaible(hotelId: number, dateArrivee: Date, dateDepart: Date): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/disponibles/${hotelId}/${dateArrivee}/${dateDepart}`);
  }
  getQuantitesProduits(hotelId: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/${hotelId}/quantites-produits`);
  }
  findRoomToReservation(hotelId: number, typeChambre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${hotelId}/reservation/${typeChambre}`);
  }
}
