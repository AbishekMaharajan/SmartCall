import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CustomersSandbox } from 'src/app/pages/customers/customers.sandbox';
import { DidSandbox } from 'src/app/pages/did/did.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';

@Component({
  selector: 'app-agent-project-call-count',
  templateUrl: './agent-project-call-count.component.html',
  styleUrls: ['./agent-project-call-count.component.scss']
})
export class AgentProjectCallCountComponent implements OnInit, OnDestroy {
  faSearch = faSearch
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 1;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  users = []
  from = null
  to = null
  fromAgentId: number
  toAgentId: number
  agent = null
  projectDid = null
  fromMinDate = ''
  fromMaxDate = ''
  toMinDate = ''
  toMaxDate: any = ''
  onFromDate = null;
  onToDate = null
  total: any = {}
  public subscriptions: Array<Subscription> = [];

  constructor(
    public userSandbox: UsersSandbox,
    public customerSandbox: CustomersSandbox,
    private toster: ToastrService,
    private datePipe: DatePipe,
    public modalService: NgbModal,
    public commonSandbox: CommonSandbox,
    public didSandbox: DidSandbox,
  ) {
    this.fromMinDate = moment().subtract(10, "years").format("YYYY-MM-DD");
    this.fromMaxDate = moment().format("YYYY-MM-DD");
    this.toMaxDate = moment().format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.fetchDropdownList()
    this.fetchProjectAgentList()
    this.fetchProjectAgentListCount()
  }
  fetchDropdownList() {
    this.userSandbox.agentList(this.orgId)
    const params = {
      organisation_id: this.orgId,
      type: 0
    }
    this.didSandbox.getProjectList(params)
  }

  fetchProjectAgentList() {
    this.count = this.count++
    const fromDate = this.datePipe.transform(this.onFromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.onToDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 0,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.agent ? this.agent : 0,
      project_id: this.projectDid ? this.projectDid : 0,
      value: 1
    }
    this.customerSandbox.projectAgentList(params)
    if (this.count = 1) {

    }

    this.subscriptions.push(this.customerSandbox.projectAgentList$.subscribe((res) => {

      if (res && res.length > 0 && this.count === 1) {
        this.total = {
          incoming_connected_count: 0,
          incoming_missed_count: 0,
          outgoing_connected_count: 0,
          outgoing_missed_count: 0,
          barge_in_count: 0
        }
        this.count = 0
        res.forEach((data) => {
          this.total['incoming_connected_count'] = this.total['incoming_connected_count'] + data.incoming_connected_count
          this.total['incoming_missed_count'] = this.total['incoming_missed_count'] + data.incoming_missed_count
          this.total['outgoing_connected_count'] = this.total['outgoing_connected_count'] + data.outgoing_connected_count
          this.total['outgoing_missed_count'] = this.total['outgoing_missed_count'] + data.outgoing_missed_count
          this.total['barge_in_count'] = this.total['barge_in_count'] + data.barge_in_count
        })
      }
    }))
  }
  fetchProjectAgentListCount() {
    const fromDate = this.datePipe.transform(this.onFromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.onToDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.agent,
      project_id: this.projectDid,
      value: 1

    }
    this.customerSandbox.projectAgentListCount(params)
    this.subscriptions.push(this.customerSandbox.projectAgentListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }

  onChangeFromDate(event) {
    this.toMinDate = event.value;
    let maxDate = this.datePipe.transform(moment(new Date(this.toMinDate)).add(30, "days"), "yyyy-MM-dd");
    let todaysDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    maxDate >= todaysDate ? (this.toMaxDate = moment().format("YYYY-MM-DD")) : (this.toMaxDate = maxDate);
  }
  agentNameChaneFunc(event) {
    if (!event) {
      this.agent = null
    }
  }
  projectNameChaneFunc(event) {
    if (!event) {
      this.projectDid = null
    }
  }
  onSubmit() {
    if (!this.onFromDate) return this.toster.error('Please select From date and proceed')
    if (this.onFromDate && !this.onToDate) return this.toster.error('Please select To date to proceed')

    this.fetchProjectAgentList()
    this.fetchProjectAgentListCount()
  }

  export() {
    this.subscriptions.push(this.customerSandbox.projectAgentListCount$.subscribe((res) => {
      if (res && res > 0) {
        const params = {
          name: 'projectAgentCallount',
          file: 'projectAgentCallount.xlsx',
          payload: {
            keyword: this.keyword,
            count: this.count,
            from_date: this.datePipe.transform(this.onFromDate, "dd/MM/yyy"),
            to_date: this.datePipe.transform(this.onToDate, "dd/MM/yyy"),
            agent_id: this.agent ? this.agent : 0,
            project_id: this.projectDid ? this.projectDid : 0
          }
        }
        this.commonSandbox.export(params)
      } else return this.toster.error('No data available !')
    }))
  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchProjectAgentList()
  }

  ngOnDestroy() {
    this.customerSandbox.clearProjectAgentList()
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
