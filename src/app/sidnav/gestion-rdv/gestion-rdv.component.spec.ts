import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRDVComponent } from './gestion-rdv.component';

describe('GestionRDVComponent', () => {
  let component: GestionRDVComponent;
  let fixture: ComponentFixture<GestionRDVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRDVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
