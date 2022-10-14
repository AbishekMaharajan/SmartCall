import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentProjectCallCountComponent } from './agent-project-call-count.component';

describe('AgentProjectCallCountComponent', () => {
  let component: AgentProjectCallCountComponent;
  let fixture: ComponentFixture<AgentProjectCallCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentProjectCallCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentProjectCallCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
