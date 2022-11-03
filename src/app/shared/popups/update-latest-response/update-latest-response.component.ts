import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { LiveMoniterSandbox } from 'src/app/pages/live-moniter/liveMoniter.sandbox';

@Component({
  selector: 'app-update-latest-response',
  templateUrl: './update-latest-response.component.html',
  styleUrls: ['./update-latest-response.component.scss']
})
export class UpdateLatestResponseComponent implements OnInit, OnDestroy {

  form: FormGroup;
  user: any
  followUpdate = 'select followUpdate date'
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  public subscriptions: Array<Subscription> = [];
  areaArr: any = []
  constructor(private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    public liveMoniterSandbox: LiveMoniterSandbox,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.initForm()
    this.fetchCustomerData()
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


  fetchCustomerData() {
    const params = {
      customer_id: this.user.customer_id,
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id
    }
    this.liveMoniterSandbox.customerInfo(params)
    this.subscriptions.push(this.liveMoniterSandbox.customerInfo$.subscribe((res) => {
      if (res && res.length > 0) {
        const { customer_name, customer_email, customer_mobile, customer_alternate_mobile, action_taken, customer_area, follow_up_date, follow_up_time, customer_pincode } = res[0]
        const fromDate = moment(follow_up_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
        this.form.controls['name'].setValue(customer_name);
        this.form.controls['mail'].setValue(customer_email);
        this.form.controls['mobile'].setValue(customer_mobile);
        this.form.controls['alterMobile'].setValue(customer_alternate_mobile);
        this.form.controls['area'].setValue(customer_area);
        this.form.controls['pinCode'].setValue(customer_pincode);
        this.form.controls['followupDate'].setValue(fromDate);
        this.form.controls['followupTime'].setValue(follow_up_time);
        this.form.controls['actionTaken'].setValue(action_taken);

      }
    }))
  }
  onConfirm() {
    const params = {
      login_id: JSON.parse(localStorage.getItem('userDetails')).member_id,
      customer_id: this.user.customer_id,
      customer_name: this.form.value.name,
      customer_email: this.form.value.mail,
      customer_mobile: this.form.value.mobile,
      customer_alternate_mobile: this.form.value.alterMobile,
      customer_pincode: this.form.value.pinCode,
      customer_area: this.form.value.area,

      follow_up_date: moment(this.form.value.followupDate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
      follow_up_time: this.form.value.followupTime,
      action_taken: this.form.value.actionTaken
    }
    this.liveMoniterSandbox.updateCustomer(params)
    this.subscriptions.push(this.liveMoniterSandbox.updateCustomerInfo$.subscribe((res) => {
      if (res && res.status === 1) {
        this.activeModal.close('success')
      }
    }))
  }

  close() {
    this.activeModal.close();
  }

  updateCustomer() {
    this.onConfirm()
  }
  // async pincodeFunc() {

  //   if (this.form.value.pinCode.length === 6) {
  //     let response = await fetch(`https://api.postalpincode.in/pincode/${this.form.value.pinCode}`);
  //     let data = await response.json();
  //     this.areaArr = data[0].PostOffice.map((data) => ({ name: `${data.Name} / ${data.Block}` }))
  //   }

  // }
  ngOnDestroy() {
    this.areaArr = []
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
