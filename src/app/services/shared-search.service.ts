import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedData } from '../models/shared-data.model';


@Injectable({
  providedIn: 'root'
})
export class SharedSearchService {

  private searchData = new BehaviorSubject<SharedData>(new SharedData());
  selectedsearchData = this.searchData.asObservable();
  constructor() {}

  setSearchData(searchData: any) {
    this.searchData.next(searchData);
  }
}
