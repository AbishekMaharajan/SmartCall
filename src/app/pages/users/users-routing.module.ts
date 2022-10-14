import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersComponent } from './components/users/users.component';
import { LayoutUsersComponent } from './layout-users/layout-users.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutUsersComponent,
    children: [
      {
        path: 'list',
        component: UsersComponent,
        data: {
          moduleUrl: 'users'
        }
      },
      {
        path: 'create',
        component: CreateUserComponent,
        data: {
          moduleUrl: 'users'
        }
      },
      {
        path: 'edit/:id',
        component: CreateUserComponent,
        data: {
          moduleUrl: 'users'
        }
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
