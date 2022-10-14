import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLiveMoniterComponent } from './layout-live-moniter.component';

describe('LayoutLiveMoniterComponent', () => {
  let component: LayoutLiveMoniterComponent;
  let fixture: ComponentFixture<LayoutLiveMoniterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLiveMoniterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLiveMoniterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
