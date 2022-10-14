import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { PlayRecordingComponent } from 'src/app/shared/popups/play-recording/play-recording.component';
import { CustomersSandbox } from '../../customers.sandbox';
// import moment from "moment";
@Component({
  selector: 'app-project-agent-report',
  templateUrl: './project-agent-report.component.html',
  styleUrls: ['./project-agent-report.component.scss']
})
export class ProjectAgentReportComponent implements OnInit, OnDestroy {
  faSearch = faSearch
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
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
  dataArr = []
  fromMinDate = ''
  fromMaxDate = ''
  toMinDate = ''
  toMaxDate: any = ''
  onFromDate = null;
  onToDate = null
  public subscriptions: Array<Subscription> = [];
  constructor(
    public userSandbox: UsersSandbox,
    public customerSandbox: CustomersSandbox,
    private toster: ToastrService,
    private datePipe: DatePipe,
    public modalService: NgbModal,
    public commonSandbox: CommonSandbox,

  ) {
    this.fromMinDate = moment().subtract(10, "years").format("YYYY-MM-DD");
    this.fromMaxDate = moment().format("YYYY-MM-DD");
    this.toMaxDate = moment().format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.fetchDropdownList()
  }

  fetchDropdownList() {
    this.userSandbox.agentList(this.orgId)
    this.customerSandbox.projectList({})
  }

  fetchProjectAgentList() {
    const fromDate = this.datePipe.transform(this.onFromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.onToDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 0,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.agent,
      project_id: this.projectDid
    }
    this.customerSandbox.projectAgentList(params)
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
      project_id: this.projectDid
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

  playRecording(user) {
    const modalRef = this.modalService.open(PlayRecordingComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.user = user;
  }
  onSubmit() {
    if (!this.agent) return this.toster.error('Please select Agent and proceed')
    if (!this.projectDid) return this.toster.error('Please select Project and proceed')
    if (!this.onFromDate) return this.toster.error('Please select From date and proceed')
    if (!this.onToDate) return this.toster.error('Please select To date and proceed')

    this.fetchProjectAgentList()
    this.fetchProjectAgentListCount()
  }
  onSearch() {
    this.fetchProjectAgentList();
    this.fetchProjectAgentListCount();
  }

  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchProjectAgentList();
      this.fetchProjectAgentListCount();
    }
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchProjectAgentList()
  }
  export() {
    this.subscriptions.push(this.customerSandbox.projectAgentListCount$.subscribe((res) => {
      if (res && res > 0) {
        const params = {
          name: 'projectAgentReport',
          file: 'projectAgentReport.xlsx',
          payload: {
            from_date: this.datePipe.transform(this.onFromDate, "dd/MM/yyy"),
            to_date: this.datePipe.transform(this.onToDate, "dd/MM/yyy"),
            agent_id: this.agent,
            project_id: this.projectDid
          }
        }
        this.commonSandbox.export(params)
      } else return this.toster.error('No data available !')
    }))
  }
  ngOnDestroy() {
    this.dataArr = []
    this.customerSandbox.clearProjectAgentList()
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
