import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faSearch, } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CustomersSandbox } from 'src/app/pages/customers/customers.sandbox';
import { DidSandbox } from 'src/app/pages/did/did.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { CallReportsComponent } from 'src/app/shared/popups/call-reports/call-reports.component';
import { PlayRecordingComponent } from 'src/app/shared/popups/play-recording/play-recording.component';
import { UpdateLatestResponseComponent } from 'src/app/shared/popups/update-latest-response/update-latest-response.component';
import { LiveMoniterSandbox } from '../../liveMoniter.sandbox';

@Component({
  selector: 'app-latest-responce',
  templateUrl: './latest-responce.component.html',
  styleUrls: ['./latest-responce.component.scss']
})
export class LatestResponceComponent implements OnInit {
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
    public modalService: NgbModal,
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
    // this.onFromDate = moment().format("YYYY-MM-DD");
    // this.onToDate = moment().format("YYYY-MM-DD")
  }

  ngOnInit() {
    this.fetchDropdownList()
    this.fetchLatestResponseList()
    this.fetchLatestResponseListCount()
  }

  fetchDropdownList() {
    this.userSandbox.agentList(this.orgId)
    // this.customerSandbox.projectList({})
    const params = {
      organisation_id: this.orgId,
      type: 0
    }
    this.didSandbox.getProjectList(params)

  }

  fetchLatestResponseList() {
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
    this.liveMoniterSandbox.responseList(params)

  }
  fetchLatestResponseListCount() {
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
    this.liveMoniterSandbox.responseListCount(params)
    this.subscriptions.push(this.liveMoniterSandbox.responseListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }

  updateUser(user) {
    const modalRef = this.modalService.open(UpdateLatestResponseComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      if (result == 'success') {

        this.fetchLatestResponseList()
        this.fetchLatestResponseListCount()

      }
    });
  }
  callReports(user) {
    const modalRef = this.modalService.open(CallReportsComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.user = user;
  }
  onChangeFromDate(event) {
    this.toMinDate = event.value;
    let maxDate = this.datePipe.transform(moment(new Date(this.toMinDate)).add(30, "days"), "yyyy-MM-dd");
    let todaysDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    maxDate >= todaysDate ? (this.toMaxDate = new Date()) : (this.toMaxDate = maxDate);
  }
  playRecording(user) {

    const modalRef = this.modalService.open(PlayRecordingComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      if (result == 'success') {

      }
    });
  }
  onCliclToCall(user) {
    const { agent_id, agent_number, customer_mobile, customer_id, project_id, conference_id } = user
    if (!agent_number) return this.toster.error('This customer is blocked for this Agent')
    const params = {
      agent_id: agent_id,
      agent_number: agent_number,
      customer_id: customer_id,
      customer_number: customer_mobile,
      old_conference_id: conference_id.toString(),
      organisation_id: this.orgId,
      project_id: project_id
    }
    this.liveMoniterSandbox.clickToCall(params)
  }
  blockCustomer(user) {
    const params = {
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
      customer_id: user.customer_id.toString()
    }
    this.liveMoniterSandbox.blockCustomer(params)
  }

  onSearch() {
    this.fetchLatestResponseList();
    this.fetchLatestResponseListCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchLatestResponseList();
      this.fetchLatestResponseListCount();
    }
  }
  onSubmit() {
    // if (!this.agent) return this.toster.error('Please select Agent and proceed')
    // if (!this.projectDid) return this.toster.error('Please select Project and proceed')
    // if (!this.onFromDate) return this.toster.error('Please select From date and proceed')
    // if (!this.onToDate) return this.toster.error('Please select To date and proceed')
    if (this.onFromDate && !this.onToDate) {
      return this.toster.error('Please select To Date and search')
    }
    if (!this.onFromDate && this.onToDate) {
      return this.toster.error('Please select From Date and search')
    }
    this.fetchLatestResponseList();
    this.fetchLatestResponseListCount();
  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchLatestResponseList()
  }
  export() {
    const params = {
      name: 'latestResponse',
      file: 'Latest-response-list.xlsx',
      payload: {
        from_date: this.onFromDate ? this.datePipe.transform(this.onFromDate, "dd/MM/yyy") : '',
        to_date: this.onToDate ? this.datePipe.transform(this.onToDate, "dd/MM/yyy") : '',
        agent_id: this.agent,
        project_id: this.projectDid
      }
    }
    this.commonSandbox.export(params)
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
