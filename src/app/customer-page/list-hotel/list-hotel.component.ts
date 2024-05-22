import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedSearchService } from '../../services/shared-search.service';
import { SharedData } from '../../models/shared-data.model';
import { Region } from '../../models/region';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegionApiService } from '../../services/region-api.service';
import { HotelApiService } from '../../services/hotel-api.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'ngx-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.scss']
})
export class ListHotelComponent {}
