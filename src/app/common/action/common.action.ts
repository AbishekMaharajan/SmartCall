import { Action } from '@ngrx/store';
import { type } from '../../shared/utility';
import { ResponseInterface } from '../../shared/interfaces/interface';

export const ActionTypes = {

    EXPORT_LIST: type('[EXPORT] export list '),
    EXPORT_LIST_SUCCESS: type('[EXPORT] export list Success'),
    EXPORT_LIST_FAIL: type('[EXPORT] export list Fail'),

    MONTHWISE_CALL: type('[EXPORT] monthwise call '),
    MONTHWISE_CALL_SUCCESS: type('[EXPORT] monthwise call Success'),
    MONTHWISE_CALL_FAIL: type('[EXPORT] monthwise call Fail'),

    FOLLOWUP_LIST: type('[EXPORT] followup list '),
    FOLLOWUP_LIST_SUCCESS: type('[EXPORT] followup list Success'),
    FOLLOWUP_LIST_FAIL: type('[EXPORT] followup list Fail'),

    TODAYS_CALL_COUNT: type('[EXPORT] todays call count '),
    TODAYS_CALL_COUNT_SUCCESS: type('[EXPORT] todays call count Success'),
    TODAYS_CALL_COUNT_FAIL: type('[EXPORT] todays call count Fail'),

    GET_CHART_DATA: type('[EXPORT] get chart data '),
    GET_CHART_DATA_SUCCESS: type('[EXPORT] get chart data Success'),
    GET_CHART_DATA_FAIL: type('[EXPORT] get chart data Fail'),

    CLEAR_FUNC: type('[CLEAR_FUNC] clear monthwise call '),

};

// Export
export class ExportList implements Action {
    type = ActionTypes.EXPORT_LIST;

    constructor(public payload: any) {
    }
}

export class ExportListSuccess implements Action {
    type = ActionTypes.EXPORT_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ExportListFail implements Action {
    type = ActionTypes.EXPORT_LIST_FAIL;

    constructor(public payload: any) {
    }
}
// Monthwise call count
export class MonthWiseCall implements Action {
    type = ActionTypes.MONTHWISE_CALL;

    constructor(public payload: any) {
    }
}


export class MonthWiseCallSuccess implements Action {
    type = ActionTypes.MONTHWISE_CALL_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class MonthWiseCallFail implements Action {
    type = ActionTypes.MONTHWISE_CALL_FAIL;

    constructor(public payload: any) {
    }
}
// Clear Monthwise call count
export class ClearFunc implements Action {
    type = ActionTypes.CLEAR_FUNC;

    constructor(public payload: any) {
    }
}

// followup list
export class FollowupList implements Action {
    type = ActionTypes.FOLLOWUP_LIST;

    constructor(public payload: any) {
    }
}


export class FollowupListSuccess implements Action {
    type = ActionTypes.FOLLOWUP_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class FollowupListFail implements Action {
    type = ActionTypes.FOLLOWUP_LIST_FAIL;

    constructor(public payload: any) {
    }
}
// todays call count
export class TodaysCallCount implements Action {
    type = ActionTypes.TODAYS_CALL_COUNT;

    constructor(public payload: any) {
    }
}


export class TodaysCallCountSuccess implements Action {
    type = ActionTypes.TODAYS_CALL_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class TodaysCallCountFail implements Action {
    type = ActionTypes.TODAYS_CALL_COUNT_FAIL;

    constructor(public payload: any) {
    }
}
// get chart data
export class GetChartData implements Action {
    type = ActionTypes.GET_CHART_DATA;

    constructor(public payload: any) {
    }
}


export class GetChartDataSuccess implements Action {
    type = ActionTypes.GET_CHART_DATA_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class GetChartDataFail implements Action {
    type = ActionTypes.GET_CHART_DATA_FAIL;

    constructor(public payload: any) {
    }
}

export type Actions =
    | ExportList
    | ExportListSuccess
    | ExportListFail

    | MonthWiseCall
    | MonthWiseCallSuccess
    | MonthWiseCallFail

    | ClearFunc

    | FollowupList
    | FollowupListSuccess
    | FollowupListFail

    | TodaysCallCount
    | TodaysCallCountSuccess
    | TodaysCallCountFail

    | GetChartData
    | GetChartDataSuccess
    | GetChartDataFail


