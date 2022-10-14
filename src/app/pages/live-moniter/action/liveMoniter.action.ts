import { Action } from '@ngrx/store';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';
import { type } from 'src/app/shared/utility';



export const ActionTypes = {


    ONGOING_CALL_LIST: type('ONGOING_CALL_LIST '),
    ONGOING_CALL_LIST_SUCCESS: type('ONGOING_CALL_LIST Success'),
    ONGOING_CALL_LIST_FAIL: type('ONGOING_CALL_LIST Fail'),

    RESPONSE_LIST: type('RESPONSE_LIST '),
    RESPONSE_LIST_SUCCESS: type('RESPONSE_LIST Success'),
    RESPONSE_LIST_FAIL: type('RESPONSE_LIST Fail'),

    RESPONSE_LIST_COUNT: type('RESPONSE_LIST_COUNT '),
    RESPONSE_LIST_COUNT_SUCCESS: type('RESPONSE_LIST_COUNT Success'),
    RESPONSE_LIST_COUNT_FAIL: type('RESPONSE_LIST_COUNT Fail'),

    CALL_REPORTS: type('CALL_REPORTS '),
    CALL_REPORTS_SUCCESS: type('CALL_REPORTS Success'),
    CALL_REPORTS_FAIL: type('CALL_REPORTS Fail'),

    CLICK_TO_CALL: type('CLICK_TO_CALL '),
    CLICK_TO_CALL_SUCCESS: type('CLICK_TO_CALL Success'),
    CLICK_TO_CALL_FAIL: type('CLICK_TO_CALL Fail'),

    BLOCK_CUSTOMER: type('BLOCK_CUSTOMER '),
    BLOCK_CUSTOMER_SUCCESS: type('BLOCK_CUSTOMER Success'),
    BLOCK_CUSTOMER_FAIL: type('BLOCK_CUSTOMER Fail'),

    BARGIN: type('BARGIN '),
    BARGIN_SUCCESS: type('BARGIN Success'),
    BARGIN_FAIL: type('BARGIN Fail'),

    CUSTOMER_INFO: type('CUSTOMER_INFO '),
    CUSTOMER_INFO_SUCCESS: type('CUSTOMER_INFO Success'),
    CUSTOMER_INFO_FAIL: type('CUSTOMER_INFO Fail'),

    UPADTE_CUSTOMER_INFO: type('UPADTE_CUSTOMER_INFO '),
    UPADTE_CUSTOMER_INFO_SUCCESS: type('UPADTE_CUSTOMER_INFO Success'),
    UPADTE_CUSTOMER_INFO_FAIL: type('UPADTE_CUSTOMER_INFO Fail'),

    TOTAL_CALL_LIST: type('TOTAL_CALL_LIST '),
    TOTAL_CALL_LIST_SUCCESS: type('TOTAL_CALL_LIST Success'),
    TOTAL_CALL_LIST_FAIL: type('TOTAL_CALL_LIST Fail'),

    AREA_LIST: type('AREA_LIST '),
    AREA_LIST_SUCCESS: type('AREA_LIST Success'),
    AREA_LIST_FAIL: type('AREA_LIST Fail'),

};

// ONGOING CALL  LIST

export class OngoingCallList implements Action {
    type = ActionTypes.ONGOING_CALL_LIST;

    constructor(public payload: any) {
    }
}

export class OngoingCallListSuccess implements Action {
    type = ActionTypes.ONGOING_CALL_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class OngoingCallListFail implements Action {
    type = ActionTypes.ONGOING_CALL_LIST_FAIL;

    constructor(public payload: any) {
    }
}

//  RESPONSE LIST

export class ResponseList implements Action {
    type = ActionTypes.RESPONSE_LIST;

