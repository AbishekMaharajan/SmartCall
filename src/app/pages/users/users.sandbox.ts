import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';
import * as UsersActions from './action/users.action';
import {
    userList, userListLoading, userListLoaded, userListFailed,
    userListCount, userListCountLoading, userListCountLoaded, userListCountFailed,
    createUser, createUserLoading, createUserLoaded, createUserFailed,
    fetchUpdateData, fetchUpdateDataLoading, fetchUpdateDataLoaded, fetchUpdateDataFailed,
    updateUser, updateUserLoading, updateUserLoaded, updateUserFailed,
    deleteUser, deleteUserLoading, deleteUserLoaded, deleteUserFailed,
    userType, userTypeLoading, userTypeLoaded, userTypeFailed,
    phoneType, phoneTypeLoading, phoneTypeLoaded, phoneTypeFailed,
    reporting, reportingLoading, reportingLoaded, reportingFailed,
    callAvailability, callAvailabilityLoading, callAvailabilityLoaded, callAvailabilityFailed,
    changeActiveStatus, changeActiveStatusLoading, changeActiveStatusLoaded, changeActiveStatusFailed,
    agentList, agentListLoading, agentListLoaded, agentListFailed,
    mappingList, mappingListLoading, mappingListLoaded, mappingListFailed,
    projectMapping, projectMappingLoading, projectMappingLoaded, projectMappingFailed,
    statusTrackerList, statusTrackerListLoading, statusTrackerListLoaded, statusTrackerListFailed,
    statusTrackerListCount, statusTrackerListCountLoading, statusTrackerListCountLoaded, statusTrackerListCountFailed,
    mappingHistory, mappingHistoryLoading, mappingHistoryLoaded, mappingHistoryFailed,
} from './reducer/users.selector';


@Injectable()
export class UsersSandbox {

    public userList$ = this.appState.select(userList);
    public userListLoading$ = this.appState.select(userListLoading);
    public userListLoaded$ = this.appState.select(userListLoaded);
    public userListFailed$ = this.appState.select(userListFailed);

    public userListCount$ = this.appState.select(userListCount);
    public userListCountLoading$ = this.appState.select(userListCountLoading);
    public userListCountLoaded$ = this.appState.select(userListCountLoaded);
    public userListCountFailed$ = this.appState.select(userListCountFailed);

    public createUser$ = this.appState.select(createUser);
    public createUserLoading$ = this.appState.select(createUserLoading);
    public createUserLoaded$ = this.appState.select(createUserLoaded);
    public createUserFailed$ = this.appState.select(createUserFailed);

    public fetchUpdateData$ = this.appState.select(fetchUpdateData);
    public fetchUpdateDataLoading$ = this.appState.select(fetchUpdateDataLoading);
    public fetchUpdateDataLoaded$ = this.appState.select(fetchUpdateDataLoaded);
    public fetchUpdateDataFailed$ = this.appState.select(fetchUpdateDataFailed);

    public updateUser$ = this.appState.select(updateUser);
    public updateUserLoading$ = this.appState.select(updateUserLoading);
    public updateUserLoaded$ = this.appState.select(updateUserLoaded);
    public updateUserFailed$ = this.appState.select(updateUserFailed);

    public deleteUser$ = this.appState.select(deleteUser);
    public deleteUserLoading$ = this.appState.select(deleteUserLoading);
    public deleteUserLoaded$ = this.appState.select(deleteUserLoaded);
    public deleteUserFailed$ = this.appState.select(deleteUserFailed);

    public userType$ = this.appState.select(userType);
    public userTypeLoading$ = this.appState.select(userTypeLoading);
    public userTypeLoaded$ = this.appState.select(userTypeLoaded);
    public userTypeFailed$ = this.appState.select(userTypeFailed);

    public phoneType$ = this.appState.select(phoneType);
    public phoneTypeLoading$ = this.appState.select(phoneTypeLoading);
    public phoneTypeLoaded$ = this.appState.select(phoneTypeLoaded);
    public phoneTypeFailed$ = this.appState.select(phoneTypeFailed);

    public reporting$ = this.appState.select(reporting);
    public reportingLoading$ = this.appState.select(reportingLoading);
    public reportingLoaded$ = this.appState.select(reportingLoaded);
    public reportingFailed$ = this.appState.select(reportingFailed);

