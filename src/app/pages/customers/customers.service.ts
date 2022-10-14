import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/providers/api/api';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';


@Injectable()
export class CustomersService extends Api {
    private URL: string = this.getBaseUrl();

    reassignList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/get-customer-list-for-reassign', { params: params });
    }

    reassignListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/get-customer-list-for-reassign', { params: params });
    }



    reassignAllCustomers(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/customer/reassign-all-customer', params);
    }

    reassignSelectedCustomers(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/customer/reassign-specific-customer', params);
    }

    customerList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/list-all-customers-details', { params: params });
    }

    customerListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/list-all-customers-details', { params: params });
    }

    projectList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/list-project-did-for-dropdown', { params: params });
    }

    projectAgentList(params: any): Observable<ResponseInterface> {
        if (params && params.value == 1) {
            delete params.value
            return this.http.get<ResponseInterface>(this.URL + '/reports/get-project-agent-call-count', { params: params });
        }
        else {
            return this.http.get<ResponseInterface>(this.URL + '/reports/get-project-agent-report', { params: params });
        }
    }

    projectAgentListCount(params: any): Observable<ResponseInterface> {
        if (params && params.value == 1) {
            delete params.value
            return this.http.get<ResponseInterface>(this.URL + '/reports/get-project-agent-call-count', { params: params });
        }
        else {
            return this.http.get<ResponseInterface>(this.URL + '/reports/get-project-agent-report', { params: params });
        }
    }
}