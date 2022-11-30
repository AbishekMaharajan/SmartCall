import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { BlockedCustomersComponent } from './components/blocked-customers/blocked-customers.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { OnlineLeadsComponent } from './components/online-leads/online-leads.component';
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
        path: 'online-leads',
        component: OnlineLeadsComponent,
        data: {
          moduleUrl: 'customers/online-leads'
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
        path: 'blocked-customers',
        component: BlockedCustomersComponent,
        data: {
          moduleUrl: 'customers/blocked-customers'
        }
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
        data: {
          moduleUrl: 'customers/online-leads'
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
