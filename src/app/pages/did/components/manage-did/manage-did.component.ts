import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { ConfirmationPopupComponent } from 'src/app/shared/popups/confirmation-popup/confirmation-popup.component';
import { DidSandbox } from '../../did.sandbox';


@Component({
  selector: 'app-manage-did',
  templateUrl: './manage-did.component.html',
  styleUrls: ['./manage-did.component.scss']
})
export class ManageDidComponent implements OnInit, OnDestroy {
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id;
  didID = 0
  projectId = 0
  faSearch = faSearch
  faCheckCircle = faCheckSquare
  DidArr = []
  public subscriptions: Array<Subscription> = [];

  constructor(
    public modalService: NgbModal,
    public didSandbox: DidSandbox,
    public commonSandbox: CommonSandbox,

  ) { }

  ngOnInit() {
    this.fetchDidList()
    this.fetchDidListCount()
    this.fetchDropdownList()
  }

  fetchDidList() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.didSandbox.didList(params)
    this.subscriptions.push(this.didSandbox.didList$.pipe(take(2)).subscribe((res) => {
      if (res && res.length > 0) {
        res.forEach((data) => {
          data.isAssigned = false
          data.selectedProject = 'Select Project'
        })
        this.DidArr = res
      }

    }))
  }
  fetchDidListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.didSandbox.didListCount(params)
    this.subscriptions.push(this.didSandbox.didListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }

  fetchDropdownList() {
    const params = {
      organisation_id: this.orgId,
      type: 0
    }
    this.didSandbox.getProjectList(params)
  }

  onSearch() {
    this.fetchDidList();
    this.fetchDidListCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchDidList();
      this.fetchDidListCount();
    }
  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchDidList()
  }
  onSelectProject(projectId) {
    this.projectId = projectId
  }
  assignDid() {
    const params = {
      did_id: this.didID,
      project_id: this.projectId,
      organisation_id: this.orgId
    }
    this.didSandbox.assignDid(params)
    this.subscriptions.push(this.didSandbox.assignDid$.subscribe((res) => {
      if (res && res.status == 1) {
        this.fetchDidList();
        this.fetchDidListCount();
      }
    }))
  }

  releaseDid(did) {
    const params = {
      did_id: did.did_id,
      project_id: did.project_id,
      organisation_id: this.orgId
    }
    this.didSandbox.releaseDid(params)
    this.subscriptions.push(this.didSandbox.releaseDid$.subscribe((res) => {
      if (res && res.status == 1) {
        this.fetchDidList();
        this.fetchDidListCount();
      }
    }))
  }
  onClickAssign(did) {
    this.DidArr.forEach((did) => did.isAssigned = false)
    did.isAssigned = true
  }

  onSave(did) {
    this.didID = did.did_id
    did.isAssigned = false
    this.assignDid()
    did.selectedProject = 'Select Project'
  }

  onCancel(did) {
    did.isAssigned = false
  };

  onReleaseBtnClick(did) {
    const modalRef = this.modalService.open(ConfirmationPopupComponent, { centered: true });
    modalRef.componentInstance.moduleName = 'manageDID';
    modalRef.result.then((result) => {
      if (result === 'success') {
        this.releaseDid(did)
      }
    });
  }

  export() {
    const params = {
      name: 'didList',
      file: 'Didlist.xlsx'
    }
    this.commonSandbox.export(params)
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
