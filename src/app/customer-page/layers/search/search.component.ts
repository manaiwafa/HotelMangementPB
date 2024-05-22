import { HotelApiService } from './../../../services/hotel-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../../../models/hotel.model';
import { SharedSearchService } from '../../../services/shared-search.service';
import { SharedData } from '../../../models/shared-data.model';
import { RegionApiService } from '../../../services/region-api.service';
import { Region } from '../../../models/region';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {}