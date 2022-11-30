import { LiveMoniterState, LiveMoniterStateRecord } from './liveMoniter.state';
import * as actions from '../action/liveMoniter.action';

export const initialState: LiveMoniterState = new LiveMoniterStateRecord() as unknown as LiveMoniterState;

export function reducer(state = initialState, { type, payload }: any): LiveMoniterState {
    if (!type) {
        return state;
    }

    switch (type) {

        //  ONGOING CALL LIST
        case actions.ActionTypes.ONGOING_CALL_LIST:

            return Object.assign({}, state, {
                ongoingCallListLoading: true,
                ongoingCallListLoaded: false,
                ongoingCallListFailed: false,
            });

        case actions.ActionTypes.ONGOING_CALL_LIST_SUCCESS:

            return Object.assign({}, state, {
                ongoingCallList: payload.data,
                ongoingCallListLoading: false,
                ongoingCallListLoaded: true,
                ongoingCallListFailed: false,
            });

        case actions.ActionTypes.ONGOING_CALL_LIST_FAIL:

            return Object.assign({}, state, {
                ongoingCallListLoading: false,
                ongoingCallListLoaded: true,
                ongoingCallListFailed: true,

            });

        //  RESPONSE LIST
        case actions.ActionTypes.RESPONSE_LIST:

            return Object.assign({}, state, {
                responseListLoading: true,
                responseListLoaded: false,
                responseListFailed: false,
            });

        case actions.ActionTypes.RESPONSE_LIST_SUCCESS:

            return Object.assign({}, state, {
                responseList: payload.data,
                responseListLoading: false,
                responseListLoaded: true,
                responseListFailed: false,
            });

        case actions.ActionTypes.RESPONSE_LIST_FAIL:

            return Object.assign({}, state, {
                responseListLoading: false,
                responseListLoaded: true,
                responseListFailed: true,

            });

        //  RESPONSE LIST COUNT
        case actions.ActionTypes.RESPONSE_LIST_COUNT:

            return Object.assign({}, state, {
                responseListCountLoading: true,
                responseListCountLoaded: false,
                responseListCountFailed: false,
            });

        case actions.ActionTypes.RESPONSE_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                responseListCount: payload.data,
                responseListCountLoading: false,
                responseListCountLoaded: true,
                responseListCountFailed: false,
            });

        case actions.ActionTypes.RESPONSE_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                responseListCountLoading: false,
                responseListCountLoaded: true,
                responseListCountFailed: true,

            });

        //  CALL REPORTS
        case actions.ActionTypes.CALL_REPORTS:

            return Object.assign({}, state, {
                callReportsLoading: true,
                callReportsLoaded: false,
                callReportsFailed: false,
            });

        case actions.ActionTypes.CALL_REPORTS_SUCCESS:

            return Object.assign({}, state, {
                callReports: payload.data,
                callReportsLoading: false,
                callReportsLoaded: true,
                callReportsFailed: false,
            });

        case actions.ActionTypes.CALL_REPORTS_FAIL:

            return Object.assign({}, state, {
                callReportsLoading: false,
                callReportsLoaded: true,
                callReportsFailed: true,

            });

        //  CLICK TO CALL
        case actions.ActionTypes.CLICK_TO_CALL:

            return Object.assign({}, state, {
                clickToCallLoading: true,
                clickToCallLoaded: false,
                clickToCallFailed: false,
            });

        case actions.ActionTypes.CLICK_TO_CALL_SUCCESS:

            return Object.assign({}, state, {
                clickToCall: payload.data,
                clickToCallLoading: false,
                clickToCallLoaded: true,
                clickToCallFailed: false,
            });

        case actions.ActionTypes.CLICK_TO_CALL_FAIL:

            return Object.assign({}, state, {
                clickToCallLoading: false,
                clickToCallLoaded: true,
                clickToCallFailed: true,

            });

        //  BLOCK CUSTOMER
        case actions.ActionTypes.BLOCK_CUSTOMER:

            return Object.assign({}, state, {
                blockCustomerLoading: true,
                blockCustomerLoaded: false,
                blockCustomerFailed: false,
            });

        case actions.ActionTypes.BLOCK_CUSTOMER_SUCCESS:

            return Object.assign({}, state, {
                blockCustomer: payload,
                blockCustomerLoading: false,
                blockCustomerLoaded: true,
                blockCustomerFailed: false,
            });

        case actions.ActionTypes.BLOCK_CUSTOMER_FAIL:

            return Object.assign({}, state, {
                blockCustomerLoading: false,
                blockCustomerLoaded: true,
                blockCustomerFailed: true,

            });

        //  BARGIN
        case actions.ActionTypes.BARGIN:

            return Object.assign({}, state, {
                barginLoading: true,
                barginLoaded: false,
                barginFailed: false,
            });

        case actions.ActionTypes.BARGIN_SUCCESS:

            return Object.assign({}, state, {
                bargin: payload.data,
                barginLoading: false,
                barginLoaded: true,
                barginFailed: false,
            });

        case actions.ActionTypes.BARGIN_FAIL:

            return Object.assign({}, state, {
                barginLoading: false,
                barginLoaded: true,
                barginFailed: true,

            });

        //  CUSTOMER INFO
        case actions.ActionTypes.CUSTOMER_INFO:

            return Object.assign({}, state, {
                customerInfoLoading: true,
                customerInfoLoaded: false,
                customerInfoFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_INFO_SUCCESS:

            return Object.assign({}, state, {
                customerInfo: payload.data,
                customerInfoLoading: false,
                customerInfoLoaded: true,
                customerInfoFailed: false,
            });

        case actions.ActionTypes.CUSTOMER_INFO_FAIL:

            return Object.assign({}, state, {
                customerInfoLoading: false,
                customerInfoLoaded: true,
                customerInfoFailed: true,

            });

        //  UPDATE CUSTOMER INFO
        case actions.ActionTypes.UPADTE_CUSTOMER_INFO:

            return Object.assign({}, state, {
                updateCustomerInfoLoading: true,
                updateCustomerInfoLoaded: false,
                updateCustomerInfoFailed: false,
            });

        case actions.ActionTypes.UPADTE_CUSTOMER_INFO_SUCCESS:

            return Object.assign({}, state, {
                updateCustomerInfo: payload,
                updateCustomerInfoLoading: false,
                updateCustomerInfoLoaded: true,
                updateCustomerInfoFailed: false,
            });

        case actions.ActionTypes.UPADTE_CUSTOMER_INFO_FAIL:

            return Object.assign({}, state, {
                updateCustomerInfoLoading: false,
                updateCustomerInfoLoaded: false,
                updateCustomerInfoFailed: true,

            });

        //  TOTAL CALL LIST
        case actions.ActionTypes.TOTAL_CALL_LIST:

            return Object.assign({}, state, {
                totalCallListLoading: true,
                totalCallListLoaded: false,
                totalCallListFailed: false,
            });

        case actions.ActionTypes.TOTAL_CALL_LIST_SUCCESS:

            return Object.assign({}, state, {
                totalCallList: payload.data,
                totalCallListLoading: false,
                totalCallListLoaded: true,
                totalCallListFailed: false,
            });

        case actions.ActionTypes.TOTAL_CALL_LIST_FAIL:

            return Object.assign({}, state, {
                totalCallListLoading: false,
                totalCallListLoaded: true,
                totalCallListFailed: true,

            });

        //  PINCODE AREA LIST
        case actions.ActionTypes.AREA_LIST:

            return Object.assign({}, state, {
                pincodeAreaListLoading: true,
                pincodeAreaListLoaded: false,
                pincodeAreaListFailed: false,
            });

        case actions.ActionTypes.AREA_LIST_SUCCESS:

            return Object.assign({}, state, {
                pincodeAreaList: payload.data,
                pincodeAreaListLoading: false,
                pincodeAreaListLoaded: true,
                pincodeAreaListFailed: false,
            });

        case actions.ActionTypes.AREA_LIST_FAIL:

            return Object.assign({}, state, {
                pincodeAreaListLoading: false,
                pincodeAreaListLoaded: true,
                pincodeAreaListFailed: true,

            });

        //  MISSED CALL LIST
        case actions.ActionTypes.MISSED_CALL_LIST:

            return Object.assign({}, state, {
                missedCallListLoading: true,
                missedCallListLoaded: false,
                missedCallListFailed: false,
            });

        case actions.ActionTypes.MISSED_CALL_LIST_SUCCESS:

            return Object.assign({}, state, {
                missedCallList: payload.data,
                missedCallListLoading: false,
                missedCallListLoaded: true,
                missedCallListFailed: false,
            });

        case actions.ActionTypes.MISSED_CALL_LIST_FAIL:

            return Object.assign({}, state, {
                missedCallListLoading: false,
                missedCallListLoaded: true,
                missedCallListFailed: true,

            });

        //  MISSED CALL LIST COUNT
        case actions.ActionTypes.MISSED_CALL_LIST_COUNT:

            return Object.assign({}, state, {
                missedCallListCountLoading: true,
                missedCallListCountLoaded: false,
                missedCallListCountFailed: false,
            });

        case actions.ActionTypes.MISSED_CALL_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                missedCallListCount: payload.data,
                missedCallListCountLoading: false,
                missedCallListCountLoaded: true,
                missedCallListCountFailed: false,
            });

        case actions.ActionTypes.MISSED_CALL_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                missedCallListCountLoading: false,
                missedCallListCountLoaded: true,
                missedCallListCountFailed: true,

            });





        default: {
            return state;
        }
    }
}

