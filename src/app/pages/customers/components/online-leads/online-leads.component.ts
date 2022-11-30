import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CustomersSandbox } from '../../customers.sandbox';

@Component({
  selector: 'app-online-leads',
  templateUrl: './online-leads.component.html',
  styleUrls: ['./online-leads.component.scss']
})
export class OnlineLeadsComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  page: number = 1;
  pageSize: number = 10;
  offset: number = 0;
  keyword: string = '';
  count: number = 0;
  config = {
    itemsPerPage: this.pageSize, currentPage: this.page, totalItems: ''
  }
  public subscriptions: Array<Subscription> = [];

  constructor(
    private router: Router,
    public commonSandbox: CommonSandbox,
    public customersSandbox: CustomersSandbox
  ) { }

  ngOnInit() {
    this.fetchOnlineLeads()
    this.fetchOnlineLeadsCount()
  }

  fetchOnlineLeads() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.customersSandbox.onlineLeads(params)
  }
  fetchOnlineLeadsCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.customersSandbox.onlineLeadsCount(params)
    this.subscriptions.push(this.customersSandbox.onlineLeadsCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }
  onAddBtnClick() {
    this.router.navigate(['customers/add-customer'])
  }
  onSearch() {
    this.fetchOnlineLeads();
    this.fetchOnlineLeadsCount();
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchOnlineLeads();
      this.fetchOnlineLeadsCount();
    }
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchOnlineLeads()
  }
  export() {
    const params = {
      name: 'onlineLeads',
      file: 'onlineLeads.xlsx',
      payload: {
        keyword: this.keyword
      }
    }
    this.commonSandbox.export(params)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
