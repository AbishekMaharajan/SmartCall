import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusTrackerComponent } from './components/status-tracker/status-tracker.component';
import { LayoutStatusComponent } from './layout-status/layout-status.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutStatusComponent,
    children: [
      {
        path: 'status',
        component: StatusTrackerComponent,
        data: {
          moduleUrl: 'status-tracker'
        }
      },
      {
        path: '',
        redirectTo: 'status',
        pathMatch: 'full'
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTrackerRoutingModule { }
