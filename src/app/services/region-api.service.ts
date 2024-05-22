import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region';


@Injectable({
  providedIn: 'root'
})
export class RegionApiService {
  private baseUrl = 'http://localhost:8080/regions';

  constructor(private http: HttpClient) { }

  getAllRegion(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.baseUrl}`);
  }

}
