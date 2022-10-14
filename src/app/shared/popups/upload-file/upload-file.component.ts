import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  @ViewChild('file') file: ElementRef;

  fileName: string = ''
  docName: string = ''
  docDescription: string = ''
  fileDate
  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit() {
    this.file.nativeElement
  }
  chooseFile() {
    this.file.nativeElement.click()
  }
  selectFile(event) {
    const file = event.target.files[0]
    this.fileName = file.name
    console.log('  this.fileName: ', this.fileName);
    if (file) {
      const reader = new FileReader();
      reader.onload = (events: any) => {
        this.fileDate = events.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onUpload() {
    const params = {
      docName: this.docName,
      docDescription: this.docDescription,
      fileName: this.fileName,
      file: this.fileDate
    }
    console.log('params: ', params);
    // this.activeModal.close('success')
  }

  close() {
    this.activeModal.close();
  }
}
