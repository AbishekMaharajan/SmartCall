import { Action } from '@ngrx/store';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';
import { type } from 'src/app/shared/utility';



export const ActionTypes = {


    REASSIGN_LIST: type('[customer] reassign list '),
    REASSIGN_LIST_SUCCESS: type('[customer] reassign list Success'),
    REASSIGN_LIST_FAIL: type('[customer] reassign list Fail'),

    REASSIGN_LIST_COUNT: type('[customer] reassign list count '),
    REASSIGN_LIST_COUNT_SUCCESS: type('[customer] reassign list count Success'),
    REASSIGN_LIST_COUNT_FAIL: type('[customer] reassign list count Fail'),

    REASSIGN_ALL_CUSTOMERS: type('[customer] reassign all customers '),
    REASSIGN_ALL_CUSTOMERS_SUCCESS: type('[customer] reassign all customers Success'),
    REASSIGN_ALL_CUSTOMERS_FAIL: type('[customer] reassign all customers Fail'),

    REASSIGN_SELECTED_CUSTOMERS: type('[customer] reassign selected customers '),
    REASSIGN_SELECTED_CUSTOMERS_SUCCESS: type('[customer] reassign selected customers Success'),
    REASSIGN_SELECTED_CUSTOMERS_FAIL: type('[customer] reassign selected customers Fail'),

    CUSTOMER_LIST: type('[customer] customer list '),
    CUSTOMER_LIST_SUCCESS: type('[customer] customer list Success'),
    CUSTOMER_LIST_FAIL: type('[customer] customer list Fail'),

    CUSTOMER_LIST_COUNT: type('[customer] customer list count '),
    CUSTOMER_LIST_COUNT_SUCCESS: type('[customer] customer list count Success'),
    CUSTOMER_LIST_COUNT_FAIL: type('[customer] customer list count Fail'),


    PROJECT_LIST: type('[customer] project list '),
    PROJECT_LIST_SUCCESS: type('[customer] project list Success'),
    PROJECT_LIST_FAIL: type('[customer] project list Fail'),

    PROJECT_AGENT_LIST: type('[customer] project agent list '),
    PROJECT_AGENT_LIST_SUCCESS: type('[customer] project agent list Success'),
    PROJECT_AGENT_LIST_FAIL: type('[customer] project agent list Fail'),

    PROJECT_AGENT_LIST_COUNT: type('[customer] project agent list count '),
    PROJECT_AGENT_LIST_COUNT_SUCCESS: type('[customer] project agent list count Success'),
    PROJECT_AGENT_LIST_COUNT_FAIL: type('[customer] project agent list count Fail'),

    DID_LIST: type('[customer] did list '),
    DID_LIST_SUCCESS: type('[customer] did list Success'),
    DID_LIST_FAIL: type('[customer] did list Fail'),

    ONLINE_LEADES: type('[customer] online leads '),
    ONLINE_LEADES_SUCCESS: type('[customer] online leads Success'),
    ONLINE_LEADES_FAIL: type('[customer] online leads Fail'),

    ONLINE_LEADES_COUNT: type('[customer] online leads count '),
    ONLINE_LEADES_COUNT_SUCCESS: type('[customer] online leads count Success'),
    ONLINE_LEADES_COUNT_FAIL: type('[customer] online leads count Fail'),

    CREATE_LEADS: type('[customer] createLeads '),
    CREATE_LEADS_SUCCESS: type('[customer] createLeads Success'),
    CREATE_LEADS_FAIL: type('[customer] createLeads Fail'),

    CLEAR_PROJECT_AGENT_LIST: type('[customer] clear project agent list '),

};

// REASSIGN LIST

export class ReassignList implements Action {
    type = ActionTypes.REASSIGN_LIST;

    constructor(public payload: any) {
    }
}

