import { createSelector } from 'reselect';
import * as liveMoniterReducer from '../../live-moniter/reducer/liveMoniter.reducer';
import { AppState } from 'src/app/app.state';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getLiveMoniterState = (state: AppState) => state.liveMoniter;

export const ongoingCallList = createSelector(getLiveMoniterState, liveMoniterReducer.ongoingCallList);
export const ongoingCallListLoading = createSelector(getLiveMoniterState, liveMoniterReducer.ongoingCallListLoading);
export const ongoingCallListLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.ongoingCallListLoaded);
export const ongoingCallListFailed = createSelector(getLiveMoniterState, liveMoniterReducer.ongoingCallListFailed);

export const responseList = createSelector(getLiveMoniterState, liveMoniterReducer.responseList);
export const responseListLoading = createSelector(getLiveMoniterState, liveMoniterReducer.responseListLoading);
export const responseListLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.responseListLoaded);
export const responseListFailed = createSelector(getLiveMoniterState, liveMoniterReducer.responseListFailed);

export const responseListCount = createSelector(getLiveMoniterState, liveMoniterReducer.responseListCount);
export const responseListCountLoading = createSelector(getLiveMoniterState, liveMoniterReducer.responseListCountLoading);
export const responseListCountLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.responseListCountLoaded);
export const responseListCountFailed = createSelector(getLiveMoniterState, liveMoniterReducer.responseListCountFailed);

export const callReports = createSelector(getLiveMoniterState, liveMoniterReducer.callReports);
export const callReportsLoading = createSelector(getLiveMoniterState, liveMoniterReducer.callReportsLoading);
export const callReportsLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.callReportsLoaded);
export const callReportsFailed = createSelector(getLiveMoniterState, liveMoniterReducer.callReportsFailed);

export const clickToCall = createSelector(getLiveMoniterState, liveMoniterReducer.clickToCall);
export const clickToCallLoading = createSelector(getLiveMoniterState, liveMoniterReducer.clickToCallLoading);
export const clickToCallLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.clickToCallLoaded);
export const clickToCallFailed = createSelector(getLiveMoniterState, liveMoniterReducer.clickToCallFailed);

export const blockCustomer = createSelector(getLiveMoniterState, liveMoniterReducer.blockCustomer);
export const blockCustomerLoading = createSelector(getLiveMoniterState, liveMoniterReducer.blockCustomerLoading);
export const blockCustomerLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.blockCustomerLoaded);
export const blockCustomerFailed = createSelector(getLiveMoniterState, liveMoniterReducer.blockCustomerFailed);

export const bargin = createSelector(getLiveMoniterState, liveMoniterReducer.bargin);
export const barginLoading = createSelector(getLiveMoniterState, liveMoniterReducer.barginLoading);
export const barginLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.barginLoaded);
export const barginFailed = createSelector(getLiveMoniterState, liveMoniterReducer.barginFailed);

export const customerInfo = createSelector(getLiveMoniterState, liveMoniterReducer.customerInfo);
export const customerInfoLoading = createSelector(getLiveMoniterState, liveMoniterReducer.customerInfoLoading);
export const customerInfoLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.customerInfoLoaded);
export const customerInfoFailed = createSelector(getLiveMoniterState, liveMoniterReducer.customerInfoFailed);

export const updateCustomerInfo = createSelector(getLiveMoniterState, liveMoniterReducer.updateCustomerInfo);
export const updateCustomerInfoLoading = createSelector(getLiveMoniterState, liveMoniterReducer.updateCustomerInfoLoading);
export const updateCustomerInfoLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.updateCustomerInfoLoaded);
export const updateCustomerInfoFailed = createSelector(getLiveMoniterState, liveMoniterReducer.updateCustomerInfoFailed);

export const totalCallList = createSelector(getLiveMoniterState, liveMoniterReducer.totalCallList);
export const totalCallListLoading = createSelector(getLiveMoniterState, liveMoniterReducer.totalCallListLoading);
export const totalCallListLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.totalCallListLoaded);
export const totalCallListFailed = createSelector(getLiveMoniterState, liveMoniterReducer.totalCallListFailed);

export const pincodeAreaList = createSelector(getLiveMoniterState, liveMoniterReducer.pincodeAreaList);
export const pincodeAreaListLoading = createSelector(getLiveMoniterState, liveMoniterReducer.pincodeAreaListLoading);
export const pincodeAreaListLoaded = createSelector(getLiveMoniterState, liveMoniterReducer.pincodeAreaListLoaded);
export const pincodeAreaListFailed = createSelector(getLiveMoniterState, liveMoniterReducer.pincodeAreaListFailed);

