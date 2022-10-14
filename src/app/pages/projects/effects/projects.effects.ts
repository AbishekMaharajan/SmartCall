import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/projects.action';
import { ProjectsService } from '../projects.service';



@Injectable()
export class ProjectsEffect {
    //PROJECT LIST
    @Effect()
    projectList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_LIST),
            map((action: actions.ProjectList) => action.payload),
            switchMap((state) => {
                return this.api.projectList(state)
                    .pipe(
                        map((project) =>
                            new actions.ProjectListSuccess(project),
                        ),
                        catchError(error => of(new actions.ProjectListFail(error.error)))
                    );
            }
            )
        );

    //PROJECT LIST COUNT
    @Effect()
    projectListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_LIST_COUNT),
            map((action: actions.ProjectListCount) => action.payload),
            switchMap((state) => {
                return this.api.projectListCount(state)
                    .pipe(
                        map((project) =>
                            new actions.ProjectListCountSuccess(project),
                        ),
                        catchError(error => of(new actions.ProjectListCountFail(error.error)))
                    );
            }
            )
        );


    // CREATE PROJECT
    @Effect()
    createProject$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CREATE_PROJECT),
            map((action: actions.CreateProject) => action.payload),
            switchMap((state) => {
                return this.api.createProject(state)
                    .pipe(
                        map((project) =>
                            new actions.CreateProjectSuccess(project),
                        ),
                        tap((res) => {
                            if (res.payload.status == 1) {
                                this.router.navigate(['/projects/list']);
                            }
                        }),
                        catchError(error => of(new actions.CreateProjectFail(error.error)))
                    );
            }
            )
        );

    // FETCH UPDATE DATA
    @Effect()
    fetchUpdateData$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.FETCH_UPDATE_DATA),
            map((action: actions.FetchUpdateData) => action.payload),
            switchMap((state) => {
                return this.api.fetchUpdateData(state)
                    .pipe(
                        map((project) =>
                            new actions.FetchUpdateDataSuccess(project),
                        ),
                        catchError(error => of(new actions.FetchUpdateDataFail(error.error)))
                    );
            }
            )
        );

    // UPDATE PROJECT
    @Effect()
    updateProject$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.UPDATE_PROJECT),
            map((action: actions.UpdateProject) => action.payload),
            switchMap((state) => {
                return this.api.updateProject(state)
                    .pipe(
                        map((project) =>
                            new actions.UpdateProjectSuccess(project),
                        ),
                        tap((res) => {
                            if (res.payload.status === 1) {
                                this.router.navigate(['/projects/list']);
                            }
                        }),
                        catchError(error => of(new actions.UpdateProjectFail(error.error)))
                    );
            }
            )
        );

    // DELETE PROJECT
    @Effect()
    deleteProject$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.DELETE_PROJECT),
            map((action: actions.DeleteProject) => action.payload),
            switchMap((state) => {
                return this.api.deleteProject(state)
                    .pipe(
                        map((project) =>
                            new actions.DeleteProjectSuccess(project),
                        ),

                        catchError(error => of(new actions.DeleteProjectFail(error.error)))
                    );
            }
            )
        );





    constructor(private action$: Actions,
        protected api: ProjectsService,
        public router: Router) {
    }

}
