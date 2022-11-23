import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../shared/interfaces/interface';
import { Api } from '../providers/api/api';
import { HttpParams } from '@angular/common/http';

@Injectable()

export class CommonService extends Api {

    private URL: string = this.getBaseUrl();


    exportList(params): Observable<any> {

        const reqOpts: any = {};
        reqOpts.responseType = 'arraybuffer';
        if (params.payload) {
            reqOpts.params = new HttpParams();
            for (const param in params.payload) {
                if (param) {
                    reqOpts.params = reqOpts.params.set(param, params.payload[param]);
                }
            }
        }
        if (params.name === 'projectList') {
            return this.http.get<ResponseInterface>(this.URL + '/project/export-project-list', reqOpts);
        }
        if (params.name === 'membersList') {
            return this.http.get<ResponseInterface>(this.URL + '/members/export-members', reqOpts);
        }
        if (params.name === 'statusTracker') {
            return this.http.get<ResponseInterface>(this.URL + '/members/export-status-tracker', reqOpts);
        }
        if (params.name === 'didList') {
            return this.http.get<ResponseInterface>(this.URL + '/did/export-all-did-project', reqOpts);
        }
        if (params.name === 'projectAgentReport') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-project-agent-report', reqOpts);
        }
        if (params.name === 'latestResponse') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-latest-response-report', reqOpts);
        }
        if (params.name === 'missedCall') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-missed-call-report', reqOpts);
        }
        if (params.name === 'customerList') {
            return this.http.get<ResponseInterface>(this.URL + '/customer/export-all-customers-details', reqOpts);
        }
        if (params.name === 'totalcalls') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-call-history', reqOpts);
        }
        if (params.name === 'montwiseCallCount') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-monthwise-call-count', reqOpts);
        }
        if (params.name === 'projectAgentCallount') {
            return this.http.get<ResponseInterface>(this.URL + '/reports/export-project-agent-call-count', reqOpts);
        }

    }

    monthWiseCall(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/reports/monthwise-call-count', { params: params });
    }
    followupList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/dashboard/get-follow-up-report', { params: params });
    }
    todaysCallCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/dashboard/get-todays-call-count', { params: params });
    }
    getChartData(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/dashboard/get-data-for-dashboard-chart', { params: params });
    }
}
