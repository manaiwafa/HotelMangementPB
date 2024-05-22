import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterReservationComponent } from './affecter-reservation.component';

describe('AffecterReservationComponent', () => {
  let component: AffecterReservationComponent;
  let fixture: ComponentFixture<AffecterReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
