import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmedecinsComponent } from './gestionmedecins.component';

describe('GestionmedecinsComponent', () => {
  let component: GestionmedecinsComponent;
  let fixture: ComponentFixture<GestionmedecinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionmedecinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
