import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { AuthGuard } from './providers/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'projects',
        // canActivate: [AuthGuard],
        loadChildren: './pages/projects/projects.module#ProjectsModule'
      },
      {
        path: 'did',
        // canActivate: [AuthGuard],
        loadChildren: './pages/did/did.module#DidModule'
      },
      {
        path: 'users',
        // canActivate: [AuthGuard],
        loadChildren: './pages/users/users.module#UsersModule'
      },
      {
        path: 'agent-mapping',
        // canActivate: [AuthGuard],
        loadChildren: './pages/agent-mapping/agent-mapping.module#AgentMappingModule'
      },
      {
        path: 'live-moniter',
        // canActivate: [AuthGuard],
        loadChildren: './pages/live-moniter/live-moniter.module#LiveMoniterModule'
      },
      {
        path: 'customers',
        // canActivate: [AuthGuard],
        loadChildren: './pages/customers/customers.module#CustomersModule'
      },
      {
        path: 'consolidated-reports',
        // canActivate: [AuthGuard],
        loadChildren: './pages/consolidated-reports/consolidated-reports.module#ConsolidatedReportsModule'
      },
      {
        path: 'status-tracker',
        // canActivate: [AuthGuard],
        loadChildren: './pages/status-tracker/status-tracker.module#StatusTrackerModule'
      },
      {
        path: '',
        canActivate: [AuthGuard],
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: './auth/auth.module#AuthModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
