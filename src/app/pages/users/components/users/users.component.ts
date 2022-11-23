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
  userArr = [
    { id: 1, name: 'Swathi', mail: 'a48ssd@gmail.com', mobile: '7548493034', type: 'Sales Head', phone: 'Mobile', repoting: 'Admin' },
    { id: 2, name: 'Dhivakar', mail: 'diva@gmail.com', mobile: '7542223034', type: 'Team Lead', phone: 'Mobile', repoting: 'Swathi' },
    { id: 3, name: 'Bala', mail: 'a48ssd@gmail.com', mobile: '7548493034', type: 'Team Lead', phone: 'Mobile', repoting: 'Swathi' },
    { id: 4, name: 'Abhishek', mail: 'abcd@gmail.com', mobile: '6678493034', type: 'Agent', phone: 'SIP', repoting: 'Bala' },
    { id: 5, name: 'Kishore', mail: 'njdie@gmail.com', mobile: '9068493034', type: 'Agent', phone: 'Mobile', repoting: 'Bala' },
    { id: 6, name: 'Vallarasan', mail: 'vallu@gmail.com', mobile: '857493034', type: 'Agent', phone: 'Mobile', repoting: 'Dhivakar' },
    { id: 7, name: 'Priya N', mail: 'priya@gmail.com', mobile: '790684930', type: 'Agent', phone: 'SIP', repoting: 'Bala' },
    { id: 8, name: 'Rakesh', mail: 'abcd@gmail.com', mobile: '6678493034', type: 'Agent', phone: 'Mobile', repoting: 'Bala' },
    { id: 9, name: 'Murugan', mail: 'njdie@gmail.com', mobile: '9068493034', type: 'Agent', phone: 'Mobile', repoting: 'Bala' },
    { id: 10, name: 'Latha', mail: 'vallu@gmail.com', mobile: '857493034', type: 'Agent', phone: 'Mobile', repoting: 'Dhivakar' },
    { id: 11, name: 'Duraimathi', mail: 'priya@gmail.com', mobile: '790684930', type: 'Agent', phone: 'Mobile', repoting: 'Bala' },

  ]
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
