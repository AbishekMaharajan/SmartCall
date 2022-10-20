import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as store from '../../app.state';
import * as ProjectsActions from './action/projects.action';
import {
    projectList, projectListLoading, projectListLoaded, projectListFailed,
    projectListCount, projectListCountLoading, projectListCountLoaded, projectListCountFailed,
    createProject, createProjectLoading, createProjectLoaded, createProjectFailed,
    fetchUpdateData, fetchUpdateDataLoading, fetchUpdateDataLoaded, fetchUpdateDataFailed,
    updateProject, updateProjectLoading, updateProjectLoaded, updateProjectFailed,
    deleteProject, deleteProjectLoading, deleteProjectLoaded, deleteProjectFailed,
    uploadFile, uploadFileLoading, uploadFileLoaded, uploadFileFailed,
    fileList, fileListLoading, fileListLoaded, fileListFailed,
    deleteDocument, deleteDocumentLoading, deleteDocumentLoaded, deleteDocumentFailed,
} from './reducer/projects.selector';


@Injectable()
export class ProjectsSandbox {

    public projectList$ = this.appState.select(projectList);
    public projectListLoading$ = this.appState.select(projectListLoading);
    public projectListLoaded$ = this.appState.select(projectListLoaded);
    public projectListFailed$ = this.appState.select(projectListFailed);

    public projectListCount$ = this.appState.select(projectListCount);
    public projectListCountLoading$ = this.appState.select(projectListCountLoading);
    public projectListCountLoaded$ = this.appState.select(projectListCountLoaded);
    public projectListCountFailed$ = this.appState.select(projectListCountFailed);

    public createProject$ = this.appState.select(createProject);
    public createProjectLoading$ = this.appState.select(createProjectLoading);
    public createProjectLoaded$ = this.appState.select(createProjectLoaded);
    public createProjectFailed$ = this.appState.select(createProjectFailed);

    public fetchUpdateData$ = this.appState.select(fetchUpdateData);
    public fetchUpdateDataLoading$ = this.appState.select(fetchUpdateDataLoading);
    public fetchUpdateDataLoaded$ = this.appState.select(fetchUpdateDataLoaded);
    public fetchUpdateDataFailed$ = this.appState.select(fetchUpdateDataFailed);

    public updateProject$ = this.appState.select(updateProject);
    public updateProjectLoading$ = this.appState.select(updateProjectLoading);
    public updateProjectLoaded$ = this.appState.select(updateProjectLoaded);
    public updateProjectFailed$ = this.appState.select(updateProjectFailed);

    public deleteProject$ = this.appState.select(deleteProject);
    public deleteProjectLoading$ = this.appState.select(deleteProjectLoading);
    public deleteProjectLoaded$ = this.appState.select(deleteProjectLoaded);
    public deleteProjectFailed$ = this.appState.select(deleteProjectFailed);

    public uploadFile$ = this.appState.select(uploadFile);
    public uploadFileLoading$ = this.appState.select(uploadFileLoading);
    public uploadFileLoaded$ = this.appState.select(uploadFileLoaded);
    public uploadFileFailed$ = this.appState.select(uploadFileFailed);

    public fileList$ = this.appState.select(fileList);
    public fileListLoading$ = this.appState.select(fileListLoading);
    public fileListLoaded$ = this.appState.select(fileListLoaded);
    public fileListFailed$ = this.appState.select(fileListFailed);

    public deleteDocument$ = this.appState.select(deleteDocument);
    public deleteDocumentLoading$ = this.appState.select(deleteDocumentLoading);
    public deleteDocumentLoaded$ = this.appState.select(deleteDocumentLoaded);
    public deleteDocumentFailed$ = this.appState.select(deleteDocumentFailed);


    constructor(protected appState: Store<store.AppState>) {
    }

    public projectList(params) {
        this.appState.dispatch(new ProjectsActions.ProjectList(params));
    }

    public projectListCount(params) {
        this.appState.dispatch(new ProjectsActions.ProjectListCount(params));
    }

    public createProject(params) {
        this.appState.dispatch(new ProjectsActions.CreateProject(params));
    }

    public fetchUpdateData(params) {
        this.appState.dispatch(new ProjectsActions.FetchUpdateData(params));
    }
    public updateProject(params) {
        this.appState.dispatch(new ProjectsActions.UpdateProject(params));
    }
    public deleteProject(params) {
        this.appState.dispatch(new ProjectsActions.DeleteProject(params));
    }
    public uploadFile(params) {
        this.appState.dispatch(new ProjectsActions.UploadFile(params));
    }
    public fileList(params) {
        this.appState.dispatch(new ProjectsActions.FileList(params));
    }
    public deleteDocument(params) {
        this.appState.dispatch(new ProjectsActions.DeleteDocument(params));
    }

}

