import { Action } from '@ngrx/store';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';
import { type } from 'src/app/shared/utility';



export const ActionTypes = {


    USER_LIST: type('[user] user list '),
    USER_LIST_SUCCESS: type('[user] user list Success'),
    USER_LIST_FAIL: type('[user] user list Fail'),

    USER_LIST_COUNT: type('[user] user list count '),
    USER_LIST_COUNT_SUCCESS: type('[user] user list count Success'),
    USER_LIST_COUNT_FAIL: type('[user] user list count Fail'),

    CREATE_USER: type('[user] Create user '),
    CREATE_USER_SUCCESS: type('[user] Create user Success'),
    CREATE_USER_FAIL: type('[user] Create user Fail'),

    FETCH_UPDATE_DATA: type('[user] fetch update data '),
    FETCH_UPDATE_DATA_SUCCESS: type('[user] fetch update data Success'),
    FETCH_UPDATE_DATA_FAIL: type('[user] fetch update data Fail'),

    UPDATE_USER: type('[user] update user '),
    UPDATE_USER_SUCCESS: type('[user] update user Success'),
    UPDATE_USER_FAIL: type('[user] update user Fail'),

    DELETE_USER: type('[user] delete user '),
    DELETE_USER_SUCCESS: type('[user] delete user Success'),
    DELETE_USER_FAIL: type('[user] delete user Fail'),

    USER_TYPE: type('[user] user type '),
    USER_TYPE_SUCCESS: type('[user] user type Success'),
    USER_TYPE_FAIL: type('[user] user type Fail'),

    PHONE_TYPE: type('[user]phone type '),
    PHONE_TYPE_SUCCESS: type('[user]phone type Success'),
    PHONE_TYPE_FAIL: type('[user]phone type Fail'),

    REPORTING: type('[user] reporting '),
    REPORTING_SUCCESS: type('[user] reporting Success'),
    REPORTING_FAIL: type('[user] reporting Fail'),

    CALL_AVAILABILITY: type('[user] CALL_AVAILABILITY '),
    CALL_AVAILABILITY_SUCCESS: type('[user] CALL_AVAILABILITY Success'),
    CALL_AVAILABILITY_FAIL: type('[user] CALL_AVAILABILITY Fail'),

    CHANGE_ACTIVE_STATUS: type('[user] CHANGE_ACTIVE_STATUS '),
    CHANGE_ACTIVE_STATUS_SUCCESS: type('[user] CHANGE_ACTIVE_STATUS Success'),
    CHANGE_ACTIVE_STATUS_FAIL: type('[user] CHANGE_ACTIVE_STATUS Fail'),

    AGENT_LIST: type('[user] AGENT_LIST '),
    AGENT_LIST_SUCCESS: type('[user] AGENT_LIST Success'),
    AGENT_LIST_FAIL: type('[user] AGENT_LIST Fail'),

    MAPPING_LIST: type('[user] MAPPING_LIST '),
    MAPPING_LIST_SUCCESS: type('[user] MAPPING_LIST Success'),
    MAPPING_LIST_FAIL: type('[user] MAPPING_LIST Fail'),

    PROJECT_MAPPING: type('[user] PROJECT_MAPPING '),
    PROJECT_MAPPING_SUCCESS: type('[user] PROJECT_MAPPING Success'),
    PROJECT_MAPPING_FAIL: type('[user] PROJECT_MAPPING Fail'),

    STATUS_TRACKER_LIST: type('[user] STATUS_TRACKER_LIST '),
    STATUS_TRACKER_LIST_SUCCESS: type('[user] STATUS_TRACKER_LIST Success'),
    STATUS_TRACKER_LIST_FAIL: type('[user] STATUS_TRACKER_LIST Fail'),

    STATUS_TRACKER_LIST_COUNT: type('[user] STATUS_TRACKER_LIST_COUNT '),
    STATUS_TRACKER_LIST_COUNT_SUCCESS: type('[user] STATUS_TRACKER_LIST_COUNT Success'),
    STATUS_TRACKER_LIST_COUNT_FAIL: type('[user] STATUS_TRACKER_LIST_COUNT Fail'),

    MAPPING_HISTORY: type('[user] MAPPING_HISTORY '),
    MAPPING_HISTORY_SUCCESS: type('[user] MAPPING_HISTORY Success'),
    MAPPING_HISTORY_FAIL: type('[user] MAPPING_HISTORY Fail'),

    BLOCKED_CUSTOMER: type('[user] BLOCKED_CUSTOMER '),
    BLOCKED_CUSTOMER_SUCCESS: type('[user] BLOCKED_CUSTOMER Success'),
    BLOCKED_CUSTOMER_FAIL: type('[user] BLOCKED_CUSTOMER Fail'),

    BLOCKED_CUSTOMER_COUNT: type('[user] BLOCKED_CUSTOMER_COUNT '),
    BLOCKED_CUSTOMER_COUNT_SUCCESS: type('[user] BLOCKED_CUSTOMER_COUNT Success'),
    BLOCKED_CUSTOMER_COUNT_FAIL: type('[user] BLOCKED_CUSTOMER_COUNT Fail'),

    REASSIGN_BLOCKED_CUSTOMER: type('[user] REASSIGN_BLOCKED_CUSTOMER '),
    REASSIGN_BLOCKED_CUSTOMER_SUCCESS: type('[user] REASSIGN_BLOCKED_CUSTOMER Success'),
    REASSIGN_BLOCKED_CUSTOMER_FAIL: type('[user] REASSIGN_BLOCKED_CUSTOMER Fail'),

};

