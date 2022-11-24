import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';

@Component({

  selector: 'app-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss'],
})
export class StatusTrackerComponent implements OnInit, OnDestroy {
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  form: FormGroup;
  // faSearch = faSearch
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  fromMinDate = ''
  fromMaxDate = ''
  toMinDate = ''
  toMaxDate: any = ''
  fromDate = null
  toDate = null
  public subscriptions: Array<Subscription> = [];
  availability = []
  constructor(
    private fb: FormBuilder,
    public usersSandbox: UsersSandbox,
    private datePipe: DatePipe,
    public commonSandbox: CommonSandbox,
    private toster: ToastrService,


  ) {

    this.fromMinDate = moment().subtract(10, "years").format("YYYY-MM-DD");
    this.fromMaxDate = moment().format("YYYY-MM-DD");
    this.toMinDate = moment().subtract(10, "days").format("YYYY-MM-DD");
  }

  ngOnInit() {
    this.initCreateForm()
    this.fetchAgnetList()
    this.fetchAvailability()
    this.fetchStatusTrackerList()
    this.fetchStatusListCount()
  }

  initCreateForm() {
    this.form = this.fb.group({
      agent: [null, Validators.required],
      fromDate: [null, Validators.required],
      toDate: [null, Validators.required],
    })
  }

  fetchAgnetList() {
    this.usersSandbox.agentList(this.orgId)
  }

  fetchStatusTrackerList() {
    const fromDate = this.datePipe.transform(this.form.value.fromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.form.value.toDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 0,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.form.value.agent ? this.form.value.agent : 0
    }
    this.usersSandbox.statusTrackerList(params)

  }

  fetchStatusListCount() {
    const fromDate = this.datePipe.transform(this.form.value.fromDate, "dd/MM/yyy")
    const toDate = this.datePipe.transform(this.form.value.toDate, "dd/MM/yyy")
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1,
      from_date: fromDate ? fromDate : '',
      to_date: toDate ? toDate : '',
      agent_id: this.form.value.agent ? this.form.value.agent : 0
    }
    this.usersSandbox.statusTrackerListCount(params)
    this.subscriptions.push(this.usersSandbox.statusTrackerListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }

  fetchAvailability() {
    this.usersSandbox.callAvailability({})
    this.subscriptions.push(this.usersSandbox.callAvailability$.subscribe((res) => {
      if (res && res.length > 0) {
        res.unshift({ unnest: "All" })
        this.availability = res.map((data) => {
          data.active = false
          if (data.unnest === 'All') {
            data.active = true
          }
          if (data.unnest === 'All' || data.unnest === 'Available' || data.unnest === 'On Duty') {
            data.class = 'success'
          }
          else if (data.unnest === 'Not Available' || data.unnest === 'On Leave') {
            data.class = 'warning'
          }
          else if (data.unnest === 'On Break') {
            data.class = '_alert'
          }
          else data.class = '_alert'
          return data
        })
      }
    }))
  }
  OnChangeAvailability(state) {
    if (this.form.value.fromDate && !this.form.value.toDate) {
      return this.toster.error('Please select To Date')
    }
    this.keyword = state.unnest
    if (state.unnest == 'All') this.keyword = ''
    this.fetchStatusTrackerList()
    this.fetchStatusListCount()
    this.availability.forEach((data) => data.active = false);
    state.active = true

  }
  onChangeFromDate(event) {
    this.form.controls['toDate'].setValue('');
    this.toMinDate = event.value;
    let maxDate = this.datePipe.transform(moment(new Date(this.toMinDate)).add(30, "days"), "yyyy-MM-dd");
    let todaysDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    maxDate >= todaysDate ? (this.toMaxDate = new Date()) : (this.toMaxDate = maxDate);

  }
  onSubmit() {
    this.doSubmit()
  }
  doSubmit() {
    if (this.form.value.fromDate && !this.form.value.toDate) {
      return this.toster.error('Please select To Date and search')
    }
    if (!this.form.value.fromDate && this.form.value.toDate) {
      return this.toster.error('Please select From Date and search')
    }

    this.fetchStatusTrackerList()
    this.fetchStatusListCount()
  }
  // onSearch() {
  //   this.fetchStatusTrackerList()
  //   this.fetchStatusListCount()
  // }

  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchStatusTrackerList()
      this.fetchStatusListCount()

    }
  }
  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchStatusTrackerList()
  }
  export() {

    if (this.form.value.fromDate && !this.form.value.toDate) {
      return this.toster.error('Please select To Date and search')
    }
    if (!this.form.value.fromDate && this.form.value.toDate) {
      return this.toster.error('Please select From Date and search')
    }

    let isValid = true
    this.subscriptions.push(this.usersSandbox.statusTrackerListCount$.subscribe((res) => {
      if (!res) {
        isValid = false
        return this.toster.error('No data available ! Please apply filters and export')
      }
    }))

    if (isValid) {

      const status = this.availability.find((data) => data.active === true).unnest;
      const params = {
        name: 'statusTracker',
        file: 'Statustracker.xlsx',
        payload: {
          from_date: this.form.value.fromDate ? this.datePipe.transform(this.form.value.fromDate, "dd/MM/yyy") : '',
          to_date: this.form.value.toDate ? this.datePipe.transform(this.form.value.toDate, "dd/MM/yyy") : '',
          agent_id: this.form.value.agent,
          // availability:status

        }
      }
      this.commonSandbox.export(params)

    }
    // this.subscriptions.forEach(each => each.unsubscribe());
  }
  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
