import { UsersState, UsersStateRecord } from './users.state';
import * as actions from '../action/users.action';

export const initialState: UsersState = new UsersStateRecord() as unknown as UsersState;

export function reducer(state = initialState, { type, payload }: any): UsersState {
    if (!type) {
        return state;
    }

    switch (type) {

        //  USERS LIST
        case actions.ActionTypes.USER_LIST:

            return Object.assign({}, state, {
                userListLoading: true,
                userListLoaded: false,
                userListFailed: false,
            });

        case actions.ActionTypes.USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                userList: payload.data,
                userListLoading: false,
                userListLoaded: true,
                userListFailed: false,
            });

        case actions.ActionTypes.USER_LIST_FAIL:

            return Object.assign({}, state, {
                userListLoading: false,
                userListLoaded: true,
                userListFailed: true,

            });

        //  USERS LIST COUNT
        case actions.ActionTypes.USER_LIST_COUNT:

            return Object.assign({}, state, {
                userListCountLoading: true,
                userListCountLoaded: false,
                userListCountFailed: false,
            });

        case actions.ActionTypes.USER_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                userListCount: payload.data,
                userListCountLoading: false,
                userListCountLoaded: true,
                userListCountFailed: false,
            });

        case actions.ActionTypes.USER_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                userListCountLoading: false,
                userListCountLoaded: true,
                userListCountFailed: true,

            });

        // CREATE USER
        case actions.ActionTypes.CREATE_USER:

            return Object.assign({}, state, {
                createUserLoading: true,
                createUserLoaded: false,
                createUserFailed: false,
            });

        case actions.ActionTypes.CREATE_USER_SUCCESS:

            return Object.assign({}, state, {
                createUser: payload,
                createUserLoading: false,
                createUserLoaded: true,
                createUserFailed: false,
            });

        case actions.ActionTypes.CREATE_USER_FAIL:

            return Object.assign({}, state, {
                createUserLoading: false,
                createUserLoaded: true,
                createUserFailed: true,

            });

        // FETCH UPDATE DATA
        case actions.ActionTypes.FETCH_UPDATE_DATA:

            return Object.assign({}, state, {
                fetchUpdateDataLoading: true,
                fetchUpdateDataLoaded: false,
                fetchUpdateDataFailed: false,
            });

        case actions.ActionTypes.FETCH_UPDATE_DATA_SUCCESS:

            return Object.assign({}, state, {
                fetchUpdateData: payload.data,
                fetchUpdateDataLoading: false,
                fetchUpdateDataLoaded: true,
                fetchUpdateDataFailed: false,
            });

        case actions.ActionTypes.FETCH_UPDATE_DATA_FAIL:

            return Object.assign({}, state, {
                fetchUpdateDataLoading: false,
                fetchUpdateDataLoaded: true,
                fetchUpdateDataFailed: true,

            });

        // UPDATE USER
        case actions.ActionTypes.UPDATE_USER:

            return Object.assign({}, state, {
                updateUserLoading: true,
                updateUserLoaded: false,
                updateUserFailed: false,
            });

        case actions.ActionTypes.UPDATE_USER_SUCCESS:

            return Object.assign({}, state, {
                updateUser: payload,
                updateUserLoading: false,
                updateUserLoaded: true,
                updateUserFailed: false,
            });

        case actions.ActionTypes.UPDATE_USER_FAIL:

            return Object.assign({}, state, {
                updateUserLoading: false,
                updateUserLoaded: true,
                updateUserFailed: true,

            });

        // DELETE USER
        case actions.ActionTypes.DELETE_USER:

            return Object.assign({}, state, {
                deleteUserLoading: true,
                deleteUserLoaded: false,
                deleteUserFailed: false,
            });

        case actions.ActionTypes.DELETE_USER_SUCCESS:

            return Object.assign({}, state, {
                deleteUser: payload,
                deleteUserLoading: false,
                deleteUserLoaded: true,
                deleteUserFailed: false,
            });

        case actions.ActionTypes.DELETE_USER_FAIL:

            return Object.assign({}, state, {
                deleteUserLoading: false,
                deleteUserLoaded: true,
                deleteUserFailed: true,

            });

        // USER TYPE
        case actions.ActionTypes.USER_TYPE:

            return Object.assign({}, state, {
                userTypeLoading: true,
                userTypeLoaded: false,
                userTypeFailed: false,
            });

        case actions.ActionTypes.USER_TYPE_SUCCESS:

            return Object.assign({}, state, {
                userType: payload.data,
                userTypeLoading: false,
                userTypeLoaded: true,
                userTypeFailed: false,
            });

        case actions.ActionTypes.USER_TYPE_FAIL:

            return Object.assign({}, state, {
                userTypeLoading: false,
                userTypeLoaded: true,
                userTypeFailed: true,

            });

        // PHONE TYPE
        case actions.ActionTypes.PHONE_TYPE:

            return Object.assign({}, state, {
                phoneTypeLoading: true,
                phoneTypeLoaded: false,
                phoneTypeFailed: false,
            });

        case actions.ActionTypes.PHONE_TYPE_SUCCESS:

            return Object.assign({}, state, {
                phoneType: payload.data,
                phoneTypeLoading: false,
                phoneTypeLoaded: true,
                phoneTypeFailed: false,
            });

        case actions.ActionTypes.PHONE_TYPE_FAIL:

            return Object.assign({}, state, {
                phoneTypeLoading: false,
                phoneTypeLoaded: true,
                phoneTypeFailed: true,

            });

        // REPORTING
        case actions.ActionTypes.REPORTING:

            return Object.assign({}, state, {
                reportingLoading: true,
                reportingLoaded: false,
                reportingFailed: false,
            });

        case actions.ActionTypes.REPORTING_SUCCESS:

            return Object.assign({}, state, {
                reporting: payload.data,
                reportingLoading: false,
                reportingLoaded: true,
                reportingFailed: false,
            });

        case actions.ActionTypes.REPORTING_FAIL:

            return Object.assign({}, state, {
                reportingLoading: false,
                reportingLoaded: true,
                reportingFailed: true,

            });

        // CALL AVAILABILITY
        case actions.ActionTypes.CALL_AVAILABILITY:

            return Object.assign({}, state, {
                callAvailabilityLoading: true,
                callAvailabilityLoaded: false,
                callAvailabilityFailed: false,
            });

        case actions.ActionTypes.CALL_AVAILABILITY_SUCCESS:
            const updatedData = payload.data.map((data) => {
                data.active = false
                if (data.unnest === 'Available') {
                    data.class = 'success'
                }
                else if (data.unnest === 'Not Available' || data.unnest === 'On Leave') {
                    data.class = 'warning'
                }
                else if (data.unnest === 'On Break') {
                    data.class = '_alert'
                }
                else if (data.unnest === 'On Duty') {
                    data.class = 'success'
                }
                else data.class = '_alert'
                return data
            })
            return Object.assign({}, state, {


                callAvailability: updatedData,
                callAvailabilityLoading: false,
                callAvailabilityLoaded: true,
                callAvailabilityFailed: false,
            });

        case actions.ActionTypes.CALL_AVAILABILITY_FAIL:

            return Object.assign({}, state, {
                callAvailabilityLoading: false,
                callAvailabilityLoaded: true,
                callAvailabilityFailed: true,

            });

        // CHANGE ACTIVE
        case actions.ActionTypes.CHANGE_ACTIVE_STATUS:

            return Object.assign({}, state, {
                changeActiveStatusLoading: true,
                changeActiveStatusLoaded: false,
                changeActiveStatusFailed: false,
            });

        case actions.ActionTypes.CHANGE_ACTIVE_STATUS_SUCCESS:

            return Object.assign({}, state, {
                changeActiveStatus: payload,
                changeActiveStatusLoading: false,
                changeActiveStatusLoaded: true,
                changeActiveStatusFailed: false,
            });

        case actions.ActionTypes.CHANGE_ACTIVE_STATUS_FAIL:

            return Object.assign({}, state, {
                changeActiveStatusLoading: false,
                changeActiveStatusLoaded: true,
                changeActiveStatusFailed: true,

            });

        // AGENT LIST
        case actions.ActionTypes.AGENT_LIST:

            return Object.assign({}, state, {
                agentListLoading: true,
                agentListLoaded: false,
                agentListFailed: false,
            });

        case actions.ActionTypes.AGENT_LIST_SUCCESS:

            return Object.assign({}, state, {
                agentList: payload.data,
                agentListLoading: false,
                agentListLoaded: true,
                agentListFailed: false,
            });

        case actions.ActionTypes.AGENT_LIST_FAIL:

            return Object.assign({}, state, {
                agentListLoading: false,
                agentListLoaded: true,
                agentListFailed: true,

            });

        //  MAPPING LIST
        case actions.ActionTypes.MAPPING_LIST:

            return Object.assign({}, state, {
                mappingListLoading: true,
                mappingListLoaded: false,
                mappingListFailed: false,
            });

        case actions.ActionTypes.MAPPING_LIST_SUCCESS:

            return Object.assign({}, state, {
                mappingList: payload.data,
                mappingListLoading: false,
                mappingListLoaded: true,
                mappingListFailed: false,
            });

        case actions.ActionTypes.MAPPING_LIST_FAIL:

            return Object.assign({}, state, {
                mappingListLoading: false,
                mappingListLoaded: true,
                mappingListFailed: true,

            });

        //  PROJECT MAPPING
        case actions.ActionTypes.PROJECT_MAPPING:

            return Object.assign({}, state, {
                projectMappingLoading: true,
                projectMappingLoaded: false,
                projectMappingFailed: false,
            });

        case actions.ActionTypes.PROJECT_MAPPING_SUCCESS:

            return Object.assign({}, state, {
                projectMapping: payload,
                projectMappingLoading: false,
                projectMappingLoaded: true,
                projectMappingFailed: false,
            });

        case actions.ActionTypes.PROJECT_MAPPING_FAIL:

            return Object.assign({}, state, {
                projectMappingLoading: false,
                projectMappingLoaded: true,
                projectMappingFailed: true,

            });

        //STATUS TRACKER LIST  
        case actions.ActionTypes.STATUS_TRACKER_LIST:

            return Object.assign({}, state, {
                statusTrackerListLoading: true,
                statusTrackerListLoaded: false,
                statusTrackerListFailed: false,
            });

        case actions.ActionTypes.STATUS_TRACKER_LIST_SUCCESS:

            return Object.assign({}, state, {
                statusTrackerList: payload.data,
                statusTrackerListLoading: false,
                statusTrackerListLoaded: true,
                statusTrackerListFailed: false,
            });

        case actions.ActionTypes.STATUS_TRACKER_LIST_FAIL:

            return Object.assign({}, state, {
                statusTrackerListLoading: false,
                statusTrackerListLoaded: true,
                statusTrackerListFailed: true,

            });

        //STATUS TRACKER LIST COUNT  
        case actions.ActionTypes.STATUS_TRACKER_LIST_COUNT:

            return Object.assign({}, state, {
                statusTrackerListCountLoading: true,
                statusTrackerListCountLoaded: false,
                statusTrackerListCountFailed: false,
            });

        case actions.ActionTypes.STATUS_TRACKER_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                statusTrackerListCount: payload.data,
                statusTrackerListCountLoading: false,
                statusTrackerListCountLoaded: true,
                statusTrackerListCountFailed: false,
            });

        case actions.ActionTypes.STATUS_TRACKER_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                statusTrackerListCountLoading: false,
                statusTrackerListCountLoaded: true,
                statusTrackerListCountFailed: true,

            });

        //MAPPING HISTORY  
        case actions.ActionTypes.MAPPING_HISTORY:

            return Object.assign({}, state, {
                mappingHistoryLoading: true,
                mappingHistoryLoaded: false,
                mappingHistoryFailed: false,
            });

        case actions.ActionTypes.MAPPING_HISTORY_SUCCESS:

            return Object.assign({}, state, {
                mappingHistory: payload.data,
                mappingHistoryLoading: false,
                mappingHistoryLoaded: true,
                mappingHistoryFailed: false,
            });

        case actions.ActionTypes.MAPPING_HISTORY_FAIL:

            return Object.assign({}, state, {
                mappingHistoryLoading: false,
                mappingHistoryLoaded: true,
                mappingHistoryFailed: true,

            });

        //BLOCKED CUSTOMER  
        case actions.ActionTypes.BLOCKED_CUSTOMER:
            let data
            if (payload.data) {
                data = payload.data.map((value) => {
                    value.isClicked = false
                    return value
                })
            }

            return Object.assign({}, state, {
                blockedCustomersLoading: true,
                blockedCustomersLoaded: false,
                blockedCustomersFailed: false,
            });

        case actions.ActionTypes.BLOCKED_CUSTOMER_SUCCESS:
            return Object.assign({}, state, {
                blockedCustomers: data ? data : payload.data,
                blockedCustomersLoading: false,
                blockedCustomersLoaded: true,
                blockedCustomersFailed: false,
            });

        case actions.ActionTypes.BLOCKED_CUSTOMER_FAIL:

            return Object.assign({}, state, {
                blockedCustomersLoading: false,
                blockedCustomersLoaded: true,
                blockedCustomersFailed: true,

            });

        //BLOCKED CUSTOMER COUNT
        case actions.ActionTypes.BLOCKED_CUSTOMER_COUNT:

            return Object.assign({}, state, {
                blockedCustomersCountLoading: true,
                blockedCustomersCountLoaded: false,
                blockedCustomersCountFailed: false,
            });

        case actions.ActionTypes.BLOCKED_CUSTOMER_COUNT_SUCCESS:

            return Object.assign({}, state, {
                blockedCustomersCount: payload.data,
                blockedCustomersCountLoading: false,
                blockedCustomersCountLoaded: true,
                blockedCustomersCountFailed: false,
            });

        case actions.ActionTypes.BLOCKED_CUSTOMER_COUNT_FAIL:

            return Object.assign({}, state, {
                blockedCustomersCountLoading: false,
                blockedCustomersCountLoaded: true,
                blockedCustomersCountFailed: true,

            });

        //REASSIGN BLOCKED CUSTOMER  
        case actions.ActionTypes.REASSIGN_BLOCKED_CUSTOMER:

            return Object.assign({}, state, {
                reassignBlockedLoading: true,
                reassignBlockedLoaded: false,
                reassignBlockedFailed: false,
            });

        case actions.ActionTypes.REASSIGN_BLOCKED_CUSTOMER_SUCCESS:

            return Object.assign({}, state, {
                reassignBlocked: payload,
                reassignBlockedLoading: false,
                reassignBlockedLoaded: true,
                reassignBlockedFailed: false,
            });

        case actions.ActionTypes.REASSIGN_BLOCKED_CUSTOMER_FAIL:

            return Object.assign({}, state, {
                reassignBlockedLoading: false,
                reassignBlockedLoaded: true,
                reassignBlockedFailed: true,

            });

        default: {
            return state;
        }
    }
}

