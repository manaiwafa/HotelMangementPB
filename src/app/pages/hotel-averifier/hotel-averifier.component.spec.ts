import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAVerifierComponent } from './hotel-averifier.component';

describe('HotelAVerifierComponent', () => {
  let component: HotelAVerifierComponent;
  let fixture: ComponentFixture<HotelAVerifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAVerifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