/**
 * export values
 */


export const ongoingCallList = (state: LiveMoniterState) => state.ongoingCallList;
export const ongoingCallListLoading = (state: LiveMoniterState) => state.ongoingCallListLoading;
export const ongoingCallListLoaded = (state: LiveMoniterState) => state.ongoingCallListLoaded;
export const ongoingCallListFailed = (state: LiveMoniterState) => state.ongoingCallListFailed;

export const responseList = (state: LiveMoniterState) => state.responseList;
export const responseListLoading = (state: LiveMoniterState) => state.responseListLoading;
export const responseListLoaded = (state: LiveMoniterState) => state.responseListLoaded;
export const responseListFailed = (state: LiveMoniterState) => state.responseListFailed;

export const responseListCount = (state: LiveMoniterState) => state.responseListCount;
export const responseListCountLoading = (state: LiveMoniterState) => state.responseListCountLoading;
export const responseListCountLoaded = (state: LiveMoniterState) => state.responseListCountLoaded;
export const responseListCountFailed = (state: LiveMoniterState) => state.responseListCountFailed;

export const callReports = (state: LiveMoniterState) => state.callReports;
export const callReportsLoading = (state: LiveMoniterState) => state.callReportsLoading;
export const callReportsLoaded = (state: LiveMoniterState) => state.callReportsLoaded;
export const callReportsFailed = (state: LiveMoniterState) => state.callReportsFailed;

