import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { LayoutCustomerComponent } from './layout-customer/layout-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectAgentReportComponent } from './components/project-agent-report/project-agent-report.component';
import { ReassignAgentComponent } from './components/reassign-agent/reassign-agent.component';
import { EffectsModule } from '@ngrx/effects';
import { CustomersSandbox } from './customers.sandbox';
import { CustomersService } from './customers.service';
import { CustomersEffect } from './effects/customers.effects';
import { UsersService } from '../users/users.service';
import { UsersSandbox } from '../users/users.sandbox';
import { UsersEffect } from '../users/effects/users.effects';
import { LiveMoniterSandbox } from '../live-moniter/liveMoniter.sandbox';
import { LiveMoniterService } from '../live-moniter/liveMoniter.service';
import { LiveMoniterEffect } from '../live-moniter/effects/liveMoniter.efect';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { CommonEffect } from 'src/app/common/effects/common.efects';

@NgModule({
  declarations: [LayoutCustomerComponent, CustomerListComponent, ProjectAgentReportComponent, ReassignAgentComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CustomersEffect, UsersEffect, LiveMoniterEffect, CommonEffect])
  ],
  providers: [
    CustomersSandbox,
    CustomersService,
    UsersSandbox,
    UsersService,
    LiveMoniterSandbox,
    LiveMoniterService,
    CommonSandbox,
    CommonService,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class CustomersModule { }
