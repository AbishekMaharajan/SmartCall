import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';
import * as DidActions from './action/did.action';
import {
    didList, didListLoading, didListLoaded, didListFailed,
    didListCount, didListCountLoading, didListCountLoaded, didListCountFailed,
    projectList, projectListLoading, projectListLoaded, projectListFailed,
    assignDid, assignDidLoading, assignDidLoaded, assignDidFailed,
    releaseDid, releaseDidLoading, releaseDidLoaded, releaseDidFailed,
    addDid, addDidLoading, addDidLoaded, addDidFailed,
} from './reducer/did.selector';


@Injectable()
export class DidSandbox {

    public didList$ = this.appState.select(didList);
    public didListLoading$ = this.appState.select(didListLoading);
    public didListLoaded$ = this.appState.select(didListLoaded);
    public didListFailed$ = this.appState.select(didListFailed);

    public didListCount$ = this.appState.select(didListCount);
    public didListCountLoading$ = this.appState.select(didListCountLoading);
    public didListCountLoaded$ = this.appState.select(didListCountLoaded);
    public didListCountFailed$ = this.appState.select(didListCountFailed);

    public projectList$ = this.appState.select(projectList);
    public projectListLoading$ = this.appState.select(projectListLoading);
    public projectListLoaded$ = this.appState.select(projectListLoaded);
    public projectListFailed$ = this.appState.select(projectListFailed);

    public assignDid$ = this.appState.select(assignDid);
    public assignDidLoading$ = this.appState.select(assignDidLoading);
    public assignDidLoaded$ = this.appState.select(assignDidLoaded);
    public assignDidFailed$ = this.appState.select(assignDidFailed);

    public releaseDid$ = this.appState.select(releaseDid);
    public releaseDidLoading$ = this.appState.select(releaseDidLoading);
    public releaseDidLoaded$ = this.appState.select(releaseDidLoaded);
    public releaseDidFailed$ = this.appState.select(releaseDidFailed);

    public addDid$ = this.appState.select(addDid);
    public addDidLoading$ = this.appState.select(addDidLoading);
    public addDidLoaded$ = this.appState.select(addDidLoaded);
    public addDidFailed$ = this.appState.select(addDidFailed);



    constructor(protected appState: Store<store.AppState>) {
    }

    public didList(params) {
        this.appState.dispatch(new DidActions.DidList(params));
    }
    public didListCount(params) {
        this.appState.dispatch(new DidActions.DidListCount(params));
    }

    public getProjectList(params) {
        this.appState.dispatch(new DidActions.GetProjectList(params));
    }
    public assignDid(params) {
        this.appState.dispatch(new DidActions.AssignDid(params));
    }
    public releaseDid(params) {
        this.appState.dispatch(new DidActions.ReleaseDid(params));
    }
    public addDid(params) {
        this.appState.dispatch(new DidActions.AddDid(params));
    }

}

