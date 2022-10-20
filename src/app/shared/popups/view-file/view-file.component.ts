import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProjectsSandbox } from 'src/app/pages/projects/projects.sandbox';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit, OnDestroy {
  project
  public subscriptions: Array<Subscription> = [];

  constructor(
    public activeModal: NgbActiveModal,
    public projectsSandbox: ProjectsSandbox,
  ) { }

  ngOnInit() {
    this.fetchFileList()
  }
  fetchFileList() {
    const params = {
      project_id: this.project.id ? this.project.id : ''
    }
    this.projectsSandbox.fileList(params)

  }
  viewFile(data) {
    console.log('data: ', data);
    window.open(data.file_url);
  }
  deleteFile(data) {
    console.log('data: ', data.document_id);
    this.projectsSandbox.deleteDocument(data.document_id)
    this.subscriptions.push(this.projectsSandbox.deleteDocument$.subscribe((res) => {
      if (res && res.status === 1) {
        this.fetchFileList()
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
