import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAccepterComponent } from './hotel-accepter.component';

describe('HotelAccepterComponent', () => {
  let component: HotelAccepterComponent;
  let fixture: ComponentFixture<HotelAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAccepterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
