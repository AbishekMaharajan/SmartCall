import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/providers/api/api';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';


@Injectable()
export class UsersService extends Api {
    private URL: string = this.getBaseUrl();

    userList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/list-members', { params: params });
    }

    userListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/list-members', { params: params });

    }

    createUser(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/members/create-user', params);
    }

    fetchUpdateData(params): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/get-details-to-edit-user?id=' + params);
    }
    updateUser(params): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(this.URL + '/members/update-user', params);
    }

    deleteUser(params): Observable<ResponseInterface> {
        return this.http.delete<ResponseInterface>(this.URL + '/members/delete-member/' + params);
    }
    userType(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/get-user-type');

    }
    phoneType(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/setting/get-phone-type');

    }
    reporting(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/list-reportingto');

    }
    callAvailability(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/setting/get-call-status-availability-type');

    }
    changeActiveStatus(params): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(this.URL + '/members/update-user-status', params);
    }

    agentList(params): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/map/list-active-users-list-mapping?organisation_id=' + params);
    }

    mappingList(params): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/map/list-project-agent-mapping-list?organisation_id=' + params);
    }

    projectMapping(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/map/map-project-agent', params);
    }
    statusTrackerList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/list-status-tracker', { params: params });
    }
    statusTrackerListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/members/list-status-tracker', { params: params });
    }
    mappingHistory(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/map/list-project-agent-mapping-history', { params: params });
    }
    getBlockedCustomer(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/get-blocked-customer-list', { params: params });
    }
    getBlockedCustomerCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/get-blocked-customer-list', { params: params });
    }
    reassignBlocked(params: any): Observable<ResponseInterface> {
        let value = 'blocked'
        if (params && params.status && params.status !== 'Blocked') {
            value = 'unassigned'
        }
        delete params.status
        return this.http.post<ResponseInterface>(this.URL + `/customer/reassign-${value}-customer`, params);
    }

}