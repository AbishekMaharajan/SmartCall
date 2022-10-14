import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingCallsComponent } from './ongoing-calls.component';

describe('OngoingCallsComponent', () => {
  let component: OngoingCallsComponent;
  let fixture: ComponentFixture<OngoingCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
