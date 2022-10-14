import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConsolidatedComponent } from './layout-consolidated.component';

describe('LayoutConsolidatedComponent', () => {
  let component: LayoutConsolidatedComponent;
  let fixture: ComponentFixture<LayoutConsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutConsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
