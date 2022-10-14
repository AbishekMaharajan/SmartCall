import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentProjectCallCountComponent } from './components/agent-project-call-count/agent-project-call-count.component';
import { MonthwiseCallCountComponent } from './components/monthwise-call-count/monthwise-call-count.component';
import { LayoutConsolidatedComponent } from './layout-consolidated/layout-consolidated.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutConsolidatedComponent,
    children: [
      {
        path: 'monthwise',
        component: MonthwiseCallCountComponent,
        data: {
          moduleUrl: 'consolidated-reports/monthwise'
        }
      },
      {
        path: 'agent-project',
        component: AgentProjectCallCountComponent,
        data: {
          moduleUrl: 'consolidated-reports/agent-project'
        }
      },
      {
        path: '',
        redirectTo: 'monthwise',
        pathMatch: 'full'
      }
    ],

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidatedReportsRoutingModule { }
