import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { ProjectAgentReportComponent } from './components/project-agent-report/project-agent-report.component';
import { ReassignAgentComponent } from './components/reassign-agent/reassign-agent.component';
import { LayoutCustomerComponent } from './layout-customer/layout-customer.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutCustomerComponent,
    children: [
      {
        path: 'list',
        component: CustomerListComponent,
        data: {
          moduleUrl: 'customers/list'
        }
      },
      {
        path: 'project-agent-report',
        component: ProjectAgentReportComponent,
        data: {
          moduleUrl: 'customers/project-agent-report'
        }
      },
      {
        path: 'reassign',
        component: ReassignAgentComponent,
        data: {
          moduleUrl: 'customers/reassign'
        }
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }

    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
