import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../app.state';
import * as CommonActions from './action/common.action';
import {
    exportList, exportListLoading, exportListLoaded, exportListFailed,
    monthwiseCallCount, monthwiseCallCountLoading, monthwiseCallCountLoaded, monthwiseCallCountFailed,
} from './reducer/common.selector';


@Injectable()
export class CommonSandbox {

    public exportList$ = this.appState.select(exportList);
    public exportListLoading$ = this.appState.select(exportListLoading);
    public exportListLoaded$ = this.appState.select(exportListLoaded);
    public exportListFailed$ = this.appState.select(exportListFailed);

    public monthwiseCallCount$ = this.appState.select(monthwiseCallCount);
    public monthwiseCallCountLoading$ = this.appState.select(monthwiseCallCountLoading);
    public monthwiseCallCountLoaded$ = this.appState.select(monthwiseCallCountLoaded);
    public monthwiseCallCountFailed$ = this.appState.select(monthwiseCallCountFailed);

    constructor(protected appState: Store<store.AppState>) {
    }
    public export(params) {
        this.appState.dispatch(new CommonActions.ExportList(params));
    }
    public monthWiseCall(params) {
        this.appState.dispatch(new CommonActions.MonthWiseCall(params));
    }
    public clearFunc(params) {
        this.appState.dispatch(new CommonActions.ClearFunc(params));
    }


}
