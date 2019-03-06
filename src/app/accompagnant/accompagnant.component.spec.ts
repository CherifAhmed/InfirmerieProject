import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnantComponent } from './accompagnant.component';

describe('AccompagnantComponent', () => {
  let component: AccompagnantComponent;
  let fixture: ComponentFixture<AccompagnantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompagnantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
