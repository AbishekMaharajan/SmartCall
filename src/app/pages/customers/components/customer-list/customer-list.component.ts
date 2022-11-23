import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { UpdateLatestResponseComponent } from 'src/app/shared/popups/update-latest-response/update-latest-response.component';
import { CustomersSandbox } from '../../customers.sandbox';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
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

  liveMoniterSandbox: any;
  constructor(
    public modalService: NgbModal,
    public customerSandbox: CustomersSandbox,
    public commonSandbox: CommonSandbox
  ) { }

  ngOnInit() {
    this.fetchCustomerList()
    this.fetchCustomerListCount()

  }
  fetchCustomerList() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: this.count
    }
    this.customerSandbox.customerList(params)
  }
  fetchCustomerListCount() {
    const params = {
      limit: this.pageSize,
      offset: this.offset,
      keyword: this.keyword,
      count: 1
    }
    this.customerSandbox.customerListCount(params)
    this.subscriptions.push(this.customerSandbox.customerListCount$.subscribe((res) => {
      if (res) {
        this.config.totalItems = res
      }
    }))
  }
  onAddBtnClick() {

  }
  editCustomer(customer) {

    const modalRef = this.modalService.open(UpdateLatestResponseComponent, {
      size: 'lg', centered: true, backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.user = customer;
    modalRef.result.then((result) => {
      if (result == 'success') {

        this.fetchCustomerList()
        this.fetchCustomerListCount()
      }
    });
  }

  onSearch() {
    this.fetchCustomerList()
    this.fetchCustomerListCount()
  }
  keyFunc(event) {
    if (event.key === "Backspace" && this.keyword === '') {
      this.fetchCustomerList()
      this.fetchCustomerListCount()
    }
  }

  pageChanged(event) {
    this.config.currentPage = event
    this.offset = (event - 1) * this.pageSize
    this.fetchCustomerList()
  }
  export() {
    const params = {
      name: 'customerList',
      file: 'Customerlist.xlsx'
    }
    this.commonSandbox.export(params)
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
