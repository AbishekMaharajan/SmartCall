import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from 'src/app/providers/api/api';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';


@Injectable()
export class ProjectsService extends Api {
    private URL: string = this.getBaseUrl();
    project = ''

    // return this.http.get<ResponseInterface>(this.URL + '/user/create-user', params);
    projectList(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/project-list', { params: params });
    }

    projectListCount(params: any): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/project-list', { params: params });

    }
    createProject(params: any): Observable<ResponseInterface> {
        return this.http.post<ResponseInterface>(this.URL + '/project/create-project', params);
    }
    fetchUpdateData(params): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/get-details-to-edit-project?id=' + params);
    }
    updateProject(params): Observable<ResponseInterface> {
        return this.http.put<ResponseInterface>(this.URL + '/project/update-project', params);
    }

    deleteProject(params): Observable<ResponseInterface> {
        return this.http.delete<ResponseInterface>(this.URL + '/project/delete-project/' + params);
    }
    uploadFile(params): Observable<ResponseInterface> {
        const formData: FormData = new FormData();
        formData.append('document', params.file, params.file.name);
        // delete params.file
        formData.append('Info', JSON.stringify(params));
        return this.http.post<ResponseInterface>(this.URL + '/project/upload-documents', formData);
    }

    fileList(params): Observable<ResponseInterface> {
        return this.http.get<ResponseInterface>(this.URL + '/project/list-project-documents', { params: params });
    }

    deleteDocument(params): Observable<ResponseInterface> {
        return this.http.delete<ResponseInterface>(this.URL + '/project/delete-document/' + params);
    }


}