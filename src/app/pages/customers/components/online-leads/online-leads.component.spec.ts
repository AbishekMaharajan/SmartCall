import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLeadsComponent } from './online-leads.component';

describe('OnlineLeadsComponent', () => {
  let component: OnlineLeadsComponent;
  let fixture: ComponentFixture<OnlineLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
