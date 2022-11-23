import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/providers/api/api';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';


@Injectable()
export class LiveMoniterService extends Api {
    private URL: string = this.getBaseUrl();

    ongoingCallList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/list-ongoing-calls', { params: params });
    }
    responseList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/get-latest-response-report', { params: params });
    }

    responseListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/get-latest-response-report', { params: params });
    }

    callReports(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/list-ongoing-calls', { params: params });
    }

    clickToCall(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/ivr/click-to-call', params);
    }

    bargin(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/ivr/user-barge-in', params);
    }

    blockCustomer(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/customer/block-customer', params);
    }

    customerInfo(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/customer/get-customer-info-to-update', { params: params });
    }

    updateCustomer(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/customer/update-customer-info', params);

    }

    totalCallList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/get-call-history', { params: params });

    }
    pincodeArea(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>('http://api.postalpincode.in/pincode/' + params);
    }

    missedCallList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/get-missed-call-list', { params: params });
    }

    missedCallListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/get-missed-call-list', { params: params });
    }
}