/**
 * export values
 */


export const userList = (state: UsersState) => state.userList;
export const userListLoading = (state: UsersState) => state.userListLoading;
export const userListLoaded = (state: UsersState) => state.userListLoaded;
export const userListFailed = (state: UsersState) => state.userListFailed;

export const userListCount = (state: UsersState) => state.userListCount;
export const userListCountLoading = (state: UsersState) => state.userListCountLoading;
export const userListCountLoaded = (state: UsersState) => state.userListCountLoaded;
export const userListCountFailed = (state: UsersState) => state.userListCountFailed;

export const createUser = (state: UsersState) => state.createUser;
export const createUserLoading = (state: UsersState) => state.createUserLoading;
export const createUserLoaded = (state: UsersState) => state.createUserLoaded;
export const createUserFailed = (state: UsersState) => state.createUserFailed;

export const fetchUpdateData = (state: UsersState) => state.fetchUpdateData;
export const fetchUpdateDataLoading = (state: UsersState) => state.fetchUpdateDataLoading;
export const fetchUpdateDataLoaded = (state: UsersState) => state.fetchUpdateDataLoaded;
export const fetchUpdateDataFailed = (state: UsersState) => state.fetchUpdateDataFailed;

export const updateUser = (state: UsersState) => state.updateUser;
export const updateUserLoading = (state: UsersState) => state.updateUserLoading;
export const updateUserLoaded = (state: UsersState) => state.updateUserLoaded;
export const updateUserFailed = (state: UsersState) => state.updateUserFailed;

