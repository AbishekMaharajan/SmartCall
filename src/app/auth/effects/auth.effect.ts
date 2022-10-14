import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../actions/auth.action';
import { AuthService } from '../auth.service';
// import { ToastrService } from 'ngx-toastr';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class AuthEffect {

  /**
   * login effect
   */
  @Effect()
  doLogin$: Observable<Action> = this.action$
    .pipe(
      ofType(actions.ActionTypes.DO_LOGIN),
      map((action: actions.DoLoginAction) => action.payload),
      switchMap((state) => {
        return this.api.doLogin(state)
          .pipe(
            map((user) =>
              new actions.DoLoginSuccess(user),
            ),
            tap((res) => {
              if (res) {
                localStorage.setItem('userToken', res.payload.data.token);
                localStorage.setItem('userDetails', JSON.stringify(res.payload.data.user_details));
                this.router.navigate(['dashboard']);
              }
            }),
            catchError(error => of(new actions.DoLoginFail(error.error)))
          );
      }
      )
    );

  constructor(private action$: Actions,
    protected api: AuthService,
    // public toastr: ToastrService,
    public router: Router) {
  }

}
