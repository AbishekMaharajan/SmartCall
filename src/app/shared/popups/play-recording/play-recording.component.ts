import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play-recording',
  templateUrl: './play-recording.component.html',
  styleUrls: ['./play-recording.component.scss']
})
export class PlayRecordingComponent implements OnInit, AfterViewInit {
  @ViewChild('audio') audio: ElementRef;

  user: any
  admin = JSON.parse(localStorage.getItem('userDetails')).user_type
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.audio && this.admin && this.admin == 1) {
      const audio = this.audio.nativeElement
      audio.setAttribute("controlslist", "download");
    }

  }


  onConfirm() {
    this.activeModal.close('success')
  }
  close() {
    this.activeModal.close();
  }

}
