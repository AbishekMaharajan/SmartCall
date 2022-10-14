import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStatusComponent } from './layout-status.component';

describe('LayoutStatusComponent', () => {
  let component: LayoutStatusComponent;
  let fixture: ComponentFixture<LayoutStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
