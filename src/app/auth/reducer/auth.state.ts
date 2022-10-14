import {Map, Record} from 'immutable';

export interface AuthState extends Map<string, any> {

    loginLoading: boolean;
    loginLoaded: boolean;
    loginFailed: boolean;
}

export const authStateRecord = Record({

    loginLoading: false,
    loginLoaded: false,
    loginFailed: false,
});

