import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { DidSandbox } from 'src/app/pages/did/did.sandbox';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';
import { CustomersSandbox } from '../../customers.sandbox';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit, OnDestroy {

  form: FormGroup;
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id

  public subscriptions: Array<Subscription> = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public didSandbox: DidSandbox,
    public customerSandbox: CustomersSandbox,
    public userSandbox: UsersSandbox
  ) { }

  ngOnInit() {
    this.initForm()
    this.getDropdownList()
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      mobile: [null, Validators.required],
      project: [null, Validators.required],
      agent: [null, Validators.required],
      DID: [null, Validators.required],
    })
  }
  getDropdownList() {
    this.userSandbox.agentList(this.orgId)
    const params = {
      organisation_id: this.orgId,
      type: 0
    }
    this.didSandbox.getProjectList(params)

  }
  onSelectProject({ id }) {
    // console.log('id: ', id);
    const params = {
      project_id: id
    }
    this.customerSandbox.didList(params)
  }
  doCreateCustomer() {
    const params = {
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
      customer_name: this.form.value.name,
      customer_email: this.form.value.mail,
      customer_mobile: this.form.value.mobile,
      project_id: this.form.value.project,
      agent_id: this.form.value.agent,
      did: this.form.value.DID
    }


    this.customerSandbox.createLeads(params)
    this.subscriptions.push(this.customerSandbox.createLeads$.subscribe((res) => {
      if (res && res.status === 1) {
        this.router.navigateByUrl('/customers/list')
      }
    }))

  }
  onCancelBtnClick() {
    this.router.navigateByUrl('/customers/online-leads')
  }
  onCreateBtnClick() {
    this.doCreateCustomer()
  }

  ngOnDestroy() {
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
