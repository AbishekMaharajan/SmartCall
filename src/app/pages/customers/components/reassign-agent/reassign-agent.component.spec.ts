import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignAgentComponent } from './reassign-agent.component';

describe('ReassignAgentComponent', () => {
  let component: ReassignAgentComponent;
  let fixture: ComponentFixture<ReassignAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReassignAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
