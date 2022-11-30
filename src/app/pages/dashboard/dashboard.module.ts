import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { CommonEffect } from 'src/app/common/effects/common.efects';


@NgModule({
  declarations: [DashboardComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([CommonEffect])

  ],
  providers: [
    CommonSandbox,
    CommonService
  ],
})
export class DashboardModule { }
