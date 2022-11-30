import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import * as actions from '../action/customers.action';
import { CustomersService } from '../customers.service';



@Injectable()
export class CustomersEffect {
    // REASSIGN LIST
    @Effect()
    reassignList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.REASSIGN_LIST),
            map((action: actions.ReassignList) => action.payload),
            switchMap((state) => {
                return this.api.reassignList(state)
                    .pipe(
                        map((customer) =>
                            new actions.ReassignListSuccess(customer),
                        ),
                        catchError(error => of(new actions.ReassignListFail(error.error)))
                    );
            }
            )
        );

    //REASSIGN LIST COUNT
    @Effect()
    reassignListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.REASSIGN_LIST_COUNT),
            map((action: actions.ReassignListCount) => action.payload),
            switchMap((state) => {
                return this.api.reassignListCount(state)
                    .pipe(
                        map((customer) =>
                            new actions.ReassignListCountSuccess(customer),
                        ),
                        catchError(error => of(new actions.ReassignListCountFail(error.error)))
                    );
            }
            )
        );

    //REASSIGN ALL COUNT
    @Effect()
    reassignAllCustomers$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.REASSIGN_ALL_CUSTOMERS),
            map((action: actions.ReassignAllCustomers) => action.payload),
            switchMap((state) => {
                return this.api.reassignAllCustomers(state)
                    .pipe(
                        map((customer) =>
                            new actions.ReassignAllCustomersSuccess(customer),
                        ),
                        catchError(error => of(new actions.ReassignAllCustomersFail(error.error)))
                    );
            }
            )
        );

    //REASSIGN SELECTED COUNT
    @Effect()
    reassignSelectedCustomers$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.REASSIGN_SELECTED_CUSTOMERS),
            map((action: actions.ReassignSelectedCustomers) => action.payload),
            switchMap((state) => {
                return this.api.reassignSelectedCustomers(state)
                    .pipe(
                        map((customer) =>
                            new actions.ReassignSelectedCustomersSuccess(customer),
                        ),
                        catchError(error => of(new actions.ReassignSelectedCustomersFail(error.error)))
                    );
            }
            )
        );

    // CUSTOMER LIST
    @Effect()
    customerList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CUSTOMER_LIST),
            map((action: actions.CustomerList) => action.payload),
            switchMap((state) => {
                return this.api.customerList(state)
                    .pipe(
                        map((customer) =>
                            new actions.CustomerListSuccess(customer),
                        ),
                        catchError(error => of(new actions.CustomerListFail(error.error)))
                    );
            }
            )
        );

    //CUSTOMER LIST COUNT
    @Effect()
    customerListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CUSTOMER_LIST_COUNT),
            map((action: actions.CustomerListCount) => action.payload),
            switchMap((state) => {
                return this.api.customerListCount(state)
                    .pipe(
                        map((customer) =>
                            new actions.CustomerListCountSuccess(customer),
                        ),
                        catchError(error => of(new actions.CustomerListCountFail(error.error)))
                    );
            }
            )
        );

    // PROJECT LIST
    @Effect()
    projectList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_LIST),
            map((action: actions.ProjectList) => action.payload),
            switchMap((state) => {
                return this.api.projectList(state)
                    .pipe(
                        map((customer) =>
                            new actions.ProjectListSuccess(customer),
                        ),
                        catchError(error => of(new actions.ProjectListFail(error.error)))
                    );
            }
            )
        );

    // PROJECT AGENT LIST
    @Effect()
    projectAgentList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_AGENT_LIST),
            map((action: actions.ProjectAgentList) => action.payload),
            switchMap((state) => {
                return this.api.projectAgentList(state)
                    .pipe(
                        map((customer) =>
                            new actions.ProjectAgentListSuccess(customer),
                        ),
                        catchError(error => of(new actions.ProjectAgentListFail(error.error)))
                    );
            }
            )
        );

    // PROJECT AGENT LIST COUNT
    @Effect()
    projectAgentListCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.PROJECT_AGENT_LIST_COUNT),
            map((action: actions.ProjectAgentListCount) => action.payload),
            switchMap((state) => {
                return this.api.projectAgentListCount(state)
                    .pipe(
                        map((customer) =>
                            new actions.ProjectAgentListCountSuccess(customer),
                        ),
                        catchError(error => of(new actions.ProjectAgentListCountFail(error.error)))
                    );
            }
            )
        );
    // DID LIST
    @Effect()
    didList$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.DID_LIST),
            map((action: actions.DidList) => action.payload),
            switchMap((state) => {
                return this.api.didList(state)
                    .pipe(
                        map((customer) =>
                            new actions.DidListSuccess(customer),
                        ),
                        catchError(error => of(new actions.DidListFail(error.error)))
                    );
            }
            )
        );
    // ONLINE LEADS
    @Effect()
    onlineLeads$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.ONLINE_LEADES),
            map((action: actions.OnlineLeads) => action.payload),
            switchMap((state) => {
                return this.api.onlineLeads(state)
                    .pipe(
                        map((customer) =>
                            new actions.OnlineLeadsSuccess(customer),
                        ),
                        catchError(error => of(new actions.OnlineLeadsFail(error.error)))
                    );
            }
            )
        );
    // ONLINE LEADS COUNT
    @Effect()
    onlineLeadsCount$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.ONLINE_LEADES_COUNT),
            map((action: actions.OnlineLeadsCount) => action.payload),
            switchMap((state) => {
                return this.api.onlineLeadsCount(state)
                    .pipe(
                        map((customer) =>
                            new actions.OnlineLeadsCountSuccess(customer),
                        ),
                        catchError(error => of(new actions.OnlineLeadsCountFail(error.error)))
                    );
            }
            )
        );
    // CREATE LEADS
    @Effect()
    createLeads$: Observable<Action> = this.action$
        .pipe(
            ofType(actions.ActionTypes.CREATE_LEADS),
            map((action: actions.CreateLeads) => action.payload),
            switchMap((state) => {
                return this.api.createLeads(state)
                    .pipe(
                        map((customer) =>
                            new actions.CreateLeadsSuccess(customer),
                        ),
                        catchError(error => of(new actions.CreateLeadsFail(error.error)))
                    );
            }
            )
        );



    constructor(private action$: Actions,
        protected api: CustomersService,
        public router: Router) {
    }

}
