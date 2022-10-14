import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from './effects/auth.effect';
import { AuthSandbox } from './auth.sandbox';
import { AuthService } from './auth.service';
export const routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      title: 'Login',
    }
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffect])
  ],
  providers: [AuthSandbox, AuthService]

})
export class AuthModule { }
