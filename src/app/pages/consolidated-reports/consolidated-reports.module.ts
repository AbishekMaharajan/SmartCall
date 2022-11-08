import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ConsolidatedReportsRoutingModule } from './consolidated-reports-routing.module';
import { LayoutConsolidatedComponent } from './layout-consolidated/layout-consolidated.component';
import { MonthwiseCallCountComponent } from './components/monthwise-call-count/monthwise-call-count.component';
import { AgentProjectCallCountComponent } from './components/agent-project-call-count/agent-project-call-count.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffect } from '../customers/effects/customers.effects';
import { UsersEffect } from '../users/effects/users.effects';
import { LiveMoniterEffect } from '../live-moniter/effects/liveMoniter.efect';
import { CommonEffect } from 'src/app/common/effects/common.efects';
import { CustomersSandbox } from '../customers/customers.sandbox';
import { CustomersService } from '../customers/customers.service';
import { UsersSandbox } from '../users/users.sandbox';
import { UsersService } from '../users/users.service';
import { LiveMoniterSandbox } from '../live-moniter/liveMoniter.sandbox';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { LiveMoniterService } from '../live-moniter/liveMoniter.service';
import { DidEffect } from '../did/effects/did.effects';
import { DidService } from '../did/did.service';
import { DidSandbox } from '../did/did.sandbox';

@NgModule({
  declarations: [LayoutConsolidatedComponent, MonthwiseCallCountComponent, AgentProjectCallCountComponent],
  imports: [
    CommonModule,
    ConsolidatedReportsRoutingModule,
    SharedModule,
    EffectsModule.forFeature([CustomersEffect, UsersEffect, LiveMoniterEffect, CommonEffect, DidEffect])
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
    DidService,
    DidSandbox,
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class ConsolidatedReportsModule { }
