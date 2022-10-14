import {createSelector} from 'reselect';
import {AppState} from 'src/app/app.state';

import * as authreducer from '../../auth/reducer/auth.reducer';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getAuthState = (state: AppState) => state.auth;
export const loginLoading = createSelector(getAuthState, authreducer.getLoginLoading);
export const loginLoaded = createSelector(getAuthState, authreducer.getLoginLoaded);
export const loginFailed = createSelector(getAuthState, authreducer.getLoginFailed);