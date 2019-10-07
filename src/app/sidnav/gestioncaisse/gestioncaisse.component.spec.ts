import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncaisseComponent } from './gestioncaisse.component';

describe('GestioncaisseComponent', () => {
  let component: GestioncaisseComponent;
  let fixture: ComponentFixture<GestioncaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
