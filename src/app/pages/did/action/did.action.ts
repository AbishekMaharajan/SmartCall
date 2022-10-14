import { Action } from '@ngrx/store';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';
import { type } from 'src/app/shared/utility';



export const ActionTypes = {

    DID_LIST: type('[did] did list '),
    DID_LIST_SUCCESS: type('[did] did list Success'),
    DID_LIST_FAIL: type('[did] did list Fail'),

    DID_LIST_COUNT: type('[did] did list count'),
    DID_LIST_COUNT_SUCCESS: type('[did] did list count Success'),
    DID_LIST_COUNT_FAIL: type('[did] did list count Fail'),

    GET_PROJECT_LIST: type('[did] project list '),
    GET_PROJECT_LIST_SUCCESS: type('[did] project list Success'),
    GET_PROJECT_LIST_FAIL: type('[did] project list Fail'),

    ASSIGN_DID: type('[did] assign did '),
    ASSIGN_DID_SUCCESS: type('[did] assign did Success'),
    ASSIGN_DID_FAIL: type('[did] assign did Fail'),

    RELEASE_DID: type('[did] release did '),
    RELEASE_DID_SUCCESS: type('[did] release did Success'),
    RELEASE_DID_FAIL: type('[did] release did Fail'),

    ADD_DID: type('[did] add did '),
    ADD_DID_SUCCESS: type('[did] add did Success'),
    ADD_DID_FAIL: type('[did] add did Fail'),

};

// DID LIST

export class DidList implements Action {
    type = ActionTypes.DID_LIST;
    constructor(public payload: any) {
    }
}

export class DidListSuccess implements Action {
    type = ActionTypes.DID_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class DidListFail implements Action {
    type = ActionTypes.DID_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// DID LIST COUNT
export class DidListCount implements Action {
    type = ActionTypes.DID_LIST_COUNT;
    constructor(public payload: any) {
    }
}

export class DidListCountSuccess implements Action {
    type = ActionTypes.DID_LIST_COUNT_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class DidListCountFail implements Action {
    type = ActionTypes.DID_LIST_COUNT_FAIL;
    constructor(public payload: any) {
    }
}

// PROJECT LIST

export class GetProjectList implements Action {
    type = ActionTypes.GET_PROJECT_LIST;
    constructor(public payload: any) {
    }
}

export class GetProjectListSuccess implements Action {
    type = ActionTypes.GET_PROJECT_LIST_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class GetProjectListFail implements Action {
    type = ActionTypes.GET_PROJECT_LIST_FAIL;
    constructor(public payload: any) {
    }
}

// ASSIGN DID
export class AssignDid implements Action {
    type = ActionTypes.ASSIGN_DID;
    constructor(public payload: any) {
    }
}

export class AssignDidSuccess implements Action {
    type = ActionTypes.ASSIGN_DID_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class AssignDidFail implements Action {
    type = ActionTypes.ASSIGN_DID_FAIL;
    constructor(public payload: any) {
    }
}

// RELEASE DID
export class ReleaseDid implements Action {
    type = ActionTypes.RELEASE_DID;
    constructor(public payload: any) {
    }
}

export class ReleaseDidSuccess implements Action {
    type = ActionTypes.RELEASE_DID_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class ReleaseDidFail implements Action {
    type = ActionTypes.RELEASE_DID_FAIL;
    constructor(public payload: any) {
    }
}

// ADD DID
export class AddDid implements Action {
    type = ActionTypes.ADD_DID;
    constructor(public payload: any) {
    }
}

export class AddDidSuccess implements Action {
    type = ActionTypes.ADD_DID_SUCCESS;
    constructor(public payload: ResponseInterface) {
    }
}

export class AddDidFail implements Action {
    type = ActionTypes.ADD_DID_FAIL;
    constructor(public payload: any) {
    }
}


export type Actions =
    | DidList
    | DidListSuccess
    | DidListFail

    | DidListCount
    | DidListCountSuccess
    | DidListCountFail

    | GetProjectList
    | GetProjectListSuccess
    | GetProjectListFail

    | AssignDid
    | AssignDidSuccess
    | AssignDidFail

    | ReleaseDid
    | ReleaseDidSuccess
    | ReleaseDidFail

    | AddDid
    | AddDidSuccess
    | AddDidFail





