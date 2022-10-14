import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/users.action';
import { UsersService } from '../users.service';



@Injectable()
export class UsersEffect {
    //USERS LIST
    @Effect()
    usersList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.USER_LIST),
            map((action: actions.UserList) => action.payload),
            switchMap((state) => {
                return this.api.userList(state)
                    .pipe(
                        map((user) =>

                            new actions.UserListSuccess(user),
                        ),
                        catchError(error => of(new actions.UserListFail(error.error)))
                    );
            }
            )
        );

    //USERS LIST COUNT
    @Effect()
    userListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.USER_LIST_COUNT),
            map((action: actions.UserListCount) => action.payload),
            switchMap((state) => {
                return this.api.userListCount(state)
                    .pipe(
                        map((user) =>
                            new actions.UserListCountSuccess(user),
                        ),

                        catchError(error => of(new actions.UserListCountFail(error.error)))
                    );
            }
            )
        );


    // CREATE USER
    @Effect()
    createUser$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CREATE_USER),
            map((action: actions.CreateUser) => action.payload),
            switchMap((state) => {
                return this.api.createUser(state)
                    .pipe(
                        map((user) =>
                            new actions.CreateUserSuccess(user),
                        ),
                        tap((res) => {
                            if (res.payload.status == 1) {
                                this.router.navigate(['/users/list']);
                            }
                        }),
                        catchError(error => of(new actions.CreateUserFail(error.error)))
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
                        map((user) =>
                            new actions.FetchUpdateDataSuccess(user),
                        ),
                        catchError(error => of(new actions.FetchUpdateDataFail(error.error)))
                    );
            }
            )
        );

    // UPDATE USER
    @Effect()
    updateUser$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.UPDATE_USER),
            map((action: actions.UpdateUser) => action.payload),
            switchMap((state) => {
                return this.api.updateUser(state)
                    .pipe(
                        map((user) =>
                            new actions.UpdateUserSuccess(user),
                        ),
                        tap((res) => {
                            if (res.payload.status === 1) {
                                this.router.navigate(['/users/list']);
                            }
                        }),
                        catchError(error => of(new actions.UpdateUserFail(error.error)))
                    );
            }
            )
        );

    // DELETE USER
    @Effect()
    deleteUser$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.DELETE_USER),
            map((action: actions.DeleteUser) => action.payload),
            switchMap((state) => {
                return this.api.deleteUser(state)
                    .pipe(
                        map((user) =>
                            new actions.DeleteUserSuccess(user),
                        ),

                        catchError(error => of(new actions.DeleteUserFail(error.error)))
                    );
            }
            )
        );

    // USER TYPE
    @Effect()
    userType$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.USER_TYPE),
            map((action: actions.UserType) => action.payload),
            switchMap((state) => {
                return this.api.userType(state)
                    .pipe(
                        map((user) =>
                            new actions.UserTypeSuccess(user),
                        ),

                        catchError(error => of(new actions.UserTypeFail(error.error)))
                    );
            }
            )
        );

    // PHONE TYPE
    @Effect()
    phoneType$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PHONE_TYPE),
            map((action: actions.PhoneType) => action.payload),
            switchMap((state) => {
                return this.api.phoneType(state)
                    .pipe(
                        map((user) =>
                            new actions.PhoneTypeSuccess(user),
                        ),

                        catchError(error => of(new actions.PhoneTypeFail(error.error)))
                    );
            }
            )
        );

    // REPORTING
    @Effect()
    reporting$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.REPORTING),
            map((action: actions.Reporting) => action.payload),
            switchMap((state) => {
                return this.api.reporting(state)
                    .pipe(
                        map((user) =>
                            new actions.ReportingSuccess(user),
                        ),

                        catchError(error => of(new actions.ReportingFail(error.error)))
                    );
            }
            )
        );

    // CALL AVAILABILITY
    @Effect()
    callAvilability$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CALL_AVAILABILITY),
            map((action: actions.CallAvailability) => action.payload),
            switchMap((state) => {
                return this.api.callAvailability(state)
                    .pipe(
                        map((user) =>
                            new actions.CallAvailabilitySuccess(user),
                        ),

                        catchError(error => of(new actions.CallAvailabilityFail(error.error)))
                    );
            }
            )
        );

    // CHANGE ACTIVE STATE
    @Effect()
    changeActiveStatus$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CHANGE_ACTIVE_STATUS),
            map((action: actions.ChangeActiveStatus) => action.payload),
            switchMap((state) => {
                return this.api.changeActiveStatus(state)
                    .pipe(
                        map((user) =>
                            new actions.ChangeActiveStatusSuccess(user),
                        ),

                        catchError(error => of(new actions.ChangeActiveStatusFail(error.error)))
                    );
            }
            )
        );

    // AGENT LIST
    @Effect()
    agentList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.AGENT_LIST),
            map((action: actions.AgentList) => action.payload),
            switchMap((state) => {
                return this.api.agentList(state)
                    .pipe(
                        map((user) =>
                            new actions.AgentListSuccess(user),
                        ),
                        catchError(error => of(new actions.AgentListFail(error.error)))
                    );
            }
            )
        );

    // MAPPING LIST
    @Effect()
    mappingList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.MAPPING_LIST),
            map((action: actions.MappingList) => action.payload),
            switchMap((state) => {
                return this.api.mappingList(state)
                    .pipe(
                        map((user) =>
                            new actions.MappingListSuccess(user),
                        ),
                        catchError(error => of(new actions.MappingListFail(error.error)))
                    );
            }
            )
        );

    // PROJECT MAPPING
    @Effect()
    projectMapping$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_MAPPING),
            map((action: actions.ProjectMapping) => action.payload),
            switchMap((state) => {
                return this.api.projectMapping(state)
                    .pipe(
                        map((user) =>
                            new actions.ProjectMappingSuccess(user),
                        ),
                        catchError(error => of(new actions.ProjectMappingFail(error.error)))
                    );
            }
            )
        );

    // STATUS TRACKER LIST
    @Effect()
    statusTrackerList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.STATUS_TRACKER_LIST),
            map((action: actions.StatusTrackerList) => action.payload),
            switchMap((state) => {
                return this.api.statusTrackerList(state)
                    .pipe(
                        map((user) =>
                            new actions.StatusTrackerListSuccess(user),
                        ),
                        catchError(error => of(new actions.StatusTrackerListFail(error.error)))
                    );
            }
            )
        );

    // STATUS TRACKER COUNT
    @Effect()
    statusTrackerListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.STATUS_TRACKER_LIST_COUNT),
            map((action: actions.StatusTrackerListCount) => action.payload),
            switchMap((state) => {
                return this.api.statusTrackerListCount(state)
                    .pipe(
                        map((user) =>
                            new actions.StatusTrackerListCountSuccess(user),
                        ),
                        catchError(error => of(new actions.StatusTrackerListCountFail(error.error)))
                    );
            }
            )
        );

    // MAPPING HISTORY
    @Effect()
    mappingHistory$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.MAPPING_HISTORY),
            map((action: actions.MappingHistory) => action.payload),
            switchMap((state) => {
                return this.api.mappingHistory(state)
                    .pipe(
                        map((user) =>
                            new actions.MappingHistorySuccess(user),
                        ),
                        catchError(error => of(new actions.MappingHistoryFail(error.error)))
                    );
            }
            )
        );


    constructor(private action$: Actions,
        protected api: UsersService,
        public router: Router) {
    }

}
