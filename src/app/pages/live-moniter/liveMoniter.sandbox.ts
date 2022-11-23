import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';
import * as LiveMoniterActions from './action/liveMoniter.action';
import {
    ongoingCallList, ongoingCallListLoading, ongoingCallListLoaded, ongoingCallListFailed,
    responseList, responseListLoading, responseListLoaded, responseListFailed,
    responseListCount, responseListCountLoading, responseListCountLoaded, responseListCountFailed,
    callReports, callReportsLoading, callReportsLoaded, callReportsFailed,
    clickToCall, clickToCallLoading, clickToCallLoaded, clickToCallFailed,
    blockCustomer, blockCustomerLoading, blockCustomerLoaded, blockCustomerFailed,
    bargin, barginLoading, barginLoaded, barginFailed,
    customerInfo, customerInfoLoading, customerInfoLoaded, customerInfoFailed,
    updateCustomerInfo, updateCustomerInfoLoading, updateCustomerInfoLoaded, updateCustomerInfoFailed,
    totalCallList, totalCallListLoading, totalCallListLoaded, totalCallListFailed,
    pincodeAreaList, pincodeAreaListLoading, pincodeAreaListLoaded, pincodeAreaListFailed,
    missedCallList, missedCallListLoading, missedCallListLoaded, missedCallListFailed,
    missedCallListCount, missedCallListCountLoading, missedCallListCountLoaded, missedCallListCountFailed,

} from './reducer/liveMoniter.selector';


@Injectable()
export class LiveMoniterSandbox {

    public ongoingCallList$ = this.appState.select(ongoingCallList);
    public ongoingCallListLoading$ = this.appState.select(ongoingCallListLoading);
    public ongoingCallListLoaded$ = this.appState.select(ongoingCallListLoaded);
    public ongoingCallListFailed$ = this.appState.select(ongoingCallListFailed);

    public responseList$ = this.appState.select(responseList);
    public responseListLoading$ = this.appState.select(responseListLoading);
    public responseListLoaded$ = this.appState.select(responseListLoaded);
    public responseListFailed$ = this.appState.select(responseListFailed);

    public responseListCount$ = this.appState.select(responseListCount);
    public responseListCountLoading$ = this.appState.select(responseListCountLoading);
    public responseListCountLoaded$ = this.appState.select(responseListCountLoaded);
    public responseListCountFailed$ = this.appState.select(responseListCountFailed);

    public callReports$ = this.appState.select(callReports);
    public callReportsLoading$ = this.appState.select(callReportsLoading);
    public callReportsLoaded$ = this.appState.select(callReportsLoaded);
    public callReportsFailed$ = this.appState.select(callReportsFailed);

    public clickToCall$ = this.appState.select(clickToCall);
    public clickToCallLoading$ = this.appState.select(clickToCallLoading);
    public clickToCallLoaded$ = this.appState.select(clickToCallLoaded);
    public clickToCallFailed$ = this.appState.select(clickToCallFailed);

    public blockCustomer$ = this.appState.select(blockCustomer);
    public blockCustomerLoading$ = this.appState.select(blockCustomerLoading);
    public blockCustomerLoaded$ = this.appState.select(blockCustomerLoaded);
    public blockCustomerFailed$ = this.appState.select(blockCustomerFailed);

    public bargin$ = this.appState.select(bargin);
    public barginLoading$ = this.appState.select(barginLoading);
    public barginLoaded$ = this.appState.select(barginLoaded);
    public barginFailed$ = this.appState.select(barginFailed);

    public customerInfo$ = this.appState.select(customerInfo);
    public customerInfoLoading$ = this.appState.select(customerInfoLoading);
    public customerInfoLoaded$ = this.appState.select(customerInfoLoaded);
    public customerInfoFailed$ = this.appState.select(customerInfoFailed);

    public updateCustomerInfo$ = this.appState.select(updateCustomerInfo);
    public updateCustomerInfoLoading$ = this.appState.select(updateCustomerInfoLoading);
    public updateCustomerInfoLoaded$ = this.appState.select(updateCustomerInfoLoaded);
    public updateCustomerInfoFailed$ = this.appState.select(updateCustomerInfoFailed);

    public totalCallList$ = this.appState.select(totalCallList);
    public totalCallListLoading$ = this.appState.select(totalCallListLoading);
    public totalCallListLoaded$ = this.appState.select(totalCallListLoaded);
    public totalCallListFailed$ = this.appState.select(totalCallListFailed);

    public pincodeAreaList$ = this.appState.select(pincodeAreaList);
    public pincodeAreaListLoading$ = this.appState.select(pincodeAreaListLoading);
    public pincodeAreaListLoaded$ = this.appState.select(pincodeAreaListLoaded);
    public pincodeAreaListFailed$ = this.appState.select(pincodeAreaListFailed);

    public missedCallList$ = this.appState.select(missedCallList);
    public missedCallListLoading$ = this.appState.select(missedCallListLoading);
    public missedCallListLoaded$ = this.appState.select(missedCallListLoaded);
    public missedCallListFailed$ = this.appState.select(missedCallListFailed);

    public missedCallListCount$ = this.appState.select(missedCallListCount);
    public missedCallListCountLoading$ = this.appState.select(missedCallListCountLoading);
    public missedCallListCountLoaded$ = this.appState.select(missedCallListCountLoaded);
    public missedCallListCountFailed$ = this.appState.select(missedCallListCountFailed);



    constructor(protected appState: Store<store.AppState>) {
    }

    public ongoingCallList(params) {
        this.appState.dispatch(new LiveMoniterActions.OngoingCallList(params));
    }
    public responseList(params) {
        this.appState.dispatch(new LiveMoniterActions.ResponseList(params));
    }

    public responseListCount(params) {
        this.appState.dispatch(new LiveMoniterActions.ResponseListCount(params));
    }
    public callReports(params) {
        this.appState.dispatch(new LiveMoniterActions.CallReports(params));
    }

    public clickToCall(params) {
        this.appState.dispatch(new LiveMoniterActions.ClickToCall(params));
    }
    public blockCustomer(params) {
        this.appState.dispatch(new LiveMoniterActions.BlockCustomer(params));
    }

    public bargin(params) {
        this.appState.dispatch(new LiveMoniterActions.Bargin(params));
    }

    public customerInfo(params) {
        this.appState.dispatch(new LiveMoniterActions.CustomerInfo(params));
    }

    public updateCustomer(params) {
        this.appState.dispatch(new LiveMoniterActions.UpdateCustomer(params));
    }

    public totalCallList(params) {
        this.appState.dispatch(new LiveMoniterActions.TotalCallList(params));
    }

    public pincodeArea(params) {
        this.appState.dispatch(new LiveMoniterActions.PincodeArea(params));
    }
    public missedCallList(params) {
        this.appState.dispatch(new LiveMoniterActions.MissedCallList(params));
    }

    public missedCallListCount(params) {
        this.appState.dispatch(new LiveMoniterActions.MissedCallListCount(params));
    }

}

