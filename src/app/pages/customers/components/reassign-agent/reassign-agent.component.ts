import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { ConfirmationPopupComponent } from 'src/app/shared/popups/confirmation-popup/confirmation-popup.component';
import { CustomersSandbox } from '../../customers.sandbox';

@Component({
  selector: 'app-reassign-agent',
  templateUrl: './reassign-agent.component.html',
  styleUrls: ['./reassign-agent.component.scss']
})
export class ReassignAgentComponent implements OnInit, OnDestroy {
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  users = []
  from = null
  to = null
  fromAgentId: number
  toAgentId: number
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }

  public subscriptions: Array<Subscription> = [];
  dataArr = []
  constructor(
    public userSandbox: UsersSandbox,
    public customerSandbox: CustomersSandbox,
    public modalService: NgbModal,
    private toster: ToastrService,
  ) { }

  ngOnInit() {
    this.fetchAgentLsit()
  }

  fetchAgentLsit() {
    this.userSandbox.agentList(this.orgId)
    this.subscriptions.push(this.userSandbox.agentList$.pipe(take(2)).subscribe((res) => {

      if (res && res.length > 0) {
        this.users = res
      }
    }))
  }

  fetchReassignList() {

    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count,
      from_agent_id: this.fromAgentId

    }
    this.customerSandbox.reassignList(params)
    this.subscriptions.push(this.customerSandbox.reassignList$.subscribe((res) => {
      if (res && res.length > 0) {
        this.dataArr = res.map((data) => {
          data.checked = false
          return data
        })
      } else this.dataArr = []
    }))
  }

  fetchReassignListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1,
      from_agent_id: this.fromAgentId

    }
    this.customerSandbox.reassignListCount(params)
    this.subscriptions.push(this.customerSandbox.reassignListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }

  reassignFrom(event) {
    if (!event) {
      this.fromAgentId = null
      this.dataArr = []
      return
    }
    this.fromAgentId = event.id
    this.to = null

    this.subscriptions.push(this.userSandbox.agentList$.pipe(take(2)).subscribe((res) => {

      if (res && res.length > 0) {
        this.users = res.filter((data) =>
          data.id !== event.id
        )
      }
    }))

    this.fetchReassignList()
    this.fetchReassignListCount()

  }

  reassignTo(event) {
    if (!event) {
      this.toAgentId = null
      return
    }
    this.toAgentId = event.id
  }

  reassignSelectedCustomer() {

    if (!this.fromAgentId && !this.to) return this.toster.error('Please select reassign from  and to agent and proceed')
    if (!this.fromAgentId) return this.toster.error('Please select reassign from agent and proceed')
    if (!this.to) return this.toster.error('Please select reassign to agent and proceed')
    if (!this.dataArr.length) return this.toster.error('Selected agent have no customer to reasign !')

    const customerArr = this.dataArr.filter((el) => el.checked == true)
      .map((data) => data.customer_id.toString())

    if (!customerArr.length) return this.toster.error('Please select atleast one customer to reassign')

    const params = {
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
      from_agent_id: this.fromAgentId,
      to_agent_id: this.toAgentId,
      organisation_id: this.orgId,
      customer_array: customerArr
    }

    this.customerSandbox.reassignSelectedCustomers(params)
    this.subscriptions.push(this.customerSandbox.reassignSelectedCustomers$.pipe(take(2)).subscribe((res) => {
      if (res && res.status == 1) {
        this.listingFunc()
      }
    }))
    // this.from = this.to
    this.to = null

  }

  reassignAllCustomer() {

    if (!this.fromAgentId && !this.toAgentId) return this.toster.error('Please select reassign from  and to agent and proceed')
    if (!this.fromAgentId) return this.toster.error('Please select reassign from agent and proceed')
    if (!this.to) return this.toster.error('Please select reassign to agent and proceed')
    if (!this.dataArr.length) return this.toster.error('Selected agent have no customer to reasign !')


    const modalRef = this.modalService.open(ConfirmationPopupComponent, { centered: true });
    modalRef.componentInstance.moduleName = 'reassignAllCustomers';

    modalRef.result.then((result) => {
      if (result === 'success') {

        const params = {
          login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
          from_agent_id: this.fromAgentId,
          to_agent_id: this.toAgentId,
          organisation_id: this.orgId
        }

        this.customerSandbox.reassignAllCustomers(params)
        this.subscriptions.push(this.customerSandbox.reassignAllCustomers$.pipe(take(2)).subscribe((res) => {

          if (res && res.status == 1) {
            this.listingFunc()
          }
        }))
        // this.from = this.to
        this.to = null


      }
    });

  }

  listingFunc() {
    if (this.from === null) return

    // this.fromAgentId = this.toAgentId
    this.fetchReassignList()
    this.fetchReassignListCount()
    this.userSandbox.agentList(this.orgId)

    this.subscriptions.push(this.userSandbox.agentList$.pipe(take(2)).subscribe((res) => {

      if (res && res.length > 0) {
        this.users = res.filter((data) =>
          data.id !== this.fromAgentId
        )

      }
    }))
  }

  checkSingleBoxFunc(data) {
    data.checked = !data.checked
  }

  onSearchFunc() {
    if (!this.dataArr.length) return this.toster.error('Please select Reassign from agent and search !')
    this.fetchReassignList();
    this.fetchReassignListCount();
  }

  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchReassignList();
      this.fetchReassignListCount();
    }
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchReassignList()
  }
  ngOnDestroy() {
    this.fromAgentId = null
    this.toAgentId = null
    this.dataArr = []
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
