/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Subject } from 'rxjs';
import { OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  public menuValue = new Subject<any>();
  constructor(

    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {


    return this.checkLogin(state.url, route.data['permission']);
  }
  // CheckLogin
  checkLogin(url: string, rolePermission: string = '',): Promise<boolean> | boolean {

    const currentUser = localStorage.getItem('userToken');


    if (currentUser) {
      if (url === '/auth' || url === '/auth/forgot-password') {
        this.router.navigate(['/dashboard']);
        return false;
      }
      return true;
    } else {
      if (url === '/auth' || url === '/auth/forgot-password') {
        return true;
      }
    }
    // Navigate to the login page with extras
    this.router.navigate(['/auth']);
    return false;
  }
}
