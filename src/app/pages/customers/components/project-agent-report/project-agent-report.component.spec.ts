import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAgentReportComponent } from './project-agent-report.component';

describe('ProjectAgentReportComponent', () => {
  let component: ProjectAgentReportComponent;
  let fixture: ComponentFixture<ProjectAgentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAgentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAgentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
