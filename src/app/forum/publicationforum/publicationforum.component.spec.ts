import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationforumComponent } from './publicationforum.component';

describe('PublicationforumComponent', () => {
  let component: PublicationforumComponent;
  let fixture: ComponentFixture<PublicationforumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationforumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
