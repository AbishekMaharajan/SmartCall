import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play-recording',
  templateUrl: './play-recording.component.html',
  styleUrls: ['./play-recording.component.scss']
})
export class PlayRecordingComponent implements OnInit {
  user: any
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onConfirm() {
    this.activeModal.close('success')
  }
  close() {
    this.activeModal.close();
  }

}
