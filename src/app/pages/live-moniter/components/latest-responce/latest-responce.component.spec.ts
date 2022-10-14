import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestResponceComponent } from './latest-responce.component';

describe('LatestResponceComponent', () => {
  let component: LatestResponceComponent;
  let fixture: ComponentFixture<LatestResponceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestResponceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestResponceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
