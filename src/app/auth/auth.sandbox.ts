import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../app.state';
import * as authActions from './actions/auth.action';
import { loginLoading, loginLoaded, loginFailed } from './reducer/selector';
import { Subscription } from 'rxjs/index';
import { LoginRequestModel } from './models/login-request.model';

@Injectable()
export class AuthSandbox {

    public loginLoading$ = this.appState.select(loginLoading);
    public loginLoaded$ = this.appState.select(loginLoaded);
    public loginFailed$ = this.appState.select(loginFailed);

    private subscriptions: Array<Subscription> = [];

    constructor(protected appState: Store<store.AppState>) {

    }

    public doLogin(params) {
        this.appState.dispatch(new authActions.DoLoginAction(new LoginRequestModel(params)));
    }
}