export const deleteUser = (state: UsersState) => state.deleteUser;
export const deleteUserLoading = (state: UsersState) => state.deleteUserLoading;
export const deleteUserLoaded = (state: UsersState) => state.deleteUserLoaded;
export const deleteUserFailed = (state: UsersState) => state.deleteUserFailed;

export const userType = (state: UsersState) => state.userType;
export const userTypeLoading = (state: UsersState) => state.userTypeLoading;
export const userTypeLoaded = (state: UsersState) => state.userTypeLoaded;
export const userTypeFailed = (state: UsersState) => state.userTypeFailed;

export const phoneType = (state: UsersState) => state.phoneType;
export const phoneTypeLoading = (state: UsersState) => state.phoneTypeLoading;
export const phoneTypeLoaded = (state: UsersState) => state.phoneTypeLoaded;
export const phoneTypeFailed = (state: UsersState) => state.phoneTypeFailed;

export const reporting = (state: UsersState) => state.reporting;
export const reportingLoading = (state: UsersState) => state.reportingLoading;
export const reportingLoaded = (state: UsersState) => state.reportingLoaded;
export const reportingFailed = (state: UsersState) => state.reportingFailed;

export const callAvailability = (state: UsersState) => state.callAvailability;
export const callAvailabilityLoading = (state: UsersState) => state.callAvailabilityLoading;
export const callAvailabilityLoaded = (state: UsersState) => state.callAvailabilityLoaded;
export const callAvailabilityFailed = (state: UsersState) => state.callAvailabilityFailed;

