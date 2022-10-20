import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from 'src/app/shared/popups/confirmation-popup/confirmation-popup.component';
import { ProjectsSandbox } from '../../projects.sandbox';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { UploadFileComponent } from 'src/app/shared/popups/upload-file/upload-file.component';
import { ViewFileComponent } from 'src/app/shared/popups/view-file/view-file.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  public subscriptions: Array<Subscription> = [];


  constructor(
    private router: Router,
    public projectsSandbox: ProjectsSandbox,
    public modalService: NgbModal,
    public commonSandbox: CommonSandbox,


  ) {
  }
  ngOnInit() {
    this.fetchProjectList()
    this.fetchProjectListCount()
  }
  fetchProjectList() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.projectsSandbox.projectList(params)
  }
  fetchProjectListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.projectsSandbox.projectListCount(params)
    this.subscriptions.push(this.projectsSandbox.projectListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }
  onAddBtnClick() {
    this.router.navigate(['projects/create'])
  }

  uploadFile(project) {
    const modalRef = this.modalService.open(UploadFileComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.project = project;
    modalRef.result.then((result) => {
      if (result == 'success') {

      }
    });
  }
  viewFile(project) {
    const modalRef = this.modalService.open(ViewFileComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.project = project;

    modalRef.result.then((result) => {
      if (result == 'success') {

      }
    });
  }
  editProject(project) {
    const id: number = project.id
    this.router.navigate(['projects/edit/' + id])
  }
  deleteProject(id) {
    const modalRef = this.modalService.open(ConfirmationPopupComponent, { centered: true });
    modalRef.componentInstance.moduleName = 'deleteProject';
    modalRef.componentInstance.moduleData = id;
    modalRef.result.then((result) => {
      if (result == 'success') {
        this.fetchProjectList();
        this.fetchProjectListCount();

      }
    });
  }
  onSearch() {
    this.fetchProjectList();
    this.fetchProjectListCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchProjectList();
      this.fetchProjectListCount();
    }
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchProjectList()
  }
  export() {
    const params = {
      name: 'projectList',
      file: 'Projectlist.xlsx'
    }
    this.commonSandbox.export(params)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
