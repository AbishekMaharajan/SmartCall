import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutComponent } from './common/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './app.reducer';
import { RequestInterceptor } from './providers/interceptor/request.interceptor';
import { AuthGuard } from './providers/guards/auth.guard';
import { ConfirmationPopupComponent } from './shared/popups/confirmation-popup/confirmation-popup.component';
import { UpdateLatestResponseComponent } from './shared/popups/update-latest-response/update-latest-response.component';
import { CallReportsComponent } from './shared/popups/call-reports/call-reports.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DaysMappedComponent } from './shared/popups/days-mapped/days-mapped.component';
import { PlayRecordingComponent } from './shared/popups/play-recording/play-recording.component';
import { ViewFileComponent } from './shared/popups/view-file/view-file.component';
import { UploadFileComponent } from './shared/popups/upload-file/upload-file.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SettingsComponent } from './shared/popups/settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],

  entryComponents: [
    ConfirmationPopupComponent,
    UpdateLatestResponseComponent,
    CallReportsComponent,
    DaysMappedComponent,
    PlayRecordingComponent,
    ViewFileComponent,
    UploadFileComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule,
    HighchartsChartModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      easing: 'ease-in',
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true
    },
    AuthGuard,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