export const changeActiveStatus = (state: UsersState) => state.changeActiveStatus;
export const changeActiveStatusLoading = (state: UsersState) => state.changeActiveStatusLoading;
export const changeActiveStatusLoaded = (state: UsersState) => state.changeActiveStatusLoaded;
export const changeActiveStatusFailed = (state: UsersState) => state.changeActiveStatusFailed;

export const agentList = (state: UsersState) => state.agentList;
export const agentListLoading = (state: UsersState) => state.agentListLoading;
export const agentListLoaded = (state: UsersState) => state.agentListLoaded;
export const agentListFailed = (state: UsersState) => state.agentListFailed;

export const mappingList = (state: UsersState) => state.mappingList;
export const mappingListLoading = (state: UsersState) => state.mappingListLoading;
export const mappingListLoaded = (state: UsersState) => state.mappingListLoaded;
export const mappingListFailed = (state: UsersState) => state.mappingListFailed;

export const projectMapping = (state: UsersState) => state.projectMapping;
export const projectMappingLoading = (state: UsersState) => state.projectMappingLoading;
export const projectMappingLoaded = (state: UsersState) => state.projectMappingLoaded;
export const projectMappingFailed = (state: UsersState) => state.projectMappingFailed;

export const statusTrackerList = (state: UsersState) => state.statusTrackerList;
export const statusTrackerListLoading = (state: UsersState) => state.statusTrackerListLoading;
export const statusTrackerListLoaded = (state: UsersState) => state.statusTrackerListLoaded;
export const statusTrackerListFailed = (state: UsersState) => state.statusTrackerListFailed;