export const clickToCall = (state: LiveMoniterState) => state.clickToCall;
export const clickToCallLoading = (state: LiveMoniterState) => state.clickToCallLoading;
export const clickToCallLoaded = (state: LiveMoniterState) => state.clickToCallLoaded;
export const clickToCallFailed = (state: LiveMoniterState) => state.clickToCallFailed;

export const blockCustomer = (state: LiveMoniterState) => state.blockCustomer;
export const blockCustomerLoading = (state: LiveMoniterState) => state.blockCustomerLoading;
export const blockCustomerLoaded = (state: LiveMoniterState) => state.blockCustomerLoaded;
export const blockCustomerFailed = (state: LiveMoniterState) => state.blockCustomerFailed;

export const bargin = (state: LiveMoniterState) => state.bargin;
export const barginLoading = (state: LiveMoniterState) => state.barginLoading;
export const barginLoaded = (state: LiveMoniterState) => state.barginLoaded;
export const barginFailed = (state: LiveMoniterState) => state.barginFailed;

export const customerInfo = (state: LiveMoniterState) => state.customerInfo;
export const customerInfoLoading = (state: LiveMoniterState) => state.customerInfoLoading;
export const customerInfoLoaded = (state: LiveMoniterState) => state.customerInfoLoaded;
export const customerInfoFailed = (state: LiveMoniterState) => state.customerInfoFailed;

export const updateCustomerInfo = (state: LiveMoniterState) => state.updateCustomerInfo;
export const updateCustomerInfoLoading = (state: LiveMoniterState) => state.updateCustomerInfoLoading;
export const updateCustomerInfoLoaded = (state: LiveMoniterState) => state.updateCustomerInfoLoaded;
export const updateCustomerInfoFailed = (state: LiveMoniterState) => state.updateCustomerInfoFailed;

export const totalCallList = (state: LiveMoniterState) => state.totalCallList;
export const totalCallListLoading = (state: LiveMoniterState) => state.totalCallListLoading;
export const totalCallListLoaded = (state: LiveMoniterState) => state.totalCallListLoaded;
export const totalCallListFailed = (state: LiveMoniterState) => state.totalCallListFailed;

export const pincodeAreaList = (state: LiveMoniterState) => state.pincodeAreaList;
export const pincodeAreaListLoading = (state: LiveMoniterState) => state.pincodeAreaListLoading;
export const pincodeAreaListLoaded = (state: LiveMoniterState) => state.pincodeAreaListLoaded;
export const pincodeAreaListFailed = (state: LiveMoniterState) => state.pincodeAreaListFailed;

export const missedCallList = (state: LiveMoniterState) => state.missedCallList;
export const missedCallListLoading = (state: LiveMoniterState) => state.missedCallListLoading;
export const missedCallListLoaded = (state: LiveMoniterState) => state.missedCallListLoaded;
export const missedCallListFailed = (state: LiveMoniterState) => state.missedCallListFailed;

export const missedCallListCount = (state: LiveMoniterState) => state.missedCallListCount;
export const missedCallListCountLoading = (state: LiveMoniterState) => state.missedCallListCountLoading;
export const missedCallListCountLoaded = (state: LiveMoniterState) => state.missedCallListCountLoaded;
export const missedCallListCountFailed = (state: LiveMoniterState) => state.missedCallListCountFailed;


