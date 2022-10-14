import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: ProjectListComponent,
        data: {
          moduleUrl: 'projects'
        }
      },
      {
        path: 'create',
        component: CreateProjectComponent,
        data: {
          moduleUrl: 'projects'
        }
      },
      {
        path: 'edit/:id',
        component: CreateProjectComponent,
        data: {
          moduleUrl: 'projects'
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
export class ProjectsRoutingModule { }
