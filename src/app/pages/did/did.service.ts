import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/providers/api/api';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';


@Injectable()
export class DidService extends Api {
    private URL: string = this.getBaseUrl();


    didList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/did/list-all-did-project', { params: params });
    }

    didListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/did/list-all-did-project', { params: params });
    }

    projectList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/list-project-for-dropdown?', { params: params });
    }

    assignDid(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/did/map-project-did', params);
    }

    releaseDid(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/did/release-did-project', params);
    }

    addDid(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/did/add-new-dids', params);
    }


}