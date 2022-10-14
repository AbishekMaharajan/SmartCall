import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LayoutUsersComponent } from './layout-users/layout-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersSandbox } from './users.sandbox';
import { UsersService } from './users.service';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './effects/users.effects';
import { CommonSandbox } from 'src/app/common/common.sandbox';
import { CommonService } from 'src/app/common/common.service';
import { CommonEffect } from 'src/app/common/effects/common.efects';


@NgModule({
  declarations: [UsersComponent, CreateUserComponent, LayoutUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    EffectsModule.forFeature([UsersEffect, CommonEffect])
  ],
  providers: [
    UsersSandbox,
    UsersService,
    CommonSandbox,
    CommonService

  ],
})
export class UsersModule { }