    constructor(public payload: any) {
    }
}

export class ResponseListSuccess implements Action {
    type = ActionTypes.RESPONSE_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ResponseListFail implements Action {
    type = ActionTypes.RESPONSE_LIST_FAIL;

    constructor(public payload: any) {
    }
}
//  RESPONSE LIST COUNT

export class ResponseListCount implements Action {
    type = ActionTypes.RESPONSE_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class ResponseListCountSuccess implements Action {
    type = ActionTypes.RESPONSE_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ResponseListCountFail implements Action {
    type = ActionTypes.RESPONSE_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

//  CALL REPORTS

export class CallReports implements Action {
    type = ActionTypes.CALL_REPORTS;

    constructor(public payload: any) {
    }
}

export class CallReportsSuccess implements Action {
    type = ActionTypes.CALL_REPORTS_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CallReportsFail implements Action {
    type = ActionTypes.CALL_REPORTS_FAIL;

    constructor(public payload: any) {
    }
}

//  CLICK TO CALL

export class ClickToCall implements Action {
    type = ActionTypes.CLICK_TO_CALL;

    constructor(public payload: any) {
    }
}

export class ClickToCallSuccess implements Action {
    type = ActionTypes.CLICK_TO_CALL_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ClickToCallFail implements Action {
    type = ActionTypes.CLICK_TO_CALL_FAIL;

    constructor(public payload: any) {
    }
}

//  BLOCK CUSTOMERS

export class BlockCustomer implements Action {
    type = ActionTypes.BLOCK_CUSTOMER;

    constructor(public payload: any) {
    }
}

export class BlockCustomerSuccess implements Action {
    type = ActionTypes.BLOCK_CUSTOMER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class BlockCustomerFail implements Action {
    type = ActionTypes.BLOCK_CUSTOMER_FAIL;

    constructor(public payload: any) {
    }
}

//  BARGIN

export class Bargin implements Action {
    type = ActionTypes.BARGIN;

    constructor(public payload: any) {
    }
}

export class BarginSuccess implements Action {
    type = ActionTypes.BARGIN_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class BarginFail implements Action {
    type = ActionTypes.BARGIN_FAIL;

    constructor(public payload: any) {
    }
}

//  CUSTOMER INFO

export class CustomerInfo implements Action {
    type = ActionTypes.CUSTOMER_INFO;

    constructor(public payload: any) {
    }
}

export class CustomerInfoSuccess implements Action {
    type = ActionTypes.CUSTOMER_INFO_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CustomerInfoFail implements Action {
    type = ActionTypes.CUSTOMER_INFO_FAIL;

    constructor(public payload: any) {
    }
}

//  UPDATE CUSTOMER

export class UpdateCustomer implements Action {
    type = ActionTypes.UPADTE_CUSTOMER_INFO;

    constructor(public payload: any) {
    }
}

export class UpdateCustomerSuccess implements Action {
    type = ActionTypes.UPADTE_CUSTOMER_INFO_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UpdateCustomerFail implements Action {
    type = ActionTypes.UPADTE_CUSTOMER_INFO_FAIL;

    constructor(public payload: any) {
    }
}

//  TOTAL CALL LIST

export class TotalCallList implements Action {
    type = ActionTypes.TOTAL_CALL_LIST;

    constructor(public payload: any) {
    }
}

export class TotalCallListSuccess implements Action {
    type = ActionTypes.TOTAL_CALL_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class TotalCallListFail implements Action {
    type = ActionTypes.TOTAL_CALL_LIST_FAIL;

    constructor(public payload: any) {
    }
}

//  PINCODE AREA

export class PincodeArea implements Action {
    type = ActionTypes.AREA_LIST;

    constructor(public payload: any) {
    }
}

export class PincodeAreaSuccess implements Action {
    type = ActionTypes.AREA_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class PincodeAreaFail implements Action {
    type = ActionTypes.AREA_LIST_FAIL;

    constructor(public payload: any) {
    }
}



export type Actions =
    | OngoingCallList
    | OngoingCallListSuccess
    | OngoingCallListFail

    | ResponseList
    | ResponseListSuccess
    | ResponseListFail

    | ResponseListCount
    | ResponseListCountSuccess
    | ResponseListCountFail

    | CallReports
    | CallReportsSuccess
    | CallReportsFail

    | ClickToCall
    | ClickToCallSuccess
    | ClickToCallFail

    | BlockCustomer
    | BlockCustomerSuccess
    | BlockCustomerFail

    | Bargin
    | BarginSuccess
    | BarginFail

    | CustomerInfo
    | CustomerInfoSuccess
    | CustomerInfoFail

    | UpdateCustomer
    | UpdateCustomerSuccess
    | UpdateCustomerFail

    | TotalCallList
    | TotalCallListSuccess
    | TotalCallListFail

    | PincodeArea
    | PincodeAreaSuccess
    | PincodeAreaFail






