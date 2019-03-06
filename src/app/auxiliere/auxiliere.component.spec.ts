import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliereComponent } from './auxiliere.component';

describe('AuxiliereComponent', () => {
  let component: AuxiliereComponent;
  let fixture: ComponentFixture<AuxiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
