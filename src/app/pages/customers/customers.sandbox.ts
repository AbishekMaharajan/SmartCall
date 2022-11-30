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
    didList, didListLoading, didListLoaded, didListFailed,
    onlineLeads, onlineLeadsLoading, onlineLeadsLoaded, onlineLeadsFailed,
    onlineLeadsCount, onlineLeadsCountLoading, onlineLeadsCountLoaded, onlineLeadsCountFailed,
    createLeads, createLeadsLoading, createLeadsLoaded, createLeadsFailed,

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

    public didList$ = this.appState.select(didList);
    public didListLoading$ = this.appState.select(didListLoading);
    public didListLoaded$ = this.appState.select(didListLoaded);
    public didListFailed$ = this.appState.select(didListFailed);

    public onlineLeads$ = this.appState.select(onlineLeads);
    public onlineLeadsLoading$ = this.appState.select(onlineLeadsLoading);
    public onlineLeadsLoaded$ = this.appState.select(onlineLeadsLoaded);
    public onlineLeadsFailed$ = this.appState.select(onlineLeadsFailed);

    public onlineLeadsCount$ = this.appState.select(onlineLeadsCount);
    public onlineLeadsCountLoading$ = this.appState.select(onlineLeadsCountLoading);
    public onlineLeadsCountLoaded$ = this.appState.select(onlineLeadsCountLoaded);
    public onlineLeadsCountFailed$ = this.appState.select(onlineLeadsCountFailed);

    public createLeads$ = this.appState.select(createLeads);
    public createLeadsLoading$ = this.appState.select(createLeadsLoading);
    public createLeadsLoaded$ = this.appState.select(createLeadsLoaded);
    public createLeadsFailed$ = this.appState.select(createLeadsFailed);




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

    public didList(params) {
        this.appState.dispatch(new CustomersActions.DidList(params));
    }
    public onlineLeads(params) {
        this.appState.dispatch(new CustomersActions.OnlineLeads(params));
    }
    public onlineLeadsCount(params) {
        this.appState.dispatch(new CustomersActions.OnlineLeadsCount(params));
    }
    public createLeads(params) {
        this.appState.dispatch(new CustomersActions.CreateLeads(params));
    }
}