export class ReassignListSuccess implements Action {
    type = ActionTypes.REASSIGN_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReassignListFail implements Action {
    type = ActionTypes.REASSIGN_LIST_FAIL;

    constructor(public payload: any) {
    }
}

// REASSIGN LIST COUNT
export class ReassignListCount implements Action {
    type = ActionTypes.REASSIGN_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class ReassignListCountSuccess implements Action {
    type = ActionTypes.REASSIGN_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReassignListCountFail implements Action {
    type = ActionTypes.REASSIGN_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

// REASSIGN ALL CUSTOMERS
export class ReassignAllCustomers implements Action {
    type = ActionTypes.REASSIGN_ALL_CUSTOMERS;

    constructor(public payload: any) {
    }
}

export class ReassignAllCustomersSuccess implements Action {
    type = ActionTypes.REASSIGN_ALL_CUSTOMERS_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReassignAllCustomersFail implements Action {
    type = ActionTypes.REASSIGN_ALL_CUSTOMERS_FAIL;

    constructor(public payload: any) {
    }
}

// REASSIGN SELECTED CUSTOMERS
export class ReassignSelectedCustomers implements Action {
    type = ActionTypes.REASSIGN_SELECTED_CUSTOMERS;

    constructor(public payload: any) {
    }
}

export class ReassignSelectedCustomersSuccess implements Action {
    type = ActionTypes.REASSIGN_SELECTED_CUSTOMERS_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ReassignSelectedCustomersFail implements Action {
    type = ActionTypes.REASSIGN_SELECTED_CUSTOMERS_FAIL;

    constructor(public payload: any) {
    }
}


// CUSTOMER LIST

export class CustomerList implements Action {
    type = ActionTypes.CUSTOMER_LIST;

    constructor(public payload: any) {
    }
}

export class CustomerListSuccess implements Action {
    type = ActionTypes.CUSTOMER_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CustomerListFail implements Action {
    type = ActionTypes.CUSTOMER_LIST_FAIL;

    constructor(public payload: any) {
    }
}


// CUSTOMER LIST COUNT
export class CustomerListCount implements Action {
    type = ActionTypes.CUSTOMER_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class CustomerListCountSuccess implements Action {
    type = ActionTypes.CUSTOMER_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CustomerListCountFail implements Action {
    type = ActionTypes.CUSTOMER_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}


// PROJECT LIST

export class ProjectList implements Action {
    type = ActionTypes.PROJECT_LIST;

    constructor(public payload: any) {
    }
}

export class ProjectListSuccess implements Action {
    type = ActionTypes.PROJECT_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectListFail implements Action {
    type = ActionTypes.PROJECT_LIST_FAIL;

    constructor(public payload: any) {
    }
}

// PROJECT AGENT LIST

export class ProjectAgentList implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST;

    constructor(public payload: any) {
    }
}

export class ProjectAgentListSuccess implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectAgentListFail implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST_FAIL;

    constructor(public payload: any) {
    }
}

// PROJECT AGENT LIST COUNT

export class ProjectAgentListCount implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class ProjectAgentListCountSuccess implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectAgentListCountFail implements Action {
    type = ActionTypes.PROJECT_AGENT_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}



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

// ONLINE LEADES 

export class OnlineLeads implements Action {
    type = ActionTypes.ONLINE_LEADES;

    constructor(public payload: any) {
    }
}

export class OnlineLeadsSuccess implements Action {
    type = ActionTypes.ONLINE_LEADES_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class OnlineLeadsFail implements Action {
    type = ActionTypes.ONLINE_LEADES_FAIL;

    constructor(public payload: any) {
    }
}

// ONLINE LEADES COUNT

export class OnlineLeadsCount implements Action {
    type = ActionTypes.ONLINE_LEADES_COUNT;

    constructor(public payload: any) {
    }
}

export class OnlineLeadsCountSuccess implements Action {
    type = ActionTypes.ONLINE_LEADES_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class OnlineLeadsCountFail implements Action {
    type = ActionTypes.ONLINE_LEADES_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

// CREATE LEADS

export class CreateLeads implements Action {
    type = ActionTypes.CREATE_LEADS;

    constructor(public payload: any) {
    }
}

export class CreateLeadsSuccess implements Action {
    type = ActionTypes.CREATE_LEADS_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CreateLeadsFail implements Action {
    type = ActionTypes.CREATE_LEADS_FAIL;

    constructor(public payload: any) {
    }
}






// CLEAR PROJECT AGENT LIST

export class ClearProjectAgentList implements Action {
    type = ActionTypes.CLEAR_PROJECT_AGENT_LIST;

    constructor(public payload: any) {
    }
}

export type Actions =
    | ReassignList
    | ReassignListSuccess
    | ReassignListFail

    | ReassignListCount
    | ReassignListCountSuccess
    | ReassignListCountFail

    | ReassignAllCustomers
    | ReassignAllCustomersSuccess
    | ReassignAllCustomersFail

    | ReassignSelectedCustomers
    | ReassignSelectedCustomersSuccess
    | ReassignSelectedCustomersFail

    | CustomerList
    | CustomerListSuccess
    | CustomerListFail

    | CustomerListCount
    | CustomerListCountSuccess
    | CustomerListCountFail

    | ProjectList
    | ProjectListSuccess
    | ProjectListFail

    | ProjectAgentList
    | ProjectAgentListSuccess
    | ProjectAgentListFail

    | ProjectAgentListCount
    | ProjectAgentListCountSuccess
    | ProjectAgentListCountFail

    | DidList
    | DidListSuccess
    | DidListFail

    | OnlineLeads
    | OnlineLeadsSuccess
    | OnlineLeadsFail

    | OnlineLeadsCount
    | OnlineLeadsCountSuccess
    | OnlineLeadsCountFail

    | CreateLeads
    | CreateLeadsSuccess
    | CreateLeadsFail

    | ClearProjectAgentList





