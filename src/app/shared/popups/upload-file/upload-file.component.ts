import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProjectsSandbox } from 'src/app/pages/projects/projects.sandbox';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {
  @ViewChild('file') file: ElementRef;

  fileName: string = ''
  docName: string = ''
  docDescription: string = ''
  fileDate: any = ''
  project
  public subscriptions: Array<Subscription> = [];
  constructor(
    public activeModal: NgbActiveModal,
    public toster: ToastrService,
    public projectsSandbox: ProjectsSandbox,
  ) { }

  ngOnInit() {
  }

  chooseFile() {
    this.file.nativeElement.click()
  }
  selectFile(event) {
    const file = event.target.files[0]
    this.fileName = file.name
    this.fileDate = file
  }
  onUpload() {
    const obj = {
      ['Document Name']: this.docName,
      ['Document Description']: this.docDescription,
      ['File Name']: this.fileName,
      ['File']: this.fileDate
    }
    for (const param in obj) {
      if (obj[param] === '') {
        return this.toster.error(`${param} cannot be empty`)
      }
    }
    const params = {
      document_name: this.docName,
      description: this.docDescription,
      project_id: this.project.id ? this.project.id : '',
      file: this.fileDate
    }

    this.projectsSandbox.uploadFile(params)
    this.subscriptions.push(this.projectsSandbox.uploadFile$.subscribe((res) => {
      if (res) {
        this.activeModal.close('success')
      }
    }))
  }

  close() {
    this.activeModal.close();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
