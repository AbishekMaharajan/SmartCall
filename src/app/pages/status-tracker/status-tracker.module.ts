import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StatusTrackerRoutingModule } from './status-tracker-routing.module';
import { LayoutStatusComponent } from './layout-status/layout-status.component';
import { StatusTrackerComponent } from './components/status-tracker/status-tracker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from '../users/effects/users.effects';
import { UsersSandbox } from '../users/users.sandbox';
import { UsersService } from '../users/users.service';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { CommonEffect } from 'src/app/common/effects/common.efects';

@NgModule({
  declarations: [LayoutStatusComponent, StatusTrackerComponent],
  imports: [
    CommonModule,
    StatusTrackerRoutingModule,
    SharedModule,
    EffectsModule.forFeature([UsersEffect, CommonEffect])

  ],
  providers: [
    UsersSandbox,
    UsersService,
    CommonSandbox,
    CommonService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class StatusTrackerModule { }
