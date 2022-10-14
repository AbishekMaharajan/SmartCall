import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAgentMappingComponent } from './layout-agent-mapping.component';

describe('LayoutAgentMappingComponent', () => {
  let component: LayoutAgentMappingComponent;
  let fixture: ComponentFixture<LayoutAgentMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAgentMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAgentMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
