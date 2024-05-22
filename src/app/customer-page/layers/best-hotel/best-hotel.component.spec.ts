import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHotelComponent } from './best-hotel.component';

describe('BestHotelComponent', () => {
  let component: BestHotelComponent;
  let fixture: ComponentFixture<BestHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
