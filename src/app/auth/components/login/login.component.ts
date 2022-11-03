import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthSandbox } from '../../auth.sandbox';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username;
  @ViewChild('password') password;
  public loginForm: FormGroup;
  isVisible = false
  constructor(
    private fb: FormBuilder,
    public authSandbox: AuthSandbox,
    public titleService: Title,
    public router: Router
  ) { }
  ngOnInit() {
    this.initLoginForm();
    this.username.nativeElement.focus()
  }
  public initLoginForm(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  public doLogin() {
    if (!this.loginForm.valid) {
      this.validateAllFormFields(this.loginForm);
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(this.loginForm.value.password, salt);

    const param = {
      user_name: this.loginForm.value.userName,
      password: hashedPassword
    }
    this.authSandbox.doLogin(param);

  }
  onEnterKeyPress(event) {

    if (event.key === 'Enter') {

      if (event.target.id == 'username') return this.password.nativeElement.focus()
      // if (event.target.id == 'password') return this.doLogin()

    }

  }
  onClickVisible() {
    this.isVisible = !this.isVisible
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
}
