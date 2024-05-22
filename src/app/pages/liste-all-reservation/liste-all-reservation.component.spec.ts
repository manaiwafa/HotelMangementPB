import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAllReservationComponent } from './liste-all-reservation.component';

describe('ListeAllReservationComponent', () => {
  let component: ListeAllReservationComponent;
  let fixture: ComponentFixture<ListeAllReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAllReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAllReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