export const statusTrackerListCount = (state: UsersState) => state.statusTrackerListCount;
export const statusTrackerListCountLoading = (state: UsersState) => state.statusTrackerListCountLoading;
export const statusTrackerListCountLoaded = (state: UsersState) => state.statusTrackerListCountLoaded;
export const statusTrackerListCountFailed = (state: UsersState) => state.statusTrackerListCountFailed;

export const mappingHistory = (state: UsersState) => state.mappingHistory;
export const mappingHistoryLoading = (state: UsersState) => state.mappingHistoryLoading;
export const mappingHistoryLoaded = (state: UsersState) => state.mappingHistoryLoaded;
export const mappingHistoryFailed = (state: UsersState) => state.mappingHistoryFailed;

export const blockedCustomers = (state: UsersState) => state.blockedCustomers;
export const blockedCustomersLoading = (state: UsersState) => state.blockedCustomersLoading;
export const blockedCustomersLoaded = (state: UsersState) => state.blockedCustomersLoaded;
export const blockedCustomersFailed = (state: UsersState) => state.blockedCustomersFailed;

export const blockedCustomersCount = (state: UsersState) => state.blockedCustomersCount;
export const blockedCustomersCountLoading = (state: UsersState) => state.blockedCustomersCountLoading;
export const blockedCustomersCountLoaded = (state: UsersState) => state.blockedCustomersCountLoaded;
export const blockedCustomersCountFailed = (state: UsersState) => state.blockedCustomersCountFailed;

export const reassignBlocked = (state: UsersState) => state.reassignBlocked;
export const reassignBlockedLoading = (state: UsersState) => state.reassignBlockedLoading;
export const reassignBlockedLoaded = (state: UsersState) => state.reassignBlockedLoaded;
export const reassignBlockedFailed = (state: UsersState) => state.reassignBlockedFailed;


