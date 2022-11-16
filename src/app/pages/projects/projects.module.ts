import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsService } from './projects.service';
import { ProjectsSandbox } from './projects.sandbox';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffect } from './effects/projects.effects';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonService } from 'src/app/common/common.service';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonEffect } from 'src/app/common/effects/common.efects';
import { WhatsappTemplatesComponent } from './components/whatsapp-templates/whatsapp-templates.component';
@NgModule({
  declarations: [
    LayoutComponent,
    ProjectListComponent,
    CreateProjectComponent,
    WhatsappTemplatesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
    EffectsModule.forFeature([ProjectsEffect, CommonEffect])

  ],
  providers: [
    ProjectsSandbox,
    ProjectsService,
    CommonService,
    CommonSandbox,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsModule { }
