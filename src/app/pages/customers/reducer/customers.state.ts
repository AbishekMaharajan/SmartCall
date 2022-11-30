import { Map, Record } from 'immutable';

export interface CustomersState extends Map<string, any> {

    reassignList: any;
    reassignListLoading: boolean;
    reassignListLoaded: boolean;
    reassignListFailed: boolean;

    reassignListCount: any;
    reassignListCountLoading: boolean;
    reassignListCountLoaded: boolean;
    reassignListCountFailed: boolean;

    reassignAllCustomers: any;
    reassignAllCustomersLoading: boolean;
    reassignAllCustomersLoaded: boolean;
    reassignAllCustomersFailed: boolean;

    reassignSelectedCustomers: any;
    reassignSelectedCustomersLoading: boolean;
    reassignSelectedCustomersLoaded: boolean;
    reassignSelectedCustomersFailed: boolean;

    customerList: any;
    customerListLoading: boolean;
    customerListLoaded: boolean;
    customerListFailed: boolean;

    customerListCount: any;
    customerListCountLoading: boolean;
    customerListCountLoaded: boolean;
    customerListCountFailed: boolean;

    projectList: any;
    projectListLoading: boolean;
    projectListLoaded: boolean;
    projectListFailed: boolean;

    projectAgentList: any;
    projectAgentListLoading: boolean;
    projectAgentListLoaded: boolean;
    projectAgentListFailed: boolean;

    projectAgentListCount: any;
    projectAgentListCountLoading: boolean;
    projectAgentListCountLoaded: boolean;
    projectAgentListCountFailed: boolean;

    didList: any;
    didListLoading: boolean;
    didListLoaded: boolean;
    didListFailed: boolean;

    onlineLeads: any;
    onlineLeadsLoading: boolean;
    onlineLeadsLoaded: boolean;
    onlineLeadsFailed: boolean;

    onlineLeadsCount: any;
    onlineLeadsCountLoading: boolean;
    onlineLeadsCountLoaded: boolean;
    onlineLeadsCountFailed: boolean;

    createLeads: any;
    createLeadsLoading: boolean;
    createLeadsLoaded: boolean;
    createLeadsFailed: boolean;
}

export const CustomersStateRecord = Record({

    reassignList: [],
    reassignListLoading: false,
    reassignListLoaded: false,
    reassignListFailed: false,

    reassignListCount: 0,
    reassignListCountLoading: false,
    reassignListCountLoaded: false,
    reassignListCountFailed: false,

    reassignAllCustomers: {},
    reassignAllCustomersLoading: false,
    reassignAllCustomersLoaded: false,
    reassignAllCustomersFailed: false,

    reassignSelectedCustomers: {},
    reassignSelectedCustomersLoading: false,
    reassignSelectedCustomersLoaded: false,
    reassignSelectedCustomersFailed: false,

    customerList: [],
    customerListLoading: false,
    customerListLoaded: false,
    customerListFailed: false,

    customerListCount: 0,
    customerListCountLoading: false,
    customerListCountLoaded: false,
    customerListCountFailed: false,

    projectList: [],
    projectListLoading: false,
    projectListLoaded: false,
    projectListFailed: false,

    projectAgentList: [],
    projectAgentListLoading: false,
    projectAgentListLoaded: false,
    projectAgentListFailed: false,

    projectAgentListCount: 0,
    projectAgentListCountLoading: false,
    projectAgentListCountLoaded: false,
    projectAgentListCountFailed: false,

    didList: [],
    didListLoading: false,
    didListLoaded: false,
    didListFailed: false,

    onlineLeads: [],
    onlineLeadsLoading: false,
    onlineLeadsLoaded: false,
    onlineLeadsFailed: false,

    onlineLeadsCount: 0,
    onlineLeadsCountLoading: false,
    onlineLeadsCountLoaded: false,
    onlineLeadsCountFailed: false,

    createLeads: {},
    createLeadsLoading: false,
    createLeadsLoaded: false,
    createLeadsFailed: false,

});

