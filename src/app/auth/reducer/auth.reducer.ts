import {AuthState, authStateRecord} from './auth.state';
import * as actions from '../actions/auth.action';

export const initialState: AuthState = new authStateRecord() as unknown as AuthState;

export function reducer(state = initialState, {type, payload}: any): AuthState {
  if (!type) {
    return state;
  }

  switch (type) {
    /**
     * login reducer case function
     */
    case actions.ActionTypes.DO_LOGIN:

      return Object.assign({}, state, {
        loginLoading: true,
        loginLoaded: false,
        loginFailed: false,
      });

    case actions.ActionTypes.DO_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginLoading: false,
        loginLoaded: true,
        loginFailed: false,
      });

    case actions.ActionTypes.DO_LOGIN_FAIL:

      return Object.assign({}, state, {
        loginLoading: false,
        loginLoaded: true,
        loginFailed: true,

      });

    default: {
      return state;
    }
  }
}

/**
 * export values
 */

export const getLoginLoading = (state: AuthState) => state.loginLoading;
export const getLoginLoaded = (state: AuthState) => state.loginLoaded;
export const getLoginFailed = (state: AuthState) => state.loginFailed;
