import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingComponent } from './componrnts/mapping/mapping.component';
import { LayoutAgentMappingComponent } from './layout-agent-mapping/layout-agent-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAgentMappingComponent,
    children: [
      {
        path: 'list',
        component: MappingComponent,
        data: {
          moduleUrl: 'agent-mapping'
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
export class AgentMappingRoutingModule { }
