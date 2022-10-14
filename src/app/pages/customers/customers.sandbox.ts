import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';
import * as CustomersActions from './action/customers.action';
import {
    reassignList, reassignListLoading, reassignListLoaded, reassignListFailed,
    reassignListCount, reassignListCountLoading, reassignListCountLoaded, reassignListCountFailed,
    reassignAllCustomers, reassignAllCustomersLoading, reassignAllCustomersLoaded, reassignAllCustomersFailed,
    reassignSelectedCustomers, reassignSelectedCustomersLoading, reassignSelectedCustomersLoaded, reassignSelectedCustomersFailed,
    customerList, customerListLoading, customerListLoaded, customerListFailed,
    customerListCount, customerListCountLoading, customerListCountLoaded, customerListCountFailed,
    projectList, projectListLoading, projectListLoaded, projectListFailed,
    projectAgentList, projectAgentListLoading, projectAgentListLoaded, projectAgentListFailed,
    projectAgentListCount, projectAgentListCountLoading, projectAgentListCountLoaded, projectAgentListCountFailed,

} from './reducer/customers.selector';


@Injectable()
export class CustomersSandbox {

    public reassignList$ = this.appState.select(reassignList);
    public reassignListLoading$ = this.appState.select(reassignListLoading);
    public reassignListLoaded$ = this.appState.select(reassignListLoaded);
    public reassignListFailed$ = this.appState.select(reassignListFailed);

    public reassignListCount$ = this.appState.select(reassignListCount);
    public reassignListCountLoading$ = this.appState.select(reassignListCountLoading);
    public reassignListCountLoaded$ = this.appState.select(reassignListCountLoaded);
    public reassignListCountFailed$ = this.appState.select(reassignListCountFailed);

    public reassignAllCustomers$ = this.appState.select(reassignAllCustomers);
    public reassignAllCustomersLoading$ = this.appState.select(reassignAllCustomersLoading);
    public reassignAllCustomersLoaded$ = this.appState.select(reassignAllCustomersLoaded);
    public reassignAllCustomersFailed$ = this.appState.select(reassignAllCustomersFailed);

    public reassignSelectedCustomers$ = this.appState.select(reassignSelectedCustomers);
    public reassignSelectedCustomersLoading$ = this.appState.select(reassignSelectedCustomersLoading);
    public reassignSelectedCustomersLoaded$ = this.appState.select(reassignSelectedCustomersLoaded);
    public reassignSelectedCustomersFailed$ = this.appState.select(reassignSelectedCustomersFailed);

    public customerList$ = this.appState.select(customerList);
    public customerListLoading$ = this.appState.select(customerListLoading);
    public customerListLoaded$ = this.appState.select(customerListLoaded);
    public customerListFailed$ = this.appState.select(customerListFailed);

    public customerListCount$ = this.appState.select(customerListCount);
    public customerListCountLoading$ = this.appState.select(customerListCountLoading);
    public customerListCountLoaded$ = this.appState.select(customerListCountLoaded);
    public customerListCountFailed$ = this.appState.select(customerListCountFailed);

    public projectList$ = this.appState.select(projectList);
    public projectListLoading$ = this.appState.select(projectListLoading);
    public projectListLoaded$ = this.appState.select(projectListLoaded);
    public projectListFailed$ = this.appState.select(projectListFailed);

    public projectAgentList$ = this.appState.select(projectAgentList);
    public projectAgentListLoading$ = this.appState.select(projectAgentListLoading);
    public projectAgentListLoaded$ = this.appState.select(projectAgentListLoaded);
    public projectAgentListFailed$ = this.appState.select(projectAgentListFailed);

    public projectAgentListCount$ = this.appState.select(projectAgentListCount);
    public projectAgentListCountLoading$ = this.appState.select(projectAgentListCountLoading);
    public projectAgentListCountLoaded$ = this.appState.select(projectAgentListCountLoaded);
    public projectAgentListCountFailed$ = this.appState.select(projectAgentListCountFailed);

    constructor(protected appState: Store<store.AppState>) {
    }

    public reassignList(params) {
        this.appState.dispatch(new CustomersActions.ReassignList(params));
    }

    public reassignListCount(params) {
        this.appState.dispatch(new CustomersActions.ReassignListCount(params));
    }

    public reassignAllCustomers(params) {
        this.appState.dispatch(new CustomersActions.ReassignAllCustomers(params));
    }

    public reassignSelectedCustomers(params) {
        this.appState.dispatch(new CustomersActions.ReassignSelectedCustomers(params));
    }

    public customerList(params) {
        this.appState.dispatch(new CustomersActions.CustomerList(params));
    }

    public customerListCount(params) {
        this.appState.dispatch(new CustomersActions.CustomerListCount(params));
    }

    public projectList(params) {
        this.appState.dispatch(new CustomersActions.ProjectList(params));
    }

    public projectAgentList(params) {
        this.appState.dispatch(new CustomersActions.ProjectAgentList(params));
    }

    public projectAgentListCount(params) {
        this.appState.dispatch(new CustomersActions.ProjectAgentListCount(params));
    }
    public clearProjectAgentList() {
        this.appState.dispatch(new CustomersActions.ClearProjectAgentList(''));
    }
}

