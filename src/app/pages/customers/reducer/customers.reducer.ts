import { CustomersState, CustomersStateRecord } from './customers.state';
import * as actions from '../action/customers.action';

export const initialState: CustomersState = new CustomersStateRecord() as unknown as CustomersState;

export function reducer(state = initialState, { type, payload }: any): CustomersState {
    if (!type) {
        return state;
    }

    switch (type) {

        //  REASSIGN LIST
        case actions.ActionTypes.REASSIGN_LIST:

            return Object.assign({}, state, {
                reassignListLoading: true,
                reassignListLoaded: false,
                reassignListFailed: false,
            });

        case actions.ActionTypes.REASSIGN_LIST_SUCCESS:

            return Object.assign({}, state, {
                reassignList: payload.data,
                reassignListLoading: false,
                reassignListLoaded: true,
                reassignListFailed: false,
            });

        case actions.ActionTypes.REASSIGN_LIST_FAIL:

            return Object.assign({}, state, {
                reassignListLoading: false,
                reassignListLoaded: true,
                reassignListFailed: true,

            });

        //  REASSIGN COUNT
        case actions.ActionTypes.REASSIGN_LIST_COUNT:

            return Object.assign({}, state, {
                reassignListCountLoading: true,
                reassignListCountLoaded: false,
                reassignListCountFailed: false,
            });

        case actions.ActionTypes.REASSIGN_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                reassignListCount: payload.data,
                reassignListCountLoading: false,
                reassignListCountLoaded: true,
                reassignListCountFailed: false,
            });

        case actions.ActionTypes.REASSIGN_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                reassignListCountLoading: false,
                reassignListCountLoaded: true,
                reassignListCountFailed: true,

            });

        //  REASSIGN ALL CUSTOMERS
        case actions.ActionTypes.REASSIGN_ALL_CUSTOMERS:

            return Object.assign({}, state, {
                reassignAllCustomersLoading: true,
                reassignAllCustomersLoaded: false,
                reassignAllCustomersFailed: false,
            });

        case actions.ActionTypes.REASSIGN_ALL_CUSTOMERS_SUCCESS:

            return Object.assign({}, state, {
                reassignAllCustomers: payload,
                reassignAllCustomersLoading: false,
                reassignAllCustomersLoaded: true,
                reassignAllCustomersFailed: false,
            });

        case actions.ActionTypes.REASSIGN_ALL_CUSTOMERS_FAIL:

            return Object.assign({}, state, {
                reassignAllCustomersLoading: false,
                reassignAllCustomersLoaded: true,
                reassignAllCustomersFailed: true,

            });


        //  REASSIGN SELECTED CUSTOMERS
        case actions.ActionTypes.REASSIGN_SELECTED_CUSTOMERS:

            return Object.assign({}, state, {
                reassignSelectedCustomersLoading: true,
                reassignSelectedCustomersLoaded: false,
                reassignSelectedCustomersFailed: false,
            });

        case actions.ActionTypes.REASSIGN_SELECTED_CUSTOMERS_SUCCESS:

            return Object.assign({}, state, {
                reassignSelectedCustomers: payload,
                reassignSelectedCustomersLoading: false,
                reassignSelectedCustomersLoaded: true,
                reassignSelectedCustomersFailed: false,
            });

        case actions.ActionTypes.REASSIGN_SELECTED_CUSTOMERS_FAIL:

            return Object.assign({}, state, {
                reassignSelectedCustomersLoading: false,
                reassignSelectedCustomersLoaded: true,
                reassignSelectedCustomersFailed: true,

            });

        //  CUSTOMER LIST
        case actions.ActionTypes.CUSTOMER_LIST:

            return Object.assign({}, state, {
                customerListLoading: true,
                customerListLoaded: false,
                customerListFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_LIST_SUCCESS:

            return Object.assign({}, state, {
                customerList: payload.data,
                customerListLoading: false,
                customerListLoaded: true,
                customerListFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_LIST_FAIL:

            return Object.assign({}, state, {
                customerListLoading: false,
                customerListLoaded: true,
                customerListFailed: true,

            });

        //  CUSTOMER COUNT
        case actions.ActionTypes.CUSTOMER_LIST_COUNT:

            return Object.assign({}, state, {
                customerListCountLoading: true,
                customerListCountLoaded: false,
                customerListCountFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                customerListCount: payload.data,
                customerListCountLoading: false,
                customerListCountLoaded: true,
                customerListCountFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                customerListCountLoading: false,
                customerListCountLoaded: true,
                customerListCountFailed: true,

            });


        //  PROJECT LIST
        case actions.ActionTypes.PROJECT_LIST:

            return Object.assign({}, state, {
                projectListLoading: true,
                projectListLoaded: false,
                projectListFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_SUCCESS:

            return Object.assign({}, state, {
                projectList: payload.data,
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_FAIL:

            return Object.assign({}, state, {
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: true,

            });

        //  PROJECT AGENT LIST
        case actions.ActionTypes.PROJECT_AGENT_LIST:

            return Object.assign({}, state, {
                projectAgentList: [],
                projectAgentListLoading: true,
                projectAgentListLoaded: false,
                projectAgentListFailed: false,
            });

        case actions.ActionTypes.PROJECT_AGENT_LIST_SUCCESS:

            return Object.assign({}, state, {
                projectAgentList: payload.data,
                projectAgentListLoading: false,
                projectAgentListLoaded: true,
                projectAgentListFailed: false,
            });

        case actions.ActionTypes.PROJECT_AGENT_LIST_FAIL:

            return Object.assign({}, state, {
                projectAgentListLoading: false,
                projectAgentListLoaded: true,
                projectAgentListFailed: true,

            });

        //  PROJECT AGENT LIST COUNT
        case actions.ActionTypes.PROJECT_AGENT_LIST_COUNT:

            return Object.assign({}, state, {
                projectAgentListCountLoading: true,
                projectAgentListCountLoaded: false,
                projectAgentListCountFailed: false,
            });

        case actions.ActionTypes.PROJECT_AGENT_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                projectAgentListCount: payload.data,
                projectAgentListCountLoading: false,
                projectAgentListCountLoaded: true,
                projectAgentListCountFailed: false,
            });

        case actions.ActionTypes.PROJECT_AGENT_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                projectAgentListCountLoading: false,
                projectAgentListCountLoaded: true,
                projectAgentListCountFailed: true,

            });


        //  PROJECT AGENT LIST COUNT
        case actions.ActionTypes.CLEAR_PROJECT_AGENT_LIST:

            return Object.assign({}, state, {
                projectAgentList: [],
                projectAgentListLoading: false,
                projectAgentListLoaded: false,
                projectAgentListFailed: false,

                projectAgentListCount: 0,
                projectAgentListCountLoading: false,
                projectAgentListCountLoaded: false,
                projectAgentListCountFailed: false,
            });



        default: {
            return state;
        }
    }
}

/**
 * export values
 */


export const reassignList = (state: CustomersState) => state.reassignList;
export const reassignListLoading = (state: CustomersState) => state.reassignListLoading;
export const reassignListLoaded = (state: CustomersState) => state.reassignListLoaded;
export const reassignListFailed = (state: CustomersState) => state.reassignListFailed;

export const reassignListCount = (state: CustomersState) => state.reassignListCount;
export const reassignListCountLoading = (state: CustomersState) => state.reassignListCountLoading;
export const reassignListCountLoaded = (state: CustomersState) => state.reassignListCountLoaded;
export const reassignListCountFailed = (state: CustomersState) => state.reassignListCountFailed;

export const reassignAllCustomers = (state: CustomersState) => state.reassignAllCustomers;
export const reassignAllCustomersLoading = (state: CustomersState) => state.reassignAllCustomersLoading;
export const reassignAllCustomersLoaded = (state: CustomersState) => state.reassignAllCustomersLoaded;
export const reassignAllCustomersFailed = (state: CustomersState) => state.reassignAllCustomersFailed;

export const reassignSelectedCustomers = (state: CustomersState) => state.reassignSelectedCustomers;
export const reassignSelectedCustomersLoading = (state: CustomersState) => state.reassignSelectedCustomersLoading;
export const reassignSelectedCustomersLoaded = (state: CustomersState) => state.reassignSelectedCustomersLoaded;
export const reassignSelectedCustomersFailed = (state: CustomersState) => state.reassignSelectedCustomersFailed;

export const customerList = (state: CustomersState) => state.customerList;
export const customerListLoading = (state: CustomersState) => state.customerListLoading;
export const customerListLoaded = (state: CustomersState) => state.customerListLoaded;
export const customerListFailed = (state: CustomersState) => state.customerListFailed;

export const customerListCount = (state: CustomersState) => state.customerListCount;
export const customerListCountLoading = (state: CustomersState) => state.customerListCountLoading;
export const customerListCountLoaded = (state: CustomersState) => state.customerListCountLoaded;
export const customerListCountFailed = (state: CustomersState) => state.customerListCountFailed;

export const projectList = (state: CustomersState) => state.projectList;
export const projectListLoading = (state: CustomersState) => state.projectListLoading;
export const projectListLoaded = (state: CustomersState) => state.projectListLoaded;
export const projectListFailed = (state: CustomersState) => state.projectListFailed;

export const projectAgentList = (state: CustomersState) => state.projectAgentList;
export const projectAgentListLoading = (state: CustomersState) => state.projectAgentListLoading;
export const projectAgentListLoaded = (state: CustomersState) => state.projectAgentListLoaded;
export const projectAgentListFailed = (state: CustomersState) => state.projectAgentListFailed;

export const projectAgentListCount = (state: CustomersState) => state.projectAgentListCount;
export const projectAgentListCountLoading = (state: CustomersState) => state.projectAgentListCountLoading;
export const projectAgentListCountLoaded = (state: CustomersState) => state.projectAgentListCountLoaded;
export const projectAgentListCountFailed = (state: CustomersState) => state.projectAgentListCountFailed;
