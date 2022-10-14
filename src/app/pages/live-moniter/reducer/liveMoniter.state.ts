import { Map, Record } from 'immutable';

export interface LiveMoniterState extends Map<string, any> {

    ongoingCallList: any;
    ongoingCallListLoading: boolean;
    ongoingCallListLoaded: boolean;
    ongoingCallListFailed: boolean;

    responseList: any;
    responseListLoading: boolean;
    responseListLoaded: boolean;
    responseListFailed: boolean;

    responseListCount: any;
    responseListCountLoading: boolean;
    responseListCountLoaded: boolean;
    responseListCountFailed: boolean;

    callReports: any;
    callReportsLoading: boolean;
    callReportsLoaded: boolean;
    callReportsFailed: boolean;

    clickToCall: any;
    clickToCallLoading: boolean;
    clickToCallLoaded: boolean;
    clickToCallFailed: boolean;

    blockCustomer: any;
    blockCustomerLoading: boolean;
    blockCustomerLoaded: boolean;
    blockCustomerFailed: boolean;

    bargin: any;
    barginLoading: boolean;
    barginLoaded: boolean;
    barginFailed: boolean;

    customerInfo: any;
    customerInfoLoading: boolean;
    customerInfoLoaded: boolean;
    customerInfoFailed: boolean;

    updateCustomerInfo: any;
    updateCustomerInfoLoading: boolean;
    updateCustomerInfoLoaded: boolean;
    updateCustomerInfoFailed: boolean;

    totalCallList: any;
    totalCallListLoading: boolean;
    totalCallListLoaded: boolean;
    totalCallListFailed: boolean;

    pincodeAreaList: any;
    pincodeAreaListLoading: boolean;
    pincodeAreaListLoaded: boolean;
    pincodeAreaListFailed: boolean;



}

export const LiveMoniterStateRecord = Record({

    ongoingCallList: [],
    ongoingCallListLoading: false,
    ongoingCallListLoaded: false,
    ongoingCallListFailed: false,

    responseList: [],
    responseListLoading: false,
    responseListLoaded: false,
    responseListFailed: false,

    responseListCount: 0,
    responseListCountLoading: false,
    responseListCountLoaded: false,
    responseListCountFailed: false,

    callReports: [],
    callReportsLoading: false,
    callReportsLoaded: false,
    callReportsFailed: false,

    clickToCall: [],
    clickToCallLoading: false,
    clickToCallLoaded: false,
    clickToCallFailed: false,

    blockCustomer: [],
    blockCustomerLoading: false,
    blockCustomerLoaded: false,
    blockCustomerFailed: false,

    bargin: [],
    barginLoading: false,
    barginLoaded: false,
    barginFailed: false,

    customerInfo: [],
    customerInfoLoading: false,
    customerInfoLoaded: false,
    customerInfoFailed: false,

    updateCustomerInfo: {},
    updateCustomerInfoLoading: false,
    updateCustomerInfoLoaded: false,
    updateCustomerInfoFailed: false,

    totalCallList: [],
    totalCallListLoading: false,
    totalCallListLoaded: false,
    totalCallListFailed: false,

    pincodeAreaList: [],
    pincodeAreaListLoading: false,
    pincodeAreaListLoaded: false,
    pincodeAreaListFailed: false,

});

