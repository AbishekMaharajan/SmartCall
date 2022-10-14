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

export type Actions =
    | ExportList
    | ExportListSuccess
    | ExportListFail

    | MonthWiseCall
    | MonthWiseCallSuccess
    | MonthWiseCallFail

    | ClearFunc

