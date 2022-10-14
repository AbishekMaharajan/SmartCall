import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/did.action';
import { DidService } from '../did.service';



@Injectable()
export class DidEffect {
    //DID LIST
    @Effect()
    didList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.DID_LIST),
            map((action: actions.DidList) => action.payload),
            switchMap((state) => {
                return this.api.didList(state)
                    .pipe(
                        map((did) =>
                            new actions.DidListSuccess(did),
                        ),
                        catchError(error => of(new actions.DidListFail(error.error)))
                    );
            }
            )
        );


    //DID LIST COUNT
    @Effect()
    didListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.DID_LIST_COUNT),
            map((action: actions.DidListCount) => action.payload),
            switchMap((state) => {
                return this.api.didListCount(state)
                    .pipe(
                        map((project) =>
                            new actions.DidListCountSuccess(project),
                        ),
                        catchError(error => of(new actions.DidListCountFail(error.error)))
                    );
            }
            )
        );

    //PROJECT LIST
    @Effect()
    projectList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.GET_PROJECT_LIST),
            map((action: actions.GetProjectList) => action.payload),
            switchMap((state) => {
                return this.api.projectList(state)
                    .pipe(
                        map((project) =>
                            new actions.GetProjectListSuccess(project),
                        ),
                        catchError(error => of(new actions.GetProjectListFail(error.error)))
                    );
            }
            )
        );

    //ASSIGN DID
    @Effect()
    assignDid$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.ASSIGN_DID),
            map((action: actions.AssignDid) => action.payload),
            switchMap((state) => {
                return this.api.assignDid(state)
                    .pipe(
                        map((state) =>
                            new actions.AssignDidSuccess(state),
                        ),
                        catchError(error => of(new actions.AssignDidFail(error.error)))
                    );
            }
            )
        );

    //RELEASE DID
    @Effect()
    releaseDid$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.RELEASE_DID),
            map((action: actions.ReleaseDid) => action.payload),
            switchMap((state) => {
                return this.api.releaseDid(state)
                    .pipe(
                        map((state) =>
                            new actions.ReleaseDidSuccess(state),
                        ),
                        catchError(error => of(new actions.ReleaseDidFail(error.error)))
                    );
            }
            )
        );

    //ADD DID
    @Effect()
    addDid$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.ADD_DID),
            map((action: actions.AddDid) => action.payload),
            switchMap((state) => {
                return this.api.addDid(state)
                    .pipe(
                        map((state) =>
                            new actions.AddDidSuccess(state),
                        ),
                        tap((res) => {
                            if (res.payload.status == 1) {
                                this.router.navigate(['/did/manage']);
                            }
                        }),
                        catchError(error => of(new actions.AddDidFail(error.error)))
                    );
            }
            )
        );




    constructor(private action$: Actions,
        protected api: DidService,
        public router: Router) {
    }

}
