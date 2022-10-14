import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestResponceComponent } from './components/latest-responce/latest-responce.component';
import { OngoingCallsComponent } from './components/ongoing-calls/ongoing-calls.component';
import { LayoutLiveMoniterComponent } from './layout-live-moniter/layout-live-moniter.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLiveMoniterComponent,
    children: [
      {
        path: 'response',
        component: LatestResponceComponent,
        data: {
          moduleUrl: 'live-moniter/response'
        }
      },
      {
        path: 'ongoing-calls',
        component: OngoingCallsComponent,
        data: {
          moduleUrl: 'live-moniter/ongoing-calls'
        }
      },

      {
        path: '',
        redirectTo: 'response',
        pathMatch: 'full'
      }
    ],

  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveMoniterRoutingModule { }
