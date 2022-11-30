import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { UsersSandbox } from 'src/app/pages/users/users.sandbox';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  form: FormGroup
  availability = []
  public subscriptions: Array<Subscription> = [];
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public usersSandbox: UsersSandbox,
  ) { }

  ngOnInit() {
    this.initForm()
    this.usersSandbox.callAvailability({})
    this.subscriptions.push(this.usersSandbox.callAvailability$.subscribe((res) => {
      if (res && res.length > 0) {
        this.availability = res
      }
    }))

  }
  initForm() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      newPassword: [null, Validators.required],
      confirmPassword: [null, Validators.required],
    })
  }

  OnChangeAvailability(state) {
    this.availability.forEach((data) => data.active = false);
    state.active = true
    // this.form.controls['call_availability'].setValue(state.unnest);
  }

  onConfirm() {
    this.form.value
    console.log('this.form.value: ', this.form.value);
  }
  close() {
    this.activeModal.close();
  }
}
