import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentMappingRoutingModule } from './agent-mapping-routing.module';
import { LayoutAgentMappingComponent } from './layout-agent-mapping/layout-agent-mapping.component';
import { MappingComponent } from './componrnts/mapping/mapping.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersSandbox } from '../users/users.sandbox';
import { UsersService } from '../users/users.service';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from '../users/effects/users.effects';

@NgModule({
  declarations: [LayoutAgentMappingComponent, MappingComponent],
  imports: [
    CommonModule,
    AgentMappingRoutingModule,
    SharedModule,
    EffectsModule.forFeature([UsersEffect])
  ],
  providers: [
    UsersSandbox,
    UsersService,
  ],
})
export class AgentMappingModule { }
