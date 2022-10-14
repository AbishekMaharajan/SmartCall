import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SettingsComponent } from './component/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          moduleUrl: 'dashboard'
        }
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: {
          moduleUrl: 'settings'
        }
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
