import { Map, Record } from 'immutable';

export interface UsersState extends Map<string, any> {

    userList: any;
    userListLoading: boolean;
    userListLoaded: boolean;
    userListFailed: boolean;

    userListCount: any;
    userListCountLoading: boolean;
    userListCountLoaded: boolean;
    userListCountFailed: boolean;

    createUser: any;
    createUserLoading: boolean;
    createUserLoaded: boolean;
    createUserFailed: boolean;

    fetchUpdateData: any;
    fetchUpdateDataLoading: boolean;
    fetchUpdateDataLoaded: boolean;
    fetchUpdateDataFailed: boolean;

    updateUser: any;
    updateUserLoading: boolean;
    updateUserLoaded: boolean;
    updateUserFailed: boolean;

    deleteUser: any;
    deleteUserLoading: boolean;
    deleteUserLoaded: boolean;
    deleteUserFailed: boolean;

    userType: any;
    userTypeLoading: boolean;
    userTypeLoaded: boolean;
    userTypeFailed: boolean;

    phoneType: any;
    phoneTypeLoading: boolean;
    phoneTypeLoaded: boolean;
    phoneTypeFailed: boolean;

    reporting: any;
    reportingLoading: boolean;
    reportingLoaded: boolean;
    reportingFailed: boolean;

    callAvailability: any;
    callAvailabilityLoading: boolean;
    callAvailabilityLoaded: boolean;
    callAvailabilityFailed: boolean;

    changeActiveStatus: any;
    changeActiveStatusLoading: boolean;
    changeActiveStatusLoaded: boolean;
    changeActiveStatusFailed: boolean;

    agentList: any;
    agentListLoading: boolean;
    agentListLoaded: boolean;
    agentListFailed: boolean;

    mappingList: any;
    mappingListLoading: boolean;
    mappingListLoaded: boolean;
    mappingListFailed: boolean;

    projectMapping: any;
    projectMappingLoading: boolean;
    projectMappingLoaded: boolean;
    projectMappingFailed: boolean;

    statusTrackerList: any;
    statusTrackerListLoading: boolean;
    statusTrackerListLoaded: boolean;
    statusTrackerListFailed: boolean;

    statusTrackerListCount: any;
    statusTrackerListCountLoading: boolean;
    statusTrackerListCountLoaded: boolean;
    statusTrackerListCountFailed: boolean;

    mappingHistory: any;
    mappingHistoryLoading: boolean;
    mappingHistoryLoaded: boolean;
    mappingHistoryFailed: boolean;

}

export const UsersStateRecord = Record({

    userList: [],
    userListLoading: false,
    userListLoaded: false,
    userListFailed: false,

    userListCount: 0,
    userListCountLoading: false,
    userListCountLoaded: false,
    userListCountFailed: false,

    createUser: {},
    createUserLoading: false,
    createUserLoaded: false,
    createUserFailed: false,

    fetchUpdateData: [],
    fetchUpdateDataLoading: false,
    fetchUpdateDataLoaded: false,
    fetchUpdateDataFailed: false,

    updateUser: {},
    updateUserLoading: false,
    updateUserLoaded: false,
    updateUserFailed: false,

    deleteUser: {},
    deleteUserLoading: false,
    deleteUserLoaded: false,
    deleteUserFailed: false,

    userType: [],
    userTypeLoading: false,
    userTypeLoaded: false,
    userTypeFailed: false,

    phoneType: [],
    phoneTypeLoading: false,
    phoneTypeLoaded: false,
    phoneTypeFailed: false,

    reporting: [],
    reportingLoading: false,
    reportingLoaded: false,
    reportingFailed: false,

    callAvailability: [],
    callAvailabilityLoading: false,
    callAvailabilityLoaded: false,
    callAvailabilityFailed: false,

    changeActiveStatus: {},
    changeActiveStatusLoading: false,
    changeActiveStatusLoaded: false,
    changeActiveStatusFailed: false,

    agentList: [],
    agentListLoading: false,
    agentListLoaded: false,
    agentListFailed: false,

    mappingList: [],
    mappingListLoading: false,
    mappingListLoaded: false,
    mappingListFailed: false,

    projectMapping: {},
    projectMappingLoading: false,
    projectMappingLoaded: false,
    projectMappingFailed: false,

    statusTrackerList: [],
    statusTrackerListLoading: false,
    statusTrackerListLoaded: false,
    statusTrackerListFailed: false,

    statusTrackerListCount: 0,
    statusTrackerListCountLoading: false,
    statusTrackerListCountLoaded: false,
    statusTrackerListCountFailed: false,

    mappingHistory: [],
    mappingHistoryLoading: false,
    mappingHistoryLoaded: false,
    mappingHistoryFailed: false,

});

