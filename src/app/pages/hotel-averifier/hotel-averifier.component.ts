import { Hotel } from './../../models/hotel.model';
import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../../services/hotel-api.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-hotel-averifier',
  templateUrl: './hotel-averifier.component.html',
  styleUrls: ['./hotel-averifier.component.scss']
})
export class HotelAVerifierComponent implements OnInit {

  hotels: Hotel[] = [];

  constructor(
    private hotelApiService: HotelApiService,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.loadHotels();

  }

  loadHotels() {
    this.hotelApiService. findAllActiven()
      .subscribe(hotels => {
        this.hotels = hotels;
      }, error => {
        console.error('Erreur lors du chargement des hotels :', error);
      });
  }
  activatHotel(id: number) {
    this.hotelApiService.activatHotel(id)
    .subscribe({
      next:(value: any)=> {
        console.log(value);
        this.hotels = this.hotels.filter(el => el.id!= id);
        this.toastrService.success("Hotel est Accepted")},
      error:(err: any)=> {this.toastrService.danger(err)},
    })
  }
}
