import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysMappedComponent } from './days-mapped.component';

describe('DaysMappedComponent', () => {
  let component: DaysMappedComponent;
  let fixture: ComponentFixture<DaysMappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysMappedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysMappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
