import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelApiService } from '../../services/hotel-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-hotel-accepter',
  templateUrl: './hotel-accepter.component.html',
  styleUrls: ['./hotel-accepter.component.scss']
})
export class HotelAccepterComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(
    private hotelApiService: HotelApiService,
  ) { }

  ngOnInit(): void {
    this.loadHotels();

  }

  loadHotels() {
    this.hotelApiService. findAllActive()
      .subscribe(hotels => {
        this.hotels = hotels;
      }, error => {
        console.error('Erreur lors du chargement des hotels :', error);
      });
  }
}
