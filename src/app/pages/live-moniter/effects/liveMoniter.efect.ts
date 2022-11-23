import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/liveMoniter.action';
import { LiveMoniterService } from '../liveMoniter.service';



@Injectable()
export class LiveMoniterEffect {
    // ONGOING CALL LIST
    @Effect()
    projectList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.ONGOING_CALL_LIST),
            map((action: actions.OngoingCallList) => action.payload),
            switchMap((state) => {
                return this.api.ongoingCallList(state)
                    .pipe(
                        map((call) =>
                            new actions.OngoingCallListSuccess(call),
                        ),
                        catchError(error => of(new actions.OngoingCallListFail(error.error)))
                    );
            }
            )
        );

    // RESPONSE LIST
    @Effect()
    responseList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.RESPONSE_LIST),
            map((action: actions.ResponseList) => action.payload),
            switchMap((state) => {
                return this.api.responseList(state)
                    .pipe(
                        map((call) =>
                            new actions.ResponseListSuccess(call),
                        ),

                        catchError(error => of(new actions.ResponseListFail(error.error)))
                    );
            }
            )
        );
    // RESPONSE LIST COUNT
    @Effect()
    responseListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.RESPONSE_LIST_COUNT),
            map((action: actions.ResponseListCount) => action.payload),
            switchMap((state) => {
                return this.api.responseListCount(state)
                    .pipe(
                        map((call) =>
                            new actions.ResponseListCountSuccess(call),
                        ),

                        catchError(error => of(new actions.ResponseListCountFail(error.error)))
                    );
            }
            )
        );

    // CALL REPORTS
    @Effect()
    callReports$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CALL_REPORTS),
            map((action: actions.CallReports) => action.payload),
            switchMap((state) => {
                return this.api.callReports(state)
                    .pipe(
                        map((call) =>
                            new actions.CallReportsSuccess(call),
                        ),
                        catchError(error => of(new actions.CallReportsFail(error.error)))
                    );
            }
            )
        );

    // CLICK TO CALL
    @Effect()
    clickToCall$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CLICK_TO_CALL),
            map((action: actions.ClickToCall) => action.payload),
            switchMap((state) => {
                return this.api.clickToCall(state)
                    .pipe(
                        map((call) =>
                            new actions.ClickToCallSuccess(call),
                        ),
                        catchError(error => of(new actions.ClickToCallFail(error.error)))
                    );
            }
            )
        );

    // BLOCK CUSTOMERS
    @Effect()
    blockCustomers$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.BLOCK_CUSTOMER),
            map((action: actions.BlockCustomer) => action.payload),
            switchMap((state) => {
                return this.api.blockCustomer(state)
                    .pipe(
                        map((call) =>
                            new actions.BlockCustomerSuccess(call),
                        ),
                        catchError(error => of(new actions.BlockCustomerFail(error.error)))
                    );
            }
            )
        );

    // BARGIN
    @Effect()
    bargin$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.BARGIN),
            map((action: actions.Bargin) => action.payload),
            switchMap((state) => {
                return this.api.bargin(state)
                    .pipe(
                        map((call) =>
                            new actions.BarginSuccess(call),
                        ),
                        catchError(error => of(new actions.BarginFail(error.error)))
                    );
            }
            )
        );

    // CUSTOMER INFO
    @Effect()
    customerInfo$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CUSTOMER_INFO),
            map((action: actions.CustomerInfo) => action.payload),
            switchMap((state) => {
                return this.api.customerInfo(state)
                    .pipe(
                        map((call) =>
                            new actions.CustomerInfoSuccess(call),
                        ),
                        catchError(error => of(new actions.CustomerInfoFail(error.error)))
                    );
            }
            )
        );

    // UPDATE CUSTOMER 
    @Effect()
    updateCustomerInfo$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.UPADTE_CUSTOMER_INFO),
            map((action: actions.UpdateCustomer) => action.payload),
            switchMap((state) => {
                return this.api.updateCustomer(state)
                    .pipe(
                        map((call) =>
                            new actions.UpdateCustomerSuccess(call),
                        ),
                        catchError(error => of(new actions.UpdateCustomerFail(error.error)))
                    );
            }
            )
        );
    // TOTAL CALL LIST
    @Effect()
    TotalCallList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.TOTAL_CALL_LIST),
            map((action: actions.TotalCallList) => action.payload),
            switchMap((state) => {
                return this.api.totalCallList(state)
                    .pipe(
                        map((call) =>
                            new actions.TotalCallListSuccess(call),
                        ),
                        catchError(error => of(new actions.TotalCallListFail(error.error)))
                    );
            }
            )
        );
    // PINCODE AREA
    @Effect()
    pincodeArea$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.AREA_LIST),
            map((action: actions.PincodeArea) => action.payload),
            switchMap((state) => {
                return this.api.pincodeArea(state)
                    .pipe(
                        map((call) =>
                            new actions.PincodeAreaSuccess(call),
                        ),
                        catchError(error => of(new actions.PincodeAreaFail(error.error)))
                    );
            }
            )
        );


    // MISSED CALL LIST
    @Effect()
    missedCallList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.MISSED_CALL_LIST),
            map((action: actions.MissedCallList) => action.payload),
            switchMap((state) => {
                return this.api.missedCallList(state)
                    .pipe(
                        map((call) =>
                            new actions.MissedCallListSuccess(call),
                        ),

                        catchError(error => of(new actions.MissedCallListFail(error.error)))
                    );
            }
            )
        );
    // MISSED CALL LIST COUNT
    @Effect()
    missedCallListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.MISSED_CALL_LIST_COUNT),
            map((action: actions.MissedCallListCount) => action.payload),
            switchMap((state) => {
                return this.api.missedCallListCount(state)
                    .pipe(
                        map((call) =>
                            new actions.MissedCallListCountSuccess(call),
                        ),
                        catchError(error => of(new actions.MissedCallListCountFail(error.error)))
                    );
            }
            )
        );


    constructor(private action$: Actions,
        protected api: LiveMoniterService,
        public router: Router) {
    }

}
