import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { MatTabsModule } from '@angular/material/tabs';
import { SettingsComponent } from './component/settings/settings.component';


@NgModule({
  declarations: [DashboardComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTabsModule,
    CommonModule,
  ]
})
export class DashboardModule { }
