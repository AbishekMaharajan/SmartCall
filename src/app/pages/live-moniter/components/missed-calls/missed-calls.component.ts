import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CustomersSandbox } from 'src/app/pages/customers/customers.sandbox';
import { DidSandbox } from 'src/app/pages/did/did.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { LiveMoniterSandbox } from '../../liveMoniter.sandbox';

@Component({
  selector: 'app-missed-calls',
  templateUrl: './missed-calls.component.html',
  styleUrls: ['./missed-calls.component.scss']
})
export class MissedCallsComponent implements OnInit {
  faSearch = faSearch
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;

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
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  public subscriptions: Array<Subscription> = [];

  constructor(
    // public modalService: NgbModal,
    public liveMoniterSandbox: LiveMoniterSandbox,
    public commonSandbox: CommonSandbox,
    public userSandbox: UsersSandbox,
    public customerSandbox: CustomersSandbox,
    private datePipe: DatePipe,
    private toster: ToastrService,
    public didSandbox: DidSandbox,
  ) {
    this.fromMaxDate = moment().format("YYYY-MM-DD");
    this.toMaxDate = moment().format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.fetchDropdownList()
    this.fetchmissedCallList()
    this.fetchmissedCallListCount()
  }
  fetchDropdownList() {
    this.userSandbox.agentList(this.orgId)
    const params = {
      organisation_id: this.orgId,
      type: 0
    }
    this.didSandbox.getProjectList(params)

  }

  fetchmissedCallList() {
    const fromDate = this.datePipe.transform(this.onFromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.onToDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.agent,
      project_id: this.projectDid
    }
    this.liveMoniterSandbox.missedCallList(params)


  }
  fetchmissedCallListCount() {
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
      project_id: this.projectDid
    }
    this.liveMoniterSandbox.missedCallListCount(params)
    this.subscriptions.push(this.liveMoniterSandbox.missedCallListCount$.subscribe((res) => {
      if (res) {
        console.log('res: ', res);
        this.config.totalItems = res
      }
    }))
  }


  onChangeFromDate(event) {
    this.toMinDate = event.value;
    let maxDate = this.datePipe.transform(moment(new Date(this.toMinDate)).add(30, "days"), "yyyy-MM-dd");
    let todaysDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    maxDate >= todaysDate ? (this.toMaxDate = new Date()) : (this.toMaxDate = maxDate);
  }

  onSearch() {
    this.fetchmissedCallList();
    this.fetchmissedCallListCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchmissedCallList();
      this.fetchmissedCallListCount();
    }
  }

  onSubmit() {
    if (this.onFromDate && !this.onToDate) {
      return this.toster.error('Please select To Date and search')
    }
    if (!this.onFromDate && this.onToDate) {
      return this.toster.error('Please select From Date and search')
    }
    this.fetchmissedCallList();
    this.fetchmissedCallListCount();
  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchmissedCallList()
  }
  export() {
    const params = {
      name: 'missedCall',
      file: 'Missed-Call-list.xlsx',
      payload: {
        from_date: this.onFromDate ? this.datePipe.transform(this.onFromDate, "dd/MM/yyy") : '',
        to_date: this.onToDate ? this.datePipe.transform(this.onToDate, "dd/MM/yyy") : '',
        agent_id: this.agent,
        project_id: this.projectDid,
        keyword: this.keyword
      }
    }
    this.commonSandbox.export(params)
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
