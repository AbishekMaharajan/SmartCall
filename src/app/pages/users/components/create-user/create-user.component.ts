import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UsersSandbox } from '../../users.sandbox';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  @ViewChild('filePath') filePath: ElementRef;
  form: FormGroup;
  files: any;
  file: any;
  fileType: any;
  fileTypeError: any;
  isSelected = false;
  postUrl = 'assets/imgs/users.svg';
  imagePost = '';
  userId = 0
  sipActiveStatus = false
  count = 2
  orgId = JSON.parse(localStorage.getItem('userDetails')).organisation_id
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@' + '[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

  public subscriptions: Array<Subscription> = [];

  availability = []
  constructor(
    private fb: FormBuilder,
    public usersSandbox: UsersSandbox,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initCreateForm()
    this.usersSandbox.userType({})
    this.usersSandbox.phoneType({})
    this.usersSandbox.reporting({})
    this.usersSandbox.callAvailability({})
    if (!this.userId) {
      this.subscriptions.push(this.usersSandbox.callAvailability$.subscribe((res) => {
        if (res && res.length > 0) {
          this.availability = res
        }
      }))
    }

    this.route.params.subscribe(param => {
      if (param.id) {
        this.userId = param.id
        this.fetchEditUserData(param.id)
      }
    });

  }

  initCreateForm() {
    this.form = this.fb.group({
      member_name: [null, Validators.required],
      email_id: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      mobile_number: [null, Validators.required],
      user_type: [null, Validators.required],
      phone_type: [null, Validators.required],
      reporting_to: [null, Validators.required],
      soft_phone_ip: [null],
      status: [true,],
      call_availability: ['Available', Validators.required],
      remarks: [null]
    })
  }
  doCreateUser(state) {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);

      return;
    }
    const params = this.form.value
    params.mobile_number = this.form.value.mobile_number.toString()
    params.status = params.status === true || params.status === 1 ? 1 : 0
    params.image = this.imagePost
    params.organisation_id = this.orgId
    params.current_image_name = state
    params.soft_phone_ip = params.phone_type === 'mobile' ? '' : params.soft_phone_ip
    if (this.userId === 0) {
      this.usersSandbox.createUser(params)
    } else {
      params.member_id = this.userId
      this.usersSandbox.updateUser(params)
    }
  }
  fetchEditUserData(id): void {
    this.usersSandbox.fetchUpdateData(id);
    this.subscriptions.push(this.usersSandbox.fetchUpdateData$.subscribe((res) => {
      if (res) {

        this.form.controls['member_name'].setValue(res[0].member_name);
        this.form.controls['email_id'].setValue(res[0].email_id);
        this.form.controls['mobile_number'].setValue(res[0].mobile_number);
        this.form.controls['user_type'].setValue(res[0].user_type);
        this.form.controls['phone_type'].setValue(res[0].phone_type);
        this.form.controls['reporting_to'].setValue(res[0].reporting_to);
        this.form.controls['soft_phone_ip'].setValue(res[0].soft_phone_ip);
        this.form.controls['status'].setValue(res[0].status);
        this.form.controls['call_availability'].setValue(res[0].call_availability);
        this.form.controls['remarks'].setValue(res[0].remarks ? res[0].remarks : '');
        this.postUrl = res[0].image
        this.availability = this.availability.map((data) => {
          if (data.unnest === res[0].call_availability) {
            data.active = true
          }
          return data
        });
        if (res[0].phone_type === 'sip') {
          this.sipActiveStatus = true
        } else this.sipActiveStatus = false
      }

    }))
  }


  onCreateBtnClick() {
    this.doCreateUser('')
  }
  onUpdateBtnClick() {
    this.doCreateUser('update')
  }
  onCancelBtnClick() {
    this.form.reset();
    this.postUrl = ''
    this.imagePost = ''
    this.availability = []
    this.subscriptions.forEach(each => each.unsubscribe());
    this.router.navigate(['users/list'])
  }

  onSelectPhoneType(event) {
    if (event.unnest === 'sip') {
      return this.sipActiveStatus = true
    }
    this.sipActiveStatus = false
  }

  OnChangeAvailability(state) {
    this.availability.forEach((data) => data.active = false);
    state.active = true
    this.form.controls['call_availability'].setValue(state.unnest);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }

    });
  }

  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }
  uploadImage(event) {
    this.fileTypeError = '';
    this.files = event.target.files;
    this.file = this.files[0];
    this.fileType = this.file.type;
    if (this.fileType.match(/image\/*/)) {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (events: any) => {
          this.isSelected = true;
          this.postUrl = events.target.result;
          this.imagePost = events.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      this.fileTypeError = '(Only Images are allowed)';
    }
  }
  ngOnDestroy() {
    this.isSelected = false;
    this.postUrl = 'assets/imgs/users.svg';
    this.imagePost = '';
    this.userId = 0
    this.sipActiveStatus = false
    this.availability = []
    this.subscriptions.forEach(each => each.unsubscribe());
  }
}
