import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState as State } from './app.state';
import { environment } from '../environments/environment.prod';
import * as authReducer from './auth/reducer/auth.reducer';
import * as projectsReducer from './pages/projects/reducer/projects.reducer';
import * as didReducer from './pages/did/reducer/did.reducer';
import * as usersReducer from './pages/users/reducer/users.reducer';
import * as liveMoniterReducer from './pages/live-moniter/reducer/liveMoniter.reducer';
import * as customerReducer from './pages/customers/reducer/customers.reducer';
import * as commonReducer from './common/reducer/common.reducer';

export const reducers: ActionReducerMap<State> = {
    auth: authReducer.reducer,
    projects: projectsReducer.reducer,
    did: didReducer.reducer,
    users: usersReducer.reducer,
    liveMoniter: liveMoniterReducer.reducer,
    customer: customerReducer.reducer,
    common: commonReducer.reducer,

};

export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
    return function (state: State, action: any): State {
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger]
    : [];