// USER LIST

export class UserList implements Action {
    type = ActionTypes.USER_LIST;

    constructor(public payload: any) {
    }
}

export class UserListSuccess implements Action {
    type = ActionTypes.USER_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UserListFail implements Action {
    type = ActionTypes.USER_LIST_FAIL;

    constructor(public payload: any) {
    }
}

// USER LIST COUNT
export class UserListCount implements Action {
    type = ActionTypes.USER_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class UserListCountSuccess implements Action {
    type = ActionTypes.USER_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UserListCountFail implements Action {
    type = ActionTypes.USER_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

// CREATE USERS
export class CreateUser implements Action {
    type = ActionTypes.CREATE_USER;

    constructor(public payload: any) {
    }
}

export class CreateUserSuccess implements Action {
    type = ActionTypes.CREATE_USER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CreateUserFail implements Action {
    type = ActionTypes.CREATE_USER_FAIL;

    constructor(public payload: any) {
    }
}
// FETCH UPDATE DATE
export class FetchUpdateData implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA;

    constructor(public payload: any) {
    }
}

export class FetchUpdateDataSuccess implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class FetchUpdateDataFail implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA_FAIL;

    constructor(public payload: any) {
    }
}
// UPDATE USER
export class UpdateUser implements Action {
    type = ActionTypes.UPDATE_USER;

    constructor(public payload: any) {
    }
}

export class UpdateUserSuccess implements Action {
    type = ActionTypes.UPDATE_USER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UpdateUserFail implements Action {
    type = ActionTypes.UPDATE_USER_FAIL;

    constructor(public payload: any) {
    }
}

// DELETE USER
export class DeleteUser implements Action {
    type = ActionTypes.DELETE_USER;

    constructor(public payload: any) {
    }
}

export class DeleteUserSuccess implements Action {
    type = ActionTypes.DELETE_USER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class DeleteUserFail implements Action {
    type = ActionTypes.DELETE_USER_FAIL;

    constructor(public payload: any) {
    }
}

//  USER TYPE
export class UserType implements Action {
    type = ActionTypes.USER_TYPE;

    constructor(public payload: any) {
    }
}

export class UserTypeSuccess implements Action {
    type = ActionTypes.USER_TYPE_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UserTypeFail implements Action {
    type = ActionTypes.USER_TYPE_FAIL;

    constructor(public payload: any) {
    }
}

//  PHONE TYPE
export class PhoneType implements Action {
    type = ActionTypes.PHONE_TYPE;

    constructor(public payload: any) {
    }
}

export class PhoneTypeSuccess implements Action {
    type = ActionTypes.PHONE_TYPE_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class PhoneTypeFail implements Action {
    type = ActionTypes.PHONE_TYPE_FAIL;

    constructor(public payload: any) {
    }
}

//  REPORTING
export class Reporting implements Action {
    type = ActionTypes.REPORTING;

    constructor(public payload: any) {
    }
}

export class ReportingSuccess implements Action {
    type = ActionTypes.REPORTING_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReportingFail implements Action {
    type = ActionTypes.REPORTING_FAIL;

    constructor(public payload: any) {
    }
}

//  CALL AVAILABILITY
export class CallAvailability implements Action {
    type = ActionTypes.CALL_AVAILABILITY;

    constructor(public payload: any) {
    }
}

export class CallAvailabilitySuccess implements Action {
    type = ActionTypes.CALL_AVAILABILITY_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CallAvailabilityFail implements Action {
    type = ActionTypes.CALL_AVAILABILITY_FAIL;

    constructor(public payload: any) {
    }
}

//  CHANGE ACTIVE STATUS
export class ChangeActiveStatus implements Action {
    type = ActionTypes.CHANGE_ACTIVE_STATUS;

    constructor(public payload: any) {
    }
}

export class ChangeActiveStatusSuccess implements Action {
    type = ActionTypes.CHANGE_ACTIVE_STATUS_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ChangeActiveStatusFail implements Action {
    type = ActionTypes.CHANGE_ACTIVE_STATUS_FAIL;

    constructor(public payload: any) {
    }
}

//  AGENT LIST
export class AgentList implements Action {
    type = ActionTypes.AGENT_LIST;

    constructor(public payload: any) {
    }
}

export class AgentListSuccess implements Action {
    type = ActionTypes.AGENT_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class AgentListFail implements Action {
    type = ActionTypes.AGENT_LIST_FAIL;

    constructor(public payload: any) {
    }
}

//  MAPPING LIST
export class MappingList implements Action {
    type = ActionTypes.MAPPING_LIST;

    constructor(public payload: any) {
    }
}

export class MappingListSuccess implements Action {
    type = ActionTypes.MAPPING_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class MappingListFail implements Action {
    type = ActionTypes.MAPPING_LIST_FAIL;

    constructor(public payload: any) {
    }
}

//  PROJECT MAPPING 
export class ProjectMapping implements Action {
    type = ActionTypes.PROJECT_MAPPING;

    constructor(public payload: any) {
    }
}

export class ProjectMappingSuccess implements Action {
    type = ActionTypes.PROJECT_MAPPING_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectMappingFail implements Action {
    type = ActionTypes.PROJECT_MAPPING_FAIL;

    constructor(public payload: any) {
    }
}
//  STATUS TRACKER LIST
export class StatusTrackerList implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST;

    constructor(public payload: any) {
    }
}

export class StatusTrackerListSuccess implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class StatusTrackerListFail implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST_FAIL;

    constructor(public payload: any) {
    }
}
//  STATUS TRACKER LIST COUNT
export class StatusTrackerListCount implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class StatusTrackerListCountSuccess implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class StatusTrackerListCountFail implements Action {
    type = ActionTypes.STATUS_TRACKER_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

//  MAPPING HISTORY
export class MappingHistory implements Action {
    type = ActionTypes.MAPPING_HISTORY;

    constructor(public payload: any) {
    }
}

export class MappingHistorySuccess implements Action {
    type = ActionTypes.MAPPING_HISTORY_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class MappingHistoryFail implements Action {
    type = ActionTypes.MAPPING_HISTORY_FAIL;

    constructor(public payload: any) {
    }
}

//  BLOCKED CUSTOMER LIST
export class GetBlockedCustomer implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER;

    constructor(public payload: any) {
    }
}

export class GetBlockedCustomerSuccess implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class GetBlockedCustomerFail implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER_FAIL;

    constructor(public payload: any) {
    }
}
//  BLOCKED CUSTOMER COUNT
export class GetBlockedCustomerCount implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER_COUNT;

    constructor(public payload: any) {
    }
}

export class GetBlockedCustomerCountSuccess implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class GetBlockedCustomerCountFail implements Action {
    type = ActionTypes.BLOCKED_CUSTOMER_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

// REASSIGN BLOCKED CUSTOMER 
export class ReassignBlocked implements Action {
    type = ActionTypes.REASSIGN_BLOCKED_CUSTOMER;

    constructor(public payload: any) {
    }
}

export class ReassignBlockedSuccess implements Action {
    type = ActionTypes.REASSIGN_BLOCKED_CUSTOMER_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReassignBlockedFail implements Action {
    type = ActionTypes.REASSIGN_BLOCKED_CUSTOMER_FAIL;

    constructor(public payload: any) {
    }
}


export type Actions =
    | UserList
    | UserListSuccess
    | UserListFail

    | UserListCount
    | UserListCountSuccess
    | UserListCountFail

    | CreateUser
    | CreateUserSuccess
    | CreateUserFail

    | FetchUpdateData
    | FetchUpdateDataSuccess
    | FetchUpdateDataFail

    | UpdateUser
    | UpdateUserSuccess
    | UpdateUserFail

    | DeleteUser
    | DeleteUserSuccess
    | DeleteUserFail

    | UserType
    | UserTypeSuccess
    | UserTypeFail

    | PhoneType
    | PhoneTypeSuccess
    | PhoneTypeFail

    | Reporting
    | ReportingSuccess
    | ReportingFail

    | CallAvailability
    | CallAvailabilitySuccess
    | CallAvailabilityFail

    | ChangeActiveStatus
    | ChangeActiveStatusSuccess
    | ChangeActiveStatusFail

    | AgentList
    | AgentListSuccess
    | AgentListFail

    | MappingList
    | MappingListSuccess
    | MappingListFail

    | ProjectMapping
    | ProjectMappingSuccess
    | ProjectMappingFail

    | StatusTrackerList
    | StatusTrackerListSuccess
    | StatusTrackerListFail

    | StatusTrackerListCount
    | StatusTrackerListCountSuccess
    | StatusTrackerListCountFail

    | MappingHistory
    | MappingHistorySuccess
    | MappingHistoryFail

    | GetBlockedCustomer
    | GetBlockedCustomerSuccess
    | GetBlockedCustomerFail

    | GetBlockedCustomerCount
    | GetBlockedCustomerCountSuccess
    | GetBlockedCustomerCountFail

    | ReassignBlocked
    | ReassignBlockedSuccess
    | ReassignBlockedFail





