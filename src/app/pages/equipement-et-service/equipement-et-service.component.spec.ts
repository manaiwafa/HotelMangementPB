import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementEtServiceComponent } from './equipement-et-service.component';

describe('EquipementEtServiceComponent', () => {
  let component: EquipementEtServiceComponent;
  let fixture: ComponentFixture<EquipementEtServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementEtServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementEtServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
