import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthwiseCallCountComponent } from './monthwise-call-count.component';

describe('MonthwiseCallCountComponent', () => {
  let component: MonthwiseCallCountComponent;
  let fixture: ComponentFixture<MonthwiseCallCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthwiseCallCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthwiseCallCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
