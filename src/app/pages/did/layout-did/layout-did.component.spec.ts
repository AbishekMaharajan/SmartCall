import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDidComponent } from './layout-did.component';

describe('LayoutDidComponent', () => {
  let component: LayoutDidComponent;
  let fixture: ComponentFixture<LayoutDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
