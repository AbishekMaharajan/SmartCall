import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLoaderComponent } from './call-loader.component';

describe('CallLoaderComponent', () => {
  let component: CallLoaderComponent;
  let fixture: ComponentFixture<CallLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
