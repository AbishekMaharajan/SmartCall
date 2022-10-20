import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { LiveMoniterRoutingModule } from './live-moniter-routing.module';
import { LayoutLiveMoniterComponent } from './layout-live-moniter/layout-live-moniter.component';
import { LatestResponceComponent } from './components/latest-responce/latest-responce.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OngoingCallsComponent } from './components/ongoing-calls/ongoing-calls.component';
import { EffectsModule } from '@ngrx/effects';
import { LiveMoniterEffect } from './effects/liveMoniter.efect';
import { LiveMoniterSandbox } from './liveMoniter.sandbox';
import { LiveMoniterService } from './liveMoniter.service';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { CommonEffect } from 'src/app/common/effects/common.efects';
import { CustomersSandbox } from '../customers/customers.sandbox';
import { CustomersService } from '../customers/customers.service';
import { CustomersEffect } from '../customers/effects/customers.effects';
import { UsersSandbox } from '../users/users.sandbox';
import { UsersService } from '../users/users.service';
import { UsersEffect } from '../users/effects/users.effects';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [LayoutLiveMoniterComponent, LatestResponceComponent, OngoingCallsComponent,],
  imports: [
    CommonModule,
    LiveMoniterRoutingModule,
    SharedModule,
    EffectsModule.forFeature([LiveMoniterEffect,
      CommonEffect, CustomersEffect, UsersEffect])
  ],
  providers: [
    LiveMoniterSandbox,
    LiveMoniterService,
    CommonSandbox,
    CommonService,
    CustomersSandbox,
    CustomersService,
    UsersSandbox,
    UsersService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class LiveMoniterModule { }
