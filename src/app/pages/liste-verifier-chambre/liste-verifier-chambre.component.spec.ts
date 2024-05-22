import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVerifierChambreComponent } from './liste-verifier-chambre.component';

describe('ListeVerifierChambreComponent', () => {
  let component: ListeVerifierChambreComponent;
  let fixture: ComponentFixture<ListeVerifierChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVerifierChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVerifierChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
