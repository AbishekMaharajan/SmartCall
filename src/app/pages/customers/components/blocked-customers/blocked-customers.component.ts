import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';

@Component({
  selector: 'app-blocked-customers',
  templateUrl: './blocked-customers.component.html',
  styleUrls: ['./blocked-customers.component.scss']
})
export class BlockedCustomersComponent implements OnInit, OnDestroy {
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  loginId = JSON.parse(localStorage.getItem('userDetails')).member_id
  agentId: number
  public subscriptions: Array<Subscription> = [];

  constructor(
    public userSandbox: UsersSandbox,
    public toster: ToastrService,
  ) { }

  ngOnInit() {
    this.fetchAgentLsit()
    this.fetchBlockedCustomerList()
    this.fetchBlockedCustomerListCount()
  }
  fetchAgentLsit() {
    this.userSandbox.agentList(this.orgId)
  }

  fetchBlockedCustomerList() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.userSandbox.getBlockedCustomerList(params)

  }
  fetchBlockedCustomerListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.userSandbox.getBlockedCustomerListCount(params)

  }

  reassignFunc(data) {
    data.isClicked = true
  }

  onSave({ customer_id }) {
    if (!this.agentId) return this.toster.error('No Agent Selected')
    const params = {
      login_id: this.loginId,
      to_agent_id: this.agentId,
      customer_id: customer_id
    }

    this.userSandbox.reassignBlocked(params)
    this.subscriptions.push(this.userSandbox.reassignBlocked$.subscribe((res) => {
      if (res && res.status == 1) {
        this.fetchBlockedCustomerList()
        this.fetchBlockedCustomerListCount()
      }
    }))
  }

  onCancel(data) {
    data.isClicked = false
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchBlockedCustomerList()
    this.fetchBlockedCustomerListCount()
  }

  ngOnDestroy() {

    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
