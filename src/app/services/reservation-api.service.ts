import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './../models/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {
  private baseUrl = 'http://localhost:8080/reservations';

  constructor(private http: HttpClient) { }


  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}`, reservation);
  }
  deleteReservation(id: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  getReservationByHotel(hotelId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/hotel/${hotelId}`);
  }
  findReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.baseUrl}/${id}`);

  }
  addReservationChambre(idReservation: number, idChambre: number): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.baseUrl}/${idReservation}/${idChambre}`, null); // Si vous devez envoyer des données avec la requête, remplacez null par l'objet à envoyer
  }
  getReservationByHotelByaccepterAndDateA(hotelId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/hotel/${hotelId}/accepted/all`);
  }
  acceptReservation(idReservation: number) {
    return this.http.put<Reservation>(`${this.baseUrl}/accept/${idReservation}`, null);
  }
  cancelReservation(idReservation: number) {
    return this.http.put<Reservation>(`${this.baseUrl}/cancel/${idReservation}`, null);
  }
  getReservationByHotelByaccepter(hotelId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/hotel/${hotelId}`);
  }
  getReservationsAccepterTodayByHotel(hotelId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/hotels/${hotelId}/reservations`);
  }
  getReservationByHotelByallaccepter(hotelId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}/hotel/${hotelId}/allaccepted`);
  }
}
