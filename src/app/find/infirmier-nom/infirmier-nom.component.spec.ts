import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierNomComponent } from './infirmier-nom.component';

describe('InfirmierNomComponent', () => {
  let component: InfirmierNomComponent;
  let fixture: ComponentFixture<InfirmierNomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfirmierNomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmierNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
