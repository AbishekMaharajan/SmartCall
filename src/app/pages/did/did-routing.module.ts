import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDidComponent } from './components/add-did/add-did.component';
import { ManageDidComponent } from './components/manage-did/manage-did.component';
import { LayoutDidComponent } from './layout-did/layout-did.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDidComponent,
    children: [
      {
        path: 'manage',
        component: ManageDidComponent,
        data: {
          moduleUrl: 'did/manage'
        }
      },
      {
        path: 'add',
        component: AddDidComponent,
        data: {
          moduleUrl: 'did/add'
        }
      },
      {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
      }
    ],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DidRoutingModule { }
