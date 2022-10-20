import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from './popups/confirmation-popup/confirmation-popup.component';
import { DndModule } from 'ngx-drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { UpdateLatestResponseComponent } from './popups/update-latest-response/update-latest-response.component';
import { CallReportsComponent } from './popups/call-reports/call-reports.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ProjectsSandbox } from '../pages/projects/projects.sandbox';
import { ProjectsService } from '../pages/projects/projects.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { NumberAcceptModule } from './validation-directives/onlyNumber.module';
import { SideScroll } from './utility/sidebar.directive';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DaysMappedComponent } from './popups/days-mapped/days-mapped.component';
import { UsersService } from '../pages/users/users.service';
import { UsersSandbox } from '../pages/users/users.sandbox';
import { CallLoaderComponent } from './components/call-loader/call-loader.component';
import { PlayRecordingComponent } from './popups/play-recording/play-recording.component';
import { CommonSandbox } from '../common/common.sandbox';
import { CommonService } from '../common/common.service';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffect } from '../common/effects/common.efects';
import { ViewFileComponent } from './popups/view-file/view-file.component';
import { UploadFileComponent } from './popups/upload-file/upload-file.component';
import { HighchartsChartModule } from 'highcharts-angular'
export const COMPONENTS = [
  SidebarComponent,
  ConfirmationPopupComponent,
  UpdateLatestResponseComponent,
  CallReportsComponent,
  PageLoaderComponent,
  DaysMappedComponent,
  CallLoaderComponent,
  SideScroll,
  PlayRecordingComponent,
  ViewFileComponent,
  UploadFileComponent,

];
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    NgSelectModule,
    DndModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule,
    NumberAcceptModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    HighchartsChartModule,
    EffectsModule.forFeature([CommonEffect])

  ],
  exports: [
    COMPONENTS,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MatTabsModule,
    MatSelectModule,
    NgSelectModule,
    NgbModule,
    DndModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule,
    NumberAcceptModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    HighchartsChartModule,
  ],
  providers: [
    ProjectsSandbox,
    ProjectsService,
    UsersSandbox,
    UsersService,
    DatePipe,
    CommonSandbox,
    CommonService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