    public callAvailability$ = this.appState.select(callAvailability);
    public callAvailabilityLoading$ = this.appState.select(callAvailabilityLoading);
    public callAvailabilityLoaded$ = this.appState.select(callAvailabilityLoaded);
    public callAvailabilityFailed$ = this.appState.select(callAvailabilityFailed);

    public changeActiveStatus$ = this.appState.select(changeActiveStatus);
    public changeActiveStatusLoading$ = this.appState.select(changeActiveStatusLoading);
    public changeActiveStatusLoaded$ = this.appState.select(changeActiveStatusLoaded);
    public changeActiveStatusFailed$ = this.appState.select(changeActiveStatusFailed);

    public agentList$ = this.appState.select(agentList);
    public agentListLoading$ = this.appState.select(agentListLoading);
    public agentListLoaded$ = this.appState.select(agentListLoaded);
    public agentListFailed$ = this.appState.select(agentListFailed);

    public mappingList$ = this.appState.select(mappingList);
    public mappingListLoading$ = this.appState.select(mappingListLoading);
    public mappingListLoaded$ = this.appState.select(mappingListLoaded);
    public mappingListFailed$ = this.appState.select(mappingListFailed);

    public projectMapping$ = this.appState.select(projectMapping);
    public projectMappingLoading$ = this.appState.select(projectMappingLoading);
    public projectMappingLoaded$ = this.appState.select(projectMappingLoaded);
    public projectMappingFailed$ = this.appState.select(projectMappingFailed);

    public statusTrackerList$ = this.appState.select(statusTrackerList);
    public statusTrackerListLoading$ = this.appState.select(statusTrackerListLoading);
    public statusTrackerListLoaded$ = this.appState.select(statusTrackerListLoaded);
    public statusTrackerListFailed$ = this.appState.select(statusTrackerListFailed);

    public statusTrackerListCount$ = this.appState.select(statusTrackerListCount);
    public statusTrackerListCountLoading$ = this.appState.select(statusTrackerListCountLoading);
    public statusTrackerListCountLoaded$ = this.appState.select(statusTrackerListCountLoaded);
    public statusTrackerListCountFailed$ = this.appState.select(statusTrackerListCountFailed);

    public mappingHistory$ = this.appState.select(mappingHistory);
    public mappingHistoryLoading$ = this.appState.select(mappingHistoryLoading);
    public mappingHistoryLoaded$ = this.appState.select(mappingHistoryLoaded);
    public mappingHistoryFailed$ = this.appState.select(mappingHistoryFailed);

    constructor(protected appState: Store<store.AppState>) {
    }

    public userList(params) {
        this.appState.dispatch(new UsersActions.UserList(params));
    }

    public userListCount(params) {
        this.appState.dispatch(new UsersActions.UserListCount(params));
    }

    public createUser(params) {
        this.appState.dispatch(new UsersActions.CreateUser(params));
    }

    public fetchUpdateData(params) {
        this.appState.dispatch(new UsersActions.FetchUpdateData(params));
    }
    public updateUser(params) {
        this.appState.dispatch(new UsersActions.UpdateUser(params));
    }
    public deleteUser(params) {
        this.appState.dispatch(new UsersActions.DeleteUser(params));
    }
    public userType(params) {
        this.appState.dispatch(new UsersActions.UserType(params));
    }
    public phoneType(params) {
        this.appState.dispatch(new UsersActions.PhoneType(params));
    }
    public reporting(params) {
        this.appState.dispatch(new UsersActions.Reporting(params));
    }
    public callAvailability(params) {
        this.appState.dispatch(new UsersActions.CallAvailability(params));
    }
    public changeActiveStatus(params) {
        this.appState.dispatch(new UsersActions.ChangeActiveStatus(params));
    }
    public agentList(params) {
        this.appState.dispatch(new UsersActions.AgentList(params));
    }
    public mappingList(params) {
        this.appState.dispatch(new UsersActions.MappingList(params));
    }
    public projectMapping(params) {
        this.appState.dispatch(new UsersActions.ProjectMapping(params));
    }
    public statusTrackerList(params) {
        this.appState.dispatch(new UsersActions.StatusTrackerList(params));
    }
    public statusTrackerListCount(params) {
        this.appState.dispatch(new UsersActions.StatusTrackerListCount(params));
    }
    public mappingHistory(params) {
        this.appState.dispatch(new UsersActions.MappingHistory(params));
    }

}

