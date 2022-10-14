import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayRecordingComponent } from './play-recording.component';

describe('PlayRecordingComponent', () => {
  let component: PlayRecordingComponent;
  let fixture: ComponentFixture<PlayRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
