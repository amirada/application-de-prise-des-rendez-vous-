import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpatientsComponent } from './gestionpatients.component';

describe('GestionpatientsComponent', () => {
  let component: GestionpatientsComponent;
  let fixture: ComponentFixture<GestionpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
