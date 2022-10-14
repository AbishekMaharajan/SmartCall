import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLatestResponseComponent } from './update-latest-response.component';

describe('UpdateLatestResponseComponent', () => {
  let component: UpdateLatestResponseComponent;
  let fixture: ComponentFixture<UpdateLatestResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLatestResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLatestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
