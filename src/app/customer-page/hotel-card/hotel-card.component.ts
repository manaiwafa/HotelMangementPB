import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'ngx-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {

  @Input() hotel: Hotel;

  countDefaultPrice(hotel: Hotel) {
    if(hotel) return hotel.prixVueNormal + hotel.typeDouble + 2 * (hotel.prixPersonne + hotel.prixPetitDej)
  }

}
