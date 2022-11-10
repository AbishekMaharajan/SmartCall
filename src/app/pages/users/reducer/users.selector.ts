import { createSelector } from 'reselect';
import * as usersReducer from '../../users/reducer/users.reducer';
import { AppState } from 'src/app/app.state';

// *************************** PUBLIC API's ****************************
/**
 * Signup store functions
 */
export const getUsersState = (state: AppState) => state.users;

export const userList = createSelector(getUsersState, usersReducer.userList);
export const userListLoading = createSelector(getUsersState, usersReducer.userListLoading);
export const userListLoaded = createSelector(getUsersState, usersReducer.userListLoaded);
export const userListFailed = createSelector(getUsersState, usersReducer.userListFailed);

export const userListCount = createSelector(getUsersState, usersReducer.userListCount);
export const userListCountLoading = createSelector(getUsersState, usersReducer.userListCountLoading);
export const userListCountLoaded = createSelector(getUsersState, usersReducer.userListCountLoaded);
export const userListCountFailed = createSelector(getUsersState, usersReducer.userListCountFailed);

export const createUser = createSelector(getUsersState, usersReducer.createUser);
export const createUserLoading = createSelector(getUsersState, usersReducer.createUserLoading);
export const createUserLoaded = createSelector(getUsersState, usersReducer.createUserLoaded);
export const createUserFailed = createSelector(getUsersState, usersReducer.createUserFailed);

export const fetchUpdateData = createSelector(getUsersState, usersReducer.fetchUpdateData);
export const fetchUpdateDataLoading = createSelector(getUsersState, usersReducer.fetchUpdateDataLoading);
export const fetchUpdateDataLoaded = createSelector(getUsersState, usersReducer.fetchUpdateDataLoaded);
export const fetchUpdateDataFailed = createSelector(getUsersState, usersReducer.fetchUpdateDataFailed);

export const updateUser = createSelector(getUsersState, usersReducer.updateUser);
export const updateUserLoading = createSelector(getUsersState, usersReducer.updateUserLoading);
export const updateUserLoaded = createSelector(getUsersState, usersReducer.updateUserLoaded);
export const updateUserFailed = createSelector(getUsersState, usersReducer.updateUserFailed);

export const deleteUser = createSelector(getUsersState, usersReducer.deleteUser);
export const deleteUserLoading = createSelector(getUsersState, usersReducer.deleteUserLoading);
export const deleteUserLoaded = createSelector(getUsersState, usersReducer.deleteUserLoaded);
export const deleteUserFailed = createSelector(getUsersState, usersReducer.deleteUserFailed);

export const userType = createSelector(getUsersState, usersReducer.userType);
export const userTypeLoading = createSelector(getUsersState, usersReducer.userTypeLoading);
export const userTypeLoaded = createSelector(getUsersState, usersReducer.userTypeLoaded);
export const userTypeFailed = createSelector(getUsersState, usersReducer.userTypeFailed);

export const phoneType = createSelector(getUsersState, usersReducer.phoneType);
export const phoneTypeLoading = createSelector(getUsersState, usersReducer.phoneTypeLoading);
export const phoneTypeLoaded = createSelector(getUsersState, usersReducer.phoneTypeLoaded);
export const phoneTypeFailed = createSelector(getUsersState, usersReducer.phoneTypeFailed);

export const reporting = createSelector(getUsersState, usersReducer.reporting);
export const reportingLoading = createSelector(getUsersState, usersReducer.reportingLoading);
export const reportingLoaded = createSelector(getUsersState, usersReducer.reportingLoaded);
export const reportingFailed = createSelector(getUsersState, usersReducer.reportingFailed);

export const callAvailability = createSelector(getUsersState, usersReducer.callAvailability);
export const callAvailabilityLoading = createSelector(getUsersState, usersReducer.callAvailabilityLoading);
export const callAvailabilityLoaded = createSelector(getUsersState, usersReducer.callAvailabilityLoaded);
export const callAvailabilityFailed = createSelector(getUsersState, usersReducer.callAvailabilityFailed);

