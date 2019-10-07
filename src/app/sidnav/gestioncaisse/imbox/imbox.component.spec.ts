import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImboxComponent } from './imbox.component';

describe('ImboxComponent', () => {
  let component: ImboxComponent;
  let fixture: ComponentFixture<ImboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
