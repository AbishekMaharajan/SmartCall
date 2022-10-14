import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DidRoutingModule } from './did-routing.module';
import { ManageDidComponent } from './components/manage-did/manage-did.component';
import { AddDidComponent } from './components/add-did/add-did.component';
import { LayoutDidComponent } from './layout-did/layout-did.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { DidSandbox } from './did.sandbox';
import { DidService } from './did.service';
import { EffectsModule } from '@ngrx/effects';
import { DidEffect } from './effects/did.effects';
import { CommonEffect } from 'src/app/common/effects/common.efects';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';

@NgModule({
  declarations: [
    LayoutDidComponent,
    ManageDidComponent,
    AddDidComponent],
  imports: [
    CommonModule,
    DidRoutingModule,
    SharedModule,
    EffectsModule.forFeature([DidEffect, CommonEffect])

  ],
  providers: [
    DidSandbox,
    DidService,
    CommonSandbox,
    CommonService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DidModule { }
