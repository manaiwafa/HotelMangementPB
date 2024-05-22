import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambrePourNettoyageComponent } from './chambre-pour-nettoyage.component';

describe('ChambrePourNettoyageComponent', () => {
  let component: ChambrePourNettoyageComponent;
  let fixture: ComponentFixture<ChambrePourNettoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambrePourNettoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambrePourNettoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
