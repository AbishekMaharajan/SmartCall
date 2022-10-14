import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDidComponent } from './manage-did.component';

describe('ManageDidComponent', () => {
  let component: ManageDidComponent;
  let fixture: ComponentFixture<ManageDidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
