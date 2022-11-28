import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { ProjectsSandbox } from 'src/app/pages/projects/projects.sandbox';
import { ConfirmationPopupComponent } from 'src/app/shared/popups/confirmation-popup/confirmation-popup.component';
import { UsersSandbox } from '../../users.sandbox';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  faSearch = faSearch
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  checked = true
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  public subscriptions: Array<Subscription> = [];
  constructor(
    private router: Router,
    public usersSandbox: UsersSandbox,
    public modalService: NgbModal,
    public commonSandbox: CommonSandbox,
  ) { }

  ngOnInit() {
    this.fetchUserList()
    this.fetchUserListCount()
  }
  fetchUserList() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.usersSandbox.userList(params)

  }
  fetchUserListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.usersSandbox.userListCount(params)
    this.subscriptions.push(this.usersSandbox.userListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }
  editUser(id) {
    this.router.navigate(['users/edit/' + id])
  }
  deleteUser(id) {
    const modalRef = this.modalService.open(ConfirmationPopupComponent, {
      centered: true, backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.moduleName = 'deleteUser';
    modalRef.componentInstance.moduleData = id;
    modalRef.result.then((result) => {
      if (result == 'success') {
        this.usersSandbox.deleteUser(id);
        this.subscriptions.push(this.usersSandbox.deleteUser$.subscribe((res) => {
          if (res && res.status == 1) {
            this.fetchUserList();
            this.fetchUserListCount();
          }
        }))
      }
    });
  }
  onAddBtnClick() {
    this.router.navigate(['users/create'])
  }

  onSearch() {
    this.fetchUserList();
    this.fetchUserListCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchUserList();
      this.fetchUserListCount();
    }

  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchUserList()
  }

  export() {
    const params = {
      name: 'membersList',
      file: 'Memberlist.xlsx',
      payload: {
        keyword: this.keyword
      }

    }
    this.commonSandbox.export(params)
  }

  onToggleActiveStatus(event, user) {

    const params = {
      member_id: user.id,
      status: event.checked === true ? 1 : 0
    }
    this.usersSandbox.changeActiveStatus(params)


  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
