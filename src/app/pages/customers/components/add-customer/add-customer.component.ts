import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  form: FormGroup;
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  // public subscriptions: Array<Subscription> = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      mail: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      mobile: [null, Validators.required],
      alterMobile: [null, Validators.required],
      area: [null, Validators.required],
      pinCode: [null, Validators.required],
      followupDate: [null, Validators.required],
      followupTime: [null, Validators.required],
      actionTaken: [null, Validators.required],
    })
  }
  doCreateCustomer() {
    const params = {
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
      customer_name: this.form.value.name,
      customer_email: this.form.value.mail,
      customer_mobile: this.form.value.mobile,
      customer_alternate_mobile: this.form.value.alterMobile,
      customer_pincode: this.form.value.pinCode,
      customer_area: this.form.value.area,
      follow_up_date: this.form.value.followupDate ? moment(this.form.value.followupDate, 'YYYY-MM-DD').format('DD/MM/YYYY') : '',
      follow_up_time: this.form.value.followupTime,
      action_taken: this.form.value.actionTaken
    }

    // this.liveMoniterSandbox.updateCustomer(params)
    // this.subscriptions.push(this.liveMoniterSandbox.updateCustomerInfo$.subscribe((res) => {
    //   if (res && res.status === 1) {
    //     this.router.navigateByUrl('/customers/list')
    //   }
    // }))

  }
  onCancelBtnClick() {
    this.router.navigateByUrl('/customers/list')
  }
  onCreateBtnClick() {
    this.doCreateCustomer()
  }


}
