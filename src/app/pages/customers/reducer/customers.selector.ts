import { createSelector } from 'reselect';
import * as customersReducer from '../../customers/reducer/customers.reducer';
import { AppState } from 'src/app/app.state';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getCustomersState = (state: AppState) => state.customer;

export const reassignList = createSelector(getCustomersState, customersReducer.reassignList);
export const reassignListLoading = createSelector(getCustomersState, customersReducer.reassignListLoading);
export const reassignListLoaded = createSelector(getCustomersState, customersReducer.reassignListLoaded);
export const reassignListFailed = createSelector(getCustomersState, customersReducer.reassignListFailed);

export const reassignListCount = createSelector(getCustomersState, customersReducer.reassignListCount);
export const reassignListCountLoading = createSelector(getCustomersState, customersReducer.reassignListCountLoading);
export const reassignListCountLoaded = createSelector(getCustomersState, customersReducer.reassignListCountLoaded);
export const reassignListCountFailed = createSelector(getCustomersState, customersReducer.reassignListCountFailed);

export const reassignAllCustomers = createSelector(getCustomersState, customersReducer.reassignAllCustomers);
export const reassignAllCustomersLoading = createSelector(getCustomersState, customersReducer.reassignAllCustomersLoading);
export const reassignAllCustomersLoaded = createSelector(getCustomersState, customersReducer.reassignAllCustomersLoaded);
export const reassignAllCustomersFailed = createSelector(getCustomersState, customersReducer.reassignAllCustomersFailed);

export const reassignSelectedCustomers = createSelector(getCustomersState, customersReducer.reassignSelectedCustomers);
export const reassignSelectedCustomersLoading = createSelector(getCustomersState, customersReducer.reassignSelectedCustomersLoading);
export const reassignSelectedCustomersLoaded = createSelector(getCustomersState, customersReducer.reassignSelectedCustomersLoaded);
export const reassignSelectedCustomersFailed = createSelector(getCustomersState, customersReducer.reassignSelectedCustomersFailed);

export const customerList = createSelector(getCustomersState, customersReducer.customerList);
export const customerListLoading = createSelector(getCustomersState, customersReducer.customerListLoading);
export const customerListLoaded = createSelector(getCustomersState, customersReducer.customerListLoaded);
export const customerListFailed = createSelector(getCustomersState, customersReducer.customerListFailed);

export const customerListCount = createSelector(getCustomersState, customersReducer.customerListCount);
export const customerListCountLoading = createSelector(getCustomersState, customersReducer.customerListCountLoading);
export const customerListCountLoaded = createSelector(getCustomersState, customersReducer.customerListCountLoaded);
export const customerListCountFailed = createSelector(getCustomersState, customersReducer.customerListCountFailed);

export const projectList = createSelector(getCustomersState, customersReducer.projectList);
export const projectListLoading = createSelector(getCustomersState, customersReducer.projectListLoading);
export const projectListLoaded = createSelector(getCustomersState, customersReducer.projectListLoaded);
export const projectListFailed = createSelector(getCustomersState, customersReducer.projectListFailed);

export const projectAgentList = createSelector(getCustomersState, customersReducer.projectAgentList);
export const projectAgentListLoading = createSelector(getCustomersState, customersReducer.projectAgentListLoading);
export const projectAgentListLoaded = createSelector(getCustomersState, customersReducer.projectAgentListLoaded);
export const projectAgentListFailed = createSelector(getCustomersState, customersReducer.projectAgentListFailed);

export const projectAgentListCount = createSelector(getCustomersState, customersReducer.projectAgentListCount);
export const projectAgentListCountLoading = createSelector(getCustomersState, customersReducer.projectAgentListCountLoading);
export const projectAgentListCountLoaded = createSelector(getCustomersState, customersReducer.projectAgentListCountLoaded);
export const projectAgentListCountFailed = createSelector(getCustomersState, customersReducer.projectAgentListCountFailed);

export const didList = createSelector(getCustomersState, customersReducer.didList);
export const didListLoading = createSelector(getCustomersState, customersReducer.didListLoading);
export const didListLoaded = createSelector(getCustomersState, customersReducer.didListLoaded);
export const didListFailed = createSelector(getCustomersState, customersReducer.didListFailed);

export const onlineLeads = createSelector(getCustomersState, customersReducer.onlineLeads);
export const onlineLeadsLoading = createSelector(getCustomersState, customersReducer.onlineLeadsLoading);
export const onlineLeadsLoaded = createSelector(getCustomersState, customersReducer.onlineLeadsLoaded);
export const onlineLeadsFailed = createSelector(getCustomersState, customersReducer.onlineLeadsFailed);

export const onlineLeadsCount = createSelector(getCustomersState, customersReducer.onlineLeadsCount);
export const onlineLeadsCountLoading = createSelector(getCustomersState, customersReducer.onlineLeadsCountLoading);
export const onlineLeadsCountLoaded = createSelector(getCustomersState, customersReducer.onlineLeadsCountLoaded);
export const onlineLeadsCountFailed = createSelector(getCustomersState, customersReducer.onlineLeadsCountFailed);

export const createLeads = createSelector(getCustomersState, customersReducer.createLeads);
export const createLeadsLoading = createSelector(getCustomersState, customersReducer.createLeadsLoading);
export const createLeadsLoaded = createSelector(getCustomersState, customersReducer.createLeadsLoaded);
export const createLeadsFailed = createSelector(getCustomersState, customersReducer.createLeadsFailed);