export const changeActiveStatus = createSelector(getUsersState, usersReducer.changeActiveStatus);
export const changeActiveStatusLoading = createSelector(getUsersState, usersReducer.changeActiveStatusLoading);
export const changeActiveStatusLoaded = createSelector(getUsersState, usersReducer.changeActiveStatusLoaded);
export const changeActiveStatusFailed = createSelector(getUsersState, usersReducer.changeActiveStatusFailed);

export const agentList = createSelector(getUsersState, usersReducer.agentList);
export const agentListLoading = createSelector(getUsersState, usersReducer.agentListLoading);
export const agentListLoaded = createSelector(getUsersState, usersReducer.agentListLoaded);
export const agentListFailed = createSelector(getUsersState, usersReducer.agentListFailed);

export const mappingList = createSelector(getUsersState, usersReducer.mappingList);
export const mappingListLoading = createSelector(getUsersState, usersReducer.mappingListLoading);
export const mappingListLoaded = createSelector(getUsersState, usersReducer.mappingListLoaded);
export const mappingListFailed = createSelector(getUsersState, usersReducer.mappingListFailed);

export const projectMapping = createSelector(getUsersState, usersReducer.projectMapping);
export const projectMappingLoading = createSelector(getUsersState, usersReducer.projectMappingLoading);
export const projectMappingLoaded = createSelector(getUsersState, usersReducer.projectMappingLoaded);
export const projectMappingFailed = createSelector(getUsersState, usersReducer.projectMappingFailed);

export const statusTrackerList = createSelector(getUsersState, usersReducer.statusTrackerList);
export const statusTrackerListLoading = createSelector(getUsersState, usersReducer.statusTrackerListLoading);
export const statusTrackerListLoaded = createSelector(getUsersState, usersReducer.statusTrackerListLoaded);
export const statusTrackerListFailed = createSelector(getUsersState, usersReducer.statusTrackerListFailed);

export const statusTrackerListCount = createSelector(getUsersState, usersReducer.statusTrackerListCount);
export const statusTrackerListCountLoading = createSelector(getUsersState, usersReducer.statusTrackerListCountLoading);
export const statusTrackerListCountLoaded = createSelector(getUsersState, usersReducer.statusTrackerListCountLoaded);
export const statusTrackerListCountFailed = createSelector(getUsersState, usersReducer.statusTrackerListCountFailed);

export const mappingHistory = createSelector(getUsersState, usersReducer.mappingHistory);
export const mappingHistoryLoading = createSelector(getUsersState, usersReducer.mappingHistoryLoading);
export const mappingHistoryLoaded = createSelector(getUsersState, usersReducer.mappingHistoryLoaded);
export const mappingHistoryFailed = createSelector(getUsersState, usersReducer.mappingHistoryFailed);

export const blockedCustomers = createSelector(getUsersState, usersReducer.blockedCustomers);
export const blockedCustomersLoading = createSelector(getUsersState, usersReducer.blockedCustomersLoading);
export const blockedCustomersLoaded = createSelector(getUsersState, usersReducer.blockedCustomersLoaded);
export const blockedCustomersFailed = createSelector(getUsersState, usersReducer.blockedCustomersFailed);

export const blockedCustomersCount = createSelector(getUsersState, usersReducer.blockedCustomersCount);
export const blockedCustomersCountLoading = createSelector(getUsersState, usersReducer.blockedCustomersCountLoading);
export const blockedCustomersCountLoaded = createSelector(getUsersState, usersReducer.blockedCustomersCountLoaded);
export const blockedCustomersCountFailed = createSelector(getUsersState, usersReducer.blockedCustomersCountFailed);

export const reassignBlocked = createSelector(getUsersState, usersReducer.reassignBlocked);
export const reassignBlockedLoading = createSelector(getUsersState, usersReducer.reassignBlockedLoading);
export const reassignBlockedLoaded = createSelector(getUsersState, usersReducer.reassignBlockedLoaded);
export const reassignBlockedFailed = createSelector(getUsersState, usersReducer.reassignBlockedFailed);
