import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/common.action';
import { CommonService } from '../common.service';
import { saveAs } from 'file-saver';



@Injectable()
export class CommonEffect {
    // Export List
    @Effect()
    exportList: Observable<Action> = this.action$.pipe(
        ofType(actions.ActionTypes.EXPORT_LIST),
        map((action: actions.ExportList) => action.payload),
        switchMap(state => {

            return this.api.exportList(state)
                .pipe(
                    tap(data => {
                        const fileName = state.file
                        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        saveAs(blob, fileName);
                    }),
                    map(user => new actions.ExportListSuccess(user)),

                    catchError(error => of(new actions.ExportListFail(error.error)))
                );
        })
    );

    @Effect()
    monthwiseCall: Observable<Action> = this.action$.pipe(
        ofType(actions.ActionTypes.MONTHWISE_CALL),
        map((action: actions.MonthWiseCall) => action.payload),
        switchMap(state => {

            return this.api.monthWiseCall(state)
                .pipe(
                    map(user => new actions.MonthWiseCallSuccess(user)),

                    catchError(error => of(new actions.MonthWiseCallFail(error.error)))
                );
        })
    );

    @Effect()
    followupList: Observable<Action> = this.action$.pipe(
        ofType(actions.ActionTypes.FOLLOWUP_LIST),
        map((action: actions.FollowupList) => action.payload),
        switchMap(state => {

            return this.api.followupList(state)
                .pipe(
                    map(user => new actions.FollowupListSuccess(user)),

                    catchError(error => of(new actions.FollowupListFail(error.error)))
                );
        })
    );

    @Effect()
    todaysCallCount: Observable<Action> = this.action$.pipe(
        ofType(actions.ActionTypes.TODAYS_CALL_COUNT),
        map((action: actions.TodaysCallCount) => action.payload),
        switchMap(state => {

            return this.api.todaysCallCount(state)
                .pipe(
                    map(user => new actions.TodaysCallCountSuccess(user)),

                    catchError(error => of(new actions.TodaysCallCountFail(error.error)))
                );
        })
    );

    constructor(
        private action$: Actions,
        protected api: CommonService,
        public router: Router
    ) { }
}
