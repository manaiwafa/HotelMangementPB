import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPrixComponent } from './gestion-prix.component';

describe('GestionPrixComponent', () => {
  let component: GestionPrixComponent;
  let fixture: ComponentFixture<GestionPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
