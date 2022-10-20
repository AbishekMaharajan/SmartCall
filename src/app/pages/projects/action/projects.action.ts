import { Action } from '@ngrx/store';
import { ResponseInterface } from 'src/app/shared/interfaces/interface';
import { type } from 'src/app/shared/utility';



export const ActionTypes = {


    PROJECT_LIST: type('[project] project list '),
    PROJECT_LIST_SUCCESS: type('[project] project list Success'),
    PROJECT_LIST_FAIL: type('[project] project list Fail'),

    PROJECT_LIST_COUNT: type('[project] project list count '),
    PROJECT_LIST_COUNT_SUCCESS: type('[project] project list count Success'),
    PROJECT_LIST_COUNT_FAIL: type('[project] project list count Fail'),

    CREATE_PROJECT: type('[project] Create Project '),
    CREATE_PROJECT_SUCCESS: type('[project] Create Project Success'),
    CREATE_PROJECT_FAIL: type('[project] Create Project Fail'),

    FETCH_UPDATE_DATA: type('[project] fetch update data '),
    FETCH_UPDATE_DATA_SUCCESS: type('[project] fetch update data Success'),
    FETCH_UPDATE_DATA_FAIL: type('[project] fetch update data Fail'),

    UPDATE_PROJECT: type('[project] update Project '),
    UPDATE_PROJECT_SUCCESS: type('[project] update Project Success'),
    UPDATE_PROJECT_FAIL: type('[project] update Project Fail'),

    DELETE_PROJECT: type('[project] delete Project '),
    DELETE_PROJECT_SUCCESS: type('[project] delete Project Success'),
    DELETE_PROJECT_FAIL: type('[project] delete Project Fail'),

    UPLOAD_FILE: type('[project] upload file '),
    UPLOAD_FILE_SUCCESS: type('[project] upload file Success'),
    UPLOAD_FILE_FAIL: type('[project] upload file Fail'),

    FILE_LIST: type('[project] file list '),
    FILE_LIST_SUCCESS: type('[project] file lsit Success'),
    FILE_LIST_FAIL: type('[project] file lsit Fail'),

    DELETE_DOCUMENT: type('[project] delete document '),
    DELETE_DOCUMENT_SUCCESS: type('[project] delete document Success'),
    DELETE_DOCUMENT_FAIL: type('[project] delete document Fail'),



};

// PROJECT LIST

export class ProjectList implements Action {
    type = ActionTypes.PROJECT_LIST;

    constructor(public payload: any) {
    }
}

export class ProjectListSuccess implements Action {
    type = ActionTypes.PROJECT_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectListFail implements Action {
    type = ActionTypes.PROJECT_LIST_FAIL;

    constructor(public payload: any) {
    }
}

// PROJECT LIST COUNT
export class ProjectListCount implements Action {
    type = ActionTypes.PROJECT_LIST_COUNT;

    constructor(public payload: any) {
    }
}

export class ProjectListCountSuccess implements Action {
    type = ActionTypes.PROJECT_LIST_COUNT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class ProjectListCountFail implements Action {
    type = ActionTypes.PROJECT_LIST_COUNT_FAIL;

    constructor(public payload: any) {
    }
}

// CREATE PROJECT
export class CreateProject implements Action {
    type = ActionTypes.CREATE_PROJECT;

    constructor(public payload: any) {
    }
}

export class CreateProjectSuccess implements Action {
    type = ActionTypes.CREATE_PROJECT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class CreateProjectFail implements Action {
    type = ActionTypes.CREATE_PROJECT_FAIL;

    constructor(public payload: any) {
    }
}
// FETCH UPDATE DATE
export class FetchUpdateData implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA;

    constructor(public payload: any) {
    }
}

export class FetchUpdateDataSuccess implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class FetchUpdateDataFail implements Action {
    type = ActionTypes.FETCH_UPDATE_DATA_FAIL;

    constructor(public payload: any) {
    }
}
// UPDATE PROJECT
export class UpdateProject implements Action {
    type = ActionTypes.UPDATE_PROJECT;

    constructor(public payload: any) {
    }
}

export class UpdateProjectSuccess implements Action {
    type = ActionTypes.UPDATE_PROJECT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UpdateProjectFail implements Action {
    type = ActionTypes.UPDATE_PROJECT_FAIL;

    constructor(public payload: any) {
    }
}

// DELETE PROJECT
export class DeleteProject implements Action {
    type = ActionTypes.DELETE_PROJECT;

    constructor(public payload: any) {
    }
}

export class DeleteProjectSuccess implements Action {
    type = ActionTypes.DELETE_PROJECT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class DeleteProjectFail implements Action {
    type = ActionTypes.DELETE_PROJECT_FAIL;

    constructor(public payload: any) {
    }
}

// UPLOAD FILES
export class UploadFile implements Action {
    type = ActionTypes.UPLOAD_FILE;

    constructor(public payload: any) {
    }
}

export class UploadFileSuccess implements Action {
    type = ActionTypes.UPLOAD_FILE_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class UploadFileFail implements Action {
    type = ActionTypes.UPLOAD_FILE_FAIL;

    constructor(public payload: any) {
    }
}

//  FILE LIST
export class FileList implements Action {
    type = ActionTypes.FILE_LIST;

    constructor(public payload: any) {
    }
}

export class FileListSuccess implements Action {
    type = ActionTypes.FILE_LIST_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class FileListFail implements Action {
    type = ActionTypes.FILE_LIST_FAIL;

    constructor(public payload: any) {
    }
}

//  DELETE DOCUMENT
export class DeleteDocument implements Action {
    type = ActionTypes.DELETE_DOCUMENT;

    constructor(public payload: any) {
    }
}

export class DeleteDocumentSuccess implements Action {
    type = ActionTypes.DELETE_DOCUMENT_SUCCESS;

    constructor(public payload: ResponseInterface) {
    }
}

export class DeleteDocumentFail implements Action {
    type = ActionTypes.DELETE_DOCUMENT_FAIL;

    constructor(public payload: any) {
    }
}


export type Actions =
    | ProjectList
    | ProjectListSuccess
    | ProjectListFail

    | ProjectListCount
    | ProjectListCountSuccess
    | ProjectListCountFail

    | CreateProject
    | CreateProjectSuccess
    | CreateProjectFail

    | FetchUpdateData
    | FetchUpdateDataSuccess
    | FetchUpdateDataFail

    | UpdateProject
    | UpdateProjectSuccess
    | UpdateProjectFail

    | DeleteProject
    | DeleteProjectSuccess
    | DeleteProjectFail

    | UploadFile
    | UploadFileSuccess
    | UploadFileFail

    | FileList
    | FileListSuccess
    | FileListFail

    | DeleteDocument
    | DeleteDocumentSuccess
    | DeleteDocumentFail



