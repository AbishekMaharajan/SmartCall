import { ProjectsState, projectsStateRecord } from './projects.state';
import * as actions from '../action/projects.action';

export const initialState: ProjectsState = new projectsStateRecord() as unknown as ProjectsState;

export function reducer(state = initialState, { type, payload }: any): ProjectsState {
    if (!type) {
        return state;
    }

    switch (type) {

        //  PROJECT LIST
        case actions.ActionTypes.PROJECT_LIST:

            return Object.assign({}, state, {
                projectListLoading: true,
                projectListLoaded: false,
                projectListFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_SUCCESS:

            return Object.assign({}, state, {
                projectList: payload.data,
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_FAIL:

            return Object.assign({}, state, {
                projectListLoading: false,
                projectListLoaded: true,
                projectListFailed: true,

            });

        //  PROJECT LIST COUNT
        case actions.ActionTypes.PROJECT_LIST_COUNT:

            return Object.assign({}, state, {
                projectListCountLoading: true,
                projectListCountLoaded: false,
                projectListCountFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_COUNT_SUCCESS:

            return Object.assign({}, state, {
                projectListCount: payload.data,
                projectListCountLoading: false,
                projectListCountLoaded: true,
                projectListCountFailed: false,
            });

        case actions.ActionTypes.PROJECT_LIST_COUNT_FAIL:

            return Object.assign({}, state, {
                projectListCountLoading: false,
                projectListCountLoaded: true,
                projectListCountFailed: true,

            });

        // CREATE PROJECT
        case actions.ActionTypes.CREATE_PROJECT:

            return Object.assign({}, state, {
                createProjectLoading: true,
                createProjectLoaded: false,
                createProjectFailed: false,
            });

        case actions.ActionTypes.CREATE_PROJECT_SUCCESS:

            return Object.assign({}, state, {
                createProject: payload,
                createProjectLoading: false,
                createProjectLoaded: true,
                createProjectFailed: false,
            });

        case actions.ActionTypes.CREATE_PROJECT_FAIL:

            return Object.assign({}, state, {
                createProjectLoading: false,
                createProjectLoaded: true,
                createProjectFailed: true,

            });

        // FETCH UPDATE DATA
        case actions.ActionTypes.FETCH_UPDATE_DATA:

            return Object.assign({}, state, {
                fetchUpdateDataLoading: true,
                fetchUpdateDataLoaded: false,
                fetchUpdateDataFailed: false,
            });

        case actions.ActionTypes.FETCH_UPDATE_DATA_SUCCESS:

            return Object.assign({}, state, {
                fetchUpdateData: payload.data,
                fetchUpdateDataLoading: false,
                fetchUpdateDataLoaded: true,
                fetchUpdateDataFailed: false,
            });

        case actions.ActionTypes.FETCH_UPDATE_DATA_FAIL:

            return Object.assign({}, state, {
                fetchUpdateDataLoading: false,
                fetchUpdateDataLoaded: true,
                fetchUpdateDataFailed: true,

            });

        // UPDATE EMPLOYEE
        case actions.ActionTypes.UPDATE_PROJECT:

            return Object.assign({}, state, {
                updateProjectLoading: true,
                updateProjectLoaded: false,
                updateProjectFailed: false,
            });

        case actions.ActionTypes.UPDATE_PROJECT_SUCCESS:

            return Object.assign({}, state, {
                updateProject: payload,
                updateProjectLoading: false,
                updateProjectLoaded: true,
                updateProjectFailed: false,
            });

        case actions.ActionTypes.UPDATE_PROJECT_FAIL:

            return Object.assign({}, state, {
                updateProjectLoading: false,
                updateProjectLoaded: true,
                updateProjectFailed: true,

            });

        // DELETE PROJECT
        case actions.ActionTypes.DELETE_PROJECT:

            return Object.assign({}, state, {
                deleteProjectLoading: true,
                deleteProjectLoaded: false,
                deleteProjectFailed: false,
            });

        case actions.ActionTypes.DELETE_PROJECT_SUCCESS:

            return Object.assign({}, state, {
                deleteProject: payload,
                deleteProjectLoading: false,
                deleteProjectLoaded: true,
                deleteProjectFailed: false,
            });

        case actions.ActionTypes.DELETE_PROJECT_FAIL:

            return Object.assign({}, state, {
                deleteProjectLoading: false,
                deleteProjectLoaded: true,
                deleteProjectFailed: true,

            });

        // UPLOAD FILE
        case actions.ActionTypes.UPLOAD_FILE:

            return Object.assign({}, state, {
                uploadFileLoading: true,
                uploadFileLoaded: false,
                uploadFileFailed: false,
            });

        case actions.ActionTypes.UPLOAD_FILE_SUCCESS:

            return Object.assign({}, state, {
                uploadFile: payload,
                uploadFileLoading: false,
                uploadFileLoaded: true,
                uploadFileFailed: false,
            });

        case actions.ActionTypes.UPLOAD_FILE_FAIL:

            return Object.assign({}, state, {
                uploadFileLoading: false,
                uploadFileLoaded: true,
                uploadFileFailed: true,

            });

        // FILE LIST
        case actions.ActionTypes.FILE_LIST:

            return Object.assign({}, state, {
                fileListLoading: true,
                fileListLoaded: false,
                fileListFailed: false,
            });

        case actions.ActionTypes.FILE_LIST_SUCCESS:

            return Object.assign({}, state, {
                fileList: payload.data,
                fileListLoading: false,
                fileListLoaded: true,
                fileListFailed: false,
            });

        case actions.ActionTypes.FILE_LIST_FAIL:

            return Object.assign({}, state, {
                fileListLoading: false,
                fileListLoaded: true,
                fileListFailed: true,

            });


        // DELETE DOCUMENT
        case actions.ActionTypes.DELETE_DOCUMENT:

            return Object.assign({}, state, {
                deleteDocumentLoading: true,
                deleteDocumentLoaded: false,
                deleteDocumentFailed: false,
            });

        case actions.ActionTypes.DELETE_DOCUMENT_SUCCESS:

            return Object.assign({}, state, {
                deleteDocument: payload,
                deleteDocumentLoading: false,
                deleteDocumentLoaded: true,
                deleteDocumentFailed: false,
            });

        case actions.ActionTypes.DELETE_DOCUMENT_FAIL:

            return Object.assign({}, state, {
                deleteDocumentLoading: false,
                deleteDocumentLoaded: true,
                deleteDocumentFailed: true,

            });

        // TEMPLATE LIST
        case actions.ActionTypes.TEMPLATE_LIST:

            return Object.assign({}, state, {
                templateListLoading: true,
                templateListLoaded: false,
                templateListFailed: false,
            });

        case actions.ActionTypes.TEMPLATE_LIST_SUCCESS:

            return Object.assign({}, state, {
                templateList: payload,
                templateListLoading: false,
                templateListLoaded: true,
                templateListFailed: false,
            });

        case actions.ActionTypes.TEMPLATE_LIST_FAIL:

            return Object.assign({}, state, {
                templateListLoading: false,
                templateListLoaded: true,
                templateListFailed: true,

            });

        // CREATE TEMPLATE
        case actions.ActionTypes.CREATE_TEMPLATE:

            return Object.assign({}, state, {
                createTemplateLoading: true,
                createTemplateLoaded: false,
                createTemplateFailed: false,
            });

        case actions.ActionTypes.CREATE_TEMPLATE_SUCCESS:

            return Object.assign({}, state, {
                createTemplate: payload,
                createTemplateLoading: false,
                createTemplateLoaded: true,
                createTemplateFailed: false,
            });

        case actions.ActionTypes.CREATE_TEMPLATE_FAIL:

            return Object.assign({}, state, {
                createTemplateLoading: false,
                createTemplateLoaded: true,
                createTemplateFailed: true,

            });



        default: {
            return state;
        }
    }
}

/**
 * export values
 */


export const projectList = (state: ProjectsState) => state.projectList;
export const projectListLoading = (state: ProjectsState) => state.projectListLoading;
export const projectListLoaded = (state: ProjectsState) => state.projectListLoaded;
export const projectListFailed = (state: ProjectsState) => state.projectListFailed;

export const projectListCount = (state: ProjectsState) => state.projectListCount;
export const projectListCountLoading = (state: ProjectsState) => state.projectListCountLoading;
export const projectListCountLoaded = (state: ProjectsState) => state.projectListCountLoaded;
export const projectListCountFailed = (state: ProjectsState) => state.projectListCountFailed;

export const createProject = (state: ProjectsState) => state.createProject;
export const createProjectLoading = (state: ProjectsState) => state.createProjectLoading;
export const createProjectLoaded = (state: ProjectsState) => state.createProjectLoaded;
export const createProjectFailed = (state: ProjectsState) => state.createProjectFailed;

export const fetchUpdateData = (state: ProjectsState) => state.fetchUpdateData;
export const fetchUpdateDataLoading = (state: ProjectsState) => state.fetchUpdateDataLoading;
export const fetchUpdateDataLoaded = (state: ProjectsState) => state.fetchUpdateDataLoaded;
export const fetchUpdateDataFailed = (state: ProjectsState) => state.fetchUpdateDataFailed;

export const updateProject = (state: ProjectsState) => state.updateProject;
export const updateProjectLoading = (state: ProjectsState) => state.updateProjectLoading;
export const updateProjectLoaded = (state: ProjectsState) => state.updateProjectLoaded;
export const updateProjectFailed = (state: ProjectsState) => state.updateProjectFailed;

export const deleteProject = (state: ProjectsState) => state.deleteProject;
export const deleteProjectLoading = (state: ProjectsState) => state.deleteProjectLoading;
export const deleteProjectLoaded = (state: ProjectsState) => state.deleteProjectLoaded;
export const deleteProjectFailed = (state: ProjectsState) => state.deleteProjectFailed;

export const uploadFile = (state: ProjectsState) => state.uploadFile;
export const uploadFileLoading = (state: ProjectsState) => state.uploadFileLoading;
export const uploadFileLoaded = (state: ProjectsState) => state.uploadFileLoaded;
export const uploadFileFailed = (state: ProjectsState) => state.uploadFileFailed;

export const fileList = (state: ProjectsState) => state.fileList;
export const fileListLoading = (state: ProjectsState) => state.fileListLoading;
export const fileListLoaded = (state: ProjectsState) => state.fileListLoaded;
export const fileListFailed = (state: ProjectsState) => state.fileListFailed;

export const deleteDocument = (state: ProjectsState) => state.deleteDocument;
export const deleteDocumentLoading = (state: ProjectsState) => state.deleteDocumentLoading;
export const deleteDocumentLoaded = (state: ProjectsState) => state.deleteDocumentLoaded;
export const deleteDocumentFailed = (state: ProjectsState) => state.deleteDocumentFailed;

export const templateList = (state: ProjectsState) => state.templateList;
export const templateListLoading = (state: ProjectsState) => state.templateListLoading;
export const templateListLoaded = (state: ProjectsState) => state.templateListLoaded;
export const templateListFailed = (state: ProjectsState) => state.templateListFailed;

export const createTemplate = (state: ProjectsState) => state.createTemplate;
export const createTemplateLoading = (state: ProjectsState) => state.createTemplateLoading;
export const createTemplateLoaded = (state: ProjectsState) => state.createTemplateLoaded;
export const createTemplateFailed = (state: ProjectsState) => state.createTemplateFailed;

