import { Action } from '@ngrx/store';
import {type} from '../../shared/utility';
import {LoginRequestModel} from '../models/login-request.model';
import {ResponseInterface} from '../../shared/interfaces/interface';

export const ActionTypes = {
    DO_LOGIN: type('[Common] do login'),
    DO_LOGIN_SUCCESS: type('[Common] login Success'),
    DO_LOGIN_FAIL: type('[Common] login Fail'),
};

/**
 *  login actions.
 */
export class DoLoginAction implements Action {
    type = ActionTypes.DO_LOGIN;

    constructor(public payload: LoginRequestModel) {
    }
}

export class DoLoginSuccess implements Action {
    type = ActionTypes.DO_LOGIN_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class DoLoginFail implements Action {
    type = ActionTypes.DO_LOGIN_FAIL;

    constructor(public payload: any) {
    }
}
export type Actions =
    | DoLoginAction
    | DoLoginSuccess
    | DoLoginFail;

